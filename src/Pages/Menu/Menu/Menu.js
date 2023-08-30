import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/home/chef-service.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover img={menuImg}
            title="Our Menu"
            details ="Would you like to try a Dish."></Cover>
           <PopularMenu></PopularMenu>
           <Cover img={menuImg}
            title="Our Menu"
            details ="Would you like to try a Dish."></Cover>
           <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;