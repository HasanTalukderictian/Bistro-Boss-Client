import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/home/chef-service.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import salaImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
   
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}
            title="Our Menu"
            details ="Would you like to try a Dish."></Cover>
            {/*  Main Cover */}
            <SectionTitle
            Subheading="Do n't Miss"
            heading="Today's Offer">

            </SectionTitle>

                {/*  Offered Cover */}
            <MenuCategory 
            items={offered}>
            
            </MenuCategory>
                {/* desserts items */}

                <MenuCategory
                items={desserts} title="desserts" details ="Lorem Ipsum has been the industry’s 
                standard dummy text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book."
                img={dessertImg}
                ></MenuCategory>
      
              {/* Pizza items */}
              <MenuCategory items={pizza} title={"pizza"} details ="Lorem Ipsum has been the industry’s 
                standard dummy text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book."
              img={pizzaImg}>

              </MenuCategory>
              <MenuCategory items={salad} title={"salad"} details ="Lorem Ipsum has been the industry’s 
                standard dummy text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book."
              img={salaImg}>

              </MenuCategory>

              <MenuCategory items={soup} title={"soup"} details ="Lorem Ipsum has been the industry’s 
                standard dummy text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book."
              img={soupImg}>

              </MenuCategory>
              
              
              

        </div>
    );
};

export default Menu;