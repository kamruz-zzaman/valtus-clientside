import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import HeroNavbar from '../Navbar/Navbar';

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const [img, setImg] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:8080/carousel`).then(res => {
            setImg(res.data);
        });
    }, []);
    return (
        <>
            <HeroNavbar></HeroNavbar>
            {
                img.length === 0 ? <p>Loading...</p> :
                    <div className='overflow-hidden'>
                        <Slider {...settings} className=' pb-5 px-0 mx-0'>
                            {img.map(carImg => (
                                <div key={carImg} style={{ position: 'relative' }}>
                                    <div>
                                        <img width='100%' height='600px' src={`data:image/png;base64,${carImg.image}`} alt="" />
                                    </div>
                                    <div style={{ marginTop: '-500px' }}>
                                        <div >
                                            <div className='mx-3'>
                                                <p className='fs-1 fw-bold text-dark'>A trillion $ ​opportunity <br /> Keep Co2 out of Air</p>
                                            </div>
                                            <div className='d-flex my-4'>
                                                <button className='btn'><img src="/img/playstore.png" alt="" /></button>
                                                <button className='btn mx-1'><img src="/img/appstore.png" alt="" /></button>
                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-5'>Join our community</p>
                                            </div>
                                            <div className='mx-3'>
                                                <button className='btn p-0 m-0'><img src="/img/sb.png" alt="" /></button>
                                                <button className='btn p-0 m-0'><img src="/img/in.png" alt="" /></button>
                                                <button className='btn p-0 m-0'><img src="/img/tw.png" alt="" /></button>
                                                <button className='btn p-0 m-0'><img src="/img/tel.png" alt="" /></button>
                                                <button className='btn p-0 m-0'><img src="/img/ms.png" alt="" /></button>
                                                <button className='btn p-0 m-0'><img src="/img/gt.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
            }
        </>
    );
};

export default HeroCarousel;