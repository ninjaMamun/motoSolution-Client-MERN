import React, { useEffect, useState } from 'react';
import reviewSvg from '../../../images/feedback.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import './CustomerReview.css'



const CustomerReview = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/usersReviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [allReviews])

    const latestReview = allReviews.slice(Math.max(allReviews.length - 8, 0));
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 4, tension: 300, friction: 35 } }))



    return (
        <div>
            <div class="container marketing">
                <h2 className="text-center mb-5">Our Customer Review</h2>
                <div class="row mt-4">
                    {
                        latestReview.reverse().map(review => {

                            return <div class="col-lg-3 text-center">
                                <animated.div
                                    class="card"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans), padding: '10px', borderRadius: '12px', overflow: 'hidden', background: '#f5f5f5'}}
                                >
                                    <div className="cus-div p-2 " style={{height: "370px"}}>
                                        <div className="row d-flex justify-content-center align-items-center">
                                            <div className="col-8">
                                                <img class="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" src={reviewSvg} alt="" />
                                            </div>
                                        </div>
                                        <h2>{review.name}</h2>
                                        <p>{review.company}</p>
                                        <p>{review.description}</p>
                                        <p>Rating: {review.satisfactionLevel}/5</p>
                                    </div>
                                </animated.div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default CustomerReview;