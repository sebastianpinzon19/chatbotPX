const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata acerca de nuestra API
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "sistema de chatbotPX",
      version: "1.0.0",
      description: "Documentación de las APIs para el manejo de las diferentes entidades de chatbotPX.",
      contact: {
        name: "Adriana Lucia, Sebastian Pinzon",
        email: "sebastian.pinzon.3954@gmail.com, adrilucia603@gmail.com", 
      },
      license: {
        name: "MIT", 
        url: "https://opensource.org/licenses/MIT", 
      },
    },
    servers: [
      {
        url: "http://localhost:3000", // Base URL 
        description: "Servidor de desarrollo", 
      },
    ],
  },
  apis: ["./routes/*.js"], // Path hacia las APIs
};

// Documentación en formato JSON
const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = { swaggerUi, swaggerDocs };