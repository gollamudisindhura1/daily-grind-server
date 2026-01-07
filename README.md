# The Daily Grind - Basic Express.js Server Lab

## Overview

This repository contains a simple Express.js web server for "The Daily Grind" coffee shop. It serves a homepage and a contact page as static HTML files.

## How to Run

1. Clone this repo
2. Run npm install
3. Run node server.js
4. Open your browser - http://localhost:3000

## Reflection Questions

1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
- res.send(): This Sends any type of data like string, object as the HTTP response. It automatically sets the correct header.
- res.sendFile(): This specifically sends a file from the filesystem and handles file streaming and sets proper headers for the file type.

- we use res.send() for dynamic context like text and JSON and res.sendFile() when serving static files like HTML,images or PDFs

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
- The path module with __dirname ensures an absolute path starting from the project root. Using relative path like "public/index.html" can break
    1. The current working directory might not be the project folder. If we run node from a different location
    2. It becomes unreliable in production or when server is deployed.
- path.join(__dirname, 'public', 'index.html') always points to the correct file regardless of where the command is executed.


3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?
1. Create a new HTML file- public/menu.html
2. Add a new route in server.js
    - app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "menu.html"));
    });
3. Add navigation links in the HTML files pointing to /menu.




