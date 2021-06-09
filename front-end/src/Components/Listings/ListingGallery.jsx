import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';
import nowShowing from '../../Images/nowshowing.png';

const ListingGallery = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/movies/getCurrent")
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
                setIsLoaded(true);
                removeLabels();
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            })
    }, []);

    const slides = data.map((item, i) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={i}
          >
            <Link to={`/movies/${item.title}`}>
                <img className={"listingImgs"} src={item.imageUrl} alt={""} />
            </Link>
            <CarouselCaption captionText={item.title} />
          </CarouselItem>
        );
    });

    const removeLabels = function () {
        const elements = document.getElementsByClassName("sr-only");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    if (isLoaded) {
        return (
            <>
                <div className="listing-info">
                    <img src={nowShowing} alt=""></img>
                </div>
                <div className="listings">    
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
                </div>
            </>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
};

export default ListingGallery;