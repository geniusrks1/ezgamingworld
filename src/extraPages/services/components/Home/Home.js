
import React from 'react';
import styles from "./Home.module.css";
import { NavLink ,useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={`container ${styles.container}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to="/todo" className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            To Do App
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to="/notes" className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            Note Keeper
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to='/expensetracker' className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            Expense Tracker
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to='/BloggingApp' className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            Blogging App
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to='/ECommerce' className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            E-Commerce
          </NavLink>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <NavLink to='/studyhub' className={`btn btn-warning btn-lg w-100 ${styles.link}`}>
            StudyHub
          </NavLink>
        </div>

        <div className={styles.floatingButtonContainer}>
        <button
          className={`btn btn-primary ${styles.floatingButton}`}
          onClick={()=>navigate('/')}
        >
          Home
        </button>
      </div>




      

      </div>
    </div>
  );
}

export default Home;
