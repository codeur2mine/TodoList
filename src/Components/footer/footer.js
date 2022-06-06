import React from 'react'

function Footer(props) {
  return (
    <div><h1 className='hello'>This is my first footer on React Js and I'm so very glad for this experience.</h1>
    <p>I prefer {props.article} that {props.Article}</p></div>
  )
}

export default Footer