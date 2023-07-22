import {useRoutes} from "react-router-dom";
import Optimize from "../pages/Optimize/Optimize";
import {RoutesName} from "./constants";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import PayForTokens from "../pages/PayForTokens/PayForTokens";
import Payment from "../pages/Payment/Payment";


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
        },
        {
          path: RoutesName.PAYFORTOKENS,
          element: <PayForTokens/>,
        },
        {
          path: RoutesName.PAYMENT,
          element: <Payment/>
        }
      ]
    }
  ])
}


export default Routes