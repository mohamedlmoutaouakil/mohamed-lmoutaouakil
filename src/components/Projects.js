import React from 'react';
import smartPointers from '../figures/smart-pointers.jpg';
import reactLogo from '../figures/react-logo.png';
import flaskLogo from '../figures/flask-logo.png';
import customKMeansImage from '../figures/custom-kmeans.jpg';
import pythonLogo from '../figures/python-logo.png';
import '../styles/Projects.css';

class TechStackList extends React.Component {

    render() {
      const techs = this.props.technologies;
      const techsList = techs.map((tech) =>
        <li key={tech.name} className="list-inline-item mx-3" >
          <img className="tech-icon" src={tech.image} alt={tech.name} height="50" />
        </li>
      );
  
      return (
        <ul className="list-inline mx-auto justify-content-center">
          {techsList}
        </ul>
      );
    }
  }
  
  class ProjectRow extends React.Component {
    
    render() {
      
      return (
          <div className="row py-4 w-75 mx-auto">
            <div className="col-sm-4" >
              <img className="project-image mx-auto d-block img-fluid" src={this.props.project.image} alt={this.props.project.name} />
            </div>
            <div className="col-sm-8">
              <h2 className="project-name" >{this.props.project.name}</h2>
              <div className="project-details">
                <div className="project-description">
                  <p>
                    {this.props.project.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-sm-12 d-flex tech-stack">
              <TechStackList technologies={this.props.project.technologies} />
            </div>
          </div>
      );
    }
  }

  function getProjects() {
    const sharedPointerDesc = "This project is built to put into practice some of the interesting features of C++, and replicate"
     + "a class from an important library in the programming language which is smart pointers.";
    const sharedPointer = {
      name: 'Custom Shared Pointer',
      image: smartPointers,
      description: sharedPointerDesc,
      technologies: [
        {
          name: "React",
          image: reactLogo
        },
        {
          name: "Flask",
          image: flaskLogo
        }
      ]
    };
  
    const customKMeansDesc = "This project is a custom KMeans class which I built to into practice my "
    + "knowledge in Machine Learning.";
    const customKMeans = {
      name: 'Custom KMeans',
      image: customKMeansImage,
      description: customKMeansDesc,
      technologies: [
        {
          name: "Python",
          image: pythonLogo
        }
      ]
    };

    const customKMeans2 = {
      name: 'Custom KMeans',
      image: customKMeansImage,
      description: customKMeansDesc,
      technologies: [
        {
          name: "Python",
          image: pythonLogo
        }
      ]
    };

    const customKMeans3 = {
      name: 'Custom KMeans',
      image: customKMeansImage,
      description: customKMeansDesc,
      technologies: [
        {
          name: "Python",
          image: pythonLogo
        }
      ]
    };
  
    return [sharedPointer, customKMeans, customKMeans2, customKMeans3];
  }
  
  function Projects() {
    
    const rowClasses = ["w-100 project-row-grey", "w-100 project-row-white"];
    const projectsList = getProjects();
    const projectsRows = projectsList.map((project, index) =>
      <ProjectRow project={project} rowColor={rowClasses[index % 2]} />
    );
    return (
      <section className="py-5" id="projects">
        <h1 className="text-center py-5" >Projects</h1>
        <div className="projects-list" >
          {projectsRows}
        </div>
      </section>
    );
  }

  export default Projects;