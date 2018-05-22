# user-management-app

This application is for a user management system. At the home page, users see a list of users. Each user in the list can be
either deleted or updated. A new user can also be created and added to the list of users.

## User Stories
User stories used to create this application can be found at this [Trello board](https://trello.com/b/qqkVxYo7/user-management-app).

## How to start the app

All components of the app, including the microservices and the UI, can be started via a docker-compose command.
Make sure Docker is up and running. In
the user-management folder, type and enter:
```
docker-compose up
```
Then, visit this link: http://localhost:4200/

## How to run feature tests
Once application is started, run feature tests at user-management/src/test/java/com/example/usermanagement/UsersApiFeatureTest.java

## How to run the Angular tests

In user-management/ui/, type and enter:
```
ng test
```

## How to end the app
```
control+C
docker-compose down
```

