const http = require('http')
    ,app = require('./config/express')
    ,port = 3000;

http
    .createServer(app)
    .listen(port, () => 
        console.log(
            `Server running on http://localhost:${port}`
        )
    );

