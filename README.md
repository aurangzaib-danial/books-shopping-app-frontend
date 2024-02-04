This is a e-book shopping app that I made to practice my NextJS, React, TypeScript and TailwindCSS skills. Entire front-end is handled by NextJS while api services are provided by a Ruby on Rails server.

## Video Walk-through
...TODO

## Development Setup
Firstly, setup an AuthJS secret for encrypting JSON tokens. This token will be also used by the api server for authenticating requests by the front-end. Add secret by creating a file named `.env.local` in the root of this repo and add secret in following format:

```
AUTH_SECRET=your_secret
```

You can generate a secret by running following command in your terminal.

```
openssl rand -base64 32
```

Install node packages

```
npm install
```

Now before you start the front-end server, it is important to start the api server first. For starting the api server, follow instructions on this [link](https://github.com/aurangzaib-danial/books-shopping-app-api).

Once api has been setup, start the NextJS server by using followign command:

```
npm run dev
```

Browse the app using localhost:3001. The default port of 3000 used by NextJS has been changed to 3001 as 3000 is used by Rails api. 

## License
This project is released under the MIT License.
