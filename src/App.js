import logo from './logo.svg';
import './App.css';
import { StyledButton,FancyButton,SubmitButton,AnimatedLogo,DarkButton} from './components/Button/Button';
import {ThemeProvider,createGlobalStyle} from 'styled-components';

const theme={
  dark:{
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'
  },
  fontfamily:'Segoe UI'

}

const GlobalStyle=createGlobalStyle`
button{
  font-family:${props=>props.theme.fontFamily};
}`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
      <AnimatedLogo src={logo}/>
      <StyledButton type='submit'>StyleButton</StyledButton>
    <div>
    <br/>
    </div>
      <StyledButton variant='outline'>StyledButton</StyledButton>
    <div>
    <br/>
    </div>
    <FancyButton as='a'>Fancy Button</FancyButton>
    <div>
    <br/>
    </div>
    <SubmitButton>Submit</SubmitButton>
    
    <div>
    <br/>
    </div>
    <DarkButton>Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
