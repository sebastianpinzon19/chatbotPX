const responses = {
    "quemadura": "Para tratar una quemadura, enfría la zona con agua fría durante al menos 10 minutos.",
    "herida": "Lava la herida con agua y jabón, y cubre con un vendaje limpio.",
    "desmayo": "Coloca a la persona en posición horizontal y eleva sus piernas.",
    // Agrega más respuestas según sea necesario
};

exports.getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    return responses[lowerMessage] || "Lo siento, no tengo información sobre eso.";
};
