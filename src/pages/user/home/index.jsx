import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllBlog } from "../../../config/HomeSlice";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios("http://localhost:3000/blogs").then((res) => {
      console.log(res.data);
      dispatch(setAllBlog(res.data));
    });
  }, []);

  const allBlog = useSelector((state) => state.blogs.blogs);

  return (
    <>
      <section className="myBlogs">
        <h1>My Blogs</h1>
      </section>
      <section className="allBlogs">
        <ul>
          {allBlog?.map((blog) => {
            return (
              <li>
                <div className="header">{blog.title}</div>
                <div className="main">{blog.content}</div>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="add">
          <Link to="/add"> Add new one</Link>
        </button>
      </section>
    </>
  );
}

export default Home;
