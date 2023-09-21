import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import './Home.css'

export default function Home() {

  // console.log(posts)

  return (
    <>
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
      {/* posts.map(post => <div key={post.id}>{post.title}</div>) */}
    </>
  )
}
