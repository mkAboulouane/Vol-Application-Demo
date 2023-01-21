FROM maven:3.6.1-jdk-8-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace
COPY src /workspace/src
RUN mvn -f pom.xml -P prod clean package -Dmaven.test.skip

FROM openjdk:8-alpine
COPY --from=build /workspace/target/*.jar app.jar
ENV BACK_PORT ${BACK_PORT}
EXPOSE $BACK_END_PORT
ENTRYPOINT ["java","-jar","app.jar"]
# java -jar app.jar
