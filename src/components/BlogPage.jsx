import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BaseUrl } from "../BaseUrl";
import Spinner from "./Spinner";
import Card from "./Card";

const BlogPage = ()=> {
    const navigation = useNavigate();
    const location = useLocation();

    const {loading, setLoading} = useContext(AppContext);

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(()=> {
        if(blogId) fetchRelatedBlogs();    
    }, [location.pathname]);

    let blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${BaseUrl}?blogId=${blogId}`

        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Blog cannot be fetched");
            setBlog(null);
            setRelatedBlogs([]);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Header/>

            <div>
                <button onClick={()=>navigation(-1)}>Back</button>

                {
                    loading ? <Spinner/> :
                    blog ? (
                        <div>
                            <Card post={blog}/>

                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post)=>{
                                    <div key={post.id}>
                                        <Card post={post}/>
                                    </div>
                                })
                            }
                        </div>
                    )
                    : (<p>No Blog Found</p>)
                }
            </div>
        </div>
    )
}

export default BlogPage;