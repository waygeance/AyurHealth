import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUp1 from '../components/sign-up1'
import './register-page.css'

const RegisterPage = (props) => {
  return (
    <div className="register-page-container">
      <Helmet>
        <title>RegisterPage - Medica template</title>
        <meta property="og:title" content="RegisterPage - Medica template" />
      </Helmet>
      <SignUp1
        heading1={
          <Fragment>
            <span className="register-page-text1">
              Join Us to Explore Ayurveda Through Modern Technology!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="register-page-text2">
              By creating an account, you agree to the Terms of use and Privacy
              Policy.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="register-page-text3">Register</span>
          </Fragment>
        }
      ></SignUp1>
    </div>
  )
}

export default RegisterPage
