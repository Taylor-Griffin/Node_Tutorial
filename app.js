const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Welcome to our homepage</h1>');
    res.end();
  }
  //   if (req.url === '/about') {
  //     res.write('<h1>Here is our about page</h1>');
  //     res.end();
  //   }
  res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Go Home</a>
    `);
  res.end();
});

server.listen(4000);
