import './App.css';
import { ElectroicData, jewelaryData, productsData } from './api/Api';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import { Product } from './components/Product';
import Home from './pages/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Pages from './pages/Pages';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shoppage from './pages/Shoppage';
import Jewepage from './pages/Jewepage';
import Electronicpage from './pages/Electronicpage';


const Layout = ()=>{
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element : <Layout />,
    children :[
      {
        path : "/",
        element : <Home />,
        loader : productsData, 
      },
      {
        path :"/product/:id",
        element : <Product />

      },
      {
        path : "/cart",
        element : <Cart />,
      },
      {
        path : "/pages",
        element  : <Pages />,
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/signup",
        element : <Signup />
      },
      {
        path : "/shoppage",
        element : <Shoppage />
      },
      {
        path :"/jewepage",
        element : <Jewepage />,
        loader : jewelaryData,
      },
      {
        path : "/electronicpage",
        element : <Electronicpage />,
        loader : ElectroicData,
      }
    ],
  }
])
function App() {
  return (
    <div className='font-bodyFont'>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
