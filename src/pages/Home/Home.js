import React from 'react';
import Hero from './Hero';
import TopFresherJobs from './TopFresherJobs';
import TopSeniorJobs from './TopSeniorJobs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopFresherJobs></TopFresherJobs>
            <TopSeniorJobs></TopSeniorJobs>
        </div>
    );
};

export default Home;