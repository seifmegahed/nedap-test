import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GnomeDataType } from "../GlobalTypes";
import JsonData from "../data/data.json";
import { getIdByName } from "../data/dataMap";

export default function GnomePage() {
  const { id } = useParams();
  const [data, setData] = useState<GnomeDataType>();
  useEffect(() => {
    setData(
      JsonData.Brastlewark.filter((gnome) => gnome.id === Number(id))[0] ??
        undefined
    );
  }, [id]);
  if (data === undefined)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  return (
    <div className="w-full grid gap-2 md:grid-cols-2 p-10">
      <div className="p-3 text-5xl flex flex-col gap-5">
        <p>
          <strong>{data.name}</strong>
        </p>
        <p>age: {data.age}</p>
        <p>weight: {data.weight}</p>
        <p>height: {data.height}</p>
        <p>Hair Color: {data.hair_color}</p>
        <div>
          <p className="mb-3">
            <strong>Professions:</strong>
          </p>
          <div className="pl-5 flex flex-col gap-5">
            {data.professions.map((profession) => (
              <p key={profession}>{profession}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3">
            <strong>Friends:</strong>
          </p>
          <div className="pl-5 flex flex-col gap-5">
            {data.friends.map((friend) => (
              <a
                key={friend}
                href={`/gnomes/${getIdByName(friend)}`}
                className="underline text-blue-400"
              >
                {friend}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center">
        <img
          src={data.thumbnail}
          className="object-cover w-full aspect-square"
        />
      </div>
    </div>
  );
}
