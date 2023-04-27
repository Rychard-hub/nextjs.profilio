import classes from './MeetupImidz.module.css';
import MeetupImidz from './MeetupImidz';

function ProfilItem(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupImidz
          title={meetup.title}
          image={meetup.image}
          text={meetup.text}
          key={meetup.id}
        />
      ))}
    </ul>
  )
}
export default ProfilItem
