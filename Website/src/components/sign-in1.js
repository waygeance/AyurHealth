import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-in1.css'

const SignIn1 = (props) => {
  return (
    <div
      className={`sign-in1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="sign-in1-max-width thq-section-max-width">
        <div className="sign-in1-form-root">
          <div className="sign-in1-form1">
            <div className="sign-in1-title-root">
              <h2 className="sign-in1-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in1-text22">
                      Sign In to Begin Your Ayurveda-Powered Analysis.
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-in1-have-an-account-login"></div>
            </div>
            <form className="sign-in1-form2">
              <div className="sign-in1-email">
                <label
                  htmlFor="thq-sign-in-1-email"
                  className="sign-in1-text11 thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-1-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-in1-input thq-input thq-body-large"
                />
              </div>
              <div className="sign-in1-password">
                <div className="sign-in1-container2">
                  <label
                    htmlFor="thq-sign-in-1-password"
                    className="sign-in1-text12 thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-in1-hide-password"></div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-1-password"
                  required="true"
                  placeholder="Password"
                  className="sign-in1-textinput thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="sign-in1-container3">
              <div className="sign-in1-container4">
                <button
                  type="submit"
                  className="sign-in1-button1 thq-button-filled"
                >
                  <span className="sign-in1-text13 thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in1-text20">Sign in</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <div className="sign-in1-terms-agree">
                  <p className="sign-in1-text14 thq-body-large">
                    <span>
                      By continuing, you agree to the Terms of use and Privacy
                      Policy.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="sign-in1-container5">
                <a
                  href="https://teleporthq.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in1-link1 thq-body-small"
                >
                  Issues with Sign in
                </a>
                <a
                  href="https://teleporthq.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in1-link2 thq-body-small"
                >
                  Forgot password
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-in1-container6">
          <div className="sign-in1-divider1">
            <div className="sign-in1-divider2"></div>
            <span className="sign-in1-text17 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="sign-in1-text19">New to our community</span>
                </Fragment>
              )}
            </span>
            <div className="sign-in1-divider3"></div>
          </div>
          <button type="button" className="sign-in1-button2 thq-button-outline">
            <span className="sign-in1-text18 thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="sign-in1-text21">Forgot Password?</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

SignIn1.defaultProps = {
  content1: undefined,
  rootClassName: '',
  action1: undefined,
  action2: undefined,
  heading1: undefined,
}

SignIn1.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default SignIn1
