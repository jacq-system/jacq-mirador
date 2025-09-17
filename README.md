# jacq-mirador
A custom build of Mirador viewer for the JACQ.org.

## Develop
Versioning of this repository is based on the Mirador used, versioning of this repository changes is represented on the *build* position:
> major.minor.patch.build (example: 4.0.0.1 - Mirador v4.0.0, first version of this JACQ-specific build).
 

## Build
Use standalone *npm* or prepared ```./npm.sh``` shell script (requires Docker).
```shell
 ./npm.sh install #install node dependencies
```

```shell
./npm.sh run build #build
```

For example usage see folder **demo**.
