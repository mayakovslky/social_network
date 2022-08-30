import React from "react";
import ts from "typescript";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'how are you?'} likesCount={23}/>
                <Post message={"it's my first post"} likesCount={0}/>
            </div>
        </div>
    )
}
export default MyPosts;