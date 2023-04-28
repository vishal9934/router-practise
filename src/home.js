import React from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const  navigate  = useNavigate();


  function clickHandle(){
    navigate("/contact")
  }
  return (
    <div>
      
     <div>
        this is home page
     </div>
     <button onClick={clickHandle}>go to contact</button>
    </div>
  )
}

export default Home
