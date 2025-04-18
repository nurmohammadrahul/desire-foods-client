import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';
import './featured.css';
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"featured item"}>
            </SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-20 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg}></img>
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2025</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ratione nostrum a voluptate maxime mollitia possimus vitae est?
                        Delectus, officia aspernatur praesentium est possimus corrupti
                        exercitationem vitae rem, omnis laudantium natus dicta qui, ea incidunt
                        molestiae reprehenderit? Tenetur reprehenderit adipisci possimus impedit
                        quasi veritatis, voluptate, totam perferendis ad excepturi, tempore doloribus?</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;