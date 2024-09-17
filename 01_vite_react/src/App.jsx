import Nav from "./navbar"
const user = {
  name: "Prashrijan"
}

function App() {

  return (
    <> 
      <Nav />
      <h2>This is main  of {user.name}</h2>
    </>
  )
}

export default App
