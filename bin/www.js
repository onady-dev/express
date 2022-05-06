const app = require("../");
const syncDB = require("./sync-db.js");

syncDB().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on 3000 port");
    });
});