import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"
export default function App() {
  const [user, setUser] = useState(null)
  const authdata = useContext(AuthContext)


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))

    } else if (authdata && authdata.employees.find((e) => email == e.email && e.password == password)) {
      setUser("employee")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid credntial")
    }
  }

  useEffect(()=>{
    if(authdata){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authdata])

  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}