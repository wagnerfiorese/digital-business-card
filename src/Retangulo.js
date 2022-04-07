import React from 'react';
import linkedinLogo from '../src/images/linkedin.png';
import emailLogo from '../src/images/email.png';

export default function Retangulo() {
  return (
    <div className="retangulo">
      <h1 className="title">Wagner Fiorese Bolzan</h1>
      <p className="subtitle">Front-end Developer</p>
      <p className="github">github.com/wagnerfiorese</p>
      <button className="email">
        <img src={emailLogo} alt="" className="icon" />
        <a
          href="mailto: wagner.fiorese@gmail.com"
          className="text"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </button>
      <button className="linkedin">
        <img src={linkedinLogo} alt="" className="icon" />
        <a
          className="text"
          href="https://www.linkedin.com/in/wagner-fiorese/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </button>
      <br></br>
      <h3 className="about">About</h3>
      <p className="me">
        Hello, World! My name is Wagner Fiorese Bolzan, and studing(alot!) to
        become a web developer! I'm 30 years old now, married, no kids (but i
        got 3 guinea pigs!).
      </p>
      <h3 className="interests">Interests</h3>
      <p className="my">
        I'm loving to code! I have first contact with C, then HTML and CSS.
        Later, Python and Django framework. Now, i'm studing JavaScript,
        including React lib!
      </p>
    </div>
  );
}
