
function jspdf(){
    console.log('jspdf')
    var doc = new jsPDF()

    var page = document.getElementById('page')
    var render = document.getElementById('renderPDF')


    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')

    render.innerHTML = doc
}

function sizePDF(){
    console.log("sizePDF")
    var render = document.getElementById('renderPDF')
    render.height = "50px"
}


// function to transform a screenshot to a PDF file and show it 
function testPDF(){
    const render = document.getElementById('pdfviewer')
    const screenshotTarget = document.getElementById('page')

    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        // only jpeg is supported by jsPDF
        var imgData = base64image
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        //pdf.save("download.pdf")
        var blobPDF = new Blob([ pdf.output('blob') ], {type : 'application/pdf'})
        var blobURL = URL.createObjectURL(blobPDF)
        render.src = blobURL
    })
}

