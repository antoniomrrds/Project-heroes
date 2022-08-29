const express =require('express');
const app = express();
const routes =  require('./routes/routes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api-docs', 
        swaggerUi.serve, 
        swaggerUi.setup(swaggerDocs));

app.use(routes);

module.exports = app;
