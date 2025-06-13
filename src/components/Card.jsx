const Card = (props)=> {
    let post = props.post;
    return (
        <div className="my-4">

            <p className="font-bold text">{post.title}</p>
            <div className="my-2">
                <p className="text-sm">
                    By <span className="italic">{post.author}</span> on <span className="underline font-semibold">{post.category}</span>
                </p>
                <p className="text-sm">Posted On <span>{post.date}</span></p>
            </div>

            <p>{post.content}</p>
            <p className="underline text-sm text-blue-500 my-1">{post.tags.map((tag, index)=>{
                return <span key={index} className="mr-3 cursor-pointer">{`#${tag}`}</span>
            })}</p>
        </div>
    )
}

export default Card;