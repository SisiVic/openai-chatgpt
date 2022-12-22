import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function (req) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
    prompt: generatePrompt(req),
  });
  return completion.data.choices[0].text;
}

function generatePrompt(text) {
  console.log(text)
  const capitalizedText = text[0].toUpperCase() + text.slice(1).toLowerCase();
  return capitalizedText
  /* return `The following is a conversation with an AI assistant. The assistant is helpful, 
    creative, clever, and very friendly.\n\nHuman: ${capitalizedText} \nAI:`; */
}
