import {useRoutes} from "react-router-dom";
import {RoutesName} from "./constants";
import Layout from "../components/Layout";
import { Payment, Home, Optimize, PayForTokens } from "../pages/index"

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