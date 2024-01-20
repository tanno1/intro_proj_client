import React from "react";
import Header from '../common/Header';
import Searchbar from '../common/SearchBar';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h1>where will this road trip take you?</h1>
                <div>
                    <Searchbar />
                    <h1>to</h1>
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}

export default Home;