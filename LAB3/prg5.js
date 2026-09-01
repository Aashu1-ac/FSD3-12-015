import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        res.end("<h1>Home Page</h1>");

    }

    else if (req.url == "/product") {

        res.write(`
            <h1>iPhone XL</h1>
            <h2>Price: 98000</h2>
            <h3>Discount: 30%</h3>
        `);

        res.end();

    }

    else if (req.url == "/contact") {

        res.end("<h1>Contact Us</h1>");

    }

    else {

        res.statusCode = 404;

        res.end(`
            <h1>Page not Found</h1>
            <a href="/">Home</a>
        `);

    }

});

server.listen(3000, () => console.log("Server is running at 3000 ..."));