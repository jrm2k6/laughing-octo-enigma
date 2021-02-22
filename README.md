### To run

1. yarn
2. update index.ts to match with your postgres DB properties
3. run `npx sequelize-cli db:migrate --env "local"`
4. run `npx sequelize-cli db:seed:all --env "local"`
5. `./node_modules/.bin/babel-node --extensions '.ts' index.ts`