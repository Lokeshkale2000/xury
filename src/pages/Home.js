import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Quality from '../components/quality/Quality';
import Silder from '../components/silder/Silder';
import Main from '../components/main/Main';
import Testimonial from '../testimonial/Testimonial';
import Review from '../components/review/Review';
import Footer from '../components/footer/Footer';

const Home = () => (
    <div>
        <NavBar></NavBar>
        <Main></Main>
        <Review></Review>
        <Quality></Quality>
        <Silder></Silder>
        <Testimonial></Testimonial>
        <Footer />

    </div>
)

export default Home;
