const { GoogleGenerativeAI } = require("@google/generative-ai");
const multer = require('multer');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

require('dotenv').config();
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "dist")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});
const port = process.env.PORT || 3000;

function fileToGenerativePart(path) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType: "image/png"
        },
    };
}
console.log("The API Key is - ", process.env.API_KEY);
app.post('/upload', upload.single('file'), async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = `
    You are world's best Fashion Designer and you have an extremely outstanding fashion sense. Your job is to see the outfit from the image and provide the details of every article in the outfit and generate points out of 10, which are based on factors like current trends, current season, occasion, and the comfort level that you can infer. Also, suggest a better outfit according to you after considering the above factors.
    The formatting of the response should be as follows:
    Describe the outfit in the image in the first paragraph.
    Rate the outfit out of 10 (most important part) in the second paragraph and provide appropriate reasoning in the second paragraph.
    Suggest how the current outfit can be improved or accessorized in the third paragraph.
    Suggest atleast four alternatives for the outfit in the image in the format of an unordered list only.`;
    console.log(req.file);
    const imageParts = [
        fileToGenerativePart(req.file.path),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log("In server..js, The Response text is -", text);

    res.json({ status: 'success', message: 'Image processed successfully', data: text });
});
console.log("In server.js, The port is - ", port);   
app.listen(port, () => console.log(`Server started on port ${port}`));