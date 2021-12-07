var http = require('http');
var fs = require('fs')
var
    // Local ip address that we're trying to calculate
    address
    // Provides a few basic operating-system related utility functions (built-in)
    ,os = require('os')
    // Network interfaces
    ,ifaces = os.networkInterfaces();

// Iterate over interfaces ...
for (var dev in ifaces) {

    // ... and find the one that matches the criteria
    var iface = ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });

    if(iface.length > 0) address = iface[0].address;
}
const { resolve4 } = require("dns");
var port = 2000;
var server = http.createServer( async (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error',async (err) => {
      console.error(err);
    }).on('data', async(chunk) => {
      body.push(chunk);
    }).on('end',async () => {
      body = Buffer.concat(body).toString();
      // BEGINNING OF NEW STUFF
  
      response.on('error',async (err) => {
        console.error(err);
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.setHeader("Access-Control-Allow-Origin", "*");
      
      // Note: the 2 lines above could be replaced with this next one:
      // response.writeHead(200, {'Content-Type': 'application/json'})
  
      const responseBody = { headers, method, url, body };
      const res = responseBody['url'].substring(1);
      response.setHeader('Content-Type', 'html');
      var html = await fs.readFileSync('index.html');
      response.end(html);

      
    });
});
var port2 = 3000;
var server2 = http.createServer( async (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error',async (err) => {
      console.error(err);
    }).on('data', async(chunk) => {
      body.push(chunk);
    }).on('end',async () => {
      body = Buffer.concat(body).toString();
      // BEGINNING OF NEW STUFF
  
      response.on('error',async (err) => {
        console.error(err);
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.setHeader("Access-Control-Allow-Origin", "*");
      
      // Note: the 2 lines above could be replaced with this next one:
      // response.writeHead(200, {'Content-Type': 'application/json'})
  
      const responseBody = { headers, method, url, body };
      const res = responseBody['url'].substring(1);
      response.setHeader('Content-Type', 'html');
      var html = await fs.readFileSync('sketch.js');
      response.end(html);

      
    });
});
var port3 = 4000;
var server3 = http.createServer( async (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error',async (err) => {
      console.error(err);
    }).on('data', async(chunk) => {
      body.push(chunk);
    }).on('end',async () => {
      body = Buffer.concat(body).toString();
      // BEGINNING OF NEW STUFF
  
      response.on('error',async (err) => {
        console.error(err);
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.setHeader("Access-Control-Allow-Origin", "*");
      
      // Note: the 2 lines above could be replaced with this next one:
      // response.writeHead(200, {'Content-Type': 'application/json'})
  
      const responseBody = { headers, method, url, body };
      const res = responseBody['url'].substring(1);
      response.setHeader('Content-Type', 'image/png');
      var html = await fs.readFileSync('./char.png');
      response.end(html);

      
    });
});
server3.listen( port3, () => { console.log( 'Server is running' ); } );
    console.log("lisening on port " + port3 + " at " + address);
    var port5 = 4002;
var server5 = http.createServer( async (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error',async (err) => {
      console.error(err);
    }).on('data', async(chunk) => {
      body.push(chunk);
    }).on('end',async () => {
      body = Buffer.concat(body).toString();
      // BEGINNING OF NEW STUFF
  
      response.on('error',async (err) => {
        console.error(err);
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.setHeader("Access-Control-Allow-Origin", "*");
      
      // Note: the 2 lines above could be replaced with this next one:
      // response.writeHead(200, {'Content-Type': 'application/json'})
  
      const responseBody = { headers, method, url, body };
      const res = responseBody['url'].substring(1);
      response.setHeader('Content-Type', 'image/png');
      var html = await fs.readFileSync('./cahr_oep.png');
      response.end(html);

      
    });
});
server5.listen( port5, () => { console.log( 'Server is running' ); } );
    console.log("lisening on port " + port5 + " at " + address);
var port4 = 4004;
var server4 = http.createServer( async (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error',async (err) => {
      console.error(err);
    }).on('data', async(chunk) => {
      body.push(chunk);
    }).on('end',async () => {
      body = Buffer.concat(body).toString();
      // BEGINNING OF NEW STUFF
  
      response.on('error',async (err) => {
        console.error(err);
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.setHeader("Access-Control-Allow-Origin", "*");
      
      // Note: the 2 lines above could be replaced with this next one:
      // response.writeHead(200, {'Content-Type': 'application/json'})
  
      const responseBody = { headers, method, url, body };
      const res = responseBody['url'].substring(1);
      response.setHeader('Content-Type', 'image/png');
      var html = await fs.readFileSync('./cahr_op.png');
      response.end(html);

      
    });
});

server4.listen( port4, () => { console.log( 'Server is running' ); } );
    console.log("lisening on port " + port4 + " at " + address);

    var port6 = 3003;
    var server6 = http.createServer( async (request, response) => {
        const { headers, method, url } = request;
        let body = [];
        request.on('error',async (err) => {
          console.error(err);
        }).on('data', async(chunk) => {
          body.push(chunk);
        }).on('end',async () => {
          body = Buffer.concat(body).toString();
          // BEGINNING OF NEW STUFF
      
          response.on('error',async (err) => {
            console.error(err);
          });
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          response.setHeader("Access-Control-Allow-Origin", "*");
          
          // Note: the 2 lines above could be replaced with this next one:
          // response.writeHead(200, {'Content-Type': 'application/json'})
      
          const responseBody = { headers, method, url, body };
          const res = responseBody['url'].substring(1);
          response.setHeader('Content-Type', 'html');
          var html = await fs.readFileSync('./webgazer.js');
          response.end(html);
    
          
        });
    });
    server6.listen( port6, () => { console.log( 'Server is running' ); } );
        console.log("lisening on port " + port6 + " at " + address);

        var port7 = 4005;
    var server7 = http.createServer( async (request, response) => {
        const { headers, method, url } = request;
        let body = [];
        request.on('error',async (err) => {
          console.error(err);
        }).on('data', async(chunk) => {
          body.push(chunk);
        }).on('end',async () => {
          body = Buffer.concat(body).toString();
          // BEGINNING OF NEW STUFF
      
          response.on('error',async (err) => {
            console.error(err);
          });
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          response.setHeader("Access-Control-Allow-Origin", "*");
          
          // Note: the 2 lines above could be replaced with this next one:
          // response.writeHead(200, {'Content-Type': 'application/json'})
      
          const responseBody = { headers, method, url, body };
          const res = responseBody['url'].substring(1);
          response.setHeader('Content-Type', 'image/png');
          var html = await fs.readFileSync('./eyes.png');
          response.end(html);
    
          
        });
    });
    server7.listen( port7, () => { console.log( 'Server is running' ); } );
        console.log("lisening on port " + port6 + " at " + address);

server.listen( port, () => { console.log( 'Server is running' ); } );
    console.log("lisening on port " + port + " at " + address);
server2.listen( port2, () => { console.log( 'Server is running' ); } );
    console.log("lisening on port " + port2 + " at " + address);
