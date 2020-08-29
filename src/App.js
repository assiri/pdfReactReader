import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

const onDocumentLoadSuccess=({ numPages }) =>setNumPages(numPages)
const goToPrevPage = () =>setPageNumber(pageNumber-1)
const goToNextPage = () => setPageNumber(pageNumber+1)

  return (
    <div>
       <div style={{display: 'flex'}}>
          <button onClick={goToPrevPage}>Prev</button>
          <p>{pageNumber} / {numPages}</p>
          <button onClick={goToNextPage}>Next</button>
        </div>
      <Document file="1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
    </div>
  );
}

export default App