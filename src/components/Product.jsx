const Product = ({ post }) => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        {" "}
        <p> {post.description}</p>
      </div>

      <div>
        <img src={post.image} />
      </div>

      <div>
        {" "}
        <p>{post.price * 80}</p>
      </div>

      <button>{true ? <p> Add to Card</p> : <p> Remove to Card</p>}</button>
    </div>
  )
}

export default Product
