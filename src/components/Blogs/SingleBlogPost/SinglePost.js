import Sidebar from "./Sidebar";
import "./singlePost.css";

export default function SinglePost({ blogDetails }) {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <h1 className="singlePostTitle">
            {blogDetails && blogDetails.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <span className="link">
                  {blogDetails && blogDetails.author_name}
                </span>
              </b>
            </span>
            <span>{blogDetails && blogDetails.posted_on}</span>
          </div>
          <p className="singlePostDesc">
            {blogDetails &&
              blogDetails.description.map((data) => (
                <>
                  <h3>{data.title}</h3>
                  <p>{data.detail}</p>
                </>
              ))}
          </p>
        </div>
        <Sidebar sideBarDetail={blogDetails} />
      </div>
    </>
  );
}
