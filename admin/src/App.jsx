import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Order from "./pages/Order";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <hr className="border-gray-300" />
          <div className="flex w-full">
            <Sidebar />
            <div className="width-[70%] mx-auto my-8 text-gray-600 text-base ml-[max(5vw,25px)]">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/order" element={<Order />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
