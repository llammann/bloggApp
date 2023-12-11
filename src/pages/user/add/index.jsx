import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function Add() {
  const dispatch = useDispatch();
const [newBlog, setnewBlog] = useState(
  {
    title: "",
    content: "",
  }
)
  // console.log(newBlog);
  return (
    <>
      <section className="form">
        <h1> Add new one</h1>
      </section>
      <section className="add">
        <form action="">
          <input
            type="text"
            className="header"
            placeholder="About..."
            onChange={(e) => {
              // console.log(e.target.value)
              
               setnewBlog({...newBlog, title:e.target.value})
              // console.log("yeni",newBlog.title)
            }}
          />{" "}
          <br />
          <input
            type="text"
            className="main"
            placeholder="..."
            onChange={(e) => {
              setnewBlog({...newBlog, content:e.target.value})
            }}
          />
          <button
            onClick={() => {
              dispatch(addBlog(newBlog));
              console.log(newBlog)

              useEffect(() => {
                axios
                  .post("http://localhost:3000/blogs", newBlog)
                  .then((res) => {
                    console.log("added");
                  });
              }, []);
            }}
          >
            Add!
          </button>
        </form>
      </section>
    </>
  );
}

export default Add;
