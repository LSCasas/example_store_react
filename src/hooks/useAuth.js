import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


export default function useAuth() {
    const navigate = useNavigate();
    const [token, setToken] =useState("")
    
    useEffect(() => {
        const tkn = localStorage.getItem("token")

        setToken(tkn);

        if (!tkn) {
            toast.error("Debes iniciar sesión de nuevo")
            navigate("/login");
            return;
        }
    }, [navigate]);
    return token;
}