# GA-Project-4-Python-Django

    Project 4: Moviewer E-commerce App

## Description

This was my fourth and final project on the course. I used React.js for the front end and Django to make an app which allows users to sign up, log in, and then browse the app to look for any movie and either buy or sell that specific movie. 

## Deployment link

##################

## Getting Started/Code Installation

The app has 1 front end repo which can be accessed in the following link: 
https://github.com/Mohamed1419/GA-Project-4-Python-Django/tree/main/client/moviewer

The app has 1 back end repo which can be accessed in the following link:
https://github.com/Mohamed1419/GA-Project-4-Python-Django/tree/main/server

To run you need to have Node.js installed locally and you can find the instructions to that in the following link: 
https://nodejs.org/en/download/package-manager/

You need to run the back end server:
Whilst in the server directory, run: 
    python manage.py runserver

You also need to run the front end client:

Install all the node modules by running the following in the root of the client/moviewer:
npm install

Start up the app by running the following in the root of the client/moviewer:
npm start


## Timeframe & Working Team (Solo/Pair/Group)

In this project I was working alone. I had 12 days to prepare our project for presentations from 12th November 2022 to 29th November 2022. 

## Technologies Used

Front End:
- React.js
- JavaScript
- CSS
- HTML
- NPM

Bank End:
- Python
- Django
- JWT
- PostgreSQL

Version Control:
- Git

Design:
- QuickDBD
- Excalidraw

Planning:
- Trello

## Brief Instructions

Technical Requirements

You must:

- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- (Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut)
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.

Necessary Deliverables

- A working app hosted on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project

## Planning


The first thing I did to prepare for this project was think of an idea, and after considering a few which I had an interest in and that could realistically meet all the deliverables I decided upon a movie e-commerce website. I decided to name the project Moviewer as I thought it was a fitting and unique title. 

Next I started visioning what I wanted the app to look likes and designed a wireframe for an MVP using Excalidraw. The link to which can be found here: https://excalidraw.com/#room=8ee12d790dcf6e946641,YQkYTp2yG78MNJ6jSD3uaA. I took inspiration from other well known e-commerce websites to get an idea of how I could execute various functionalities into my project such as EBay, Imdb, and HMV. 

Next, I started working on creating my data structures for my backend and after giving a lot of thought ended up with the following database diagrams as seen in this following link: https://app.quickdatabasediagrams.com/#/d/drLFv3. Some key points to consider for myself was finding a public API for movies and I happened upon one which scrapes Imdb and provided all the data I needed. I should mention that this API was only being used for the purpose of this particular project and I was not going to deploy this project for the public to use. So I settled upon this API: https://i-m-d-b.herokuapp.com/docs/. 

Note: As of today, it seems that this API has been discontinued by the creator following Herokus changes to their plans (which had occured after the completion of this project), hence the app is currently broken at this point in time. 

## Build/Code Process and Challenges
```js
const getMovies = async () => {
    try {
        movies = await Promise.all(featured.map(tt => fetch(`https://i-m-d-b.herokuapp.com/?tt=${tt}`).then(res => res.json())));
        setMovies(movies);
        console.log(movies);
            } catch (error) {
            console.log(error);
        }
        };

getMovies();
```

  This snippet from my homepage I was excited about because I used a new method which I was previously unfamiliar with, and this was the Promise.all method. the problem I was facing before was that I needed a way to fetch from 9 different urls as the API I was using was limited in that I could not fetch all the data I needed all at once. So originally I attempted to actually fetch 9 times which did not work at all as it would not even return even 1 of the movies' data when I ran 'npm start'. Therefore after some research I happened upon Promise.all which worked. Although admittedly it did work slowly. Nonetheless I was still happy as my app was doing what it was supposed to do. 

```js
async function getResults() {
try {
    const res = await fetch('https://i-m-d-b.herokuapp.com/?q=' + params.query + '&s=3&l=15');
    const resultsData = await res.json();
    let results1 = [];
    Object.keys(resultsData).forEach(function(key) {
    results1.push(resultsData[key])
});
console.log(results1);
for (let i = 1; i < results1.length-3; i++) {
    results.push(results1[i].tt_url.substring(27))
}

const getMovies = async () => {
    try {
        // setMovies([])
        // setResults([])
        movies = await Promise.all(results.map(tt => fetch(`https://i-m-d-b.herokuapp.com/?tt=${tt}`).then(res => res.json())));
        setMovies(movies);
        // console.log(movies);
    } catch (error) {
        console.log(error);
    }
    };

    getMovies();
    } catch (err) {
    console.log(err);
    }
}
```

  This is another block of code which I felt good about. The reason being that it was a goal of mine to implement a search bar tool which allowed users to search by particular keywords and see a selection of results that matches said keywords. fortunately for me the API allowed easy usage of this as all I actually needed to do was concatenate the users search query (params.query) into the end of the url that I wanted to fetch and it would give me a list of results that matched the search criteria. This worked well however some problems which occured were that for some reason it made the fetch call twice, and I could not figure out why this was happening. What I mean is that when a user searched any particular term, it would return the results (lets say as an example 9 movies which matched), and then a few seconds later it would again return those same (9) results at the end (so in total 18 results would show and there would appear the same movie twice). Another thing is that it took a long time for the results to actually show up. Users would wait up to 10 seconds just to see the search results. However I believe this particular problem was due to the API I was using as it would take quite a long time for almost any request.

## Wins, Bugs, and Future Improvements


- I was able to meet all the deliverables which I was assigned meaning this was a successful project
- I managed to successfully achieve a goal I had set myself in the past which was to incorporate a search bar into the app
- I felt as thought I managed my time well, and broke down the project into manageable chunks and therefore the project was smooth sailing, furthermore, when problems did arise I did not waste a large and wasteful amount of time on it like I did with some previous tasks, I simply tried what I could and then moved on and came back to it when my mind was fresh and this method worked well for me
- I was able to use what I had learnt in Python to develop my backend and debug it which I felt good about because this was the first big project I used it in
- I was able to make my frontend visually impressive, and in reality this links to the previous point about time management because I gave myself time in the end to work on the css and design to make it look good, whereas before I would be short on time towards the end due to being carried away with one task or another

- A bug which is present on my app as I mentioned previously is that when a user uses the search bar, duplicate results would always show up
- Another bug which exists is that even though I want the lowest price to be the featured price for any given movie, this would not always work and sometimes it would show the price of a seemingly random listing for that movie
- Using the search bar would take a very long time to load up all the results

- Some improvements that I would like to add is having a checkout feature, I wanted this to be a part of the app in the first place but since this was not really an essential part for me to meet all the deliverables, I left it off for the time being because the project was big enough as it was, and I decided that I would rather have a guaranteed small project that was good quality by the end date rather than a large ambitious project which does not work well
- I would want the app to be mobile friendly
- I would like for the app to have faster speeds

## Key Learnings/Takeaways

- The app suffered from a major setback in that I did not account for real world news and updates in and around the tech space during my planning process, due to this a major component of my app is currently missing that renders the app unusable (Heroku changed their free plan and since my app was using an API that was hosted on Heroku, the creator of the API discontinued their server meaning I could no longer send requests to extract the movie data for my app)
- Greater understanding of user authentication, as I had quite a few issues with that on the backend
- I understand in much more detail how to engineer an app especially with regards to Django and the backend
- Further improving time management skills and dealing with time constraints; understanding realistically what I can and can't do in a given time period
- Understanding further what my weaknesses and strengths are, so that when I have time I know what to work on to be a better software engineer