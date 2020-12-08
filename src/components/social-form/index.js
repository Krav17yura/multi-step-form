import React from 'react'
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useSignUpForm} from "../sign-up-form-context";
import Animator from "../animator";

const SocialForm = () => {
    const {register, handleSubmit, errors} = useForm()
    const history = useHistory()
    const {social, setSocial} = useSignUpForm();

    const onSubmit = (data) => {
        setSocial(data)
        history.push("/review-form")
    }
    return (
        <Animator>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>How can we find you on social?</h2>
                <input
                    type="text"
                    name="instagram"
                    defaultValue={social.instagram}
                    placeholder="Wat`s` your instagram?"
                    ref={register({
                        required: true
                    })}
                />
                <p>{errors.instagram && 'Instagram is required.'}</p>

                <input
                    type="text"
                    name="facebook"
                    defaultValue={social.facebook}
                    placeholder="Wat`s`your facebook?"
                    ref={register({
                        required: true,
                    })}
                />
                <p>{errors.facebook && 'Facebook is required.'}</p>

                <input type="submit" value='Next'/>
            </form>
        </Animator>
    )
}

export default SocialForm