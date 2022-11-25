import sharp from "sharp";
import { readdirSync, copyFileSync, unlinkSync } from "fs";

const directory = "./static";
const srcDir = `raw`;

const maxWidth = 300;

readdirSync(srcDir).forEach(async (file) => {
  try {
    const src = `${srcDir}/${file}`;
    const dest = `${directory}/${file}.webp`;

    if (file === `${maxWidth}`) {
      return;
    }

    if (file.includes(".gif")) {
      copyFileSync(src, dest);
      return;
    }

    await sharp(src)
      .resize(maxWidth, null, { withoutEnlargement: true }) // width, height
      .webp()
      .toFile(dest);

    unlinkSync(src);

    console.log(`minified to: ${dest}`);
  } catch (err) {
    console.log(err, file);
  }
});
