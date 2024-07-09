import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GnomeDataType } from "../GlobalTypes";
import JsonData from "../data/data.json";

export default function GnomePage() {
  const { id } = useParams();
  const [data, setData] = useState<GnomeDataType>();
  useEffect(() => {
    setData(
      JsonData.Brastlewark.filter((gnome) => gnome.id === Number(id))[0] ?? undefined
    );
  }, [id]);
  if (data === undefined)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  return (
    <div className="w-full grid gap-2 grid-cols-2 p-10">
      <div className="p-3 text-5xl">
        <p>
          <strong>{data.name}</strong>
        </p>
        <p>age: {data.age}</p>
        <p>weight: {data.weight}</p>
        <p>height: {data.height}</p>
        <p>Hair Color: {data.hair_color}</p>
        <div>
          <p>Profession:</p>
          <div className="pl-5">
            {data.professions.map((profession) => (
              <p key={profession}>{profession}</p>
            ))}
          </div>
        </div>
        <div>
          <p>Friends:</p>
          <div className="pr-5">
            {data.friends.map((friend) => (
              <p key={friend}>{friend}</p>
            ))}
          </div>
        </div>
      </div>
      <img src={data.thumbnail} className="object-cover w-full aspect-square" />
    </div>
  );
}
