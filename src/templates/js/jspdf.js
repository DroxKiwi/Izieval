
function renderjspdf(){
    const render = document.getElementById('pdfviewer')
    const screenshotTarget = document.getElementById('page')

    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        // only jpeg is supported by jsPDF
        var imgData = base64image
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
        //pdf.save("download.pdf")
        var blobPDF = new Blob([ pdf.output('blob') ], {type : 'application/pdf'})
        var blobURL = URL.createObjectURL(blobPDF)
        render.src = blobURL
    })
}

function sizePDFviewer(){
    var pdfviewer = document.getElementById('pdfviewer')
    pdfviewer.hidden = true
}