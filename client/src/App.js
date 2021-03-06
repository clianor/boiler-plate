import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./components/common/route";

// base components
import Navbar from "./components/base/Navbar/Navbar";
import Footer from "./components/base/Footer/Footer";

// pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NoMatchPage from "./pages/error/NoMatchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <CustomRoute exact path="/" component={LandingPage} isAccess={null} />
        <CustomRoute exact path="/login" component={LoginPage} isAuth={false} />
        <CustomRoute
          exact
          path="/register"
          component={RegisterPage}
          isAuth={false}
        />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
