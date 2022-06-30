# Typesense Update Schema Error

This example shows the error received when attempting to update a 
collection schema.

To run:
 - Install dependencies (yarn or npm install)
 - Add server and key to ```src/index.ts``
 - Compile the code: ```yarn build```
 - Run the example: ```node dist/index.js```

This will create the schema, import two record, then attempt to alter a field in the schema 
using the drop/add method described in the documentation.

The output recieved when running is:

```
IMPORTED [ { success: true }, { success: true } ]
FAILED []
ObjectNotFound: Request failed with HTTP code 404 | Server said: Not Found
    at ObjectNotFound.TypesenseError [as constructor] (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/Errors/TypesenseError.js:23:28)
    at new ObjectNotFound (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/Errors/ObjectNotFound.js:25:42)
    at ApiCall.customErrorForResponse (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:334:21)
    at /Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:195:98
    at step (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:33:23)
    at Object.next (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:14:53)
    at step (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:18:139)
    at Object.next (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:14:53)
    at fulfilled (/Users/brentwilliams/projects/typesense/node_modules/typesense/lib/Typesense/ApiCall.js:5:58)
    at processTicksAndRejections (internal/process/task_queues.js:93:5) {
  httpStatus: 404
}
```
