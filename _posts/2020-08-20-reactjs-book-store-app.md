---
layout: post
title: ReactJS Book Store application
category: Dev
comments: true
featured: /public/images/2020/08/book-store-design.png
summary: I want to note down how I created a simple ReactJS app in two nights time, from scratch to deploying on the cloud.
tags: [web, development, reactjs]
---
![Book Store Design Concept](/public/images/2020/08/book-store-design.png)
Today I want to note down how I created a simple ReactJS app in two nights time, from scratch to deploying on the cloud.

I already had a REST API with Express running on NodeJS deployed and ready. All it needed was a front end application to consume the data.

<!-- more -->
It seems like we can get a lot of work done at late night if is interesting enough. Most of my Android development contributions were also at late nights.

Bootstrapping a ReactJS app is very easy, thanks to the [Create React App](https://github.com/facebook/create-react-app) CLI. And early on I decided to use th excellent [Bulma CSS Framework](https://bulma.io/), which is lightweight and easy to use.

What made it easy to complete the project was when I opted for a simple data store as opposed to something grand like Redux. 
The rest service calls were made with the ever dependable axios library. 

The real challenge was when it came to deploy the project to the cloud. I had deployed the Rest API on [Heroku](https://www.heroku.com) and thought it would be as simple 
as pushing the repository to deploy.

Oh, was I wrong in this case. I had to do a lot of searching and came across multiple solutions until I was able to get it done with this information.

 - The build created with `npm run build` on a ReactJS project is a folder with static files
 - A new server process must be spun up to serve the files in the build folder
 - I setup a very basic [server.js](https://github.com/midhunhk/react-book-store/blob/master/server.js) fie which would be run the 'start' script when deployed
 
Essentially I felt like most of my time was spent with deploying the app and customizing the theme as per my design in Adobe XD.

### References
1. [Book Store App](https://tresdale-book-store.herokuapp.com/)
2. [Github Project](https://github.com/midhunhk/react-book-store)
3. [Sample REST Service](https://github.com/midhunhk/sample-rest-api)