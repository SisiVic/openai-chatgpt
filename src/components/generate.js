import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function (req) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req),
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });
  console.log(response)
  return response.data.choices[0].text;
}

function generatePrompt(text) {
  const capitalizedText = text[0].toUpperCase() + text.slice(1).toLowerCase();
  console.log(capitalizedText)
  
  return capitalizedText
  /* return `The following is a conversation with an AI assistant. The assistant is helpful, 
    creative, clever, and very friendly.\n\nHuman: ${capitalizedText} \nAI:`; */
}
