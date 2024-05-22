import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <Link to={'admin'}>Admin</Link>
    );
}

export default Home;