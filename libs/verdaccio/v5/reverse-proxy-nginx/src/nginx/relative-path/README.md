# Nginx Relative Path with Verdaccio 5

This example runs two verdaccio versions:

- Running `verdaccio:5.x` http://localhost/verdaccio/

Note: we should add more sort of configurations here.

**Nginx HTTP Example**

```bash
npx nx run verdaccio-v5-reverse-proxy-nginx:force-recreate --mode=relative-path
```

open the browser

```
http://localhost/relative_path/
```
