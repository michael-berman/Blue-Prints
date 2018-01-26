# Blue Prints

[Blue Prints](https://blue-prints.herokuapp.com/#/) is a single page web application built on Rails, React.js,
Redux and Postgresql. It is inspired by Instructables and allows users to
create projects with a step-by-step design that includes uploading photos.
Users can also browse, search and comment on various projects.

# Features & Implementations

## NavBar

![](https://i.imgur.com/YaIShkp.png)

Users can direct to the home page at any time by clicking on the home icon,
search for projects in the search bar, create a project and access the dropdown
menu from the right corner. **Implementation:** Using a react component for
the navbar, subcomponents were rendered for the dropdown and search bar.
Searches were queried by the backend through an AJAX request.

## Front Page

![](https://i.imgur.com/hXwpBrB.png)
Users can browse through various projects on the main page, where the main
picture is shown, as well as the title and the creator. **Implementation:**
Using AJAX requests to fetch particular projects and render them using React.

## Sign Up/In Page

![](https://i.imgur.com/B4YdhfK.png)

Users can either Sign up or log in if they have already created an account.
**Implementation:** Session cookies were created for either the case of a
login or signup, and the backend queries the current user so that the
profile picture and dropdown will know who the user is.

## Create Project Page

### Main Create Page

![](https://i.imgur.com/dvz3kvD.png)
Users can create the title for a project through a modal, add steps and
add multiple photos to each step. **Implementation:** Using ActiveRecord,
form data was appended in order to package up the projects that consists of
steps, which in turn consist of photos so that the backend will handle creating
the project along with the necessary associations.

### Step Create Page

![](https://i.imgur.com/0oRWxax.png)
Users can create a title and a body corresponding to which step was selected.
**Implementation:** A callback was used to update the main project with the
step in order to keep data in the state organized.

## Browsing Project Page
![](https://i.imgur.com/DPs7zxl.png)

## Comments

![](https://i.imgur.com/yDh5yPt.png)

## Search Project Page
![](https://i.imgur.com/xxZmd9E.png)

# Libraries & Technologies
* React.js
* Redux
* Rails
* Babel
* Postgresql

# Future Features
* Able to edit a project
* Able to follow a project
* Slideshow on the main page
* Toolbar for creating a step
* Drag and drop pictures when creating a project
* Add categories for projects
* Add features project page
