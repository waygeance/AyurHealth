import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn1 from '../components/sign-in1'
import './sign-inpage.css'

const SignInpage = (props) => {
  return (
    <div className="sign-inpage-container">
      <Helmet>
        <title>SignInpage - Medica template</title>
        <meta property="og:title" content="SignInpage - Medica template" />
      </Helmet>
      <SignIn1
        action1={
          <Fragment>
            <span className="sign-inpage-text1">Sign in</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-inpage-text2">Forgot Password?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-inpage-text3">New to our community</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-inpage-text4">
              Sign In to Begin Your Ayurveda-Powered Analysis.
            </span>
          </Fragment>
        }
        rootClassName="sign-in1root-class-name"
      ></SignIn1>
    </div>
  )
}

export default SignInpage
