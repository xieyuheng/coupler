# Coupler

Simple tools for doing [dependency injection through constructors](https://martinfowler.com/articles/injection.html#FormsOfDependencyInjection).

The main class of this package is called `Coupler`,
because it can depend on everything,
so everything do NOT need to depend on each other.

Thus a coupler should only be used at the **outmost parts of your application**,
and often we should only use one coupler for one application.

Notes:

- This pattern is also called ["Service Container"](https://laravel.com/docs) in Laravel.

## Installation

```
npm install @xieyuheng/coupler
```

## Development

```
npm install    // Install dependencies
npm run build  // Compile `src/` to `lib/`
npm run watch  // Watch the compilation
npm run test   // Run test
```

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
- [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md)
- When contributing, add yourself to [AUTHORS](AUTHORS)

## License

- [GPLv3](LICENSE)
