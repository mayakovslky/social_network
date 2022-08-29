import React from "react";
import ninjaOnline from '../ninjaOnline.webp';
import ninjaWallpaper from '../wallpaperNinja.png';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={ninjaWallpaper}
                    alt="Content"/>
            </div>
            <div>
                <img className={s.avatar}
                     src={ninjaOnline}
                     alt="Avatar"/>
                description
            </div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>post1</div>
                <div>post2</div>
            </div>
        </div>
    )
}

export default Profile;