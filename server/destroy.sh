#!/bin/sh
# shut down and remove the containers
docker exec -it server npx knex migrate:rollback --all --knexfile db/knexfile.cjs 
docker-compose down
