import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const {category} = useParams();
    console.log(category);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");


    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food" details="Would You Like to Try a Dish "></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Dink</Tab>
                 
                </TabList>
                <TabPanel>
                  <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={desserts}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;