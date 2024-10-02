import Carousel from 'react-multi-carousel';
import CarouselItem from '../components/carousel-item';

import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function Home() {
    return (
    <>
        <div className="home-container">
            <h1 id="home-title">Hello, I am Junyu (Johnny) Chen</h1>
            <hr className="home-seperator" />
            <div id="home-paragraph">
                <p>I am a Computer Science & Information Technology and Web Science Dual Major @ RPI ('27). </p>
                <p>My focus track is currently AL/ML. I enjoy UI/UX and Game Design.</p>
            </div>
        </div>

        {/* Most Current Feed, carousel */}
        <div className='carousel-container'>
            <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                itemClass="carousel-item"
                autoPlay={true}
                autoPlaySpeed={5000}
            >
                <CarouselItem />    
            </Carousel>
        </div>
    </>
    )
}