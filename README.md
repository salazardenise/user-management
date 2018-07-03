# user-management-app

This application is for a user management system for the New York City Website. At the home page, users see a list of users. Each user in the list can be
either deleted or updated. A new user can also be created and added to the list of users.

In addition, users can see the 2012 SAT Exam scores for schools in New York and the venues in Times Square. Both of these lists have a visual attached to them.

## User Stories
User stories used to create this application can be found at this [Trello board](https://trello.com/b/qqkVxYo7/user-management-app).

## How to visit the app

The app was deployed on AWS and can be found here: http://web-management-app.s3-website.us-east-2.amazonaws.com/
Due to high costs of keeping EC2 instances running, only frontend UI is up and running at link provided. For full experience, download this repo and start the app locally.

## How to start the app

All components of the app, including the microservices and the UI, can be started via a docker-compose command. Make sure Docker is up and running.
```
docker-compose up
```

## How to run feature tests

Once application is started, run feature tests at user-management/src/test/java/com/example/usermanagement/UsersApiFeatureTest.java

## How to end the app

```
control+C
docker-compose down
```

## How to run the Angular tests

In user-management/ui/, type and enter:
```
ng test
```
