import React, { useState } from 'react'

function ChangeTitle(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Uppdated')
    console.log(title)
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>loop thru the river</p>
      <button onClick={clickHandler}>Chang TText</button>
    </div>
  )
}
export default ChangeTitle
