# Strapi Socket.IO Plugin

## UPDATE for STRAPIO v2: Subscribe only

You need to subscribe to one content-type (see client example). You will not receive data from all content-types as default anymore.

## Description

this plugin will enhance strapi with an easy to use [StrapIO](https://www.npmjs.com/package/strapio). It will trigger on entity changes and you don't need to write custome Controller like with StrapIO alone.

If you want to discuss more, then post on the [forum thread](https://forum.strapi.io/t/strapio-the-ez-to-use-socket-io-configurator/414)

Or join the [Discord](https://discord.gg/QqJd3HXa6J).

The plugin was first created by [derrickmehaffy - The Strapi Guru ](https://strapi.guru)

## Install in Strapi

Installing is simple and the plugin is enabled by default just a simple:

- `npm i -s strapi-plugin-socket.io`
- `yarn add strapi-plugin-socket.io`

In a Strapi project, tested on v3.6.3

## Configuration

 you can enable endpoints by creating an extension for strapi-plugin-socket. If there is no configuration file then ALL changes on entities are emit.

extensions/socket-io/services/config.json
```json
{
	"routes": [
		{ "apiName": "user" }
	]
}
```

apiName is the collection-type name (without plural suffix)

## Client Sample

Init a new node project in a clean folder:

- `npm init`
- `yarn init`

Install the proper socket.io client:

- `npm i -s socket.io-client`
- `yarn add socket.io-client`

Create an `index.js`:

```js
const io = require("socket.io-client");
const API_URL = "http://localhost:1337/";
const token = "replace with your end-user JWT";

// Handshake required, token will be verified against strapi
const socket = io.connect(API_URL, {
  query: { token },
});

socket.emit('subscribe', 'article');

socket.on("create", async (data) => {
  //do something
  console.log("CREATE");
  console.log(data);
});
socket.on("update", (data) => {
  // do something
  console.log("UPDATE");
  console.log(data);
});
socket.on("delete", (data) => {
  // do something
  console.log("DELETE");
  console.log(data);
});
```

Run it with `node index.js` you can also enable the socket.io debugger with `DEBUG=socket* node index.js`
This will respond on all normal content-types (no plugins) with the exception of the `content-manager` plugin for normal content types.