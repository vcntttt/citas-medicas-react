import { useEffect } from "react";
import { toast } from "sonner";
import useAuthStore from "../store/authStore";

function useErrorHandler(errors){
    const {clearErrors} = useAuthStore();

    useEffect(() => {
        if (errors){
            errors.forEach(error => {
                toast.error(error)
            })}
        const timeout = setTimeout(() => {
            toast.remove();
            clearErrors();
        },3000);
        return () => clearTimeout(timeout);
    }, [errors, clearErrors]);
}

export default useErrorHandler;