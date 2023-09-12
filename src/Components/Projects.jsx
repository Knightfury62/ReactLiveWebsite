import React from "react";
import './Project.css'
import taskManageSys from '../Assets/taskManageSys.PNG'
import tictactoe from '../Assets/tictactoe.PNG'
import amazonclone from '../Assets/amazonclone.PNG'
import trademanager from '../Assets/trademanager.PNG'
import Zoom from 'react-reveal/Zoom';
function Projects() {
  return (
    <div className="project" id="project">
      <h1 className="text-center pt-14 text-4xl font-bold text-teal-400 ">
        Projects
      </h1>
      <div className="flex justify-around mt-10 flex-wrap">
        <div className="card cursor-pointer">
          <img src={taskManageSys } />
          <div className="info">
            <h1 className="font-bold text-lg">Task Management System</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Salesforce</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Cloud</li>  
            </ul>
          </div>
        </div>
        <div className="card cursor-pointer">
          <img src={tictactoe} />
          <div className="info">
            <h1 className="font-bold text-lg">TIC TAC TOE: Multiplayer</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">JAVA</li>
            </ul>
          </div>
        </div>
        <div className="card cursor-pointer">
          <img src={amazonclone} />
          <div className="info">
                <h1 className="font-bold text-lg">Amazon Clone</h1>
                <ul className="flex mt-2 text-black font-bold">
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">HTML</li>
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">CSS</li>
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">React Js</li>
                </ul>
          </div>
        </div>
        <div className="card cursor-pointer">
          <img src={trademanager} />
          <div className="info">
            <h1 className="font-bold text-lg">Snake Game</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">JAVA</li>
            </ul>
          </div> 
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
