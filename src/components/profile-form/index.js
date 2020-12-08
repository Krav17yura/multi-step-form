import React from 'react'
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom'
import {useSignUpForm} from '../sign-up-form-context'
import Animator from "../animator";

const ProfileForm = () => {
    const {register, handleSubmit, errors} = useForm()
    const history = useHistory()
    const {profile, setProfile} = useSignUpForm();

    const onSubmit = (data) => {
        setProfile(data)
        history.push("/social-form")
    }

    return (
        <Animator>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Tell us about yourself</h2>

                <input
                    type="text"
                    name="name"
                    defaultValue={profile.name}
                    placeholder="Wat`s` your name?"
                    ref={register({
                        required: true
                    })}
                />
                <p>{errors.name && 'Name is required.'}</p>

                <input
                    type="email"
                    name="email"
                    defaultValue={profile.email}
                    placeholder="Wat`s`your email?"
                    ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                />
                <p>{errors.email && 'A valid email is required.'}</p>

                <input type="submit" value='Next'/>
            </form>
        </Animator>

    )
}

export default ProfileForm