const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const routerApi = require('./routes/routerApis');
const routesHtml = require('./routes/routesHtml');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', routerApi);
app.use('/', routesHtml);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});