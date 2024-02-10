import React from "react";
import { Route  } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

    function App() {
      return <>
         <NavBar />
      <div >
        <Route path="/" component={Home}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/actors" component={Actors}/>
        <Route path="/directors" component={Directors}/>
      </div>
    
    </>;
}

export default App;

