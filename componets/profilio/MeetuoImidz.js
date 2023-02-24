import React, { useState } from 'react'
import classes from './MeetupImidz.module.css'
import Card from './ui/Card'

function MeetupImidz(props) {
  const [title, setTitle] = useState(props.title)
  console.log('MeetupImidz evaluated by React')

  const clickHandler = () => {
    setTitle('Uppdated')
    console.log(title)
  }
  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
        <p>loop thru the river</p>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  )
}
export default MeetupImidz
