import Navigation from "./Components/Navigation";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Messenger from "./Components/Messenger";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HighProducts from "./Components/HighProducts";
import Shop from "./Components/Shop";
import PhotoAlbum from "./Components/PhotoAlbum";
import ProductDetails from "./Components/ProductDetails";
import AllBlog from "./Components/AllBlog";
import Footer from "./Components/Footer";
import BlogDetails from "./Components/BlogDetails";
import BlogSlide from "./Components/BlogSlide";
import Contact from "./Components/Contact";
import NewProduct from "./Components/NewProduct";
import Modal from "./Components/Modal";
import About from "./Components/About";
import ScrollToTop from "./Components/ScrollToTop";
import Cookie from "./Components/Cookie";
import TermsOfUse from "./Components/TermsOfUse";
import PaymentMethod from "./Components/PaymentMethod";
import ShippngAreas from "./Components/ShippngAreas";
import HowToOrder from "./Components/HowToOrder";
import Login from "./Components/UserPanel/Login";
import Registration from "./Components/UserPanel/Registration";
import VerifyReg from "./Components/UserPanel/VerifyReg";
import Profile from "./Components/UserPanel/Profile/Profile";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route exact path="/shop">
            <Navigation></Navigation>
            <Shop></Shop>
            <Footer></Footer>
          </Route>
          <Route exact path="/blog">
            <Navigation></Navigation>
            <AllBlog></AllBlog>
            <Footer></Footer>
          </Route>
          <Route exact path="/login">
            <Navigation></Navigation>
            <Login></Login>
          </Route>
          <Route exact path="/registration">
            <Navigation></Navigation>
            <Registration></Registration>
          </Route>
          <Route exact path="/verify">
            <Navigation></Navigation>
            <VerifyReg></VerifyReg>
          </Route>
          <Route exact path="/blogpost">
            <Navigation></Navigation>
            <BlogDetails></BlogDetails>
            <Footer></Footer>
          </Route>
          <Route exact path="/product">
            <Navigation></Navigation>
            <ProductDetails></ProductDetails>
            <Footer></Footer>
          </Route>
          <Route exact path="/contact">
            <Navigation></Navigation>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route exact path="/cookies">
            <Navigation></Navigation>
            <Cookie></Cookie>
            <Footer></Footer>
          </Route>
          <Route exact path="/terms-of-use">
            <Navigation></Navigation>
            <TermsOfUse></TermsOfUse>
            <Footer></Footer>
          </Route>
          <Route exact path="/how-to-order">
            <Navigation></Navigation>
            <HowToOrder></HowToOrder>
            <Footer></Footer>
          </Route>
          <Route exact path="/paymentMethod">
            <Navigation></Navigation>
            <PaymentMethod></PaymentMethod>
            <Footer></Footer>
          </Route>
          <Route exact path="/shippingAres">
            <Navigation></Navigation>
            <ShippngAreas></ShippngAreas>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <Navigation></Navigation>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path="/profile">
            <Navigation></Navigation>
            <Profile></Profile>
          </Route>
          <Route exact path="/">
            <Navigation></Navigation>
            <Landing></Landing>
            <Messenger></Messenger>
            <Modal></Modal>
            <HighProducts></HighProducts>
            <NewProduct></NewProduct>
            <BlogSlide></BlogSlide>
            <PhotoAlbum></PhotoAlbum>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
