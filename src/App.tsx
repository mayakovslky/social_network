import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header>
                <img width={50}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                     alt=""/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div>Main content</div>
        </div>
    );
}
export default App;
