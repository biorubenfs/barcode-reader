import { BrowserBarcodeReader } from '@zxing/library';

const images = [["image1", "result1"], ["image2", "result2"], ["image3", "result3"], ["image4", "result4"]]

for (const [image, result] of images) {
    const codeReader = new BrowserBarcodeReader();

    console.log('ZXing code reader initialized');

    const img = document.getElementById(image);
    const resultEl = document.getElementById(result);

    codeReader.decodeFromImage(img)
        .then(result => {
            console.log(result);
            resultEl.textContent = result.text;
        })
        .catch(err => {
            console.error(err);
            resultEl.textContent = err;
        });
}
