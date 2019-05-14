# Requirements Specifications

## 1  Introduction

Compundium was a simple social media web application using Google App Engine and Google Cloud Technologies used to share and vote on puns.

Compundium2 will replicate the original CSSI Extension [Compundium](https://github.com/RyTaus/punr) Project made in August 2017 by Ryan Taus, Alejandro Zapata & Emily Shoji.

**Acronyms**

The acronyms contained in this document are as folllows:

Acronym | Meaning
|-----|--------|
CSCI  | Computer Software Configuration Item
CSC   | Computer Software Component
CSU   | Computer Software Unit
GUI   | Graphical User Interface

## 1.2  Component Breakdown

Compundium2 is comprised of the following CSCs

### 1.2.1 Graphical User Interface Client

The user will be interacting with the Graphical User Interface (GUI), which will be composed of the following CSUs.

#### 1.2.1.1 Login Page

The Login Page allows the user to log in to their account via their Google account.

#### 1.2.1.2 Main Page

The Main Page displays a timeline of past pun posts, and the ability to post a new pun.

#### 1.2.1.3 User page

Each user will have a user profile that allows them to keep track of what puns have been posted and how many up-votes they have recieved.

### 1.2.2 Database CSC

The Database for the application will track user data (i.e. posts, user info and scores)

## 1.3  Functional Requirements by CSC

### 1.3.1 Graphical User Interface

#### 1.3.1.1 Landing Page

* The login page shall be displayed to the user upon opening the main application.

* The landing page will display the website title or Logo

* The landing page will display a login button that will link to the login page

#### 1.3.1.2 Login Page

* Upon clicking the "login" button, the login page shall display an alert to the user to sign in using a Google account.

* The login page shall direct the user to a Google sign in page where a user shall input their username and password.

#### 1.3.1.3 Main Page

* The main page shall be displayed once a user has successfully logged in from the login page.

* The main page shall display a timeline display of all users' posts

* The main page shall display a post creation box that will allow the user to post a new pun to the timeline

* The main page shall display a link to the user's profile page


#### 1.3.1.4 Profile Page

* This page will display the user's information including their upvote count

* This page will display the user's past posts


### 1.3.2 Database

* The database shall be a noSQL Database

* The database shall be only accessible by the front end when logged in to a valid account.

* The database will record user upvote scores

* The database will record user posts

## 2.1  Performance Requirements by CSC

### 2.1.1 Graphical User Interface

#### 2.1.1.1 Login Page

* User shall be logged in within 5 seconds of entering their username and password.

* Main login screen shall be displayed within 3 seconds of opening the application.

#### 2.1.1.2 Main Page

* A new post will be visible to the user within 5 seconds of posting.

* The user shall be able to scroll through past posts.

* A user shall be able to upvote or downvote other users' posts

#### 2.1.1.3 Charging Station Menu

* The Charging Station Menu shall expand instantaneously after a user taps on the circular menu button on the bottom of the screen.

* All content and data in the Charging Station Menu (ie. location, assigned dock, and rewards) shall load within 1 second of viewing a subpage.

* The heatmap of the Charging Staion Menu shall load within 2 seconds of viewing the heatmap subpage. 

* The heatmap of the Charging Staion Menu shall pan and zoom instantaneously and smoothly in response to touch.

* All subpages of the charging station menu with scrolling functionality shall scroll instantaneously and smoothly in response to touch.

* The Charging Station Menu shall collapse instantaneously after a user taps on the circular menu on the bottom of the screen.

## 2.2  Project Environment Requirements

### 2.2.1   Development Environment Requirements

The following sections outline the environment requirements for development of the iOS application. 

#### 2.2.1.1 Software Requirements

Category | Requirement
|--------|------------|
Operating System | Mac OSX
IDE | VSCode
API | Google Maps API
API | Google Login API
Database | Google Datastore

We will be developing using VSCode on Mac OSX. The Login API will allow the user authentication to be handled by Google, and the  Maps API will give us locations of posts or users. 
