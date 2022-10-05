import React from 'react';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Hello from '../src/components/Hello';
import Activityday from './components/Activityday';

const PageContainer = () => {
    return (
        <div className='all-content'>
            <Header/>
        <div className='content'>
            <Menu/>
            <Hello/>
            <Activityday/>
        </div>
        </div>
    );
};

export default PageContainer;