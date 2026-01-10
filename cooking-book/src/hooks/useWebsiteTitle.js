import { useEffect } from "react";

const useWebsiteTitle = (title) => {
    useEffect(() => {
        document.title = 'Cooking site - ' + title;
    }, [title]);
}

export default useWebsiteTitle;