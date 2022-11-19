Minimal Client & Server
=======================

> A really basic demonstration of the client-server relationship.

What is this?
-------------

Setting up a server-side for an app can feel like a really intimidating thing, especially for someone new to web development. This repo demonstrates a very basic server-side and client-side that interacts with it, complete with:

1. A `http://localhost:3000/` route that serves up the `index.html`.
2. A `http://localhost:3000/cat` API that returns a random cat name.
3. A catchall route that returns a 404.
4. A frontend that performs a request to the API when the user presses a button and then displays the response in the page.

It has **no external dependencies**, utilizing only the built-in [Node.js APIs](https://nodejs.org/en/docs/) for the server (rather than e.g. [Express](https://expressjs.com/)), and standard Web APIs such as [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). For a demo this simple, we don't really get much of a benefit from things like Express or React; the amount of code is similar, and it would just be more to have to conceptualize. Plus, these APIs are how [those](https://github.com/expressjs/express/blob/158a17031a2668269aedb31ea07b58d6b700272b/lib/application.js#L634-L635) [packages](https://github.com/facebook/react/blob/4ea063b56ff7ccc69c4cc67c30fd6f31f9880464/packages/react-dom-bindings/src/client/ReactDOMHostConfig.js) work under the hood, so they're good things to learn and see IRL.

How to use this
---------------

To get the code running, just do:

```console
node server.mjs
```

Now you can visit http://localhost:3000 and press the button. Amazing!

Now that you have an idea of what it does, *read the code*! Maybe mess around with it a bit. Some ideas:

* What if you needed to change the port number? Does it matter what it is?
* Can you make another API endpoint? How could you go about transferring objects instead of just simple strings?
* What happens if you point the frontend at the wrong URL?
* What does `charset` in the Content-Type header do? What happens if you get rid of it? What other values could it be and why would you use them? Does it have to match the `fs.readFile()`?
* What does `.end()` do? Do we *need* it? What if we leave it off (or switch to e.g. `res.write(html)`)?

You can also have some fun just in the browser, try firing up the [devtools](https://developer.chrome.com/docs/devtools/) and exploring:

* How does the experience change if there's a network outage after the page loads? Or even just a slowdown? Hint: Try [throttling](https://developer.chrome.com/docs/devtools/network/reference/#offline).
* How long does it take to perform the request?
* What happens when we click the button? When does `getNewCatName()` get called? When does it finish? What happens when we reach an `await`?
* When does the browser do the calculation to determine what the new cat name text actually *looks like* ("paint")? When do you get to see it on the screen?
* Instead of opening the page via http://localhost:3000/, what if you open the `index.html` file in the browser instead? Why doesn't the button work? What would it take to get it to work this way?
