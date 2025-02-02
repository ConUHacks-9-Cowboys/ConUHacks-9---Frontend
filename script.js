
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById('webcam').srcObject = stream;
    } catch (error) {
        console.error("Error accessing webcam:", error);
    }
}
startWebcam();