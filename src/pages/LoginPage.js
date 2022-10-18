import React from 'react';
import logo from '../styles/images/sysco-logo.png';

function LoginPage() {
  return (
    <div className="wrapper login-wrapper">
      <div className="login-panel user-selection">
        <div className="option-panel-wrapper">
          <div className="login-text welcome-text">Welcome!</div>
          <div className="suite-logo">
            <img src={logo} alt="Sysco Supplier Suite" className="logo" />|<span>SRE Dashboard<div className='sub-title'>ENTERPRISE ROADNET</div></span>
          </div>
          <div className="options-inner-wrapper">
            <div className="option-login">
              <div className='divider'></div>
              {/* Remove 'hide' class to display error message */}
              <div className='error-msg hide'>Something went wrong! Please try again later.</div>
              <span className="login-text">To continue, Please login below.</span>
              <div className="button">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
