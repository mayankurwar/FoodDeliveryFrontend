import css from '../styles/Hero.module.css';
import Image from 'next/Image';
import Cherry from '../assets/Cherry.png';
import HeroImage2 from '../assets/HeroImage2.png';
import Pizza1 from '../assets/p1.jpg';
import {UilPhone} from '@iconscout/react-unicons';




export default function Hero() {
    return (
        <div className={css.container}>
            {/* {left side} */}

            <div className={css.left}>

                <div className={css.cherryDiv}>
                    <span> more than faster</span>
                    <Image src={Cherry} alt="" />

                </div>
                <div className={css.heroText}>
                    <sapn>Be the fastest</sapn>
                    <span>In Delivering</span>
                    <span>
                        Your delicious <span style={{ color: "var(--themeRed)" }}>Food </span>



                    </span>



                </div>

                <span className={css.miniText}>
                    our misssion is to fill your tummy with delicious food that too with free delivery
                </span>

                <button className={`btn ${css.btn}`}>Get Started</button>


            </div>





            {/* {right side} */}
            <div className={css.right}>

             <div className={css.imageContainer}>
                <Image src={HeroImage2} alt="" layout="intrinsic"/>


             </div>
             <div className={css.ContactUs}>
               <span>Contact Us</span>
               <div>
                <UilPhone color='white'/>


               </div>
             </div>

             <div className={css.Pizza}>
                <div>
                    <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic"/>


                </div>
                <div className={css.details}>
                    <span>Italian Pizza</span>
                    <span>
                        
                        <span style={{color:"var(--themeRed)"}}>$</span> 
                        
                        5.36</span>
                </div>


             </div>


            </div>
            


        </div>






    )



};