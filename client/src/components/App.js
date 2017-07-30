import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, SignInPage, SignUpPage, ConfirmPage, NotFoundPage } from 'components'
import { GoogleTagManager } from 'containers'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => (
    <div>
        <GoogleTagManager />
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/confirm" component={ConfirmPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </ThemeProvider>
    </div>
)


export default App