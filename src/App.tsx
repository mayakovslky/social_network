import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
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
