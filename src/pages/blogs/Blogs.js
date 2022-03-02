import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../../components/Blogs/BlogHeader";
import BlogsContent from "../../components/Blogs/BlogsContent";
import getAllBlogsApi from "../../apis/api/Blogs";
import Loader from "../../components/Loader";

function Blogs() {
  const [blogItems, setBlogs] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getAllBlogsApi(setBlogs, setLoader);
  }, []);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <BlogHeader blogs={blogItems} />
          <BlogsContent blogs={blogItems} />
        </>
      )}
    </div>
  );
}

export default Blogs;
