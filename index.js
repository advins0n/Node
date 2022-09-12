const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('server running'+req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => `Server running on port ${PORT}`);



