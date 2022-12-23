# GA-Project-4-Python-Django

    Project 4: Moviewer E-commerce App

    Description

This was my fourth and final project on the course. I used React.js for the front end and Django to make an app which allows users to sign up, log in, and then browse the app to look for any movie and either buy or sell that specific movie. 

    Deployment link

##################

    Getting Started/Code Installation

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


    Timeframe & Working Team (Solo/Pair/Group)

In this project I was working alone. I had 12 days to prepare our project for presentations from 12th November 2022 to 29th November 2022. 

    Technologies Used

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

    Brief Instructions

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

    Planning


The first thing I did to prepare for this project was think of an idea, and after considering a few which I had an interest in and that could realistically meet all the deliverables I decided upon a movie e-commerce website. I decided to name the project Moviewer as I thought it was a fitting and unique title. 

Next I started visioning what I wanted the app to look likes and designed a wireframe for an MVP using Excalidraw. The link to which can be found here: https://excalidraw.com/#room=8ee12d790dcf6e946641,YQkYTp2yG78MNJ6jSD3uaA. I took inspiration from other well known e-commerce websites to get an idea of how I could execute various functionalities into my project such as EBay, Imdb, and HMV. 

Next, i started working on creating my data structures for my backend and after giving a lot of thought ended up with the following database diagrams as seen in this following link: https://app.quickdatabasediagrams.com/#/d/drLFv3. Some key points to consider for myself was finding a public API for movies and i happened upon one which scrapes Imdb and provided all the data i needed. I should mention that this API was only being used for the purpose of this particular project and i was not going to deploy this project for the public to use. So i settled upon this API: https://i-m-d-b.herokuapp.com/docs/. 

Note: As of today, it seems that this API has been discontinued by the creator following Herokus changes to their plans (which had occured after the completion of this project), hence the app is currently broken at this point in time. 

    Build/Code Process and Challenges



    Wins, Bugs, and Future Improvements


- We were able to use Git well for version control and merging the final code together. Although we did happen upon some problems along the way we communicated effectively as a team and got it sorted in no more than a few hours. 
- We were able to manage the workload and deliver an MVP by the timeframe we decided as a team. Then after that we started working on our stretch goals. And in the end had a viable and working app. 
- We were able to meet all deliverables and meet the deadline date with a deployed app that we could present. 
- We worked smoothly as a team displaying strong communication skills and we knew what was going on at all times and felt comfortable with the work distribution. 
- I think the parts which were my responsibility I worked to the best of my ability to make mobile friendly, and can say it turned out pretty well
- I think I was able to also make the app look very sleek and modern which was a goal of mine from my previous project

- A flaw which the app still has is the the details pages' CSS was not matching with the rest of the websites theme which can be off putting to users. Although I did raise this concern to the appropriate team member, it was not my responsibility to fix it, nor was it my code to fix. 

- To enhance the app I would like to add a searchbar feature as I think that is something which will make the user experience on the app much better
- Another feature which I would have liked to add is a following system

    Key Learnings/Takeaways

- I further expanded on my skills of working alongside people, this is because I worked with a team of 3 other people
- An extension of the previous point is that I also learnt more about what it means to manage workloads and distribution of work, and which styles work better. Meaning whether to break down the app into chunks based on pages or just general front end and back end. 
- I further improved on my skills using Git and version control. 
- I understand more what is required to launch a full stack app
- I learnt a lot about how to create and use a back end server 