import React from 'react'
import {NavLink} from "react-router-dom";
import {useSignUpForm} from '../sign-up-form-context'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const StepLinks = () => {

    const {profile, social} = useSignUpForm();


    const isProfileDone = !isEmpty(profile);
    const isSocialDone = !isEmpty(social);
    return (
        <div className="step-links">
            <NavLink to="/" exact>
                {isProfileDone ? '❤️' : '🤍'} Profile <span/>
            </NavLink>

            {isProfileDone ? (
                <NavLink to="/social-form">
                    {isSocialDone ? '❤️' : '🤍'} Social <span/>
                </NavLink>
            ) : (
                <a >
                    Social <span/>
                </a>
            )}

            {isProfileDone && isSocialDone ? (
                <NavLink to="/review-form">
                    Review <span/>
                </NavLink>
            ) : (
                <a href='#' style={{float: 'right'}}>
                    Review <span/>
                </a>
            )}
        </div>
    )
}

export default StepLinks