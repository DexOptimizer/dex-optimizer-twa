import {useRoutes} from "react-router-dom";
import Home from "../pages/Home";
import Optimize from "../pages/Optimize";
import {RoutesName} from "./constants";


const Routes = () => {
  return useRoutes([
    {
      path: RoutesName.HOME,
      element: <Home />,
      children: [
        {
          path: RoutesName.OPTIMIZE,
          element: <Optimize />,
        }
      ]
    }
  ])
}


export default Routes