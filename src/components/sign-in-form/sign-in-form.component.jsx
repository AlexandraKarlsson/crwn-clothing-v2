
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";

import {useState} from "react";
import {SignInContainer, ButtonsContainer, SignInTitle} from './sign-in-form.styles'
import {useDispatch} from "react-redux";
import {googleSignInStart, emailSignInStart} from "../../store/user/user.action";

export const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields


    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label='email'
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />
                    <ButtonsContainer>
                        <Button type='submit'>Sign In</Button>
                        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                            Google Sign In
                        </Button>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        </div>
    )
}

export default SignInForm;