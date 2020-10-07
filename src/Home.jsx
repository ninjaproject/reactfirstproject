import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/123.png'
import Common from './Common';

import './App.css';

function Home() {
    return (
        <>
            <Common 
                name="My Life My Rule "
                img={web}
                visit='/service'
                btname='Get started'
            />
        </>
    )
}

export default Home;