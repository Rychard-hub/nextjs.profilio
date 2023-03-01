import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <div></div>
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout