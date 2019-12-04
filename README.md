# Kumulos Web SDK

Kumulos provides tools to build and host backend storage for apps, send push notifications, view audience and behavior analytics, and report on adoption, engagement and performance.

## Get Started with CDN (website/CMS projects)

Start by adding the following snippet to your page template:

```html
<script>
    (function(w,p){w[p]=w[p]||function(){w[p].q=w[p].q||[];w[p].q.push(arguments)}})(window,"Kumulos");

    Kumulos('init', {
        apiKey: 'YOUR_API_KEY',
        secretKey: 'YOUR_SECRET_KEY',
        vapidPublicKey: 'YOUR_VAPID_KEY'
    });

    // Request notification permission and register for web push
    Kumulos('pushRegister');
</script>
<script src="https://static.app.delivery/sdks/web/main.js" async></script>
```

Next, host a service worker at `https://your-domain.com/worker.js` with the following contents:

```javascript
importScripts('https://static.app.delivery/sdks/web/worker.js');
```

For more information on integrating the Web SDK with your project, please see the [Kumulos Web integration guide](https://docs.kumulos.com/integration/web).

## Get Started with NPM (PWA/SPA projects)

Start by adding the package dependency to your project:

```
npm install --save @kumulos/web
```

After installation, import and initialize the SDK in your application code:

```javascript
import Kumulos from '@kumulos/web';

const kumulosClient = new Kumulos({
    apiKey: 'YOUR_API_KEY',
    secretKey: 'YOUR_SECRET_KEY',
    vapidPublicKey: 'YOUR_VAPID_KEY'
});

// Request notification permission and register for web push
kumulosClient.pushRegister();
```

Next, host a service worker at `https://your-domain.com/worker.js` with the following contents:

```javascript
importScripts('https://static.app.delivery/sdks/web/worker.js');
```

For more information on integrating the Web SDK with your project, please see the [Kumulos Web integration guide](https://docs.kumulos.com/integration/web).

## Contributing

Pull requests are welcome for any improvements you might wish to make. If it's something big and you're not sure about it yet, we'd be happy to discuss it first. You can either file an issue or drop us a line to [support@kumulos.com](mailto:support@kumulos.com).

To get started with development, simply clone this repo and open the project to kick things off.

## License

This project is licensed under the MIT license with portions licensed under the Apache license, version 2.0. See our LICENSE file and individual source files for more information.
