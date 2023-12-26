import React from 'react'
import Message from '../../Components/Message/Message'
import News from '../../Components/Dlihetoday/news'
import Header from '../Header/Header'
import Programs from '../../Components/Programs/Programs'
const Home = () => {
  return (
    <div>
      <Header/>
      <Programs/>
     <Message/>
     <News/>
    </div>
  )
}

export default Home