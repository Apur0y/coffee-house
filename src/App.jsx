
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  
  const allCoffee = useLoaderData()


  return (
    <>
     
      <h1 className='text-2xl'>Total coffee: {allCoffee.length}</h1>
      <button className='btn'><Link to='/addcoffee'>Add coffee</Link></button>
    
    </>
  )
}

export default App
