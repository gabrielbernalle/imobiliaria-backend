import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'API imobiliaria service',
        version: '1.0.0',
    },
    host: process.env.HOST || 'http://localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
