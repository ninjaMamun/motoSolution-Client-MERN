import React from 'react';
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (


        <div className="col-md-3 mb-2">

            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans), padding: '10px', borderRadius: '12px', overflow: 'hidden'}}
            >

                <div>
                    <div class="profile-card-4 text-center cus-div p-2" style={{ height: "340px"}}>
                        <img style={{ height: '160px', width: '100%' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                        <div class="profile-content">
                            <h5 class="mt-2">{service.serviceTitle}</h5>
                            <p>{service.serviceDescription}</p>
                        </div>

                    </div>
                </div>
            </animated.div>

        </div>


    );
};

export default ServiceDetail;


