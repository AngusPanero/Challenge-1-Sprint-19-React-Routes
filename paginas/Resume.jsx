import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studies, experiences } from "../src/data/resume"

const Resume = () => {
    return(
        <>
            <h1>Welcome to My Full Stack Dev Resume</h1>
            <div>
                <h1>Estudios Profesionales</h1>
                    <ul>
                        {studies.map((es) => <li>ID: {es.id}, Título: {es.title}, Instituto: {es.institution}, Fecha: {es.date} </li>)}
                    </ul>
            </div>

            <div>
                <h1>Experiencia Profesional</h1>
                    <ul>
                        {experiences.map((ex) => <li>ID: {ex.id}, Título: {ex.title}, Compañia: {ex.institution}, Fecha: {ex.date} </li>)}
                    </ul>
            </div>

            <Link to="/">Home</Link>
        </>
    )
}

export default Resume;