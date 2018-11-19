---
title: "Anatomy of an HTTP Request"
date: "2018-11-22"
tags: ['learn','http','reference']
---

In order to understand how the web works, you have to understand the request-response cycle and how an HTTP request is structured.  This is another post for future me, as I know I'll need to refer back to this fundamental piece of information.

Each HTTP request is made with a method or verb:

| HTTP Method  | Purpose                                 | 
| ------------ | -------------                           | 
| GET          | Request data, retrieving information    |
| POST         | Create new data, adding it to adatabase | 
| PUT          | Update existing data                    | 
| PATCH        | Update existing data                    |
| DELETE       | Remove data                             | 

And each request has the following requisite parts:

| Part         | Purpose                                           | 
| ------------ | -------------                                     | 
| Method/Verb  | As above, these tell the purpose of the request   |
| URI          | This is the location or resource for the request  | 
| Headers      | Metadata associated with the request              | 
| Body         | Payload of the request containing data            |
| Status Code  | Response notifyng request of the resulting status | 

Here's a sample HTTP request for a favicon on this page, as you can see in the 1st line, the METHOD, URI, and protocol "HTTP/1.1" all appear:
```
GET /favicon.ico HTTP/1.1
Host: localhost:8000
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome
DNT: 1
Accept: image/webp,image/apng,image/*,*/*;q=0.8
Referer: http://localhost:8000/2018/11-22-anatomy-of-an-http-request/
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9,es;q=0.8
Cookie: io=E42523DSDFSDFdddZHkAAAD
```
Pretty cool, right? :satisfied:

Basic guide to Status Codes, as these go hand-in-hand.  When you place an HTTP request to a server, the server responds with a status code, informing your browser (the client) what happened to your request:


| Code | Purpose       | 
| ---- | ------------- | 
| 1xx  | Information   |
| 2xx  | Success       | 
| 3xx  | Redirects     | 
| 4xx  | Client errors |
| 5xx  | Server errors | 


And here's a sample response from my local development server:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Mon, 19 Nov 2018 04:13:08 GMT
ETag: W/"7d26-1672a2c0846"
Content-Type: image/x-icon
Content-Length: 32038
Date: Mon, 19 Nov 2018 04:57:45 GMT
Connection: keep-alive
```

As you can see, the first line has the protocol "HTTP/1.1" and the status code: 200 OK or "Success!".  In this example, the local development server successfully returned the favicon.ico, and it displayed in the browser tab next to the title of the site.