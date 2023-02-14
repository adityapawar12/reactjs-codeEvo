import React, { Component } from "react";
// import ReactBasics from "./components/react-basics/ReactBasics";
// import ReactHooks from "./components/react-hooks/ReactHooks";
// import ReactPractical from "./components/react-practical/ReactPractical";
import ReactFormik from "./components/react-formik/ReactFormik";
// import { Route, Routes } from "react-router-dom";
// import Admin from "./components/react-router/react-router-components/Admin";
// import FeaturedProducts from "./components/react-router/react-router-components/FeaturedProducts";
// import Home from "./components/react-router/react-router-components/Home";
// import Navbar from "./components/react-router/react-router-components/Navbar";
// import NewProducts from "./components/react-router/react-router-components/NewProducts";
// import NoMatch from "./components/react-router/react-router-components/NoMatch";
// import OrderSummary from "./components/react-router/react-router-components/OrderSummary";
// import Products from "./components/react-router/react-router-components/Products";
// import Profile from "./components/react-router/react-router-components/Profile";
// import UserDetails from "./components/react-router/react-router-components/UserDetails";
// import Users from "./components/react-router/react-router-components/Users";
// // import About from "./components/react-router/react-router-components/About";
// import { AuthProvider } from "./components/react-router/react-router-components/Auth";
// import Login from "./components/react-router/react-router-components/Login";
// import RequireAuth from "./components/react-router/react-router-components/RequireAuth";
// const LazyAbout = React.lazy(() =>
//   import("./components/react-router/react-router-components/About")
// );

class App extends Component {
  render() {
    return (
      <div>
        {/* <AuthProvider>
          <Navbar />
          <React.Suspense fallback={"Loading..."}>
            <Routes>
              <Route path="/" element={<Home />} />
              // <Route path="/about" element={<About />} /> 
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/products" element={<Products />}>
                <Route index element={<FeaturedProducts />} />
                <Route path="featured" element={<FeaturedProducts />} />
                <Route path="new" element={<NewProducts />} />
              </Route>
          //      <Route path="/users" element={<Users />} />
          // <Route path="/users/:userId" element={<UserDetails />} />
          // <Route path="/users/admin" element={<Admin />} />
              <Route path="/users" element={<Users />}>
                <Route path=":userId" element={<UserDetails />} />
                <Route path="admin" element={<Admin />} />
              </Route>
          //     <Route path="/users/1" element={<UserDetails />} />
          // <Route path="/users/2" element={<UserDetails />} />
          // <Route path="/users/3" element={<UserDetails />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </React.Suspense>
        </AuthProvider> */}

        {/*       <div className="App">*/}
        {/* REACT JS BASICS/FUNDAMENTALS */}
        {/* <ReactBasics /> */}

        {/* HOOKS IN REACT JS */}
        {/* <ReactHooks /> */}

        {/* PRACTICAL REACT JS */}
        {/* <ReactPractical /> */}

        {/* FORMIK IN REACT JS */}
        <ReactFormik />

        {/*       </div>*/}
      </div>
    );
  }
}

export default App;
