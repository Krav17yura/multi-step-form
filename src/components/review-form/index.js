import React from 'react'
import {useSignUpForm} from "../sign-up-form-context";
import Animator from "../animator";

const ReviewFrom = () => {

    const {social, profile} = useSignUpForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('you are submitting! congrats!');
    }
    return (
        <Animator>

            <form onSubmit={handleSubmit}>
                <h2>Review all your info</h2>
                <p>
                    <strong>Name</strong>: {profile.name}
                </p>
                <p>
                    <strong>Email</strong>: {profile.email}
                </p>
                <p>
                    <strong>Twitter</strong>: {social.instagram}
                </p>
                <p>
                    <strong>Facebook</strong>: {social.facebook}
                </p>
                <input type="submit" value="Submit All Info"/>
            </form>
        </Animator>
    )
}

export default ReviewFrom