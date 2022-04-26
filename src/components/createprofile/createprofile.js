import React from "react";
import Content from '../content/content';
import kidsImg from '../../images/kids.png';

const createProfile = () => {
    let props = {
        heading:'Enjoy on your TV.',
        para:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        }

    return(
        <section className={'profile-sec'}>
            <div className="pro-wrapper">
                <div className={'pro-col-lft'}>
                    <div className={'kidImg'}>
                        <img src={kidsImg} alt="kids" />
                    </div>
                </div>
                <div className={'pro-col-rght'}>
                    <Content {...props} />
                </div>
            </div>
        </section>
    );
}

export default createProfile;