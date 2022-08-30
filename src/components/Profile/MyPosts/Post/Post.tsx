import React from "react";
import s from './Post.module.css';
import avatar from './ninjaOnline.webp'

type MessagePropsType = {
    message: string
    likesCount: number
}

const Post = (props: MessagePropsType) => {
    return (

        <div className={s.item}>
            <img src={avatar} alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>


    )
}
export default Post;