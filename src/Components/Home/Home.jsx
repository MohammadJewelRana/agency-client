import React from 'react';
import Client from './Client';
import FooterLike from './FooterLike';
import SharedComponent from '../../Shared/SharedComponent';
import img from '../../assets/home/6.jpg'
import System from './System';
import Helping from './Helping';
import NewMarketing from './NewMarketing';
import Bannner from './Bannner';
import Slider from './Slider';



const Home = () => {
    return (
        <div id='home'>
        <Slider></Slider>
            <div className='top-0 z-10 mt-24  md:mx-24'>
 

            <Client></Client>
            <System></System>

                <SharedComponent
                    text={' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'}
                    heading={'The unseen of spending three years at Pixelgrade '}
                    path={'#about'}
                    image={img}

                ></SharedComponent>

          
                <Helping></Helping>

                <FooterLike></FooterLike>
                <NewMarketing></NewMarketing>

               

            </div>
            <Bannner></Bannner>
        </div>
    );
};

export default Home;