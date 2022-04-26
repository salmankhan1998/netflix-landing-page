import React from 'react';
import Header from "./components/header/header";
import TvComp from './components/tv/tv';
import Donwload from './components/download/download';
import Membership from './components/membership/memebership';
import Watch from './components/watch/watch';
import Createprofile from './components/createprofile/createprofile';
import Faqs from './components/faqs/faq';
import Footer from './components/footer/footer';

import '../src/styles/index.scss'


function App() {
  return (
    <div>
      <section className={'banner'}>

        <div className={'overlay'}></div>

        <Header/>

        <div className={'container'}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h6>Watch anywhere. Cancel anytime.</h6>

          <Membership/>
        </div>
      </section>

      <TvComp/>

      <Donwload/>

      <Watch/>

      <Createprofile/>

      <Faqs/>

      <Footer/>
    </div>


  );
}

export default App;
