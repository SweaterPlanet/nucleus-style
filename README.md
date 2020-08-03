# nucleus-style

![build](https://github.com/TheSweaterGuys/nucleus-style/workflows/build/badge.svg)

## Getting Started

### Setup

Create a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and add the token to the `.npmrc` file in the root directory. Please don't commit your changes.

If you're running into issues, check the [Github docs](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages).

### Installation

Install the Nucleus Style library using npm:

```
npm install @thesweaterguys/nucleus-style
```

### Peer Dependencies

Nucleus Style ships with a few libraries as peer dependencies.

Make sure you have `react`, `react-dom`, and `styled-components` in the project:

- `react` at version 16.8.0 or higher
- `react-dom` at version 16.8.0 or higher
- `styled-components` at version 5.0.0 or higher

You can also run:

```
npm install react react-dom styled-components
```

## Usage

Import Nucleus Style from the main package module in the header of your file.

A single component:

```
import { Button } from '@thesweaterguys/nucleus-style'
```

Multiple components:

```
import { Button, Text } from '@thesweaterguys/nucleus-style'
```

## Contributing

See the [contributing guide](https://github.com/TheSweaterGuys/nucleus-style/blob/master/CHANGELOG.md).
