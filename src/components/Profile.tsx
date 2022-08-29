import React from "react";
import ninjaOnline from '../ninjaOnline.webp';
import ninjaWallpaper from '../wallpaperNinja.png';

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img
                    src={ninjaWallpaper}
                    alt="Content"/>
            </div>
            <div>
                <img className={'avatar'}
                     src={ninjaOnline}
                     alt="Avatar"/>
                description
            </div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div>post1</div>
            <div>post2</div>
        </div>
    )
}

export default Profile;