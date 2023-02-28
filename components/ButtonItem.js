import ChangeTitle from './Button';

function ButtonItem(props) {
  return (
    <div>
      {props.meetups.map((meetup) => (
        <ChangeTitle title={meetup.title} />
      ))}
    </div>
  )
}
export default ButtonItem
