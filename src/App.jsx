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
const routesUser = [
  { path: "/", component: <Home/>},
  { path: "/login", component: <Login/>},
  { path: "/signup", component: <SignUp/>},
  { path: "/account", component: <Account/>},
  { path: "/order-history", component: <OrderHistory/>},
  { path: "/detail-order", component: <DetailOrder/>},
  { path: "/products", component: <ProductsList/>},
  { path: "/news&promotion", component: <NewsAndPromotions/>},
  { path: "/visit-us", component: <VisitUs/>},
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
    <Routes>
    {renderRoutesUser()}
    <Route path='/*' element={<PageNotFound />} />
    <Route path='details/:id' element={<Product/>} />
    <Route path='/products/:category' element={<ProductsByCategory/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
