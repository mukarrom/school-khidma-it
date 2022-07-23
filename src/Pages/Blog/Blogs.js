import React from "react";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";
import BlogBanner from "./BlogBanner";

const Blogs = () => {
  const [blogs, setBlogs] = useBlogs([]);
  return (
    <div>
      <div className="">
        <BlogBanner />
        <section className="">
          {/* Blogs */}
          <main>
            {blogs.map((item) => (
              <Blog key={item._id} item={item} />
            ))}
          </main>
          {/* Side bar */}
        </section>
      </div>
    </div>
  );
};

export default Blogs;
