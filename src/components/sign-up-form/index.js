import React from 'react'
import ProfileFrom from "../profile-form";
import SocialForm from "../social-form";
import ReviewFrom from "../review-form";
import {Switch, Route, useLocation} from 'react-router-dom'
import StepLinks from "../step-links";
import SignUpFormProvider from "../sign-up-form-context";
import {AnimatePresence} from "framer-motion";


const SignUpFrom = () => {
    const location = useLocation()
    return (
        <SignUpFormProvider>
            <div className='signup-form'>
                <StepLinks/>
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path='/' exact={true}>
                            <ProfileFrom/>
                        </Route>
                        <Route path='/social-form'>
                            <SocialForm/>
                        </Route>
                        <Route path='/review-form'>
                            <ReviewFrom/>
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
        </SignUpFormProvider>
    )
}

export default SignUpFrom