// src/components/ItineraryGenerator.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useDropzone } from 'react-dropzone';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ItineraryGenerator = () => {
    const [excelData, setExcelData] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryStr = e.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setExcelData(data);
        };

        reader.readAsBinaryString(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.xlsx' });

    const generatePDF = () => {
        if (!excelData) return;

        const doc = new jsPDF();
        doc.text('Itinerary', 10, 10);

        doc.autoTable({
            head: [excelData[0]], // Use the first row as headers
            body: excelData.slice(1), // Use the remaining rows as data
        });

        doc.save('itinerary.pdf');
    };

    return (
        <div>
            <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                <input {...getInputProps()} />
                <p>Drag and drop an Excel file here, or click to select a file</p>
            </div>
            {excelData && (
                <button onClick={generatePDF} style={{ marginTop: '20px' }}>
                    Generate PDF
                </button>
            )}
        </div>
    );
};

export default ItineraryGenerator;
