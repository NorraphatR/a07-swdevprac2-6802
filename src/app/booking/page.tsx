'use client'

import DateReserve from "@/components/DateReserve";

export default function Booking() {
    return(
        <main className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    <DateReserve/>
                </div>
            </div>
            <button className="w-[200px] h-[30px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name='Book_Venue'>
                Book Venue
            </button>
        </main>
    );
}