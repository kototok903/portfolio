import PDFViewer from "@/components/pdf-viewer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Resume() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-4'>My resume</h1>

        {/* <embed src="/public/documents/stas-resume.pdf" width="100%" height="1000px" /> */}
        {/* <embed src="/documents/stas-resume.pdf#toolbar=0&scrollbar=0" width="100%" height="1000px" /> */}
        {/* <iframe
          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=1O33_Zjj1Yxx7LieWRzUEKTnU9dK6rtd1#toolbar=0&scrollbar=0"
          width="100%"
          height="1000px"
        ></iframe> */}
        
        {/* <iframe
          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=1O33_Zjj1Yxx7LieWRzUEKTnU9dK6rtd1"
          width="100%"
          height="1000px"
        ></iframe> */}

        {/* <iframe
          src="https://drive.google.com/file/d/1O33_Zjj1Yxx7LieWRzUEKTnU9dK6rtd1/preview"
          width="100%"
          height="1000px"
        ></iframe> */}

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