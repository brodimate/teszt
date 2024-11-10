import Login from "./Client/Forms/Login.jsx";
import Register from "./Client/Forms/Register.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import NavBar from "./Components/navbar/NavBar.jsx";
import RightBar from "./Components/rightBar/RightBar.jsx";
import LeftBar from "./Components/leftBar/LeftBar.jsx";
import Home from "./Client/Forms/Home.jsx";
import Profile from "./Client/Forms/Profile.jsx";

function App() {

  const Layout = () => {
    return (
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <Home/>,
    }
  ]);


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

