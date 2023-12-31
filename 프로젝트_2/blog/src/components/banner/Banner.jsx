import { useState, useEffect, React } from 'react'
import axios from 'axios'
import './Banner.css'

export default function Banner() {
  const [bloginfo, setBlogInfo] = useState(undefined)

  useEffect(() => {
    axios.get('http://localhost:3000/blog').then((json) => {
      setBlogInfo(json.data)
    })
      .catch((e) => {
      setBlogInfo()
    })
  }, [])
  // console.log(bloginfo)
  return (
    <div>
      {bloginfo === undefined ? <div>로딩중</div> : (
        <div classNameName="banner">
          <div className="max-width">
            <div className="banner-contents">
              <p className="sub-text">{bloginfo.subTitle}</p>
              <p className="main-text">{bloginfo.mainTitle}</p>
              <p className="description">
              {bloginfo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
