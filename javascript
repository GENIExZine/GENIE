async function callOpenAI(message, conversationHistory) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: conversationHistory,
            temperature: 0.7
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}