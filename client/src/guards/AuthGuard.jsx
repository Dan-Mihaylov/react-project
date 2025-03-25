import { useContext } from "react";
import { CompanyContext } from "../contexts/CompanyContext";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard () {
    const { isAuthenticated } = useContext(CompanyContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    };

    return <Outlet />;
}
