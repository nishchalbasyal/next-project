// Posts is server component
import Post from "@/components/Post";
 const Posts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const postsData = await res.json();

  return <div className="post_section">
    {postsData.map(data => (
      <Post key={data.id} image={data.image} title={data.title} />
    ))}
  </div>;
};



export default Posts;
