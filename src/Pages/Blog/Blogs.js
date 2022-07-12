import React from "react";
import Blog from "./Blog";
import BlogBanner from "./BlogBanner";

const Blogs = () => {
  return (
    <div>
      <div className="">
        <BlogBanner />
        <section className="">
            {/* Blogs */}
          <main>
            <Blog />
            <Blog />
          </main>
          {/* Side bar */}
          <aside className="hidden lg:block">Aside</aside>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
