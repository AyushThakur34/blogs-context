import { createContext, useState } from "react";
import { BaseUrl } from "../BaseUrl";

export const AppContext = createContext();

const AppContextProvider = ({children})=> {
    const [loading, setLoading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlog(page = 1, tag = null, category=null) {
        setLoading(true);

        let url = `${BaseUrl}?page=${page}`;
        if(tag) url += `&tag=${tag}`;
        if(category) url += `&category=${category}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            setPage(data.page);
            setposts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(error) {
            console.log("Error in Fetching data from API");
            setPage(1);
            setposts([]);
            setTotalPages(null);
        }
        finally {
            setLoading(false);
        }
    }

    const handlePageChange = (page)=> {
        setPage(page);
        fetchBlog(page);
    }

    const value = {
        loading, 
        setLoading,
        posts, 
        setposts,
        page, 
        setPage,
        totalPages, 
        setTotalPages,
        fetchBlog,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;