const proxy = require("http-proxy-middleware");

//const domainPortURL = process.env.NODE_ENV === 'production' ? `${process.env.DOMAIN}:${process.env.PORT}`: 'http://server:5000'
console.log("process.env: ",process.env);
console.log("process.env.NODE_ENV: ",process.env.PROXY_ENV);
let domainPortURL;
switch (process.env.PROXY_ENV) {
  case "Docker-Google-Dev":
    domainPortURL = '10.0.0.1:443';
    break;
  case "Docker-Heroku-Dev":
    domainPortURL = 'http://localhost:5000';
    break;
  case "Docker-Local_Dev":
    domainPortURL = 'http://server:5000';
    break;
  case "Prod":
    domainPortURL = `${process.env.DOMAIN}:${process.env.PORT}`;
    break;
  default:
    domainPortURL = 'http://localhost:5000';
    break;
}

console.log("domainPortURL: ",domainPortURL);

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: domainPortURL,
      //pathRewrite: { '^/api': '/api' },
      //changeOrigin: true
    })
  );
};

