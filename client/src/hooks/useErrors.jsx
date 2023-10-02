import { useEffect } from "react";
import { toast } from "sonner";

function useErrorHandler(errors){
    useEffect(() => {
        if (errors){
            errors.forEach(error => {
                toast.error(error)
            })}
    }, [errors])
}

export default useErrorHandler;