import React from 'react';
import './App.css';
import Navbar from './component/Navabar';
import EnquiryForm from './component/EnquiryForm';
import StatsCard from './component/StatsCard';
import RankingsAccreditations from './component/RankingsAccreditations';
import InfoSection from './component/InfoSection';
import MAHEAdvantages from './component/MAHEAdvantages';
import ImageComponent from './component/ImageComponent.js';
import CardComponent from './component/CardComponent .js';





function App() {
  return (
    <div className="App">
      <Navbar />
      <EnquiryForm />
      <StatsCard />
      <RankingsAccreditations />
      <div style={{display:'flex', justifyContent:'space-evenly',}}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div style={{ maxWidth: '350px', position: 'relative' }}>
          <ImageComponent />
          <CardComponent />
        </div>
        <div style={{ maxWidth: '350px', position: 'relative' }}>
          <ImageComponent />
          <CardComponent />
        </div>
        <div style={{ maxWidth: '350px', position: 'relative' }}>
          <ImageComponent />
          <CardComponent />
        </div>
      </div>
      </div>
      <InfoSection/>
      <MAHEAdvantages />
      
    </div>
  );
}

export default App;
