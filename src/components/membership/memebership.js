import React from "react";

const membership = () => {

    return(
        <div className={'member-container'}>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>

            <div className={'input-box'}>
                <input type='email' placeholder="Email address" />
                <button>get started  ></button>
            </div>
        </div>
    )
}

export default membership;