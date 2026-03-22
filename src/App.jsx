import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authdata = useContext(AuthContext);
console.log(authdata,"app")
  // 🔁 Restore login from localStorage on app load
  useEffect(() => {
    if (!authdata) return;

    const loginInfo = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loginInfo) {
      setUser(loginInfo.role);

      if (loginInfo.role === "admin") {
        setLoggedInUserData(authdata.admin[0]);
      } else if (loginInfo.role === "employee") {
        const employee = authdata.employees.find(
          (e) => e.email === loginInfo.email
        );
        setLoggedInUserData(employee);
      }
    }
  }, [authdata]);

  // 🔐 Handle login
  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@me.com" && password === "123") {
      const adminData = authdata.admin[0];

      setUser("admin");
      setLoggedInUserData(adminData);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // Employee login
    const employee = authdata.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", email: employee.email })
      );
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
  setUser(null);
  setLoggedInUserData(null);
  localStorage.removeItem("loggedInUser");
};

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && loggedInUserData && (
        <AdminDashboard data={loggedInUserData} onLogout={handleLogout} />
      )}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} />
      )}
    </>
  );
}