import css from '../styles/Header.module.css'
import Image from 'next/Image'
import logoAhar from '../assets/logoAhar.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

export default function Header () {
    return (
        <div className= {css.header}>
            { /* logo side*/}
            <div className={css.logoAhar}>
                <Image src={logoAhar} alt="" width={50} height={50}/>
                <span>Ahar</span>
                


            </div>
            {/*menu side*/}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>


            </ul>
            {/*Right sidr*/}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color= "#2E2E2E"/>
                    <div className={css.badge}>1</div>

                </div>


            </div>

            
 
        </div>
    )



};
