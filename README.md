# Front end Engineer Challenge

## 1. About me

Tell us about one of your commercial projects with Vue.js or AngularJS.

I don't have really good commercial projects with these frameworks. The most of my commercial projects based on React.
But I've made a couple of side and pet projects with Vue.js and Angular.

My last project with Angular:

### Fintech video tool

Fintech video tool provides to customers tools to manage Facebook ads campaigns. 
Customers can create tasks to generate video ads by template and use actual information about financial instruments. 
Customers are able to choose template, financial pairs and other params for Facebook ad and see preview of video ad.

I've made frontend part of this project and backend service to proxy requests to Alpha Vantage. 

![fnt3](./images/fintech-tool-3.png | width=300px)
![fnt1](./images/fintech-tool.png | width=300px)
![fnt2](./images/fintech-tool-2.png | width=300px)

## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?

First of all, I enjoy working on projects, which are useful for people. 
I like such markets as education, health, books, space etc.
Also, I prefer projects with interesting and difficult tasks.
And no less important the team, what works on the project. 
It's really important for a project, if the team like this project,
tries to do their best and think about quality of their work.

##### 2.2. Which are your favorite features of HTML5? How have you used them before?

I think, that my favourite features are:
1. New semantic tags
2. Inline SVG
3. New APIs, like: video/audio, location and timeouts.

Also, as a tutor and code reviewer I really like `contenteditable` tag

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.

Firstly, value of `innerHTML` is `DOMString`, whereas value of `createElement` is an `Element`. It means, that `createElement`
provides more powerful tools to work with nodes. We can save events, links to `Element`, when create it. It could be simpler, 
if we work with a big amount of nodes. 
Also, `innerHTML` can't be used with users data. There is potential for this to become an attack vector on a site, 
creating a potential security risk.
Otherwise, in some cases `innerHTML` can have shorter code and works faster. But generally, `createElement` can be much faster.
For example, it's a simple benchmark:
![benchamerk](./images/fintech-tool-2.png | width=300px)
https://jsbench.me/htk1c7megl/

In my opinion, for the most of cases we can use `createElement`. 
But for some simple and little parts of markup `innerHTML` can be used too.
Also, it's a convenient way to clear node. 

##### 2.4. Compare two-way data binding vs one-way data flow.

Two-way data binding means that UI is bound to model dynamically. If UI changes, the model changes too and vice-versa.

One-way data flow means that model is the single source of truth. If UI changes, some events trigger to send signal about changing to model.
Only the model has an ability to change data.

They both have pros and cons:
- Of data always flows in a single direction, makes it easier to understand;
- One-way data flow is deterministic;
- Basically, the idea about two-way data binding requires more resourses;
- Two-way data binding can be more difficult to understand;
- One-way data flow requires to create event handlers, updating of state, and re-rendering of the user interface to 
allow the simple act of typing text into an input element.
- Two-way data binding between components can results in components into errors, because of conflicting data from different
sources.

##### 2.5. Why is asynchronous programming important in JavaScript?

Asynchronous programming means that the engine runs in an event loop. 
When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result.
Javascript is a language, which we use to work with user interfaces.
User interfaces are asynchronous. The most part of the projects consist of code, which waiting user input, 
trigger event, send request and receive responses from servers.
If we want to create interfaces, which fit for users, we need to work with asynchronous programming. Otherwise, users will
need to wait of server responses or some other actions.

## 3. Styling

Given the HTML file **front-end/q3/q3.html**, implement the styling so the page matches the image below.

![Styling](./front-end/q3/images/result.jpg "Styling")

#### Bonus
- Implement styling rules that consider different screen sizes.

**Notes:**
- The footer should stick to the bottom when scrolling.
- You can, and should, use a CSS pre-processor, such as SASS or LESS.


## 4. SPA

Using Vue.js or AngularJS, implement an SPA that gets information from a server (explained below) and has the following pages:


### Books list

Display all available books returned from the API.
- Synopsis should be truncated at 200 characters.
- Book's title and cover should link to the book's individual page.
- Though the upvote functionality is not required, the upvote state should be represented.

![Books list](./front-end/q4/images/books-list.png "Books list")


### Book page

Display a single book information, highlighting the cover and displaying the full synopsis.

![Book page](./front-end/q4/images/book.png "Book page")

The upvote functionality is **not** required, the UI should only reflect if a book has been upvoted yet or not.
For this question, you **don't** have to replicate the example screens above, feel free to implement any design that you'd like.


**Important notes:**
- Add test coverage as you see fit;
- You may use TypeScript instead of plain JS;
- Use a CSS pre-processor;
- Your app must be responsible for all of it's dependencies and they should be installed via `yarn` or `npm install`. The app must run by using either `yarn start` or `npm start`.


#### Bonus

- Implement text search on the books list (for title and synopsis)
- Add pagination on the books list
- Add a comments section on the book page


### Server

In order to solve this problem, a simple server is provided, which you should use to get the data.
Head into `front-end/q4/server` and install the server dependencies using:

```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

```bash
yarn server
```

or

```bash
npm run server
```

The server should be running on port `3000`.

#### Available routes

#### http://localhost:3000/books

Returns a list of books, with their info.

#### http://localhost:3000/books/SLUG

Returns the book information for the given SLUG (404 otherwise).
