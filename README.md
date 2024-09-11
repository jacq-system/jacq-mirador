# jacq-mirador
A custom build of Mirador viewer.

## Develop
Versioning of this repository is based on the Mirador used, versioning of this repository changes is represented on the *build* position:
> major.minor.patch.build (example: 3.3.0.2 - Mirador v3.3.0, second version of this repository).

Dependencies *@blueprintjs/core* and *@blueprintjs/icons* of Mirador have some issues (https://stackoverflow.com/questions/48922297/cant-resolve-blueprintjs-core-dist-blueprint-css), used *node-polyfill-webpack-plugin* according to https://stackoverflow.com/questions/72720744/module-not-found-error-cant-resolve-url-in-webpack-5-angular-14.

Mirador v4rc use React v18, uncompatible to the downloadDialog plugin.

## Build
Use standalone *npm* or prepared ```./npm.sh``` shell script (requires Docker).
```shell
 ./npm.sh install #install node dependencies
```

```shell
./npm.sh run build #build
```

For example usage see folder **demo**.
