import {Component} from 'react'
import {
  CustomContainer,
  EditorContainer,
  ImageContainer,
  Heading,
  Image,
  TextEditContainer,
  Options,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  Text,
} from './StyledComponents'

class TextEditor extends Component {
  state = {fontWait: false, fontStyle: false, textDecor: false}

  addBold = () => {
    this.setState(prev => ({fontWait: !prev.fontWait}))
  }

  addItalic = () => {
    this.setState(prev => ({fontStyle: !prev.fontStyle}))
  }

  addUnderline = () => {
    this.setState(prev => ({textDecor: !prev.textDecor}))
  }

  render() {
    const {fontWait, fontStyle, textDecor} = this.state
    return (
      <CustomContainer>
        <EditorContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditContainer>
            <Options>
              <li>
                <BtnBold
                  fontWait={fontWait}
                  onClick={this.addBold}
                  data-testid="bold"
                >
                  B
                </BtnBold>
              </li>
              <li>
                <BtnItalic
                  fontStyle={fontStyle}
                  onClick={this.addItalic}
                  data-testid="italic"
                >
                  i
                </BtnItalic>
              </li>
              <li>
                <BtnUnderline
                  textDecor={textDecor}
                  onClick={this.addUnderline}
                  data-testid="underline"
                >
                  U
                </BtnUnderline>
              </li>
            </Options>
            <Text
              fontWait={fontWait}
              fontStyle={fontStyle}
              textDecor={textDecor}
            />
          </TextEditContainer>
        </EditorContainer>
      </CustomContainer>
    )
  }
}
export default TextEditor
