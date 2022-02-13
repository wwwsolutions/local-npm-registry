# Private Local NPM Registry

![verdaccio logo](https://cdn.verdaccio.dev/readme/verdaccio@2x.png)

The simplest way to manage and organize your Node dependencies is with an npm repository. You need reliable, secure, consistent and efficient access to your dependencies that are shared across your team, in a central location. Including a place to set up multiple registries, that work transparently with the npm client.

With [Verdaccio](https://verdaccio.org/), you can:

- Use private packages
- Cache npmjs.org registry
- Override public packages

## Verdaccio example configurations

Set of configs utilizing Docker and Kubernetes within Nx workspace.

### v4

- [x] verdaccio-v4-plugin-external

- [x] [verdaccio-v4-gitlab](libs/verdaccio/v4/gitlab/src/lib/README.md)

- [x] [verdaccio-v4-kubernetes](libs/verdaccio/v4/kubernetes/src/lib/README.md)

- [x] [verdaccio-v4-kubernetes-helm](libs/verdaccio/v4/kubernetes-helm/src/lib/README.md)

- [x] [verdaccio-v4-multi-registry-uplink](libs/verdaccio/v4/multi-registry-uplink/src/lib/README.md)

- [x] [verdaccio-v4-ldap](libs/verdaccio/v4/ldap/src/lib/README.md)

- [x] verdaccio-v4-amazon-s3
  - [localstock](libs/verdaccio/v4/amazon-s3/src/localstock/README.md)

- [x] verdaccio-v4-https-portal
  - [nginx](libs/verdaccio/v4/https-portal-nginx/src/nginx/README.md)

    ```bash
    nx run verdaccio-v4-https-portal-nginx:up --server nginx
    nx run verdaccio-v4-https-portal-nginx:down --server nginx
    nx run verdaccio-v4-https-portal-nginx:recreate --server nginx
    nx run verdaccio-v4-https-portal-nginx:force-recreate --server nginx
    ```

- [x] verdaccio-v4-local-storage-volume
  - [simple](libs/verdaccio/v4/local-storage-volume/src/simple/README.md)

- [x] verdaccio-v4-reverse-proxy-apache
  - [apache2](libs/verdaccio/v4/reverse-proxy-apache/src/apache2/README.md)

- [x] verdaccio-v4-reverse-proxy-nginx
  - [root-path](libs/verdaccio/v4/reverse-proxy-nginx/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v4/reverse-proxy-nginx/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v4/reverse-proxy-nginx/src/nginx/relative-path-ssl/README.md)

### v5

- [x] verdaccio-v5-reverse-proxy-nginx
  - [root-path](libs/verdaccio/v5/reverse-proxy-nginx/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v5/reverse-proxy-nginx/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v5/reverse-proxy-nginx/src/nginx/relative-path-ssl/README.md)

### v6

- [x] verdaccio-v6-local-storage-volume
  - [simple](libs/verdaccio/v6/local-storage-volume/src/simple/README.md)

- [x] verdaccio-v6-https-portal
  - [nginx](libs/verdaccio/v6/https-portal-nginx/src/nginx/README.md)
  
    ```bash
    nx run verdaccio-v6-https-portal-nginx:up --server nginx
    nx run verdaccio-v6-https-portal-nginx:down --server nginx
    nx run verdaccio-v6-https-portal-nginx:recreate --server nginx
    nx run verdaccio-v6-https-portal-nginx:force-recreate --server nginx
    ```

- [x] verdaccio-v6-reverse-proxy-apache
  - [apache2](libs/verdaccio/v6/reverse-proxy-apache/src/apache2/README.md)

- [x] verdaccio-v6-reverse-proxy-nginx
  - [root-path](libs/verdaccio/v6/reverse-proxy-nginx/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v6/reverse-proxy-nginx/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v6/reverse-proxy-nginx/src/nginx/relative-path-ssl/README.md)

*adapted from [verdaccio/examples](https://github.com/verdaccio/verdaccio/tree/master/docker-examples)

---

## Usage

### Register user | login

```bash
npm adduser --registry http://localhost:4873
```

### Install packages

```bash
npm install react --registry http://localhost:4873
```

### Publish packages

```bash
npm publish --registry http://localhost:4873
```
