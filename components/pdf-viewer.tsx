'use client'

export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '141.42%', // 1 to sqrt(2) ratio - A4 format
      }}
    >
      <iframe
        src={pdfUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      //   allow="autoplay"
      />
    </div>
  );
}
