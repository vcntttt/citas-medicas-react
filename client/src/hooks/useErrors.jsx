import { useEffect } from "react";
import { toast } from "sonner";
import useAuthStore from "../store/authStore";

function useErrorHandler(errors){
    const {clearErrors} = useAuthStore();

    useEffect(() => {
        if (errors && errors.length > 0) {
            errors.forEach(error => {
                toast.error(error)
            })}
        const timeout = setTimeout(() => {
            clearErrors();
        },3000);
        return () => clearTimeout(timeout);
    }, [errors, clearErrors]);
}

export default useErrorHandler;