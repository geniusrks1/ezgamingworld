import React, { useReducer,useState,useEffect} from 'react'
import ExpenseForm from './ETcomponents/ExpenseForm/ExpenseForm'
import ExpenseInfo from './ETcomponents/ExpenseInfo/ExpenseInfo'
import styles from './ExpenseTrackerHome.module.css'
import ExpenseList from './ETcomponents/ExpenseList/ExpenseList'
import { doc, collection, addDoc, setDoc,
  deleteDoc, getDocs} from "firebase/firestore";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase imports
import {db} from '../../firebaseinit'


const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_EXPENSES": {
      return {
        expenses: payload.expenses
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};




function ExpenseTrackerHome() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "expenses"));
    const expenses = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    dispatch({ type: "GET_EXPENSES", payload: { expenses } });
    toast.success("Expenses retrived successfully.");
  };

  useEffect(() => {
    getData();
  }, []);

  const addExpense = async (expense) => {
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } }
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = async (id) => {
    const docRef = doc(db, "expenses", id);
    await deleteDoc(docRef);

    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
    toast.success("Expense deleted successfully.");
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    const expenseRef = doc(db, "expenses", expense.id);
    await setDoc(expenseRef, expense);

    dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
    toast.success("Expense updated successfully.");
  };


  useEffect(()=>{
    document.title="Expense Tracker";
    document.querySelector('link[rel="icon"]').setAttribute('href', 'expense-favicon.png')
},[])




  return (
    <>
      <ToastContainer />
      <div className={styles.expensetracker}>
      <h2 className={styles.mainHeading}>Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
      <div className={styles.expenseContainer}>
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
      <div/>
      </div>
    </>
  );
}


export default ExpenseTrackerHome



































