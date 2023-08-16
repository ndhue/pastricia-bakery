import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./common/Navbar";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";

import Home from "./components/Home";
import Login from "./components/Login";
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

import { ScrollToTop } from './common/ScrollToTop';
const routesUser = [
  { path: "/pastricia-bakery", component: <Home/>},
  { path: "/login", component: <Login/>},
  { path: "/signup", component: <SignUp/>},
  { path: "/pastricia-bakery/account", component: <Account/>},
  { path: "/pastricia-bakery/order-history", component: <OrderHistory/>},
  { path: "/pastricia-bakery/detail-order", component: <DetailOrder/>},
  { path: "/pastricia-bakery/products", component: <ProductsList/>},
  { path: "/pastricia-bakery/news&promotion", component: <NewsAndPromotions/>},
  { path: "/pastricia-bakery/visit-us", component: <VisitUs/>},
];

const renderRoutesUser = () => {
  return routesUser.map((route, index) => {
    return <Route key={index} path={route.path} element={route.component} />
  })
};

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop>
    <Routes>
      {renderRoutesUser()}
      <Route path='/pastricia-bakery/*' element={<PageNotFound />} />
      <Route path='/pastricia-bakery/detail/:id' element={<Product/>} />
      <Route path='/pastricia-bakery/products/:category' element={<ProductsByCategory/>}/>
    </Routes>
    </ScrollToTop>
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
