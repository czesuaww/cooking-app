import { Outlet, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const AuthenticatedRoute = () => {
    const [user] = useAuth();
    const navigate = useNavigate();

    useEffect(() => { if (!user) navigate('/login') }, [user])

    if (!user) <h1>Redirecting...</h1>

    return <Outlet />
}

export default AuthenticatedRoute;