FROM java:7

WORKDIR /home/root/router

COPY src /home/root/router/src
COPY pom.xml /home/root/router/pom.xml

RUN apt-get update && apt-get install -y maven
RUN mvn package

COPY src/main/resources/aima-core-bmt-1.0.jar ./
COPY src/main/resources/optimizer.jar ./

ENTRYPOINT ["java", "-jar", "target/router-0.0.1-SNAPSHOT.jar"]
