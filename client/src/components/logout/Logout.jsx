import { useContext, useEffect } from "react"
import { CompanyContext } from "../../contexts/CompanyContext"
import { useLogout } from "../../api/authApi";
import { Navigate } from "react-router";


export default function Logout () {
    const { isAuthenticated, companyLogoutHandler } = useContext(CompanyContext);
    const { logout } = useLogout()

    useEffect(() => {
        logout()
        .then(companyLogoutHandler())
    }, [])

    return !isAuthenticated 
    ? <Navigate to="/" />
    : <h1>Logging Out...</h1>
    
}