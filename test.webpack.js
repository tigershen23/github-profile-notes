context = require.context('./app', true, /Test\.js$/);
context.keys().forEach(context);
