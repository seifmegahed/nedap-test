import { useNavigate } from "react-router-dom";
import { GnomeDataType } from "../GlobalTypes";

export default function Gnome(props: { data: GnomeDataType }) {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`gnomes/${data.id}`)}
    >
      <img src={data.thumbnail} className="object-cover w-full aspect-square" />
      <div className="p-3">
        <p>
          <strong>{data.name}</strong>
        </p>
        <p>age: {data.age}</p>
        <p>weight: {data.weight}</p>
      </div>
    </div>
  );
}
