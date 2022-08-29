import React from 'react';
import './App.css';
import Header from "./components/Header";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <nav className={'nav'}>
                <div>
                    <a href={'#'}>Profile</a>
                </div>
                <div>
                    <a href={'#'}>Messages</a>
                </div>
                <div>
                    <a href={'#'}>News</a>
                </div>
                <div>
                    <a href={'#'}>Music</a>
                </div>
                <div>
                    <a href={'#'}>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://i0.wp.com/www.luamaralstudio.com/wp-content/uploads/2022/02/soft-aesthetic-desktop-wallpaper-for-computer-by-lu-amaral-studio-6.jpg?resize=980%2C551&ssl=1"
                        alt="Content"/>
                </div>
                <div>
                    <img className={'avatar'} src="https://i.pinimg.com/originals/b4/3b/ba/b43bba3de986fb97865ed342435c4ae5.png"
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
        </div>
    );
}
export default App;
