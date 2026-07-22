const fs = require('fs');
const path = require('path');
const { createWorker } = require('tesseract.js');

(async () => {
  const dir = path.join(process.cwd(), 'src/pages/cardLibary/Cards');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png')).sort();
  const worker = await createWorker('eng');
  for (const file of files) {
    const imagePath = path.join(dir, file);
    const { data: { text } } = await worker.recognize(imagePath);
    console.log(file + ' => ' + JSON.stringify(text.trim()));
  }
  await worker.terminate();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
