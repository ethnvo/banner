import "./App.css";
import { toPng } from "html-to-image";
import download from "downloadjs";

function App() {
  const exportBanner = () => {
    const node = document.getElementById("banner");
    if (!node) return;

    toPng(node, { quality: 0.95 })
      .then((dataUrl) => {
        download(dataUrl, "ethanvo-banner.png");
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
          w-[1584px] min-h-[500px]
          flex flex-col items-start justify-center
          pr-10 text-white relative
          bg-black bg-gradient-to-l from-purple-500/5 via-slate-800/10 to-black/10

          overflow-visible
        "
      >
        {/* Jigsaw pattern */}
        <div className="absolute inset-0 bg-[url('/jigsaw.svg')] bg-repeat ml-[38px] mt-7 bg-[length:150px_150px] opacity-10 z-0 pointer-events-none" />

        {/* Content Block */}
        <div className="pl-[600px] pr-[50px] overflow-visible">
          {/* Name with gradient stroke */}
          <div className="relative w-fit mb-[10px]">
            {/* Stroke layer */}
            <span
              className="
                absolute inset-0
                text-[180px] font-thin tracking-tighter font-zain 
                bg-gradient-to-br from-blue-500/80 via-pink-300/80 to-orange-200/80
                bg-clip-text text-transparent
                stroke-text blur-[6px]
                z-0
              "
              aria-hidden="true"
            >
              ethanvo.dev
            </span>

            {/* Fill layer */}
            <span
              className="
                relative text-[180px] font-thin tracking-tighter font-zain
                text-[#0E0E0F]	 z-10
              "
            >
              ethanvo.dev<span className="opacity-0">.</span>
            </span>
          </div>

          {/* Tagline */}
          <p
            className="
    text-[2.6rem] italic font-light 
    text-right mr-[50px] mb-[30px] 
    -mt-12
    bg-gradient-to-b from-blue-500/80 via-pink-300/80 to-orange-200/80
    bg-clip-text text-transparent tracking-tight
  "
          >
            let's piece it together, together.
          </p>
        </div>
      </div>

      {/* Export Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={exportBanner}
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Download as PNG
        </button>
      </div>
    </>
  );
}

export default App;
