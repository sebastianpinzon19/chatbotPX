const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Chatbot API',
            version: '1.0.0',
            description: 'API para un chatbot de primeros auxilios',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./routes/*.js'], // Ruta a los archivos donde se encuentran las anotaciones
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use('/api/chatbot', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Documentación de la API en http://localhost:${PORT}/api-docs`);
});
