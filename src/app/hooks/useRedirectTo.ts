import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useRedirectTo = (to: string, status: boolean, dependency: any[]) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (status) {
            navigate(to)
        }
    }, dependency)

}