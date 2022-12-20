# Project Template: React/Rails API

## Description

Project created to be a sandbox for phase 4 live coding practice

# Installation

clone down the reposity and change into the directory run

`bundle install && rake db:create && rake db:migrate && rake db:seed`

Open a second terminal and change into the client directory run

`npm install`

# Instructions

First go over the code that's in here. It's ok if you aren't 100% sure on how I've written something as long as you have an understanding how its working. For the associations

Movie

- has many characters
- has many actors through characters

Actor

- has many characters
- has many movies through characters

Character

- belongs to actor
- belongs to movie

## Challenge 1

Code out the MovieNew Component so that you are able to create a Movie and one character, as well as associate an actor to that character. This should add a new movie to the database as well as a new character. There should be a dropdown to select the actor that the character will be associated with. The new movie should be added onto the frontend movie list without a page refresh.

Bonus would be to be able to create as many characters as needed for the movie instead of 1.

## Challenge 2

Code out a new component called EdsRecentMovies. This component should make a request to the backend and the backend should return the 5 most recent movies the actor Edward Norton has been in. The seeds is set up to ensure there are enough associated movies to Edward Norton.

## Challenge 3

Code out a new component called BigHitActors. This component should make a fetch request to the backend and return all of the Actors that have a movie that has made at least 100,000,000 in box_office earnings.

# Additional Practice

For additional practice think about what other information owners or users of this website might want. For example, making a query to find the actor who has been in the most movies. Work on your querying ability.
