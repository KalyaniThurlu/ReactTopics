
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    { title: "Weather App", description: "Displays current weather info." },
    { title: "Todo List", description: "A simple task management app." },
    { title: "Calculator", description: "Basic arithmetic calculator." },
    { title: "Portfolio", description: "Showcase of my projects." },
    { title: "curd Operations", description: "Personal technical blog site." },
    { title: "movie", description: "Simple React-based game." },
    
    { title: "Todo List", description: "A simple task management app." },
    { title: "Calculator", description: "Basic arithmetic calculator." },
    { title: "Portfolio", description: "Showcase of my projects." },
    { title: "curd Operations", description: "Personal technical blog site." },
    { title: "movie", description: "Simple React-based game." }
    
  ];

  return (
    // <div className="projects-container">
    //   <h1 className="projects-heading">Projects</h1>
    //   <div className="projects-grid">
    //     {projectList.map((project, index) => (
    //       <div className="card" key={index}>
    //         <div className="card-body">
    //           <h3 className="card-title">{project.title}</h3>
    //           <p className="card-description">{project.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectList.map((project,index) =>(
          <div className="card" key={index}>
            <div className="card-body" >
              <h1 className="card-title">{project.title}</h1>
               <p className="card-description">{project.description}</p>
            </div>
          </div>





        ))}
      </div>
    </div>
  );
};

export default Projects;
