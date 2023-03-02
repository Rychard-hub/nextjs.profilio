import React from 'react';
import Image from 'next/image';
import classes from './MeetupImidz.module.css';
import Card from '../ui/Card';

function MeetupImidz(props) {
  

  return (
    <li>
      <Card> 
          <div className={classes.box}>
            <Image className={classes.image} width='160px' height='160px' src={props.image} alt={props.title} />
            <h2 className={classes.text}>Ricardas Zukaitis</h2>
            <h3>{props.title}</h3>
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