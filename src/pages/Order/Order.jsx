import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';
import Ordertab from './Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams();
    const initialIndex=categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
             <Helmet>
                <title>Desire Order</title>
            </Helmet>
            <Cover img={orderImg} title={"order food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><Ordertab items={salad}></Ordertab></TabPanel>
                <TabPanel><Ordertab items={pizza}></Ordertab></TabPanel>
                <TabPanel><Ordertab items={soup}></Ordertab></TabPanel>
                <TabPanel><Ordertab items={dessert}></Ordertab></TabPanel>
                <TabPanel><Ordertab items={drinks}></Ordertab></TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;