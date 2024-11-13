import Login from "./Client/Forms/Login.jsx";
import Register from "./Client/Forms/Register.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./Components/navbar/NavBar.jsx";
import RightBar from "./Components/rightBar/RightBar.jsx";
import LeftBar from "./Components/leftBar/LeftBar.jsx";
import Home from "./Client/Forms/Home.jsx";
import Profile from "./Client/Forms/Profile.jsx";
import { useContext } from "react";
import { AuthContext } from "./Client/Context/authContext.js";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
        ),
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

