# SubTrack (Frontend Part)

This is the frontend part of web application **SubTrack** which is based on React and MUI libraries

## Project Overview

SubTrack Frontend provides a visual representation of the website based on the design described in [Figma](https://www.figma.com/design/Jfp5oKp5IZlkBaWMUvIIhh/SubTrack?node-id=11-52&t=cI2llYnXv3RW6kLz-1). The site is built using React and MUI, with react-router for routing.

## Features

- User authentication with JWT and Google OAuth
- MUI Library and styled() for custom components
- Featured Sliced Architecture
- Chart.js for graphs
- Jest tests

## Featured Sliced Architecture

app/
pages/
layouts/
middleware/
widgets/
features/
entities/
shared/

## Installing

1. Clone repository

```shell
git clone https://github.com/stepan323446/sub-fe.git
```

2. Install npm requirements

```shell
npm install
```

3. Create a `.env` file and add the following variables.

```
VITE_API_URL=
```

4. Run backend server
5. Run dev server or build this project

```
npx vite --port=4000 # dev

npm run build # prod
```
