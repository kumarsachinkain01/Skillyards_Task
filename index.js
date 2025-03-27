// Question 1.) Write a function to find the Greatest Common Divisor (GCD) of two numbers.


// Solution:
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// console.log(gcd(48, 18)); // Output: 6
// console.log(gcd(98, 56)); // Output: 14
//===========================================================
// Question 2.)Write a recursive algorithm for binary search.

// Solution:

// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) return -1; 

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
//     return binarySearch(arr, target, mid + 1, right);
// }

// console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
// console.log(binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3

//===========================================================
// Question 3.) . How can logs be handled in the backend?
 
// 1. Using Console Logging (Basic Approach)
            // console.log("This is an info log");
            // console.error("This is an error log");
            // console.warn("This is a warning log");

            //npm install winston

    // const winston = require('winston');

    // const logger = winston.createLogger({
    // level: 'info',
    // format: winston.format.json(),
    // transports: [
    //     new winston.transports.Console(), // Logs to console
    //     new winston.transports.File({ filename: 'logs/app.log' }) // Logs to a file
    // ],
    // });
    
    // logger.info("This is an info log");
    // logger.error("This is an error log");
    // logger.warn("This is a warning log");
//===========================================================      

//Question 4.) What is Multer?
//Multer is a middleware for handling multipart/form-data, mainly used for uploading files in Node.js & Express applications. It helps process file uploads efficiently and stores them in memory or a specified location

//Installation
// npm install multer


//Example Usage:

// const express = require('express');
// const multer = require('multer');

// const upload = multer({ dest: 'uploads/' }); // Store files in "uploads" folder
// const app = express();

// app.post('/upload', upload.single('file'), (req, res) => {
//     res.send('File uploaded successfully');
// });

// app.listen(3000, () => console.log('Server started on port 3000'));

// //Use Case: File uploads (e.g., profile pictures, documents, media)

//===========================================================

//Question 5.) What is Whitelisting?
// Whitelisting is a security practice where only approved (trusted) IP addresses, email addresses, domains, or applications are allowed access to a system, network, or API.

//Example:-

// IP Whitelisting: Allowing only specific IPs to access an admin panel.

// API Whitelisting: Restricting API access to approved domains.

//🔹 Express.js Example (Whitelist CORS for specific domains):

// const cors = require('cors');

// const whitelist = ['https://trusted-site.com', 'https://myapp.com'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));
// Use Case: Preventing unauthorized access.

//===========================================================
//Question 6.) 3. What is the CORS Policy?
// CORS (Cross-Origin Resource Sharing) is a security policy implemented in browsers that restricts web applications from making requests to a different origin (domain, protocol, or port) than the one that served the web page.

//Example Problem:

// A frontend running on http://localhost:3000 cannot make a request to http://api.example.com unless CORS is enabled.

//Solution (Allowing CORS in Express.js):

// const cors = require('cors');
// const express = require('express');
// const app = express();

// app.use(cors()); // Allow all origins (not recommended for production)

// app.get('/data', (req, res) => {
//     res.json({ message: 'CORS enabled' });
// });

// app.listen(4000, () => console.log('Server running on port 4000'));
// Use Case: Allowing cross-domain API requests.

//===========================================================
//Question 7.) 4. How Many Types of APIs Are There?

//ANSWER :
//  There are four main types of APIs:
// Open APIs (Public APIs):
// Available for anyone to use.

// Example: OpenWeather API, GitHub API.
// Partner APIs:
// Shared with specific partners or businesses.

// Example: PayPal API for partner integrations.
// Internal APIs (Private APIs):
// Used within an organization for internal services.
// Example: A company’s internal HR management API.

// Composite APIs:
// Combines multiple API calls into a single request.
// Example: Fetching user details + order history in one API call.
//Use Case: Different APIs serve different purposes, from public data access to internal system integrations.


//===========================================================
//Question 8.) What is WebSocket?
//ANSWER :
// WebSocket is a communication protocol that allows real-time, two-way communication between a client (browser) and a server. Unlike HTTP, which requires repeated requests, WebSocket keeps the connection open, making it ideal for chat apps, live notifications, and real-time updates.

//Example (Node.js WebSocket Server):

// const WebSocket = require('ws');
// const server = new WebSocket.Server({ port: 8080 });

// server.on('connection', socket => {
//     socket.send('Hello from server!');
// });
//Use Case: Chat applications, stock market updates, multiplayer games.

//===========================================================
//Question 9.) Difference between useState, useRef, useMemo, and useEffect?

//ANSWER :
// Hook	Purpose
// useState	Stores and updates values in a component (triggers re-render).
// useRef	Stores a reference to DOM elements or values without re-rendering.
// useMemo	Optimizes performance by caching computed values.
// useEffect	Runs code on component mount, update, or unmount (e.g., API calls).

// Example:
// import { useState, useRef, useMemo, useEffect } from 'react';

// function demo() {
//   const [count, setCount] = useState(0); // Re-renders when updated
//   const inputRef = useRef(null); // No re-render when changed
//   const computedValue = useMemo(() => count * 2, [count]); // Caches the value
//   useEffect(() => console.log("Component mounted"), []); // Runs once on mount

//   return <div>{computedValue}</div>;
// }
//Use Case: Each hook is used for different performance optimizations.



