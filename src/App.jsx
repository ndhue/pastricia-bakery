import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from "./pages/Home";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Account } from "./pages/Account";
import { OrderHistory } from './pages/OrderHistory';
import { DetailOrder } from './pages/DetailOrder';
import { ProductsList } from './pages/ProductsList';
import { PageNotFound } from './pages/PageNotFound';
import { NewsAndPromotions } from './pages/NewsAndPromotions';
import { VisitUs } from './pages/VisitUs';
import { Product } from './pages/Product';
import { Checkout } from './pages/Checkout';

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Outlet />
        <Newsletter />
        <Footer />
      </ScrollToTop>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/account", element: <Account /> },
      { path: "/order-history", element: <OrderHistory /> },
      { path: "/products", element: <ProductsList /> },
      { path: "/news&promotion", element: <NewsAndPromotions /> },
      { path: "/visit-us", element: <VisitUs /> },
      { path: "/checkout", element: <Checkout /> },
      { path:'/*', element: <PageNotFound />},
      { path:'/details/:id', element: <Product />},
      { path:'/detail-order/:id', element: <DetailOrder />},
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ]
  }
])

function App() {
  useEffect(() => {
    // init AOS animation
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  },[])
  return (
    <RouterProvider router={router} />
  )
}

export default App