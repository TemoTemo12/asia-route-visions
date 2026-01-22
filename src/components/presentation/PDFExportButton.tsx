import { useState } from "react";
import { FileDown, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PDFExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    
    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const sections = [
        { id: "hero", title: "სათაური" },
        { id: "route-slide", title: "მარშრუტი" },
        { id: "seas-slide", title: "ზღვები და სრუტეები" },
        { id: "islands-slide", title: "კუნძულები და ნახევარკუნძულები" },
        { id: "diary-slide", title: "მოგზაურობის დღიური" },
        { id: "conclusion-slide", title: "დასკვნა" },
      ];

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i].id);
        if (!element) continue;

        // Scroll to section for proper rendering
        element.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#0a0f1a",
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        
        if (i > 0) {
          pdf.addPage();
        }

        // Calculate dimensions to fit page while maintaining aspect ratio
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        pdf.addImage(imgData, "JPEG", x, y, finalWidth, finalHeight);
      }

      pdf.save("აზიის-მოგზაურობა.pdf");
    } catch (error) {
      console.error("PDF export failed:", error);
    } finally {
      setIsExporting(false);
      // Scroll back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={exportToPDF}
      disabled={isExporting}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isExporting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm font-medium">იტვირთება...</span>
        </>
      ) : (
        <>
          <FileDown className="w-5 h-5" />
          <span className="text-sm font-medium">PDF ექსპორტი</span>
        </>
      )}
    </button>
  );
};

export default PDFExportButton;
