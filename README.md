This is a backend API for [the Todo app](https://github.com/danielnmai/todo-list-app), built with Node.JS, Express, Prisma and MySQL.

## Getting Started

Install the app dependencies

```bash
yarn
```

Make sure you have Docker installed, run the MySQL image with docker-compose

```bash
docker-compose up
```

This will launch MySQL service and create a database named `todo_list_db`

Next, migrate the database with Prisma schema

```bash
yarn db:migrate
```

(Optional) seed the `Task` table with some sample tasks

```bash
yarn db:seed
```

Start the server in dev mode

```bash
yarn dev
```

Ping the server [http://localhost:8080/ping](http://localhost:8080/ping) to make sure it's up and running.
