import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({venueName,imgSrc,onCompare}
    :{venueName:string,imgSrc:string,onCompare:Function}){

    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Event Picture'
                fill={true}
                className='odject-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%]'>
                <h1 className='p-[10px] text-black font-serif text-2xl'>{venueName}</h1>
            </div>
            <div
                className="px-2 pb-2"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
            >
                <Rating
                    value={rating}
                    onChange={(_, newValue) => {
                        setRating(newValue);
                        onCompare(venueName, newValue);
                    }}
                    id={`${venueName}Rating`}
                    name={`${venueName}Rating`}
                    data-testid={`${venueName}Rating`}
                />
            </div>
        </InteractiveCard>
    );
}