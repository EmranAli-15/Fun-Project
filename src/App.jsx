import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import youtube from "../src/assets/youtubeIcon.svg"
import facebook from "../src/assets/facebookIcon.svg"
import insta from "../src/assets/instaIcon.svg"
import twitter from "../src/assets/twitterIcon.svg"
import logo from "../src/assets/hikmahLogo.png"

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
    <div className="max-w-5xl py-8 px-2 mx-auto fontLan">

      <div className="px-2-5 mb-10">
        <input
          type="file"
          className="file-input file-input-secondary w-full bg-white text-black border-[#f43098]"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) setImageURL(URL.createObjectURL(file));
          }}
        />

        {/* Text Input */}
        <input
          type="text"
          placeholder="Headline input"
          className="input mt-2 w-full bg-white text-black border-[#f43098]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="text"
          placeholder="Date input"
          className="input mt-2 w-full bg-white text-black border-[#f43098]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Preview Box that will be exported */}
      <div className="overflow-auto">
        <div
          ref={exportRef}
          className="flex flex-col bg-white max-w-[400px]"
        >
          <div className="flex items-center justify-between my-1 px-2">
            <img className="w-20" src={logo} />
            <h1 className="text-black">{date}</h1>
          </div>



          <div className="bg-red-700 px-2">
            <div className="relative h-80">
              <div className="flex items-center justify-between h-full w-full">
                <div className="w-10 bg-white h-[80%] rounded-l-2xl"></div>
                <div className="w-10 bg-white h-[80%] rounded-r-2xl"></div>
              </div>

              <div className="absolute top-1/2 w-full -translate-y-1/2">
                {imageURL &&
                  <img
                    src={imageURL}
                    className="rounded-2xl w-full px-1 object-cover h-[250px]"
                  />
                }
              </div>
            </div>
            <h1 className="text-white font-sans text-center mb-5 text-xl font-medium">{text}</h1>
          </div>




          <div className="flex text-[10px] items-center justify-evenly text-black bg-white">
            <div className="flex items-center gap-x-1">
              <img src={facebook} className="size-4" alt="" />
              <p className="text-[14px]">Hikmah 24</p>
            </div>
            <div className="flex items-center gap-x-1">
              <img src={youtube} className="size-4" alt="" />
              <p className="text-[14px]">Hikmah 24</p>
            </div>
            <div className="flex items-center gap-x-1">
              <img src={insta} className="size-4" alt="" />
              <p className="text-[14px]">Hikmah 24</p>
            </div>
            <div className="flex items-center gap-x-1">
              <img src={twitter} className="size-4" alt="" />
              <p className="text-[14px]">Hikmah 24</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center mt-5">
        <button
          className="btn btn-secondary"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}
