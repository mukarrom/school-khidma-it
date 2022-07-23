import useBlogs from "../../hooks/useBlogs";
import Blog from "../Blog/Blog";

const Setting = () => {
  const [blogs, setBlogs] = useBlogs([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const imgURL = e.target.imgURL.value;
    const title = e.target.title.value;
    const blog = e.target.blog.value;
    const myBlog = { imgURL, title, blog };
    // console.log(myBlog);
    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("successfully data added", data);
        e.target.reset();
      });
  };
  return (
    <div>
      <div className="w-1/2 p-5 shadow-md mx-auto mt-5 bg-white rounded-lg">
        <h3 className="text-center">Add a new blog</h3>
        <form onSubmit={handleSubmit} className="w-full px-10 space-y-5 pt-5">
          <input
            className="input input-bordered input-secondary w-full"
            type="text"
            name="imgURL"
            placeholder="Image URL"
          />
          <input
            className="input input-bordered input-secondary w-full"
            type="text"
            name="title"
            placeholder="Blog Title"
          />
          <textarea
            class="textarea textarea-secondary w-full text-center"
            placeholder="Blog and article"
            name="blog"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-full"
          />
        </form>
      </div>
      {/* --------------- */}
      <hr />
      {blogs.map((item) => (
        <Blog key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Setting;
