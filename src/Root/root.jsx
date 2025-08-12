import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/navbar";
const Root = () => {
    return(
        <div className="flex flex-col min-h-screen">
                <Navbar/>
            <main className="flex-grow flex items-center justify center">
                <Outlet/>
            </main>
                

        </div>
    );

};
export default Root 

