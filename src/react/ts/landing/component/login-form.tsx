import * as React from 'react'

interface LoginFormProps {

}

interface LoginFormState {

}

export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    render() {
        return (
            <div>
                <form>
                    <input type='text' />
                    <input type='password' />
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
