import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Recomentation from './Recomentation/Recomentation';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Recomentation></Recomentation>
           <Features></Features>
        </div>
    );
};

export default Home;