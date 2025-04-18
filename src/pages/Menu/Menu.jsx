import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div className='my-4'>
            <Helmet>
                <title>Desire Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/*offered*/}
            <SectionTitle
                heading={"Today's offer"}
                subHeading={"Don't Miss"}
            ></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            {/*pizza */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            {/*salad */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/*soup */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;