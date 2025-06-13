const Card = (props)=> {
    let post = props.post;
    return (
        <div>
            <p>{post.title}</p>
            <p>
                By <span>{post.author}</span> on  <span>{post.category}</span>
            </p>
            <p>Posted on <span>{post.date}</span></p>
            <p>{post.content}</p>
            <p>{post.tags.map((tag, index)=>{
                return <span key={index}>{`#${tag}`}</span>
            })}</p>
        </div>
    )
}

export default Card;