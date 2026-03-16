import Image from "next/image";

export default async function VenueDetailPage({params}:{params:Promise<{vid:string}>}){
    const {vid} = await params;

    const mockVenue = new Map()
    mockVenue.set("001",{name:"The Bloom Pavilion",image:"/img/bloom.jpg"});
    mockVenue.set("002",{name:"Spark Space",image:"/img/sparkspace.jpg"});
    mockVenue.set("003",{name:"The Grand Table",image:"/img/grandtable.jpg"});
    return(
        <main className="text-center my-5">
            <h1 className="text-lg font-medium text-black"> Venue ID {vid}</h1>
            <div className="flex flex-row my-5">
                <Image src={(mockVenue.get(vid)).image}
                alt="Car Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-black">{((mockVenue.get(vid)).name)}</div>
            </div>
        </main>
    )

}

export async function generateStaticParams(){
    return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
}