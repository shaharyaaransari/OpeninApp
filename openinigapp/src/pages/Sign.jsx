import React from 'react';
import './SignIn.css';
import FormGroup from '../component/FormGroup';
import Socials from '../component/Social';

import logo  from "../assets/logo.png"
import line  from "../assets/line.png"

const SignIn = ({value,setValue}) => {


  return (
    <div className='signin__page__container text-sm'>
            <a href="index.html" className='logo'>
                <img src={logo} alt="logo" />
                  <img src={line} alt="line" className='line' />
            </a>

            <div className="form__container">
                <h1 className='board__logo'>Board.</h1>

                <FormGroup value={value} setValue={setValue} />
            </div>

            <Socials />
    </div>
  )
}

export default SignIn;