import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Contact'
import PageContents from './PageContents'


function App() {

  // const [data, setData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])
  return (
    <div className='bg-[#000] overflow-x-hidden max-w-[1400px] mx-auto '>
      <Navbar />
      <Routes>
        <Route path='/' element={ <PageContents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
               
    </div>
    
  )
}

export default App