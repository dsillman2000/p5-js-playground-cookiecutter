# {{ project_name }}

Cookiecutter template for a playground p5.js project which uses a Typescript module-based structure.

Main sketch code is in `public/sketch.js`, rendered in `public/index.html`. Typescript modules can be added in the
`public/` folder.

# Dev setup

Install the Node project using

```sh
npm install
```

Start up the local playground web server:

```sh
npm run dev
```

This will auto-transpile any saved changes to Typescript files in `public/`, building them in the `public/js/` directory
from which they can be referenced in imports in the sketch code.

# Acknowledgements

Author:

- {{ author }}