import React, {createContext, useContext, useState} from 'react';

export const SignUpFormContext = createContext();
export const useSignUpForm = () => useContext(SignUpFormContext)


const SignUpFormProvider = ({children}) => {
    const [profile, setProfile] = useState({})
    const [social, setSocial] = useState({})
    return (
        <SignUpFormContext.Provider value={{profile, setProfile, social, setSocial}}>
            {children}
        </SignUpFormContext.Provider>
    )
}

export default SignUpFormProvider