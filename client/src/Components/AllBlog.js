import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { fakeBlog } from "./fakeData";

const AllBlog = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="allBlog">
      <div>
        <div>
          <h2>
            Bienvenido al <span style={{ color: "#FF6606" }}>blog</span> de{" "}
            <span style={{ color: "#FF6606" }}>Armea</span>
          </h2>
        </div>
      </div>
      <div>
        <div>
          <button className="active-blog">Todos</button>
          <button>Muebles</button>
          <button>Decoración</button>
          <button>Mascotas</button>
          <button>Niños</button>
        </div>
      </div>
      <div className="allBlog__conatiner">
        {fakeBlog.map((x) => (
          <BlogCard x={x}></BlogCard>
        ))}
      </div>
      <div className="allProduct__pagination">
        <Pagination count={4} />
      </div>
    </div>
  );
};

export default AllBlog;
