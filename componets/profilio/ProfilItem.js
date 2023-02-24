import MeetupImidz from './MeetupImidz'
import classes from './MeetupImidz.module.css'

function ProfilItem(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupImidz title={meetup.title} image={meetup.image} />
      ))}
    </ul>
  )
}
export default ProfilItem