import Image from 'next/image';
import styles from '../../styles/Home.module.css'

function PicTure () {
    return (
    <>
    <Image  className= 'picture'   
    src='/images/faces.jpg'
     alt= 'Cool forest'
     width = {100} 
     height = {70}
     />
     </>
    )
}
export default PicTure;