const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const targetDir = path.resolve(__dirname, 'src/public/images');
const destinationDir = path.resolve(__dirname, 'dist/images');
if (!fs.existsSync(destinationDir)) {
fs.mkdirSync(destinationDir);
}
fs.readdirSync(targetDir)
.forEach(image => {
    // Resize to 800px
    sharp(`${targetDir}/${image}`)
.resize(800)
.toFile(path.resolve(destinationDir, `${image.split('.')[0]}-large.jpg`));

// Resize to 480px
    sharp(`${targetDir}/${image}`)
.resize(480)
.toFile(path.resolve(destinationDir, `${image.split('.')[0]}-small.jpg`));
});