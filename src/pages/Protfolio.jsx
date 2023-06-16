import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "../assets/pdf/mac.pdf";
const Protfolio = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <div
        className="container"
        style={{
          height: "1000px",

          marginTop: "60px",
        }}
      >
        <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};

export default Protfolio;
