const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const user = require('./api/user')

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan("tiny"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Lawsdaq Node Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./api/*/index.js"],
};
const specs = swaggerJsdoc(options);

app.use("/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use('/user', user);

module.exports = app;