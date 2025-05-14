import PDFViewer from "@/components/pdf-viewer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Resume() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-4'>My resume</h1>

        {/* Download button */}
        <div className="mb-4">
          <Link
            href="https://drive.google.com/uc?export=download&id=16xGqgVDR2kOtHW93LB6xWMO1aRzlvRjz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Download PDF</Button>
          </Link>
        </div>
        
        <PDFViewer pdfUrl="https://drive.google.com/file/d/16xGqgVDR2kOtHW93LB6xWMO1aRzlvRjz/preview" />

      </div>
    </section>
  )
}