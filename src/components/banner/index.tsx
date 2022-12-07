import Carousel from 'react-bootstrap/Carousel';
import {useQuery} from "../../hooks/useQuery";

const Banner = () => {
    const isMobile = useQuery();
    console.log(isMobile)
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={!isMobile ? "/assets/h3slide2.jpg" : "/assets/aboutpic3.jpg"}
                    alt="Second slide"
                />
                <Carousel.Caption className='banner-text'>
                    <h3>The current scenario of Agriculture.</h3>
                    {!isMobile ? (<><p> India at a glance:- With a population of 1.27 billion India is the world's
                            second most populous
                            country. It is the seventh largest country in the world with an area of 3.288 million sq km. It
                            has a long
                            coastline of over 7,500 km. India is a diverse country where over 22 major languages and 415
                            dialects
                            are spoken. With the highest mountain range in the world, the Himalayas to its North, the Thar
                            desert
                            to its West, the Gangetic delta to its East and the Deccan Plateau in the South, the country is
                            home to
                            vast agro-ecological diversity.</p>
                            <p>
                                Major economic pillar:- Around 65–70%% of the Indian population (directly or indirectly )
                                depends
                                upon the Agriculture sector and currently, it contributes to 16–17% of the GDP in the Indian
                                economy
                            </p></>) :
                        <>
                            <p>
                                Major economic pillar:- Around 65–70%% of the Indian population (directly or indirectly
                                )
                                depends
                                upon the Agriculture sector and currently, it contributes to 16–17% of the GDP in the
                                Indian
                                economy
                            </p>
                            <button style={{background: '#1DCA11', color: '#ffff'}} className='btn read-more'>Read
                                More
                            </button>
                        </>}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block h-75 w-100"
                    src={!isMobile ? "assets/h2-slide1.jpg" : "/assets/current-pro1.jpg"}
                    alt="First slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={!isMobile ? "/assets/h3slide1.jpg" : "/assets/gmasnry7.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;