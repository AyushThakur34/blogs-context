import { NavLink } from "react-router-dom";

const Card = (props)=> {
    let post = props.post;
    return (
        <div className="my-4">
            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold">{post.title}</span>
            </NavLink>
            
            <div className="my-2">
                <p className="text-sm">
                    By <span className="italic">{post.author}</span> on {" "} <span className="underline font-semibold">
                        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                            {post.category}
                        </NavLink>
                        </span>
                </p>
                <p className="text-sm">Posted On <span>{post.date}</span></p>
            </div>

            <p>{post.content}</p>
            <p className="underline text-sm text-blue-500 my-1">
                
                    {post.tags.map((tag, index)=>{
                    return (
                        <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                            <span key={index} className="mr-3 cursor-pointer">{`#${tag}`}</span>
                        </NavLink>
                    )
                })}
            </p>
        </div>
    )
}

export default Card;