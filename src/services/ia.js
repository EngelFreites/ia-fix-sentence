const API_KEY = import.meta.env.VITE_API_KEY

console.log(API_KEY)

export async function fixSentence (value) {
  const data = {
    model: "text-davinci-003",
    prompt: `Correct this to standard English:\n\n ${value}.`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  }

  const response = await fetch ('https://api.openai.com/v1/completions',
  {
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },

    body: JSON.stringify(data)

    
    
  }).then( res => res.json())

  console.log(response)

  return response.choices[0].text.replace('/n', '').trim()

}