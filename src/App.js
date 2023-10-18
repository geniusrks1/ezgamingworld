import Nav from "./components/nav/nav";
import Page404 from "./pages/page404/Page404";
import Home from './pages/app/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
function App() {
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
        },
       
        
      ]
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
}

  ])


  return (
    <>
     <RouterProvider router={browserRouter}/>
    </>
  );
}

export default App;
