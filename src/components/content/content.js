import React from "react";

const content = (props) =>{

    return(
        <div className={'flex-content'}>
            <h1 className={'heading'}>
                {props.heading}
            </h1>
            <p className={'paragraph'}>
                {props.para}
            </p>
        </div>
    );
}

export default content;