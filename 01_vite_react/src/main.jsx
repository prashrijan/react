import  React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// const anElement = (
//   <a href="https://www.google.com">visit google</a>
// ) 

const reactElement = React.createElement(
  'a',
  {href : "https://www.google.com", target : "_blank"},
  "Click me"
)

createRoot(document.getElementById('root')).render(
    // anElement
    reactElement
    // <StrictMode>
    //   <App />
    // </StrictMode>
)
