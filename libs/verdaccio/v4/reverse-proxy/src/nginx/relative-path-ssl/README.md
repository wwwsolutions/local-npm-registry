# Nginx Relative Path

This example runs two verdaccio versions:

- Running `verdaccio:4.x` http://localhost/verdaccio/
- Running the latest `verdaccio:3` http://localhost/verdacciov3/

Note: we should add more sort of configurations here.

**Nginx SSL Example**

```bash
npx nx run verdaccio-v4-reverse-proxy:force-recreate --mode=relative-path-ssl
```

open the browser

```
https://localhost/verdaccio/
```
