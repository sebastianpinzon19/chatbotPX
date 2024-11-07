const chatbotLogic = require('../logic/chatbotLogic');

exports.handleUserMessage = (req, res) => {
    const userMessage = req.body.message;
    const response = chatbotLogic.getResponse(userMessage);
    res.json({ response });
};
