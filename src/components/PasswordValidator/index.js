// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Card,
  Heading,
  Description,
  ErrorMsg,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {password.length < 8 ? (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        ) : null}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
