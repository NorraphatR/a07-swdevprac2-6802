'use client'

import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner(){
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()

    return(
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className={styles.h1}>where every event finds its venue</h1>
                <h3 className={styles.h3}>Looking for the perfect place for your special event?Our venue offers elegant spaces, professional service.Let us help make your event unforgettable.</h3>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600 h-[30px] w-[280px]
                font-semibold py-2 px-2 m-1 rounded z-30 absolute bottom-2 right-2
                hover:bg-cyan-600 hover:text-white hover:border-tranparent'
                onClick={(e)=>{e.stopPropagation(); router.push('/venue')}}>
                Select Your Venue
            </button>
        </div>
    );
}