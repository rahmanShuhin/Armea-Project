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
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
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
          <Route exact path="/blogpost">
            <Navigation></Navigation>
            <BlogDetails></BlogDetails>
            <Footer></Footer>
          </Route>
          <Route exact path="/product">
            <Navigation></Navigation>
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/album">
            <PhotoAlbum></PhotoAlbum>
          </Route>
          <Route exact path="/">
            <Navigation></Navigation>
            <Landing></Landing>
            <Messenger></Messenger>
            <HighProducts></HighProducts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
