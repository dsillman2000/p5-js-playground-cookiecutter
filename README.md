# p5-js-playground-cookiecutter

This repo contains a cookiecutter template for creating a playground p5.js project which uses a Typescript module-based structure.

# Installation

To install the `cookiecutter` library to build thsi template, run the following command on your local system:

```sh
pip install cookiecutter
```

To use this cookiecutter repo to build out your playground, run the following command:

```sh
cookiecutter https://github.com/dsillman2000/p5-js-playground-cookiecutter.git
```

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

- David Sillman <dsillman2000@gmail.com>