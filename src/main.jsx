import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TextField from './forms/TextField'
// import './index.css'
// React components must start with an uppercase letter.
// If your component is exported as default from './HelloFolder/hello', import it as 'Hello' (uppercase).
import Hello from './HelloFolder/Hello'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello name = 'Driss' lastName = 'Nafii' />

    <TextField name = "firstName" inputLabel = "firstName" >
      Veuiller saisir votre prenom...
    </TextField>
    

    <TextField inputName = 'lastName' inputLabel = "last name" > 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Error tempore dignissimos ratione necessitatibus pariatur
       nulla quisquam mollitia in commodi voluptatem nesciunt,
        minima repudiandae voluptates est eum doloribus voluptatum, 
        reiciendis vero.
    </TextField>
  </StrictMode>,
)
