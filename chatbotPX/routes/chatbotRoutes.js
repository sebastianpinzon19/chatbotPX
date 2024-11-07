const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

/**
 * @swagger
 * /api/chatbot/ask:
 *   post:
 *     summary: Preguntar al chatbot
 *     description: Envía un mensaje al chatbot y recibe una respuesta sobre primeros auxilios.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "quemadura"
 *     responses:
 *       200:
 *         description: Respuesta del chatbot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: "Para tratar una quemadura, enfría la zona con agua fría durante al menos 10 minutos."
 */
router.post('/ask', chatbotController.handleUserMessage);

module.exports = router;
