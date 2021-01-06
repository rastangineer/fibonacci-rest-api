# Fibonacci REST API

The Fibonacci REST API has only one single feature:

* Given an index `n`, the API will reply with the value of the `n` position of the Fibonacci series. Example: if `n=3` response should be `2`, if `n=6` response should be `8`.

## Objective

This repository will be used to versioning the code of the solution but also as a journal or notebook about the process followed to implement the solution.

## Initial challenges

1. I don't consider myself a `REST API` developer, or even a developer.
   * But I have plenty of experience working with middleware, HTTP, SOAP and REST protocols. I used to be a **Java** developer long time ago.
2. What programming **language** to use?
   * From previous personal projects I can say I'm more familiar with `node.js` and I read that `express.js` is a web framework for node.js that allows you create to REST APIs quickly. So the winner is **node.js + express.js**
3. I'm familiar with `REST API` services, `SOAP/HTML` Web Services and similar technologies, but should I start with **design** or just start googling and try?
   * Definitively YES, that would help to **identify** the modules/functions needed.
4. How do I **start** with something basic?
   * I like to start with the very basics, and then gradually add funcionality in a iterative and **incremental** way. Since I'm new developing REST APIs I would start with the most basic thing, the famous **Hello World**, for example an API that just replies with the text `Hello World`. 
   * Next step would be passing something like the `username` using **parameters** and reply with something like `Hello World username`.
   * Now that we are able to pass and read parameters, we can start thinking about how to generate the Fibonacci series, from what I remember from college this is a very good use case for **recursive programming**.
5. Thought process?
6. Technical decisions?
   * What is the maximun index `n` allowed.
   * Harcoded Fibonacci series? Or Fibonacci series generated on each request.
7. Optimizations
