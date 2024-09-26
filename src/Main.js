import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Comments from "./Pages/Dashboard/Comments/Comments";
import Posts from "./Pages/Dashboard/Posts/Posts";
import HomeDashboard from "./Pages/Dashboard/HomeDashboard/HomeDashboard";
import Albums from "./Pages/Dashboard/Albums/Albums";
import Photos from "./Pages/Dashboard/Photos/Photos";
import ToDos from "./Pages/Dashboard/ToDos/ToDos";
import Users from "./Pages/Dashboard/Users/Users";

function Main() {
  // const location = useLocation();
  return (
    <>
      {/* <Header /> */}
      {/* {location.pathname !== "/dashboard" && <Header />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts" element={<Posts />} />
          <Route path="albums" element={<Albums />} />
          <Route path="photos" element={<Photos />} />
          <Route path="todos" element={<ToDos />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
      {/* {location.pathname !== "/dashboard" && <Footer />} */}
    </>
  );
}

export default Main;
