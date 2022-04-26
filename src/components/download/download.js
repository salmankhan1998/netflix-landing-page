import React from "react";
import Content from '../content/content';
import phoneImg from '../../images/mobile.jpg';
import BoxshotImg from '../../images/boxshot.png';
import IconGif from '../../images/download-icon.gif'

const donwload = () => {
    let props = {
        heading:'Download your shows to watch offline.',
        para:'Save your favorites easily and always have something to watch.',
        }

    return(
        <section className={'dw-sec'}>
            <div className="dw-wrapper">
                <div className={'dw-col-lft'}>
                    <div className={'dwImg'}>
                        <img src={phoneImg} alt="mobile icon" />
                    </div>
                    <div className={'download-box'}>
                        <img src={BoxshotImg} alt="boxhshot"/>

                        <div className='text'>
                            <h5>stranger things</h5>
                            <p>download...</p>
                        </div>

                        <img src={IconGif} className={'gif'} alt="gif"/>
                    </div>
                </div>
                <div className={'dw-col-rght'}>
                    <Content {...props} />
                </div>
            </div>
        </section>
    );
}

export default donwload;