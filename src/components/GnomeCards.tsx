import { useMemo, useState } from "react";
import JsonData from "../data/data.json";
import Gnome from "./GnomeCard";
import { GnomeDataType } from "../GlobalTypes";

const brastlewark = JsonData.Brastlewark;
const contentPerPage = 12;

export default function GnomeCards() {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchKey, setSearchKey] = useState<string>("");

  const filteredContent = useMemo<GnomeDataType[]>(() => {
    if (searchKey === "") return brastlewark;
    setPageIndex(1);
    return brastlewark.filter(
      (gnome) =>
        gnome.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        (gnome.professions.length &&
          gnome.professions.some((value) =>
            value.toLowerCase().includes(searchKey)
          ))
    );
  }, [searchKey]);

  const pageContent = useMemo(
    () =>
      filteredContent.slice(
        (pageIndex - 1) * contentPerPage,
        pageIndex * contentPerPage
      ),
    [pageIndex, filteredContent]
  );

  const numberOfPages = useMemo(
    () => Math.ceil(filteredContent.length / contentPerPage),
    [filteredContent]
  );

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between p-10 ">
        <input
          className="w-[400px] rounded-full text-xl p-5"
          placeholder="Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <p className="text-xl">
          <strong>{`Page ${pageIndex} of ${numberOfPages}`}</strong>
        </p>
      </div>
      <div className="w-full h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-10 gap-5">
        {pageContent.map((gnome) => (
          <Gnome key={gnome.id} data={gnome} />
        ))}
      </div>
      <div className="flex gap-4 w-full items-center justify-center p-10">
        <button
          className={`py-3 rounded text-xl ${
            pageIndex !== 1 ? "hover:bg-gray-300 bg-gray-50" : " bg-gray-200"
          }  w-32`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className={`py-3 rounded text-xl ${
            pageIndex !== numberOfPages
              ? "hover:bg-gray-300 bg-gray-50"
              : " bg-gray-200"
          }  w-32`}
          disabled={pageIndex === numberOfPages}
          onClick={() => setPageIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
