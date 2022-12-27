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

## structure

```
└── /src
    ├── /assets
    ├── /components
    ├── /context
    ├── /hooks
    ├── /pages
    ├── /services
    ├── /utils
    └── App.js
    ├── index.js
```

### Common Modules

One advantage of React being un-opinionated is it doesn’t care how you divide your modules. When developing a page in a React app, consider dividing it into modular pieces. This will help you reduce the complexity and create structures that are open for reusable or shared across the application.

Shareable code in React app should be divided under its own domain. A common module can be reusable custom components, custom hooks, business logic, constants, and utility functions. These reusable pieces are shared across the application to be used on more than one page component. Having a folder for them in your application’s directory structure is a good starting point.

### Add Custom Components in their own folders

```
└── /src
    ├── /components
    |   ├── /Button
    |   |   ├── Button.js
    |   |   ├── Button.styles.js
    |   |   ├── Button.test.js
    |   |   ├── Button.stories.js
    |   ├──index.js
```

Here is a brief explanation of what each file inside the Button directory contains:

- `Button.js` file that contains the actual React component
- `Button.styles.js` file, let’s assume you are using styled components, contains corresponding styles
- `Button.test.js` file that contains tests
- `Button.stories.js` the Storybook file

In the above structure, also notice that there is an `index.js` file located in the `/components` directory. In this scenario, this file acts as an index of all components that are part of the namesake directory. This file will look like the following:

```
// /src/components/index.js

import { Button } from './Button/Button';
import { InputField } from './InputField/InputField';
import { Card } from './Card/Card';

export { Button, Card, InputField };
```

### Create Custom Hooks

A reusable React Hook is like a reusable working part. Just like you create custom components, creating a custom hook can help reduce code complexity.

Consider an example. In your React app, you have two different pages representing a login and a signup form. Each of these pages contains text input fields where users can enter their credentials and submit the form using a button. One of the input fields used in both forms is for users to enter their password. The password field contains an icon that allows the app user to toggle between the field’s visibility. Suppose you write the same code to implement this behavior in both login and signup forms. In that case, you will be duplicating the code.

A solution to this problem is to create a custom hook to toggle the icon and the field’s visibility based on the icon. Here is an example of a custom hook:

```
export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
  };
};

```

The custom hook above starts with a `use` naming convention. Even though React isn’t strict about naming conventions, it is important to follow them in this scenario. This hook also handles its own state and method and can be re-used on a password field, whether inside the login or a signup form.

The `/hooks` directory structure can be similar to components where a reusable hook lives inside their subdirectories:

```
└── /src
    ├── /hooks
    |   ├── /useTogglePasswordVisibility
    |   |   ├── index.js
    |   |   ├── useTogglePasswordVisibility.test.js
    |   ├──index.js

```

### Use Absolute Imports

By default, a React app that uses the before mentioned directory structure might lead you to use import paths in the following manner:

```
import { Button } from '../../components';
```

You can configure your React application by adding support for importing modules using absolute paths. In a plain React app, this can be done by creating and configuring a `jsconfig.json` file at the root of your project.

Here is an example of a simple configuration inside the `jsconfig.json` file:

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

```

It makes it a lot easier to import components within the project and also, at the same time moving files without the need to change the import statements. If you want to import a module located at `/src/components`, you can import it as follows:

```
import { Button } from 'components';
```

If you have a custom Webpack configuration inside a file called `webpack.config.js`. In that case, you can customize this further to use a prefix like `@components` or `~components`.

```
module.exports = {
  resolve: {
    extensions: ['js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    }
  }
};
```

This will allow you to import using a prefix. For example, a module located at `/src/components/Button` can be imported as:

```
import { Button } from '@components';
```

Note: If you’re using TypeScript, you will have a file called `tsconfig.json`. You can configure this file. For more information, check out Create React App documentation here.

### Separate business logic from UI

The `/pages` directory will contain the UI for most of the application and the structure of each page in the form of React components. These components are naturally coupled with the business logic they represent. It is a common behavior that you will find in any React application. However, avoid unnecessary complexity in a UI component, you can separate the business logic from it.

One way to separate the UI and the logic is to create a custom hook, for example, for making an API request. Here is an example of making an API request to get items from an endpoint:

```
import { useQuery } from 'react-query';

export const moviesApi = {
  nowPlaying: () =>
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`).then(res =>
      res.json()
    )
};

export const useNowPlayingMovies = () => {
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    ['movies', 'nowPlaying'],
    moviesApi.nowPlaying
  );

  return {
    nowPlayingLoading,
    nowPlayingData
  };
};
```

In the above snippet, take note that the API request to fetch data from the endpoint `/movie/now_playing` happens in two parts. The first part is the API request itself using JavaScript’s fetch method that gets the data in JSON format. The second part is where the useQuery hook from React Query library is configured and wrapped inside a custom hook.

You can store or create this custom hook file inside the dedicated `/hooks` directory or create another directory for API-related hooks such as `/api` or `/services`.

### The Utils directory

Having a `utils` directory is completely optional. If your application tends to have some global utility functions, it could be a good idea to separate them from the UI components. A `/utils` directory may contain app-wide constants and helper methods. For example, more than one UI component in your application may require some validation logic. Separating this validation business logic in its own file under the `/utils` directory will help you create separate flows.

### Avoiding creating a single Context for everything

Usually, when you pass props from a parent to a child component, it can be as simple as passing them from one to another. However, the complexity arises when there are many components in between. This creates an inconvenient way to pass props.

React Context provides a way to pass data through the component tree without prop drilling. It is an alternative approach that lets a parent component provide props to the entire tree below it. This way, sharing data becomes easy, and one can avoid passing unnecessary props.

In your React application, you should have separate Contexts for different things. For example, your React app uses themes for UI components, but some of these components use internationalization or i18n.

The i18n context doesn’t care if the theme exposes a certain dark or light mode value. In this scenario, you will have two different context providers. This helps you separate data logically.

```
const App = () => {
    return (
    <ThemeProvider>
        <QueryClientProvider>
            <Routes />
        </QueryClientProvider>
    </ThemeProvider>
    )
}
```

Also, if a Context is used in one of the components, you do not need to wrap the application’s root with that Context’s provider. If a section of the application doesn’t require specific data, you don’t have to share it.
