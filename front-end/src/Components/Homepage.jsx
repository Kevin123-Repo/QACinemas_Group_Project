import homeImgOne from '../Images/homepage/cinema_1.jpg';
import homeImgTwo from '../Images/homepage/cinema_2.jpg';
import homeImgThree from '../Images/homepage/cinema_3.jpg';
import homeImgFour from '../Images/homepage/cinema_4.jpg';
import { useState } from 'react';
import { Col, Row, Container } from "reactstrap";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';

const items = [homeImgThree, homeImgOne, homeImgFour, homeImgTwo];

const Homepage = () => {

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const slides = items.map((item, i) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
                <img className={"homepage-imgs"} src={item} alt={""} />
            </CarouselItem>
        );
    });

    return (
        <div id="homepage-div">
            <Row>
                {/* <div id="homepage-slideshow-div">     */}
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        interval={false} // Auto-play
                    >
                        {slides}
                        <CarouselControl direction="prev" onClickHandler={previous} />
                        <CarouselControl direction="next" onClickHandler={next} />
                    </Carousel>
                {/* </div> */}
            </Row>
            <div id="homepage-info">
                <Row>
                    <h3> Welcome to QA Cinemas! Here you can browse all of our latest films. </h3> <br/>
                    <p>
                        You can also book tickets for showings in advance, and get a preview of new releases arriving in the near future!
                    </p>
                </Row>
                <Row>
                </Row>
                <Row>
                    <p>
                        QA Cinemas is the UK's premiere multiplex cinema chain, and the best destination to kick back, relax, and forget your worries for a few hours.<br/><br/>
                        Grab some popcorn and an extra large soft drink of your choice and be transported to a new world by the magic of cinema.<br/><br/>
                        Take your family, friends, or even just that special someone... yourself!
                    </p>
                </Row>
            </div>
        </div>
    );
}

export default Homepage;