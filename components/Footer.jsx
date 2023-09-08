import css from '../styles/Footer.module.css' 
import  {UilFacebook,UilGithub,UilInstagram} from "@iconscout/react-unicons"
import logoAhar from '../assets/logoAhar.png'
import Image from 'next/Image'

export default function Footer() {

    return(
        <div className={css.container}>
            <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                 <UilGithub  size={45}/>
                 <UilInstagram  size={45}/> 


            </div>
            { /* logo side*/}
            <div className={css.logo}>
            <Image src={logoAhar} alt="" width={50} height={50}/>
                <span>Ahar</span>


            </div>


        </div>


        
    )



};
