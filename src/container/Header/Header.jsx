import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        &apos;Step into our restaurant and be transported to a world of elegance and sophistication. Our signature decorations, carefully crafted by the renowned Divish Arora, create an ambiance that&apos;s both luxurious and inviting. From bespoke centerpieces to intricate lighting designs, every detail is meticulously planned to provide an unforgettable dining experience.&apos;
      </p>
      <a href="https://www.instagram.com/ngmall001/">
        <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
