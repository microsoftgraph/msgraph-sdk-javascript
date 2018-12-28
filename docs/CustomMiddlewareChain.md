# Implementing Custom Middleware Chain

## Middleware

As name suggests it comes in middle of something and that is request and response cycle. It has access to context object which contains request, response objects and any other options that are specific to middleware. Also it has an access to execute next middleware in the chain.