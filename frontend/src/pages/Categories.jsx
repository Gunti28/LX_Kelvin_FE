import React from 'react';
import '../css/Categoris.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import slid1 from '../assets/slid-1.png';
import fc from '../assets/fruits-categorie.png';
import sfc from '../assets/seasonal fruits-categorie.png';
import vc from '../assets/Vegetables-categorie.png';
import svc from '../assets/seasonal Vegetables-categorie.png';
import milk from '../assets/milk.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const categories = [
  { title: 'Vegetables', image: vc },
  { title: 'Fruits', image: fc },
  { title: 'Seasonal Vegetables', image: svc },
  { title: 'Seasonal Fruits', image: sfc },
  { title: 'milk', image: milk },

];

const HomePage = () => {
  
    // const navigate = useNavigate();
  
    // const handleClick = () => {
    //   navigate('/category/fruits');
    // };

  return (
    <div className="container-fluid ">
      {/* Top Carousel */}
      <Swiper
        navigation={true}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div className="carousel d-flex flex-column align-items-center">
            <img
              src={slid1}
              alt="Fruits and Vegetables"
              style={{
                width: '90%',
                maxHeight: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            <div className="text-center p-4 text" style={{ background: 'transparent' }}>
              <h3 className='foont'>
                Let's celebrate the goodness of <span style={{ color: 'green' }}>greens</span>
              </h3>
              <Button  variant="outline-dark" className="mt-2 btn1"  href='https://i.scdn.co/image/ab67616d0000b2734e42de9a9d9888d50b99e8a7'>
                Up To <strong style={{ color: 'orange' }}>20%</strong> OFF
              </Button>
            </div>
          </div>
        </SwiperSlide> 

    
        {[2, 3, 4].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={slid1}
              alt={`Slide ${num}`}
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      


      {/* Category Section */}
      <Container  fluid className="mt-4 ">
        <h4 className="text-center  mb-4">CATEGORIES</h4>
        <div  className='text-end'>
       <Button variant="primary" size="sm" href='https://www.google.com/search?q=product+category+list&sca_esv=caa5732678f1db22&hl=en&sxsrf=AHTn8zpatpLrBJy1PLqVsRS3Opb81HZlyQ:1746529967331&source=hp&biw=1280&bih=593&ei=r-4ZaJvwEarm1e8PlYfP4QE&iflsig=ACkRmUkAAAAAaBn8v2MaTaODCSN4pVviirRWFyCbETnX&oq=product+catego&gs_lp=EgNpbWciDnByb2R1Y3QgY2F0ZWdvKgIIATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI7FJQnwZYqUNwAXgAkAEAmAGqBaABjCGqAQwwLjEuMTAuMS4wLjK4AQHIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCD6ACjyKoAgrCAgoQIxgnGMkCGOoCwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIHEAAYgAQYCpgDGJIHDDEuMS4xMC4xLjEuMaAHsUeyBwwwLjEuMTAuMS4xLjG4B_Yh&sclient=img&udm=2'>All Categories</Button>
        </div>
        <hr />
        <div className="category-scroll d-flex overflow-auto gap-3">
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12}  className="mb-4">
              
          <div  key={idx} className='t1 mb-5  cardtotal'>
              <Card className='cardimage' >
                {/* <Card.Img variant="top" src={cat.image}  height="170" width="300"  style={{ objectFit: 'cover' }} /> */}
                <Card.Img variant="top" src={cat.image} style={{ height: '170px', width: '100%', objectFit: 'cover' }} />
                <Card.Body className='cardBody'>
                  <Card.Title className="text-center cardfont">{cat.title}</Card.Title>
                </Card.Body>
              </Card>
              </div>
              </Col>
          ))}
        </div>
      </Container>
      
    </div>
  );
};

export default HomePage;
