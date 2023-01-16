import React from 'react';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Hello from '../src/components/Hello';
import Activityday from './components/Activityday';
import Timing from './components/Timing';
import Performance from './components/Performance';
import Objectif from './components/Objectif';
import Burning from './components/Burning';

const PageContainer = () => {
    return (
        <div className='all-content'>
            <Header/>
        <div className='content'>
            <Menu/>
            <Hello/>
            <Activityday/>
        <div className='encart-stat'>
            <Timing/>
            <Performance/>
            <Objectif/>
        </div>
            <Burning/>
        </div>
        </div>
    );
};

export default PageContainer;