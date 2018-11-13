import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Input, CardSection, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text) //action creater
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={ this.props.email }
            onChangeText={ this.onEmailChange.bind(this) }
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={ this.props.password }
            onChangeText={ this.onPasswordChange.bind(this) }
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

//connect hooks up action creator and pass it as props
const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
})

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)
