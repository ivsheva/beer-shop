# Beer Shop

Beer Shop is a personal project designed for practicing layout development skills by a junior frontend developer. It serves as a clone of the original website [beerdome](https://www.beerdome.nl/en/).
The project was built using JSX (not TSX, which was a significant oversight).

## Technologies used

- Vite
- React
- Chakra UI
- Redux
- Redux Toolkit
- React Query + axios for requests
- Jest for testing
- AUTH0 for authorization
- Node.js for backend as a [RESTful API](https://github.com/ivsheva/beer-backend).

## Get Started

1. Clone the repo using `git clone https://github.com/ivsheva/beer-shop.git`.
2. Also, use `git clone https://github.com/ivsheva/beer-backend.git` to copy the web service of the application and set it up using readme.md from that project.
3. Go to [Auth0](https://auth0.com/docs) and register a new account.

   2.1. Go to `Applications` tab and create a new SPA Application.

   2.2. Enter this application settings and grab your domain and clientId.

   2.3. Create a .env file in the root of the project, an example of which is .env.example. Set your domain and clientId that you grabbed to VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID accordingly.

4. Run `npm install` to install all the dependencies.
5. Run `npm run dev` to start localhost.

Also, you can see [this project](https://beer-shop-rho.vercel.app/) deployed using vercel.

The website supports viewing on different devices thanks to its responsive design implemented using [Chakra UI](https://chakra-ui.com/), ensuring a seamless experience for users on both desktop and mobile.
