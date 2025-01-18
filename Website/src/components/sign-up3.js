import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-up3.css'

const SignUp3 = (props) => {
  return (
    <div className={`sign-up3-container1 ${props.rootClassName} `}>
      <div className="sign-up3-max-width">
        <div className="sign-up3-container2">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="sign-up3-sign-up-image thq-img-ratio-4-6"
          />
        </div>
        <div className="sign-up3-form-root thq-section-padding">
          <div className="sign-up3-form1">
            <div className="sign-up3-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up3-text22">
                      Book Your Virtual Appointment Today
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up3-have-an-account-login1">
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="sign-up3-text25">
                        Experience personalized healthcare from the comfort of
                        your home.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <form className="sign-up3-form2">
              <div className="sign-up3-email">
                <label htmlFor="thq-sign-up-3-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-3-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up3-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="sign-up3-password">
                <div className="sign-up3-textfield">
                  <div className="sign-up3-container3">
                    <label
                      htmlFor="thq-sign-up-3-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-up3-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-up3-icon1">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-up-3-password"
                    required="true"
                    placeholder="Password"
                    className="sign-up3-textinput2 thq-input thq-body-large"
                  />
                </div>
                <span className="sign-up3-text15 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="sign-up3-text24">
                        Sign up now to schedule a virtual appointment with our
                        expert doctors.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </form>
            <div className="sign-up3-container4">
              <div className="sign-up3-terms-agree">
                <input
                  type="checkbox"
                  id="thq-sign-up-3-terms"
                  checked="true"
                  className="thq-checkbox"
                />
                <label htmlFor="thq-sign-up-3-terms" className="thq-body-large">
                  <span>
                    Agree to our Terms of use and Privacy Policy.
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
                </label>
              </div>
              <div className="sign-up3-newsletter">
                <input
                  type="checkbox"
                  id="thq-sign-up-3-newsletter"
                  checked="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="thq-sign-up-3-newsletter"
                  className="thq-body-large"
                >
                  Subscribe to our newsletter
                </label>
              </div>
            </div>
            <button type="submit" className="thq-button-filled sign-up3-button">
              <span className="sign-up3-text20 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up3-text23">Sign Up</span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="sign-up3-have-an-account-login2">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUp3.defaultProps = {
  heading1: undefined,
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1656104589676-008c6e781dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzE5ODQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Virtual Appointment',
  content1: undefined,
  content2: undefined,
  rootClassName: '',
}

SignUp3.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default SignUp3
