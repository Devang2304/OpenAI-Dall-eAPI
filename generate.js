import { Configuration,OpenAIApi } from "openai";
import {writeFileSync} from "fs";

const configuration= new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

// input your image in the prompt to generate the Ai generated image
const prompt ='input your text here to generate image'

const result= await openai.createImage({
    prompt,
    n:1,
    size: "1024x1024",
})

const url =result.data.data[0].url;
console.log(url);

//save image URL to disk
const imgResult =await fetch(url);
const blob = await imgResult.blob();
const buffer=Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`,buffer);
//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