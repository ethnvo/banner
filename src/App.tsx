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
          w-[1584px] min-h-[500px]
          flex flex-col items-start justify-center
          pr-10 text-white relative
bg-gradient-to-br from-white/10 via-slate-800/10 to-white/5

          overflow-visible
        "
      >
        {/* Jigsaw pattern */}
        <div className="absolute inset-0 bg-[url('/jigsaw.svg')] bg-repeat bg-[length:150px_150px] opacity-10 z-0 pointer-events-none" />

        {/* Content Block */}
        <div className="pl-[600px] pr-[50px] overflow-visible">
          {/* Name with gradient stroke */}
          <div className="relative w-fit mb-[10px]">
            {/* Stroke layer */}
            <span
              className="
                absolute inset-0
                text-[180px] font-thin tracking-tighter font-zain 
                bg-gradient-to-br from-rose-600 via-pink-100 to-yellow-200
                bg-clip-text text-transparent
                stroke-text blur-[2.2px]
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
    bg-gradient-to-tl  from-slate-100 to-slate-100
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
          Download as JPG
        </button>
      </div>
    </>
  );
}

export default App;
