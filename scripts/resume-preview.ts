/*
  Regenerates the resume page's preview picture from public/resume.pdf.
  Phones that can't show the PDF inline get this picture of page 1 instead,
  so run it whenever the resume PDF changes: `bun run resume:preview`.
*/
import { readFile } from "node:fs/promises";
import * as mupdf from "mupdf";
import sharp from "sharp";

const PDF_PATH = "public/resume.pdf";
const OUT_PATH = "src/assets/images/resume-preview.jpg";
/** Width of the picture in pixels; Astro makes smaller copies from it. */
const WIDTH = 1400;

const doc = mupdf.Document.openDocument(
  await readFile(PDF_PATH),
  "application/pdf",
);
const page = doc.loadPage(0);
const [x0, , x1] = page.getBounds();
const scale = WIDTH / (x1 - x0);

const pixmap = page.toPixmap(
  mupdf.Matrix.scale(scale, scale),
  mupdf.ColorSpace.DeviceRGB,
  false,
  true,
);
const png = pixmap.asPNG();

await sharp(png).jpeg({ quality: 85, mozjpeg: true }).toFile(OUT_PATH);
console.log(
  `Wrote ${OUT_PATH} (${pixmap.getWidth()}×${pixmap.getHeight()}) from page 1 of ${PDF_PATH}`,
);
