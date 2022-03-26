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

- [ ] verdaccio-v4-plugin-external

- [ ] [verdaccio-v4-gitlab](libs/verdaccio/v4/gitlab/src/lib/README.md)

- [ ] [verdaccio-v4-kubernetes](libs/verdaccio/v4/kubernetes/src/lib/README.md)

- [ ] [verdaccio-v4-kubernetes-helm](libs/verdaccio/v4/kubernetes-helm/src/lib/README.md)

- [ ] [verdaccio-v4-multi-registry-uplink](libs/verdaccio/v4/multi-registry-uplink/src/lib/README.md)

- [ ] [verdaccio-v4-ldap](libs/verdaccio/v4/ldap/src/lib/README.md)

- [x] __AMAZON S3__ [verdaccio-v4-amazon-s3](libs/verdaccio/v4/amazon-s3/project.json)

  - [localstock](libs/verdaccio/v4/amazon-s3/src/localstock/README.md)

    ```bash
      # commands: up | down | recreate | force-recreate  
      nx run verdaccio-v4-reverse-proxy:up --server apache2 --path relative-path
    ```

- [x] __HTTPS PORTAL__ [verdaccio-v4-https-portal](libs/verdaccio/v4/https-portal/project.json)

  - [nginx](libs/verdaccio/v4/https-portal/src/lib/nginx/README.md)

    ```bash
    # commands: up | down | recreate | force-recreate      
    nx run verdaccio-v4-https-portal-nginx:up --server nginx
    ```

- [x] __LOCAL STORAGE VOLUME__ [verdaccio-v4-local-storage-volume](libs/verdaccio/v4/local-storage-volume/project.json)

  - [minimum](libs/verdaccio/v4/local-storage-volume/src/minimum/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v4-local-storage-volume:up --config minimum
      ```

- [x] __REVERSE PROXY__ [verdaccio-v4-reverse-proxy](libs/verdaccio/v4/reverse-proxy/project.json)

  - apache2

    - [relative-path](libs/verdaccio/v4/reverse-proxy/src/lib/apache2/relative-path-ssl/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v4-reverse-proxy:up --server apache2 --path relative-path
      ```

  - nginx

    - [root-path](libs/verdaccio/v4/reverse-proxy/src/lib/nginx/root-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v4-reverse-proxy:up --server nginx --path root-path
      ```

    - [relative-path](libs/verdaccio/v4/reverse-proxy/src/lib/nginx/relative-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v4-reverse-proxy:up --server nginx --path relative-path
      ```

    - [relative-path-ssl](libs/verdaccio/v4/reverse-proxy/src/lib/nginx/relative-path-ssl/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v4-reverse-proxy:up --server nginx --path relative-path-ssl
      ```

### v5

- [x] __REVERSE PROXY__ [verdaccio-v5-reverse-proxy](libs/verdaccio/v5/reverse-proxy/project.json)

  - nginx

    - [root-path](libs/verdaccio/v5/reverse-proxy/src/lib/nginx/root-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v5-reverse-proxy:up --server nginx --path root-path
      ```

    - [relative-path](libs/verdaccio/v5/reverse-proxy/src/lib/nginx/relative-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v5-reverse-proxy:up --server nginx --path relative-path
      ```

    - [relative-path-ssl](libs/verdaccio/v5/reverse-proxy/src/lib/nginx/relative-path-ssl/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v5-reverse-proxy:up --server nginx --path relative-path-ssl
      ```

### v6

- [x] __LOCAL STORAGE VOLUME__ [verdaccio-v6-local-storage-volume](libs/verdaccio/v6/local-storage-volume/project.json)

  - [minimum](libs/verdaccio/v6/local-storage-volume/src/minimum/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v6-local-storage-volume:up --config minimum
      ```

- [x] __HTTPS PORTAL__ [verdaccio-v6-https-portal](libs/verdaccio/v6/https-portal/project.json)

  - [nginx](libs/verdaccio/v6/https-portal/src/lib/nginx/README.md)
  
    ```bash
    # commands: up | down | recreate | force-recreate  
    nx run verdaccio-v6-https-portal-nginx:up --server nginx
    ```

- [x] __REVERSE PROXY__ [verdaccio-v6-reverse-proxy](libs/verdaccio/v6/reverse-proxy/project.json)

  - apache2

    - [relative-path](libs/verdaccio/v6/reverse-proxy/src/lib/apache2/relative-path-ssl/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v6-reverse-proxy:up --server apache2 --path relative-path
      ```

  - nginx

    - [root-path](libs/verdaccio/v6/reverse-proxy/src/lib/nginx/root-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v6-reverse-proxy:up --server nginx --path root-path
      ```

    - [relative-path](libs/verdaccio/v6/reverse-proxy/src/lib/nginx/relative-path/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v6-reverse-proxy:up --server nginx --path relative-path
      ```

    - [relative-path-ssl](libs/verdaccio/v6/reverse-proxy/src/lib/nginx/relative-path-ssl/README.md)

      ```bash
        # commands: up | down | recreate | force-recreate  
        nx run verdaccio-v6-reverse-proxy:up --server nginx --path relative-path-ssl
      ```

> *adapted from [verdaccio/examples](https://github.com/verdaccio/verdaccio/tree/master/docker-examples)

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