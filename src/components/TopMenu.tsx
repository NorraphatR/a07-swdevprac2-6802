import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './topMenuItem';

export default function TopMenu(){
    return (
        <div className={styles.menucontainer}>
            <div className={styles.rightgroup}>
                <TopMenuItem title='Booking' pageRef='/booking/'/>
                <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                width={0} height={0} sizes='100vh'/>
            </div>
        </div>
    );
}