const { app } = require('@azure/functions');

app.http('fancyHelloWorld', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Fancy endpoint hit at "${request.url}"`);

        const response = {
            message: '✨ Hello, World! 🌍',
            timestamp: new Date().toISOString(),
            requestId: context.invocationId
        };

        return { 
            headers: { 'Content-Type': 'application/json' },
            body: response 
        };
    }
});
