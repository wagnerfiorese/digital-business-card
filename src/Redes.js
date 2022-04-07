import React from 'react';
import twitterIcon from '../src/images/twitter.png';
import facebookIcon from '../src/images/facebook.png';
import instagramIcon from '../src/images/instagram.png';
import githubIcon from '../src/images/github.png';

export default function Redes() {
  return (
    <div className="redes">
      <a href="https://twitter.com/Tatinhow" target="_blank" rel="noreferrer">
        <img src={twitterIcon} className="twitter" alt="" />
      </a>
      <a
        href="https://www.facebook.com/wagner.fioresebolzan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} className="facebook" alt="" />
      </a>
      <a
        href="https://www.instagram.com/tatowfb"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} className="instagram" alt="" />
      </a>
      <a
        href="https://github.com/wagnerfiorese"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} className="github" alt="" />
      </a>
    </div>
  );
}
