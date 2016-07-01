import * as React from 'react'

import {LoginForm} from './login-form'

interface LandingPageProps {

}

interface LandingPageState {

}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <LoginForm />
            </div>
        )
    }
}
