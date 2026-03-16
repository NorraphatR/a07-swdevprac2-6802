'use client'

import Card from "./Card";
import { useReducer } from "react";
import Link from "next/link";

type RatingAction =
  | { type: 'add'; ratingName: string; rating: number }
  | { type: 'remove'; ratingName: string };

function ratingReducer(
  ratingList: Map<string, number>,
  action: RatingAction
) {
  switch (action.type) {
    case 'add': {
      if(action.rating === null){
        const newMap = new Map(ratingList);
        newMap.set(action.ratingName, 0);
        return newMap;
      }
      else{
        const newMap = new Map(ratingList);
        newMap.set(action.ratingName, action.rating);
        return newMap;
      }
    }
    case 'remove': {
      const newMap = new Map(ratingList);
      newMap.delete(action.ratingName);
      return newMap;
    }
    default:
      return ratingList;
  }
}

export default function CardPanel() {
  const [ratingList, dispatchCompare] = useReducer(
    ratingReducer,
    new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ])
  );

  const mockVenue = [
    {vid:"001",name:"The Bloom Pavilion",image:"/img/bloom.jpg"},
    {vid:"002",name:"Spark Space",image:"/img/sparkspace.jpg"},
    {vid:"003",name:"The Grand Table",image:"/img/grandtable.jpg"},
  ]

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {
          mockVenue.map((venueItem)=>(
              <Link href={`/venue/${venueItem.vid}`} key={venueItem.vid} className="w-1/5">
                <Card
                  venueName={venueItem.name}
                  imgSrc={venueItem.image}
                  onCompare={(name: string, score: number) => {
                    dispatchCompare({ type: 'add', ratingName: name, rating: score });
                  }}
                />
              </Link>
          ))
        }
      </div>

      <div className="w-full text-lg font-medium text-black">
        Rating List : {ratingList.size}
      </div>

      {Array.from(ratingList).map(([name, score]) => (
        <div
          key={name}
          className="text-black cursor-pointer"
          onClick={() =>
            dispatchCompare({ type: 'remove', ratingName: name })
          }
          data-testid={name}
        >
          {name} : {score}
        </div>
      ))}
    </div>
  );
}