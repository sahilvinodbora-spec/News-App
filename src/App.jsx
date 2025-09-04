import Topbar from "./Components/Topbar";
import React from "react";
import News from "./Components/news";
import NewList from "./Components/NewList";
import Sidebar from "./Components/Sidebar";
import Sidebar2 from "./Sidebar2";

export default function App(){
  return(
    <div>
      <Topbar />
      <News />
      <Sidebar />
      <Sidebar2 />
      
    </div>
  )
}