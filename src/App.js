import Nav from "./components/nav/nav";
import Page404 from "./pages/page404/Page404";
import Home from './pages/app/home/Home'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Games from "./pages/app/games/Games";
import Tournaments from "./pages/app/tournaments/Tournaments";
import Bgmi from "./pages/app/bgmi/Bgmi";
import Article from "./pages/app/articles/Article";
import Rhome from './extraPages/myresume/Rhome';
import BgmiTournaments from "./pages/app/bgmiTournaments/BgmiTournaments";
import IpodHome from "./extraPages/Ipod/IpodHome";
import ExpenseTrackerHome from "./extraPages/ExpenseTracker/ExpenseTrackerHome";
import BloggingAppHome from "./extraPages/BloggingApp/BloggingAppHome";
import QNavigation from "./extraPages/quotesApp/quotesComponents/Navigation";
import Allquotes from "./extraPages/quotesApp/quotesComponents/pages/Allquotes/Allquotes";
import CustomHook from "./extraPages/BloggingApp/BlogComponents/CustomHook";
import DRnavbar from "./extraPages/dynamicrouting/components/DRnavbar";
import DrHomePage from './extraPages/dynamicrouting/pages/Home'
import DrAbout from './extraPages/dynamicrouting/pages/About'
import DrItems from './extraPages/dynamicrouting/pages/Items'
import ItemDetails from "./extraPages/dynamicrouting/pages/ItemDetails";
import BgmiTournamentDetails from "./pages/app/bgmiTournaments/BgmiTournamentDetails";
import NavStudyHub from "./extraPages/ezlearning/components/nav/Nav";
import Hero from "./extraPages/ezlearning/pages/app/hero/Hero";
import Courses from "./extraPages/ezlearning/pages/app/courses/Courses";
import Details from "./extraPages/ezlearning/pages/app/details/Details";
import Learn from "./extraPages/ezlearning/pages/app/learn/Learn";
import Chapter from './extraPages/ezlearning/pages/app/chapter/Chapter'
import LiveCricHome from "./extraPages/livecricketscores/LiveCricHome";
import Services from './extraPages/services/components/Home/Home'
import ToDo from './extraPages/services/components/TodoHome/TodoHome'
import Note from './extraPages/services/components/NoteHome/NoteHome'
import ECnavBar from './extraPages/Ecommerce/Components/Navbar/Navbar'
import {  useDispatch, useSelector } from "react-redux";
import TooltipHome from "./extraPages/ToolTip/TooltipHome";
import Login from "./extraPages/Ecommerce/Components/Login/Login";
import SignUp from "./extraPages/Ecommerce/Components/Login/SignUp";
import { authentication, userSelector } from "./redux/reducer/UserReducer";
import { useEffect } from "react";
import EChome from './extraPages/Ecommerce/Components/Home/EChome'
import ECmyorders from './extraPages/Ecommerce/Components/Orders/ECmyorders'
import ECcart from './extraPages/Ecommerce/Components/Cart/ECcart'
import TODOList from "./extraPages/SkillTest/todolist/TodoApp"
import ShoppingCartApp from "./extraPages/codingninjapractice/contextApi/shoppingCart/ShoppingCartApp";
import PostKeeperApp from "./extraPages/codingninjapractice/contextApi/postKeeper/PostKeeperApp";
import AppRoot from './extraPages/codingninjapractice/contextApi/DialectoApp/AppRoot';
import ReactApp from "./extraPages/ezlearning/pages/app/courses/react/ReactApp";
import FormComponent from "./extraPages/ezlearning/pages/app/courses/react/FormComponent";
import SellerkinFeatures from "./extraPages/sellerkin/SellerkinFeatures";
import EzApp from './extraPages/ChatApp/EzApp'
import AdminPanel from "./adminControlersForms/AdminPanel";
import Aptitude from "./extraPages/ezlearning/pages/app/aptitude/Aptitude";





function App() {

const {user}=useSelector(userSelector);
const dispatch=useDispatch();

let User;

if(user)
User=user.email;
else
User='x.......1x1x1________x1@gmail.com'

// console.log('User is ',User);
const Admin="xy1004323@gmail.com"
const isAdmin= User==Admin;;



  const browserRouter=createBrowserRouter(
    [
      {
      path:"/",
      element:<Nav/>,
      errorElement:<Page404/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:'games',
          element:<Games/>
        },
        {
          path:'tournaments',
          element:<Tournaments/>
        },
        {
          path:'bgmi',
          element:<Bgmi/>
        },
        {
          path:'article',
          element:<Article/>
        },
        {
          path:'bgmitournaments',
          element:<BgmiTournaments/>
        },
        {
        path:'bgmitournaments/:id',
        element:<BgmiTournamentDetails/>
        }
        
      ]
    },

    ,
    {
     path:'adminpanel',
     element:isAdmin ? <AdminPanel/>: <Login/>
    },



    //resume
    {
        path:'Rohitkumar',
        element:<Rhome/>
    },
//ipod
    {
      path:'ipod',
      element:<IpodHome/>
    },
    //bloggingApp
    {
      path:'bloggingApp',
      element: <BloggingAppHome/>
    },
    //expenseTracker
    {
      path:'ExpenseTracker',
      element:<ExpenseTrackerHome/>
    },
//quotesApp
    {
      path:'quotesApp',
      element:<QNavigation/>,
      children:[
        {
          path:"",
          element:<Allquotes/>,
          
        }
      ]
    },
    //customHooks
    {
          path:'customhooks',
          element:<CustomHook/>  
    },
    //dynamic Routing
    {
      path:'dynamicrouting',
      element:<DRnavbar/>,
     
      children:[
        {
          path:"",
          element:<DrHomePage/>
        },
        {
          path:"about",
          element:<DrAbout/>
        },
        {
         path:"items",
         element:<DrItems/>
        },
        {
          path:"items/:id",
          element:<ItemDetails/>
         }

      ]
    },
//ezstudyhub
{
  path:"studyhub",
  element:<NavStudyHub/>,
  children:[
    {
      index:true,
      element:<Hero/>
    },
    {
      path:'courses',
      children:[
        {
        index:true,
        element:<Courses/>
      },
         {
          path:':courseId',
          element:<Details/>
        },{
          path:'React',
          element:<ReactApp/>,
          children:[
           { path:'add',
          element:<FormComponent/>}
          ]
        },
        {
          path:'aptitude',
          element:<Aptitude/>
        }
      ]
    },
    {
      path:'learn/:courseId',
      element:<Learn/>,
      children:[
        {
          path:"chapter/:chapterId",
          element:<Chapter/>
        }
      ]
    }


  ]
},
{
  path:"cricscore",
  element:<LiveCricHome/>
}
,
{
  path:"services",
  element:<Services/>
},{
  path:"todo",
  element:<ToDo/>
},{
  path:"notes",
  element:<Note/>
},
{
  path:"ecommerce",
  element:<ECnavBar/>,
  children:[
    {
      index:true,
      element:<EChome/>
    },{
      path:'orders',
      element:user? <ECmyorders/> : <Navigate to='/ecommerce/signin'/>
    },
    {
      path:'cart',
      element:user?<ECcart/>: <Navigate to='/ecommerce/signin'/>
    }
    ,
    {
      path:'signin',
      element:<Login/>
    },
    {
      path:'signup',
      element:<SignUp/>
    }
  ]
},
// {
//   path:"signin",
//   element:<Login/>
// },
// {
//   path:"signup",
//   element:<SignUp/>
// }
// ,
{
  path:"tooltip",
  element:<TooltipHome/>
},

{
  path:"todolist",
  element:<TODOList/>
},
{
  path:'ShoppingCart',
  element:<ShoppingCartApp/>
},
{
  path:'postKeeperApp',
  element:<PostKeeperApp/>
},{
  path:'dialectoApp',
  element:<AppRoot/>
},{
  path:'sellerkin',
  element:<SellerkinFeatures/>
}
,{
  path:'ezchat',
  element:<EzApp/>
}
  ])

 
  useEffect(() => {
    dispatch(authentication());
   },[dispatch])


  return (
    <>
    
     <RouterProvider router={browserRouter}/>
    
    </>
  );
}

export default App;
