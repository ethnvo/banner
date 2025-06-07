import "./App.css";
import { toJpeg } from "html-to-image";
import download from "downloadjs";

function App() {
  const exportBanner = () => {
    const node = document.getElementById("banner");
    if (!node) return;

    toJpeg(node, { quality: 0.95 })
      .then((dataUrl) => {
        download(dataUrl, "ethanvo-banner.jpg");
      })
      .catch((err) => {
        console.error("Export failed", err);
      });
  };

  return (
    <>
      <div
        id="banner"
        className="
          w-[1584px] h-[396px]
          flex flex-col items-end justify-center
          pr-10 text-white relative
          bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950
          overflow-hidden
        "
      >
        {/* Jigsaw pattern */}
        <div className="absolute inset-0 bg-[url('/jigsaw.svg')] bg-repeat bg-[length:150px_150px] opacity-10 z-0 pointer-events-none" />

        {/* Blue blur blob */}
        <div
          className="
            absolute w-[500px] h-[400px]
            rounded-full bg-blue-800 opacity-20 blur-[1200px]
            top-[0%] right-[0%] z- pointer-events-none
          "
        />

        {/* Name with glow */}
        <div className="relative inline-block -mt-6 mb-4 z-20">
          <span
            className=" 
            font-zain
              relative text-8xl font-bold 
bg-gradient-to-l
from-sky-200
via-blue-100
to-indigo-300
              bg-clip-text text-transparent
            "
          >
            Ethan Vo
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[1.70rem] italic font-zain text-blue-100 -mt-2 mb-12 tracking-tight pl-1 z-20">
          Let's piece it together, together.
        </p>

        {/* Role */}
        <h2 className="text-4xl font-zain mt-20 z-20">
          <span className="bg-gradient-to-l from-sky-200 via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            <span className="font-thin">Fullstack Developer</span> |{" "}
            <span className="font-semibold">ethanvo.dev</span>
          </span>
        </h2>
      </div>

      {/* Export Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={exportBanner}
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Download as JPG
        </button>
      </div>
    </>
  );
}

export default App;
