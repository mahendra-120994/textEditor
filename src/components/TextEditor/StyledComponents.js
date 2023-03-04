import styled from 'styled-components'

export const CustomContainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const EditorContainer = styled(CustomContainer)`
  width: 70%;
  height: 70%;
  background-color: #1b1c22;
  padding: 10px;
`

export const ImageContainer = styled(EditorContainer)`
  width: 45%;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  margin: 5px;
`
export const Image = styled.img`
  width: 80%;
  height: 90%;
`
export const TextEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  height: 90%;
  width: 40%;
  border-radius: 12px;
  border: solid 1px #334155;
  padding: 10px 0 0 0;
`
export const Options = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: solid 1px #334155;
  padding: 0;
  list-style: none;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`
export const BtnBold = styled(Button)`
  color: ${props => (props.fontWait ? '#faff00' : '#f1f5f9')};
  font-weight: 'bold';
`
export const BtnItalic = styled(Button)`
  color: ${props => (props.fontStyle ? '#faff00' : '#f1f5f9')};
  font-weight: 'bold';
`
export const BtnUnderline = styled(Button)`
  color: ${props => (props.textDecor ? '#faff00' : '#f1f5f9')};
  font-weight: 'bold';
`

export const Text = styled.textarea`
  color: #f8fafc;
  background-color: #25262c;
  font-size: 16px;
  margin-left: 10px;
  font-weight: ${props => (props.fontWait ? 'bold' : 'normal')};
  font-style: ${props => (props.fontStyle ? 'italic' : 'normal')};
  text-decoration: ${props => (props.textDecor ? 'underline' : 'normal')};
  height: 100%;
  width: 100%;
  margin: 0;
  border: none;
  padding: 10px;
  outline: none;
`
