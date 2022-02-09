# Nginx Relative Path with Verdaccio 5

This example runs two verdaccio versions:

- Running `verdaccio:5.x` http://localhost/verdaccio/

Note: we should add more sort of configurations here.

**Nginx SSL Example**

```bash
docker-compose -f docker-compose_ssl.yml up --build --force-recreate
npx nx run verdaccio-v5-reverse-proxy:force-recreate --mode=relative-path-ssl
```

open the browser

```
https://localhost/verdaccio/
```

