import React from 'react';
import FeaturesBox from './FeaturesBox';
import Featuresimage from '../images/i.svg';
import Featuresimage1 from '../images/d.svg';
import Featuresimage2 from '../images/g.svg';

function Features() {
  return <div id='features'>
      <div className='a-container'>
      <FeaturesBox image={Featuresimage} title="Inward Remittance"/>
      <FeaturesBox image={Featuresimage1} title="Multi-currency business accounts"/>
      <FeaturesBox image={Featuresimage2} title="Outward Remittance"/>

      </div>

  </div>;
}

export default Features;
