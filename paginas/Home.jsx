import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Welcome to My Full Stack Dev Profile</h1>
            <Link to="/projects">Projects</Link>
            <Link to="/Resume">Resume</Link>
        </>
    )
}

export default Home;