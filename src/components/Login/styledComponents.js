import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 400px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px 16px #f1f5f9;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`
export const WebsiteLogo = styled.img`
  width: 200px;
  margin-bottom: 50px;
  align-self: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 5px;
`
export const Input = styled.input`
  outline: none;
  margin-bottom: 20px;
  border: 1px solid #94a3b8;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
`
export const CheckBoxContainer = styled.div`
  margin-top: 0;
  margin-bottom: 30px;
`
export const InputCheckbox = styled.input`
  margin-right: 5px;
`
export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 400;
`
export const LoginButton = styled.button`
  height: 35px;
  border: 0;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #4f46e5;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
`
