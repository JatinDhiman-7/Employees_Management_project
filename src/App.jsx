import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load data from localStorage safely with error handling
  const getLocalData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error parsing ${key}:`, error);
      return null;
    }
  };

  // 🔄 Restore login from localStorage on app load
  useEffect(() => {
    const employees = getLocalData("employees");
    const admin = getLocalData("admin");
    const loginInfo = getLocalData("loggedInUser");

    console.log("Employees:", employees);
    console.log("Admin:", admin);
    console.log("Login Info:", loginInfo);

    if (loginInfo && employees && admin) {
      if (loginInfo.role === "admin") {
        setUser("admin");
        setLoggedInUserData(admin[0]);
      } else if (loginInfo.role === "employee") {
        const employee = employees.find((e) => e.email === loginInfo.email);
        if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
        }
      }
    }
    
    setLoading(false);
  }, []);

  // 🔐 Handle login
  const handleLogin = (email, password) => {
    const employees = getLocalData("employees");
    const admin = getLocalData("admin");

    if (!employees || !admin) {
      alert("Employee or admin data not found. Please contact administrator.");
      return;
    }

    // Admin login
    if (email === "admin@me.com" && password === "123") {
      const adminData = admin[0];
      setUser("admin");
      setLoggedInUserData(adminData);
      
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // Employee login - ✅ Fixed: employees is array, not object with .employees
    const employee = employees.find(
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

  // 🚪 Handle logout
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  // 🔄 Show loading while checking auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Current user data:", loggedInUserData);

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