import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Comments from "./Pages/Dashboard/Comments/Comments";
import Posts from "./Pages/Dashboard/Posts/Posts";

function Main() {
  const location = useLocation();
  return (
    <>
      {/* <Header /> */}
      {location.pathname !== "/dashboard" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="comments" element={<Comments />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
      {location.pathname !== "/dashboard" && <Footer />}
    </>
  );
}

export default Main;
