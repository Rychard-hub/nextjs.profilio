import React from 'react'
import classes from './MeetupImidz.module.css'
import Card from './ui/Card'

function MeetupImidz(props) {
  console.log('MeetupImidz evaluated by React')

  return (
    <li>
      <Card>
        <div>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
            <h2 className={classes.text}>Ricardas Zukaitis</h2>
            <h3>{props.title}</h3>
          </div>
        </div>
      </Card>
      <div>
        <p className={classes.sleept}>
          {''}
          Hey guys , I am RycharDson , i'm like this course.
        </p>
      </div>
    </li>
  )
}
export default MeetupImidz