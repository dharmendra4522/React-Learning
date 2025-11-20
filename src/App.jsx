import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Day2/Profile";
import Card from "./components/Day2/card";
// import AdvancedTodo from './components/Day3/AdvancedTodo'
// import User from './components/Day4/User'
// import FocusInput from './components/Day5/FocusInput'
// import UsersList from './components/Day6/UsersList'
import { UseContext } from "./UserContext";
// import Parent from './components/Parent'
// import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeContext } from "./ThemeContext";
import CounterReducer from "./components/Day10useReducer/CounterReducer";
import TodoReducer from "./components/Day10useReducer/TodoReducer";
import ExpensiveCalculation from "./components/Day11/ExpensiveCalculation";
import UseCallbackExample from "./components/Day11/useCallbackExample";
import Parent from "./components/Day11/Parent";
import SearchFilter from "./components/Day11/SearchFilter";
import { Profile3 } from "./components/Day2/Profile3";
import { Users } from "./components/Day12/Users";
import Post from "./components/Day12/Post";
import CryptoPrice from "./components/Day12/Task/CryptoPrice";
import Home from "./components/Day13/Home";
import About from "./components/Day13/About";
import Contact from "./components/Day13/Contact";
import Navbar from "./components/Navbar";
import User from "./components/Day13/User";
import Services from "./components/Day13/Services";
import Layout from "./components/Day13/Layout";
import ProtectedRoute from "./components/Day13/ProtectedRoute";
import Login from "./components/Day13/Login";
import Dashboard from "./components/Day13/Dashboard";
import { Toaster } from "react-hot-toast";
import CrudApp from "./components/Day16/CrudApp";

function App() {
  const cardData = {
    title: "React Learning",
    description: "Step-by-step React journey",
    image:
      "https://images.unsplash.com/photo-1761839259488-2bdeeae794f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const skills = ["React", "Node.js", "MongoDB"];
  return (
    <>
      {/* <Profile name="Dharm sir" age={23} /> */}
      {/* <Profile3 name="Dharm sir" skills={skills} /> */}
      {/* <Card {...cardData}/> */}
      {/* <AdvancedTodo /> */}
      {/* <User /> */}
      {/* <FocusInput /> */}
      {/* <UsersList /> */}
      {/* <UseContext.Provider value={"Dharm"}>
        <Parent />
      </UseContext.Provider> */}
      {/* <ThemeSwitcher /> */}
      {/* <CounterReducer /> */}
      {/* <TodoReducer /> */}
      {/* <ExpensiveCalculation /> */}
      {/* <UseCallbackExample /> */}
      {/* <Parent /> */}
      {/* <SearchFilter /> */}
      {/* <Users />/\ */}
      {/* <Post /> */}
      {/* <CryptoPrice /> */}

      {/* <Navbar /> */}
      <Toaster position="top-center" />
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/user/:id" element={<User />} />

          {/* NEW: Dashboard Page */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route> */}

        {/* <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes> */} 

      <CrudApp />
    </>
  );
}

export default App;
