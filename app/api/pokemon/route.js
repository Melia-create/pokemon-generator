import { NextResponse } from "next/server";
import { POKEMON_ATTRIBUTES } from "@/app/data/pokemon";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Create a new Pokemon character with the following attributes: 
      - Name
      - Short description less than 80 characters
      - Type of Pokemon
      - The category of Pokémon it is
      - Number of Hit Points
      - The length of the Pokemon in inches
      - The weight of the Pokemon in pounds
      - The Pokemon's power name and description
      - The Pokemon's attack name with description and hit points it would cause in damage
      - The type of Pokemon it is weak against
      - The type of Pokemon it is resistant against
      - The Retreat cost of the Pokemon
      - The Pokemon's appearance in less than 600 characters
      - The Pokemon's backstory in less than 600 characters
      Format the response in the following JSON object:
      ${JSON.stringify(POKEMON_ATTRIBUTES)};
      `,
      },
    ],
  });
  console.log(completion.data.choices[0].message);
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
