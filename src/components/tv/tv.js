import React from "react";
import Content from '../content/content';
import TvImg from '../../images/tv-case.png';
import video from '../../images/video-tv.m4v';

const tvComp = () => {
    let props = {
        heading:'Enjoy on your TV.',
        para:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        }

    return(
        <section className={'tv-sec'}>
            <div className="tv-wrapper">
                <div className={'tv-col-lft'}>
                    <Content {...props} />
                </div>
                <div className={'tv-col-rght'}>
                    <div className={'tvImg'}>
                        <img src={TvImg} alt="tv icon" />
                    </div>
                    <div className={'video'}>
                        <video controls autoPlay loop>
                            <source src={video} type="video/m4v"/>
                            <source src="movie.ogg" type="video/ogg"/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default tvComp;