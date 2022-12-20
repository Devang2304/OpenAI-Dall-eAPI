import { Configuration,OpenAIApi } from "openai";
import {createReadStream, writeFileSync} from "fs";

const configuration= new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

const result=await openai.createImageVariation(
    createReadStream(`./img/shubham_croped.png`),
    1,
    "1024x1024"
);

const url =result.data.data[0].url;
console.log(url);

//save image URL to disk
const imgResult =await fetch(url);
const blob = await imgResult.blob();
const buffer=Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`,buffer);
//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