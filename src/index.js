import { BrowserBarcodeReader } from '@zxing/library';

const codeReader = new BrowserBarcodeReader();

console.log('ZXing code reader initialized');

const img = document.getElementById("image");
const resultEl = document.getElementById("result");

codeReader.decodeFromImage(img)
    .then(result => {
        console.log(result);
        resultEl.textContent = result.text;
    })
    .catch(err => {
        console.error(err);
        resultEl.textContent = err;
    });