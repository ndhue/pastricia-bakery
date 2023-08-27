import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./common/Navbar";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";

import Home from "./components/Home";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from "./components/Account";
import OrderHistory from './components/OrderHistory';
import DetailOrder from './components/DetailOrder';
import ProductsList from './components/ProductsList';
import PageNotFound from './components/PageNotFound';
import NewsAndPromotions from './components/NewsAndPromotions';
import VisitUs from './components/VisitUs';
import ProductsByCategory from './components/ProductsByCategory';
import Product from './components/Product';
import Checkout from './components/Checkout';

import { ScrollToTop } from './common/ScrollToTop';


import store from "./controller/store"
import { useEffect } from 'react';
const routesUser = [
  { path: "/pastricia-bakery", component: <Home /> },
  { path: "/pastricia-bakery/sign-in", component: <SignIn /> },
  { path: "/pastricia-bakery/sign-up", component: <SignUp /> },
  { path: "/pastricia-bakery/account", component: <Account /> },
  { path: "/pastricia-bakery/order-history", component: <OrderHistory /> },
  { path: "/pastricia-bakery/products", component: <ProductsList /> },
  { path: "/pastricia-bakery/news&promotion", component: <NewsAndPromotions /> },
  { path: "/pastricia-bakery/visit-us", component: <VisitUs /> },
  { path: "/pastricia-bakery/checkout", component: <Checkout /> },
];

const renderRoutesUser = () => {
  return routesUser.map((route, index) => {
    return <Route key={index} path={route.path} element={route.component} />
  })
};

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
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            {renderRoutesUser()}
            <Route path='/pastricia-bakery/*' element={<PageNotFound />} />
            <Route path='/pastricia-bakery/:id' element={<Product />} />
            <Route path='/pastricia-bakery/detail-order/:id' element={<DetailOrder />} />
            <Route path='/pastricia-bakery/:category' element={<ProductsByCategory />} />
          </Routes>
        </ScrollToTop>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App