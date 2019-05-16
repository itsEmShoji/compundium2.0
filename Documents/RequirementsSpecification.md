# Requirements Specifications

## 3.1  Introduction

The MobieDock Application will 

**Acronyms**

The acronyms contained in this document are as folllows:

Acronym | Meaning
|-----|--------|
CSCI  | Computer Software Configuration Item
CSC   | Computer Software Component
CSU   | Computer Software Unit
GUI   | Graphical User Interface

## 3.1  CSCI Component Breakdown CSC

CSCI Compundium2 Application is comprised of the following CSCs

### 3.1.1 Graphical User Interface Client CSC

The user will be interacting with the Graphical User Interface (GUI), which will be composed of the following CSUs.

#### 3.1.1.1 Login Page CSU

The Login Page allows the user to log in to their account via their Google account.

#### 3.1.1.2 Home Page CSU

The Home page will be the main page will be the landing page for the user, showing the header, navigation bar and information about the project

#### 3.1.1.3 Feed Page CSU

The feed page will show the most recent posts from users on the site. This page will also display the number of users currently on the site and their usernames.

#### 3.1.1.4 Post Page CSU

The post page will contain a form that allows users to post on the site. The user will then be redirected to the feed page.

#### 3.1.1.5 User Profile Page CSU

The user profile will allow the user to view their posts and their score.

### 3.1.2 Database CSC

The Database application will track data relevant to the users and their posts including the time posted and the contents of the posts, as well as users scores.

## 3.2  Functional Requirements by CSC

### 3.2.1 Graphical User Interface

#### 3.2.1.1 Login Page

* The login page shall be displayed to the user upon opening the main application.

* The login page shall display a "login" button.

* Upon clicking the "login" button, the login page shall display an alert to the user to sign in using a Google account.

* The login page shall direct the user to a Google sign in page where a user shall input their username and password.

#### 3.2.1.2 Main Page

* The main page shall be displayed once a user has successfully logged in from the login page.

* The main page shall display information about the site

* The main page shall display navigation bar to help the user navigate the application.

#### 3.2.1.3 Feed Page

* The feed page shall display users posts

* Each Post will display who posted it.

* Each Post will display the time posted.

* Each Post will contain a count to keep track of upvotes.

* Each post will contain a button for upvotes.

#### 3.2.1.4 Post Page

* The post page shall contain a form for the user to type and post from.

* The user will be redirected to the feed page once hitting submit.

#### 3.2.1.5 User Profile Page

* The user menu shall display a window when a user clicks on the user menu button on the bottom of the main page.

* The user menu shall take up most of the screen with small margins on all sides, and shall not cover the circular user menu button on the bottom of the screen.

* The user menu shall display tabs on the top of the window for the user to select a subpage. The tabs include: 1) Statistics 2) Rewards 3) Heatmap

* The user menu shall stop displaying if open when the user clicks on the user menu button on the bottom of the screen.

### 3.2.2 Database

* The database shall be Google Datastore.

* The database shall be only accessible by the front end when logged in to a valid account.

* The database shall record the users email.

* The database shall record the number of posts the user has created.

* The database shall record the number points the user has gained.

* The database shall record which posts the user has liked.

* The database shall record the contents of each post.

## 3.3  Performance Requirements by CSC

### 3.3.1 Graphical User Interface

#### 3.3.1.1 Login Page

* User shall be logged in within 5 seconds of entering their username and password.

* Main login screen shall be displayed within 3 seconds of opening the application.

#### 3.3.1.2 Feed Page

* The posts should load within 3 seconds.

* The User should be able to see their posts on redirect from the Post Page.

#### 3.3.1.3 Post Page

* The user should be redirected to the post page in under 5 seconds after posting.

## 3.4  Project Environment Requirements

### 3.4.1   Development Environment Requirements

The following sections outline the environment requirements for development of the iOS application. 

#### 3.4.1 Software Requirements

Category | Requirement
|--------|------------|
Operating System | Mac OSX
IDE | VSCode
Database | Google Datastore

We will be developing using VScode, which runs on Mac OSX. Datastore will be used to store data and it will be hosted on Google Cloud.

### 3.4.2   Execution Environment Requirements

The following sections outline the environment requirements to run the application, assuming the application is running locally and not downloaded from the App Store.

#### 3.4.2.2 Software Requirements

Category | Requirement
|--------|------------|
Operating System | Mac OSX
Database | Datastore

The application will run on Google Cloud using Google App Engine.
