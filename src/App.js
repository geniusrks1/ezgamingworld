import Nav from "./components/nav/nav";
import Page404 from "./pages/page404/Page404";
import Home from './pages/app/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Games from "./pages/app/games/Games";
import Tournaments from "./pages/app/tournaments/Tournaments";
import Bgmi from "./pages/app/bgmi/Bgmi";
import Article from "./pages/app/articles/Article";
import Rhome from "./myresume/Rhome";

function App() {
  const browserRouter=createBrowserRouter([
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
          path:'/games',
          element:<Games/>
        },
        {
          path:'/tournaments',
          element:<Tournaments/>
        },
        {
          path:'/bgmi',
          element:<Bgmi/>
        },
        {
          path:'/article',
          element:<Article/>
        }
        
      ]
    },

    {
        path:'/Rohitkumar',
        element:<Rhome/>
    }
  ])


  return (
    <>
     <RouterProvider router={browserRouter}/>
    </>
  );
}

export default App;
