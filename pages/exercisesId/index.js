import Link from 'next/link';

const Exercises = () => {
    return (
        <div>
            <h2>There is example exercise</h2>
           
            <h1 className={styles.title}>
              Go to<Link href="/">first page</Link>
            </h1>
        </div>
    )
}

export default Exercises