# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.
A pre-existing API was used to build a frontend user experience for users to interact with photos!

## Features

- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant / similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation consists of different topics and heart icon.
- The client-side application makes API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).


## Screenshots

 ### Homepage
 
!["Main Page"](https://github.com/MariaTiagunova/photolabs-starter/blob/main/docs/main_page.png?raw=true)

### Photo Details Modal

!["Photo Details Modal"](https://github.com/MariaTiagunova/photolabs-starter/blob/main/docs/photo_details_modal.png?raw=true)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
