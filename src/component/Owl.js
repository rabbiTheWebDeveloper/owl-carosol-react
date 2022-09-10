import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Owl = () => {
    const options = {
        loop: true,
        dots: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout:1000,
        weight:500,
        autoplayHoverPause:true
      };
    return (
        <>
        <OwlCarousel classNameName='owl-theme' loop margin={4} nav>
            <div className='item'>
                <h4>1</h4>
            </div>
            <div className='item'>
                <h4>2</h4>
            </div>
            <div className='item'>
                <h4>3</h4>
            </div>
            <div className='item'>
                <h4>4</h4>
            </div>
        </OwlCarousel>
        <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=511" />
      </div>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=514" />
      </div>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=513" />
      </div>
    </OwlCarousel>
    
        </>
        
    );
};

export default Owl;