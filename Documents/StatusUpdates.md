
# March 25
* Began writing docs and planning

# April
* decided on keeping current backend
    * jinja & GAE need Python2.7 for the libraries
    * ndb ORM isnt supported in Python3 but used for datastore
* Tried JSON dump & although we could get it to show up at an endpoint, we couldnt read it and use it with react.

# May 5 - 11
* react doesn't work well with jinja templates, rendering the jinja template from {this.props.children} is as close as we could get
* front-end edits finished

# May 13
* Finally had time to work on launching the site
    * redirection bugs  
        * forgot /browse was changed to /feed
    * Login bug - automatically logs user in if google account is logged in on chrome
        * i think this is a google authentication error cannot be fixed

# May 15
* commited node_modules
    * thought i had already put that in the .gitignore but i guess not
* edited docs
* compiled status updates i had from notes i took over the course of the few weeks

