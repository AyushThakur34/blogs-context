import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = ()=> {
    const {loading, posts} = useContext(AppContext);
    
    return (
        <div>
            {
                loading ? (<Spinner/>) : 
                (
                    posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) : (posts.map((post)=> (<Card post={post} key={post.id}/>)))
                )
            }
        </div>
    )
}

export default Blogs;