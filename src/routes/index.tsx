import {useRoutes} from "react-router-dom";
import Optimize from "../pages/Optimize";
import {RoutesName} from "./constants";
import Layout from "../components/Layout";
import Home from "../pages/Home";


const Routes = () => {
  return useRoutes([
    {
      path: RoutesName.HOME,
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: RoutesName.OPTIMIZE,
          element: <Optimize />,
        }
      ]
    }
  ])
}


export default Routes