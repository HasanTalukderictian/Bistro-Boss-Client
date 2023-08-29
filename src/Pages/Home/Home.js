import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Recomentation from './Recomentation/Recomentation';
import Features from '../Features/Features';
import Testimonials from './Testimonials/Testimonials';
import FullMenu from '../FullMenu/FullMenu';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Recomentation></Recomentation>
           <FullMenu></FullMenu>
           <Features></Features>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;