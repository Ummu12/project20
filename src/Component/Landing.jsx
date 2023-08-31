import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Todo } from "./Todo";
import { Name } from "./Name";
import { Color } from "./Color";
import { Nav } from "./Nav";

export  const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav/>
          <Routes>
            < Route path="/Home"  element={<Home/>}/>
             <Route path="/Todo"  element={<Todo/>}/>   
             <Route path="/Name" element={<Name/>} />
             <Route path="/Color"  element={<Color/>} />
             

          </Routes>
        </BrowserRouter>
    )
}