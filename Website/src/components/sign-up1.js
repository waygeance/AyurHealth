import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-up1.css'

const SignUp1 = (props) => {
  return (
    <div className="sign-up1-container1">
      <div className="sign-up1-max-width thq-section-max-width">
        <div className="sign-up1-form-root thq-section-padding">
          <div className="sign-up1-form1">
            <div className="sign-up1-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up1-text24">
                      Join Us to Explore Ayurveda Through Modern Technology!
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up1-have-an-account-login1"></div>
            </div>
            <form className="sign-up1-form2">
              <div className="sign-up1-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  You are ?
                </label>
              </div>
              <select
                disabled={false}
                autoFocus={false}
                className="sign-up1-select"
              >
                <option value="Option 1">Patient</option>
                <option value="Option 2">Doctor</option>
              </select>
              <div className="sign-up1-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up1-textinput1 thq-input thq-body-large"
                />
                <div className="sign-up1-textfield">
                  <div className="sign-up1-container2">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Password"
                    className="sign-up1-textinput2 thq-input thq-body-large"
                  />
                </div>
              </div>
              <div className="sign-up1-password">
                <div className="sign-up1-pass-requirements">
                  <div className="sign-up1-pass-conditions1">
                    <div className="sign-up1-bulletpoint1">
                      <div className="sign-up1-container3"></div>
                      <span className="sign-up1-text14 thq-body-small">
                        Use 8 or more characters
                      </span>
                    </div>
                    <div className="sign-up1-bulletpoint2">
                      <div className="sign-up1-container4"></div>
                      <span className="sign-up1-text15 thq-body-small">
                        One special character
                      </span>
                    </div>
                  </div>
                  <div className="sign-up1-pass-conditions2">
                    <div className="sign-up1-bulletpoint3">
                      <div className="sign-up1-container5"></div>
                      <span className="sign-up1-text16 thq-body-small">
                        One Uppercase character
                      </span>
                    </div>
                    <div className="sign-up1-bulletpoint4">
                      <div className="sign-up1-container6"></div>
                      <span className="sign-up1-text17 thq-body-small">
                        One number
                      </span>
                    </div>
                  </div>
                  <div className="sign-up1-pass-conditions3">
                    <div className="sign-up1-bulletpoint5">
                      <div className="sign-up1-container7"></div>
                      <span className="sign-up1-text18 thq-body-small">
                        One lowercase character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="sign-up1-container8">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-newsletter"
                className="thq-body-large"
              >
                {props.content1 ?? (
                  <Fragment>
                    <span className="sign-up1-text25">
                      By creating an account, you agree to the Terms of use and
                      Privacy Policy.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </label>
            </div>
            <button type="submit" className="thq-button-filled sign-up1-button">
              <span className="sign-up1-text20 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up1-text26">Register</span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="sign-up1-have-an-account-login2">
              <Link to="/sign-inpage" className="sign-up1-navlink">
                <p className="sign-up1-text21 thq-body-large">
                  <span>
                    Already have an account?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sign-up1-text23">Sign in</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sign-up1-container9">
          <img
            alt={props.image1Alt}
            src="https://images.unsplash.com/photo-1649560189304-341f81e4b1b2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxheXVydmVkYXxlbnwwfHx8fDE3MzcyMDQxOTN8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
            className="sign-up1-sign-up-image thq-img-ratio-4-6"
          />
        </div>
      </div>
    </div>
  )
}

SignUp1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  image1Alt: 'Virtual Appointment',
}

SignUp1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default SignUp1
