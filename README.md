# moviecrud
This project is for Mondia test task

To build the angular 7 project:
go to the movie folder
ng build

To build the spring project :
mvn clean install

To setup the database:
go to spring project
go to the resource  folder under main
modify the following properties

spring.datasource.url=jdbc:mysql://localhost:3306/db_movies
spring.datasource.username=root
spring.datasource.password=root

To run the spring project :
java -jar target/video-0.0.1-SNAPSHOT.jar

