import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'
import { Card, Input, CardSection, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  componentDidMount() {
    this.props.loginUser({email: 'test@test.com', password: 'password'})
  }

  onEmailChange(text) {
    this.props.emailChanged(text) //action creater
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const {email, password} = this.props
    this.props.loginUser({email, password})
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={ {backgroundColor: 'white'} }>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      )
    }
  }
  
  renderButton() {
    if (this.props.loading) {
      return (<Spinner size="large" />)
    }
    
    return (
      <Button onPress={ this.onButtonPress.bind(this) }>Login</Button>
    )
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
        { this.renderError() }
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
//connect hooks up action creator and pass it as props
const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
})

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LoginForm)
