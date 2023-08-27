
function generateQR()
{
    const qrImage = document.getElementById("QRImage");
    const qrContent = document.getElementById("qrContent");
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrContent.value;
}

function generateBarCode()
{
    const qrImage = document.getElementById("QRImage");
    const qrContent = document.getElementById("qrContent");
    qrImage.src = "https://barcodeapi.org/api/auto/" + qrContent.value;
}