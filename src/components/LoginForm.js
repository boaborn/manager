import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Input, CardSection, Button } from './common'
import { emailChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text) //action creater
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={ this.onEmailChange.bind(this) }
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
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
export default connect(null, { emailChanged })(LoginForm)
