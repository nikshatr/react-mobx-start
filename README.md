# react-mobx-start

react-mobx-start is the nodejs utility for creating projects on the react mobx stack postcss webpack with flexible configurations

### Getting Started

```sh
$ npm install -g react-mobx-start
$ react-mobx-start <directory>
$ cd <directory>
$ npm install
```

**development mode**
```sh
$ npm run dev
```

Open `localhost:8080` in your browser

**production mode**
```sh
$ npm run production
```

### Template

```
├── configs
│   └── webpack
│       ├── entry.js
│       ├── modules.js
│       ├── options.js
│       ├── output.js
│       ├── plugins.js
│       ├── resolve.js
│       ├── server.js
│       └── webpack.config.js
├── package.json
├── src
│   ├── client.js
│   ├── components
│   │   └── Wrapper
│   │       ├── Wrapper.js
│   │       └── Wrapper.pcss
│   ├── containers
│   │   └── App
│   │       └── App.js
│   ├── HOC
│   ├── pages
│   │   └── Home.js
│   ├── routes
│   │   └── index.js
│   ├── stores
│   │   └── index.js
│   └── template.html
└── static
    └── icons.svg
    
```
