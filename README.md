# Private Local NPM Registry

![verdaccio logo](https://cdn.verdaccio.dev/readme/verdaccio@2x.png)

The simplest way to manage and organize your Node dependencies is with an npm repository. You need reliable, secure, consistent and efficient access to your dependencies that are shared across your team, in a central location. Including a place to set up multiple registries, that work transparently with the npm client.

With [Verdaccio](https://verdaccio.org/), you can:

- Use private packages
- Cache npmjs.org registry
- Override public packages

## Available Configurations

All configs utilize Docker.

### v4

- [x] verdaccio-v4-amazon-s3
  - [localstock](libs/verdaccio/v4/amazon-s3/src/localstock/README.md)

- [x] verdaccio-v4-docker-local-storage-volume
  - [simple](libs/verdaccio/v4/docker-local-storage-volume/src/simple/README.md)

- [ ] verdaccio-v4-docker-plugin-external
- [ ] verdaccio-v4-gitlab-verdaccio
- [x] verdaccio-v4-https-portal
  - [nginx](libs/verdaccio/v4/https-portal/src/nginx/README.md)

- [ ] verdaccio-v4-kubernetes
- [ ] verdaccio-v4-kubernetes-helm
- [ ] verdaccio-v4-ldap-verdaccio
- [ ] verdaccio-v4-multi-registry-uplink
- [ ] verdaccio-v4-plugins-docker-extend

- [x] verdaccio-v4-reverse-proxy-apache
  - [apache2](libs/verdaccio/v4/reverse-proxy-apache/src/apache2/README.md)

- [x] verdaccio-v4-reverse-proxy
  - [root-path](libs/verdaccio/v4/reverse-proxy/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v4/reverse-proxy/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v4/reverse-proxy/src/nginx/relative-path-ssl/README.md)

### v5

- [x] verdaccio-v5-reverse-proxy
  - [root-path](libs/verdaccio/v5/reverse-proxy/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v5/reverse-proxy/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v5/reverse-proxy/src/nginx/relative-path-ssl/README.md)

### v6

- [x] verdaccio-v6-apache-verdaccio
  - [apache2](libs/verdaccio/v6/apache-verdaccio/src/apache2/README.md)

- [x] verdaccio-v6-docker-local-storage-volume
  - [simple](libs/verdaccio/v6/docker-local-storage-volume/src/simple/README.md)

- [x] verdaccio-v6-https-portal
  - [nginx](libs/verdaccio/v6/https-portal/src/nginx/README.md)

- [x] verdaccio-v6-reverse-proxy
  - [root-path](libs/verdaccio/v6/reverse-proxy/src/nginx/root-path/README.md)
  - [relative-path](libs/verdaccio/v6/reverse-proxy/src/nginx/relative-path/README.md)
  - [relative-path-ssl](libs/verdaccio/v6/reverse-proxy/src/nginx/relative-path-ssl/README.md)

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

---

*adapted from [verdaccio/examples](https://github.com/verdaccio/verdaccio/tree/master/docker-examples)
