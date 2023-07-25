import { useState, useEffect } from 'react' 
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Context from './Context'
import { useCookies } from 'react-cookie'
 
function App() {

  const [cart, setCartInfo] = useState([])
  const [cookies, setCookie] = useCookies(['cart'])

  useEffect(() => {
    setCookie('cart', JSON.stringify(cart))
  }, [])
  console.log(cookies)

  return (
    <div>
      <Context.Provider value={{ cart, setCartInfo}}>
        <Header />
        <Main />
      </Context.Provider>
    </div>
  )
}

export default App
