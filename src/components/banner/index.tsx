import Carousel from 'react-bootstrap/Carousel';
import {useQuery} from "../../hooks/useQuery";
import {Link} from "react-router-dom";

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
                    {!isMobile ? (<><p> India at a glance : With a population of 1.27 billion, India is the world's
                            second most populous country. It is the seventh largest country in the world with an area of
                            3.288 million sq km. It has a long coastline of over 7,500 km. India is a diverse country where
                            over 22 major languages and 415 dialects are spoken. With the highest mountain range in the
                            world, the Himalayas to its North, the Thar desert to its West, the Gangetic Delta to its East
                            and the Deccan Plateau in the South, the country is home to vast agro-ecological diversity.
                        </p>
                            <p>
                                Major economic pillar : Around 65–70% of the Indian population (directly or indirectly )
                                depends upon the Agriculture sector and currently, it contributes to 16–17% of the GDP in
                                the Indian economy.
                            </p></>) :
                        <>
                            <p>
                                Major economic pillar : Around 65–70% of the Indian population (directly or indirectly )
                                depends upon the Agriculture sector and currently, it contributes to 16–17% of the GDP
                                in
                                the Indian economy.

                            </p>
                            <button style={{background: '#1DCA11', color: '#ffff'}} className='btn read-more'>
                                <Link to='/services' className='text-decoration-none text-light'>Read more</Link>
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
                <Carousel.Caption className='banner-text'>
                    <h3>Women Empowerment</h3>
                    {!isMobile ?
                        (
                            <><p>In India, 85% of rural women are engaged in agriculture, yet only about 13% owns land.
                                The situation is worst in Bihar with only 7% women having land rights, though women play
                                an important role in various agricultural activities. While seeds are sown and
                                harvesting is carried, women farmers work for about 3,300 hours which is almost double
                                that of male farmers who contribute 1,860 hours, as per a report by a leading
                                international group. Women comprises the most of small and marginal farmers. Despite
                                their contribution being high over male counterparts, their access to the market is low.
                                They are either paid less or unpaid as they do not own much land.</p>
                            </>) :
                        <>
                            <p>
                            In India, 85% of rural women are engaged in agriculture, yet only about 13% owns land. The
                            situation is worst in Bihar with only 7% women having land rights, though women play an
                            important role in various agricultural activities.
                        </p>
                            <button style={{background: '#1DCA11', color: '#ffff'}} className='btn read-more'>
                                <Link to='/services' className='text-decoration-none text-light'>Read more</Link>
                            </button>

                        </>
                    }
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={!isMobile ? "/assets/h3slide1.jpg" : "/assets/gmasnry7.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Micro-entrepreneurship</h3>
                    <p>
                        India’s handicrafts have been booming as handicrafts have witnessed an increase in exports
                        despite the pandemic. This is the power of the rural population, the micro and small
                        entrepreneurs.
                    </p>
                    <button style={{background: '#1DCA11', color: '#ffff'}} className='btn read-more'>
                        <Link to='/services' className='text-decoration-none text-light'>Read more</Link>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;