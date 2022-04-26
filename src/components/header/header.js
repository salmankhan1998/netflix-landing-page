import React from 'react';
import logo from '../../images/logo.png';

const header = ()=> {

    return(
       <header>
           <div className={'head-container'}>
               <div className={'logo'}>
                    <img src={logo} alt='logo' />
               </div>
                <button>
                    sign in
                </button>
           </div>
       </header>
    )
};

export default header;
