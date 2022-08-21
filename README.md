# topl_back_end_exercise

Create an API to consume an external News API

## Description

This project build a REST API with Express, Node, TypeScript 
The API achieve these requiments:
1. Fetching N news articles 
2. Searching by keywords
3. Searching by title keyword
4. Cache the data.
5. It is using Swagger for documentation

## Getting Started

### Dependencies

* TypeScript: Compiler with static set type definitions
* Ts-node: Run and configure Typescript execution environments
* Express: Node.js web application framework
* @types/express: Type definitions for Express
* Morgan: A Node.js HTTP request middleware for Node.js
* @types/morgan: Type definitions for Morgan
* Axios: A Node.js HTTP client library for Node.js.
* @types/Axios: Type definitions for Axios.
* Nodemon: Server utility library for monitoring changes of the code on a text editor.
* SwaggerUI: Documentation 
* Jest: Testing
* node-ts-cache: Cashing

### Installing dependencies
```
npm install
```
### Running the server

```
npm run dev
```

Once the server is runing you can use Postman or Swagger to test the API.
The endpoint URL is: 

http://localhost:6070/articles/search

 Query Params:
 * keyword*: This is the purpose of your search. Articles returned are filtered by the given keywords
 * max: Specify the number of articles that will be returned
 * inTitle: It accepts true or false, and it enables searching by title
 
In Swagger http://localhost:6070/docs/#/ there is the information of this API.

## Testing

```
npm test
```
## Author

Luis Santiago Taco Vilatuña

:)
