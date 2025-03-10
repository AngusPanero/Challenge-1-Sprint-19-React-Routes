import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from "../src/data/projects";

const Projects = () => {
    return(
        <>
            <h1>Welcome to My Full Stack Dev Projects</h1>
            {projects.map((pr) => <li>ID: {pr.id}, Nombre: {Projects.name}, Descripción: {pr.description}, <Link to={pr.url}>{pr.url}</Link></li>)}
            <Link to="/">Home</Link>
        </>
    )
}

export default Projects;