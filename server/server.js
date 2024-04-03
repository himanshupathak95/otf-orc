const { GoogleGenerativeAI } = require("@google/generative-ai");
const multer = require('multer');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors({
    origin: 'http://localhost:5173'
}));

function fileToGenerativePart(path) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType: "image/png"
        },
    };
}

app.post('/upload', upload.single('file'), async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = "Is this homemade or store-bought? Be descriptive of your response";
    console.log(req.file);
    const imageParts = [
        fileToGenerativePart(req.file.path),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    res.json({ status: 'success', message: 'Image processed successfully', data: text });
});

app.listen(3000, () => console.log('Server started on port 3000'));