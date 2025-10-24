import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import youtube from "../src/assets/youtubeIcon.svg"
import facebook from "../src/assets/facebookIcon.svg"
import insta from "../src/assets/instaIcon.svg"
import twitter from "../src/assets/twitterIcon.svg"

export default function App() {
  const exportRef = useRef(null);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const handleDownload = () => {
    if (!exportRef.current) return;
    toPng(exportRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "output.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="max-w-7xl mx-auto fontLan">

      <div className="px-2 mt-5 mb-10">
        {/* Image Upload */}
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) setImageURL(URL.createObjectURL(file));
          }}
        />

        {/* Text Input */}
        <input
          type="text"
          className="w-full p-1 outline-0 border-1 mt-2"
          placeholder="Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="text"
          className="w-full p-1 outline-0 border-1 mt-2"
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Preview Box that will be exported */}
      <div
        ref={exportRef}
        className="flex flex-col bg-white"
      >
        <div className="flex items-center justify-between my-1 px-2">
          <div>
            <h1 className="text-xl font-bold text-blue-600">Hikmah 24</h1>
            <h1 className="w-10 rounded h-[2px] -mt-1 bg-yellow-300"></h1>
          </div>
          <h1>{date}</h1>
        </div>


        <div className="bg-red-700">
          <div className="relative h-[250px]">
            <div className="flex items-center justify-between h-full w-full">
              <div className="w-[40px] bg-white h-[82%] ml-[6px] rounded-l-2xl"></div>
              <div className="w-[40px] bg-white h-[82%] mr-[6px] rounded-r-2xl"></div>
            </div>

            <div className="absolute top-1/2 w-full -translate-y-1/2">
              {imageURL &&
                <img
                  src={imageURL}
                  className="rounded-[20px] w-full object-cover h-[200px] px-2"
                />
              }
            </div>
          </div>
          <h1 className="text-white font-sans text-center mb-5">{text}</h1>
        </div>




        <div className="flex text-[10px] items-center justify-evenly bg-white">
          <div className="flex items-center gap-x-1">
            <img src={facebook} className="size-[12px]" alt="" />
            <p>Hikmah 24</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={youtube} className="size-[12px]" alt="" />
            <p>Hikmah 24</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={insta} className="size-[12px]" alt="" />
            <p>Hikmah 24</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={twitter} className="size-[12px]" alt="" />
            <p>Hikmah 24</p>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center">
        <button
          className="mt-5 border-red-700 border-1 px-3 py-1 rounded-md"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}
