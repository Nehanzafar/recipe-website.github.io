import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GotoTheTop () {
    const onTop = () => window.scrollTo(0, 0);
    const routePath = useLocation();

    useEffect(() => {
        if (routePath.pathname !== "/") {
            onTop();
        }
    }, [routePath]);
}
