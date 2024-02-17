import React from 'react';

// import sliderImage from '../../assets/Caresoul/Illustration.png'
import sliderImage1 from '../../assets/Caresoul/pexels-cadomaestro-1170412.jpg'
import sliderImage2 from '../../assets/Caresoul/pexels-canva-studio-3194521.jpg'
import sliderImage3 from '../../assets/Caresoul/pexels-dominika-roseclay-905163.jpg'
import sliderImage4 from '../../assets/Caresoul/pexels-kampus-production-6248958.jpg'


const Slider = () => {

    const caresoulArray = [sliderImage1, sliderImage2, sliderImage3, sliderImage4]



    return (
        <div>

            {/* <div className="carousel w-full  mt-24 h-[1000px]"> */}

                {/* {
                    caresoulArray.map(item =>
                        <>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src={item} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </>
                    )
                }
 */}



            {/* </div> */}

            
            <div className="carousel w-full   mt-24 md:h-[400px] lg:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={sliderImage1}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={sliderImage2}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={sliderImage3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={sliderImage4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;