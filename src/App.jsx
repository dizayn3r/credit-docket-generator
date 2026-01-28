import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import HeaderForm from "./components/forms/HeaderForm";
import BasicDetailsForm from "./components/forms/BasicDetailsForm";
import CourseDetailsForm from "./components/forms/CourseDetailsForm";
import DocketPreview from "./components/preview/DocketPreview";

export default function App() {
  const previewRef = useRef(null);

  const [headerData, setHeaderData] = useState({
    title: "ELSC, New Delhi",
    subtitle: "Movement Chart / Processing Note",
    academicYear: "2025-26",
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
    deviation: "",
  });

  const [courseData, setCourseData] = useState({
    courseName: "",
    instituteName: "",
    instituteAddress: "",
    instituteCategory: "",
    commencementDate: "",
    security: "",
    interestDuringMoratorium: "",
    margin: "",
    reimbursement: "",
    rateOfInterest: "",
    insurance: "",
    moratoriumPeriod: "",
    expectedIncome: "",
    loanTenure: "",
  });

  const handleHeaderChange = (f, v) => setHeaderData((p) => ({ ...p, [f]: v }));
  const handleBasicChange = (f, v) => setBasicData((p) => ({ ...p, [f]: v }));
  const handleCourseChange = (f, v) => setCourseData((p) => ({ ...p, [f]: v }));

  const handleDownload = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: "#fff",
      windowWidth: previewRef.current.scrollWidth,
      scrollX: 0,
      scrollY: 0,
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const ratio = pdf.internal.pageSize.getWidth() / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      canvas.width * ratio,
      canvas.height * ratio,
    );

    pdf.save("docket.pdf");
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[50vw_50vw]">
      {/* LEFT – FORM */}
      <div className="p-5 bg-gray-100 overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-semibold">Docket Generator</h1>

          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            📥 Download PDF
          </button>
        </div>

        <HeaderForm data={headerData} onChange={handleHeaderChange} />
        <BasicDetailsForm data={basicData} onChange={handleBasicChange} />
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Course Details</h2>
          <CourseDetailsForm data={courseData} onChange={handleCourseChange} />
        </div>
      </div>

      {/* RIGHT – PREVIEW */}
      <div className="bg-teal-600 overflow-y-auto flex justify-center min-w-0">
        <div className="w-full flex justify-center py-6 min-w-0">
          {/* SCALE WRAPPER */}
          <div className="origin-top scale-[0.75] xl:scale-[0.85]">
            <div ref={previewRef}>
              <DocketPreview headerData={headerData} basicData={basicData} courseData={courseData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
