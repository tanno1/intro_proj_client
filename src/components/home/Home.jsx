import React from "react";
import Header from '../common/Header';
import Searchbar from '../common/SearchBar';

const Home = () => {
    return (
        <div className="flex flex-col h-screen items-center">
            <div className="w-full">
                <Header />
            </div>
            <div className="flex flex-col h-full items-center justify-center">
                <h1 className=" text-lg my-4 text-center">where will this road trip take you?</h1>
                <div className="flex items-center h-fit">
                    <Searchbar intervalDuration={2000}/>
                    <h1 className="mx-4">to</h1>
                    <Searchbar intervalDuration={3000}/>
                </div>
            </div>
        </div>
    )
}

export default Home;