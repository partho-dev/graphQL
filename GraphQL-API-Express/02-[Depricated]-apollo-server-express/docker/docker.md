## Run both express & Mongo Together
1. create mongo container & express container on same nw
```
docker run -d \
  --name mongo-server \
  --network my-network \
  -e MONGO_INITDB_ROOT_USERNAME=partho \
  -e MONGO_INITDB_ROOT_PASSWORD=partho \
  -p 27017:27017 \
  mongo
```
- Update the env file with mongo with its name - `MONGO_URI=mongodb://partho:partho@mongo-server:27017/mydb?authSource=admin`

2. now create the express-graphql image
- `docker build -t graphql-server .`
3. Create container with that on the same nw as Mongo 
```
docker run -d \
  --name graphql-server \
  --network my-network \
  -p 4000:4000 \
  --env-file .env \
  graphql-server
  ```

===============

- Or, the best way is to create `docker-compose.yml` file and 
- execute - `docker-compose up`

- docker-compose.yml
```
version: '3'
services:
  mongo:
    image: mongo
    container_name: mongo-server
    environment:
      MONGO_INITDB_ROOT_USERNAME: partho
      MONGO_INITDB_ROOT_PASSWORD: partho
    ports:
      - "27017:27017"

  graphql:
    build: .
    container_name: graphql-server
    environment:
      - MONGO_URI=mongodb://partho:partho@mongo-server:27017/mydb?authSource=admin
    ports:
      - "4000:4000"
    depends_on:
      - mongo
```