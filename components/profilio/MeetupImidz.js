import React from 'react';
import Image from 'next/image';
import classes from './MeetupImidz.module.css';
import Card from '../ui/Card';

function MeetupImidz(props) {
  

  return (
    <li className={classes.list}>
      <Card> 
          <div className={classes.box}>
            <Image className={classes.image} width='180px' height='160px' src={props.image} alt={props.title} />
            <h2 className={classes.text}>Ricardas Zukaitis</h2>
            <h3>{props.title}</h3>
            <h1>{props.text} </h1>
          </div>   
      </Card>
    
    </li>
  )
}
export default MeetupImidz