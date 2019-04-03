FROM node:10.15.3
RUN mkdir /app
WORKDIR /app
ADD . /app
EXPOSE 8080
CMD [ "node ./dist/main.js" ]
ENTRYPOINT [ "sh", "-c" ]