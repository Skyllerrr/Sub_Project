import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import './Home.css'

export default function Home() {

  const [posts, setPosts] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((json) => {
      setPosts(json.data)
    })
  }, [])

  // console.log(posts)

  return (
    <>
      <Header/>
      <Banner/>
      <Main
        posts={posts}
      />
      <Footer/>
      {/* posts.map(post => <div key={post.id}>{post.title}</div>) */}
    </>
  )
}
