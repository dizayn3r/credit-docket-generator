import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import HeaderForm from "./components/forms/HeaderForm";
import BasicDetailsForm from "./components/forms/BasicDetailsForm";
import DocketPreview from "./components/preview/DocketPreview";

export default function App() {
  const previewRef = useRef(null);
  
  const [headerData, setHeaderData] = useState({
    title: "ELSC, New Delhi",
    subtitle: "Movement Chart / Processing Note",
    academicYear: "2025-26"
  });

  const [basicData, setBasicData] = useState({
    llpsId: "",
    accountName: "",
    docketNo: "",
    leadGeneratedBy: "",
    dateOfLead: "",
    region: "",
    branchAlpha: "",
    solId: "",
    customerContact: "",
    branchContact: "",
    loanFacility: "",
    loanAmount: "",
    courseFees: "",
    eligibility: "",
    insurance: "",
    deviation: ""
  });

  const handleHeaderChange = (field, value) => {
    setHeaderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBasicChange = (field, value) => {
    setBasicData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      // Capture the preview as canvas
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff"
      });

      // Convert canvas to image
      const imgData = canvas.toDataURL("image/png");

      // Create PDF with A4 dimensions
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      // Calculate dimensions to fit A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("docket.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, height: "100vh" }}>
      {/* Left Side - Form */}
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", margin: 0 }}>Docket Generator</h1>
          
          <button
            onClick={handleDownload}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#45a049";
              e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
            }}
            title="Download PDF"
          >
            <span>📥</span>
            <span>Download PDF</span>
          </button>
        </div>
        
        <HeaderForm data={headerData} onChange={handleHeaderChange} />
        <BasicDetailsForm data={basicData} onChange={handleBasicChange} />
      </div>

      {/* Right Side - Preview */}
      <div style={{ 
        padding: "20px", 
        backgroundColor: "#e5e5e5", 
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <div ref={previewRef} style={{ marginLeft: "20px" }}>
          <DocketPreview headerData={headerData} basicData={basicData} />
        </div>
      </div>
    </div>
  );
}

