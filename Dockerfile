FROM node:14.15.1
RUN mkdir -p /src/proxy
WORKDIR /src/proxy
COPY . /src/proxy
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "docker"]