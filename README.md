# user-management-app

This application is for a user management system. At the home page, users see a list of users. Each user in the list can be
either deleted or updated. A new user can also be created and added to the list of users.

# How to start the app

All components of the app, including the microservices and the UI, can be started via a docker-compose command.
Make sure Docker is up and running. In
the user-management folder, type and enter:
```
docker-compose up
```

# How to end the app
```
control+C
docker-compose down.
```

# How to run the tests

Only front-end tests are implemented. In user-management/ui/, type and enter:
```
ng test
```
