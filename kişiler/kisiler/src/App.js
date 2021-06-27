import React, { useEffect, useState } from "react";
import './App.css';
import { auth } from "./firebase";
import Login from "./Login";
import Home from "./Home";

function App() {
const[user,setUser]=useState("");

useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
if(authUser){

  setUser(authUser);

}
else{
  setUser("");
}
});
},[]);

  return (
    <div className="App">
     {

user ? <Home user={user}/> :<Login/>}

</div>
  );
}

export default App;
