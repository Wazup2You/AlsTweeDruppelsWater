# Twee druppels water

'Twee druppels water' is een applicatie dat zich voornamelijk focussed op het vergroten van het bewustzijn van de gebruiker over drinkwater en de meerwaarde van kraanwater, door de verschillen tegenover elkaar te zetten op vier verschillende manieren.

Bekijk [de live demo](https://tweedruppelswater.netlify.app/)

## Technologie

Deze applicatie is gemaakt in React.js. De 3D animaties zijn gemaakt met Three.js in combinatie met React-tree/fiber en React-three/drei om het te laten werken in React. De druppels zijn gemodelleerd in Blender.

Bronnen:

- [React.js](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [React-tree/drei](https://github.com/pmndrs/drei)
- [React-tree/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Blender](https://www.blender.org/)

## Project opstarten

1. cd frontend
2. npm i
3. maak een map 'videos' aan in de 'src' map
4. plaats 4 videos in de 'src' map
5. importeer de videos in 'app.js' en pas de video variabelen aan
6. `npm run start`

**Placeholder videos voor stap 4** [placeholder videos](https://drive.google.com/drive/folders/1S6KnX8iA3yaO5KWXBdzbysF0zGYMB-nT?usp=sharing)
**Let op:** Zorg dat je Node versie 14 of hoger op je computer hebt geïnstalleerd, dit kan je controlleren met cmd `node -v`

## Tailwind

Styling gebeurt met Tailwind.

Bekijk de geconfigureerde instellingen in tailwind.config.js en de aangemaakte stijlen in de src/index.css

Reeds toegevoegd:

- Oasen font (strada en strada light)
- Oasen kleur blauw
- [Line-clamp plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- Scherm breekpunten
- H1 blauw en H1 wit

## Aanbevelingen voor doorontwikkeling

- Mobiele stijling toevoegen: de applicatie is nog niet volledig responsive gestijled
- Meerdere tips en quizvragen toevoegen
- Zelfgemaakte relevante video's toevoegen aan de druppels op het visuals scherm en het tips scherm
- Verbeteren van de [accessibility](https://www.w3.org/TR/WCAG22/): de applicatie is nog niet accessible
- Informatie versimpelen, zodat deze ook toegankelijk is voor kinderen

---

# Two drops of water - English

Two drops of water' is an application that mainly focuses on increasing user awareness of drinking water and the added value of tap water, by contrasting the differences in four different ways.

Watch [the live demo](https://tweedruppelswater.netlify.app/)

## Technology

This application was created in React.js. The 3D animations were created with Three.js in combination with React-tree/fiber and React-three/drei to make it work in React. The drops were modeled in Blender.

Sources:

- [React.js](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [React-tree/drei](https://github.com/pmndrs/drei)
- [React-tree/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Blender](https://www.blender.org/)

## Starting the project

1. cd frontend
2. npm i
3. Create a "videos" folder within the "src" folder.
4. Place 4 videos in the "src" folder.
5. Import the videos into 'app.js' and adjust the video variables.
6. `npm run start`

**Placeholder videos for step 4** [placeholder videos](https://drive.google.com/drive/folders/1S6KnX8iA3yaO5KWXBdzbysF0zGYMB-nT?usp=sharing)
**Note:** Make sure you have Node version 14 or higher installed on your computer, you can check this with cmd `node -v`.

## Tailwind

Styling is done with Tailwind.

Check the configured settings in tailwind.config.js and the created styles in the src/index.css

Already added:

- Oasen font (strada and strada light)
- Oasen color blue
- [Line-clamp plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- Screen breakpoints
- H1 blue and H1 white

## Recommendations for further development

- Add mobile styling: the application is not yet fully responsive styled
- Add multiple tips and quiz questions
- Add self-made relevant videos to the drops on the visuals screen and the tips screen
- Improve [accessibility](https://www.w3.org/TR/WCAG22/): the application is not yet accessible
- Simplify information so that it is also accessible to children

---

# React Readme

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
