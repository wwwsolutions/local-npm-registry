# Amazon S3 Bucket (Localstack) and Verdaccio 4.x

Verdaccio running with [Localstack](https://github.com/localstack/localstack) provides an easy-to-use test/mocking framework for developing cloud applications (AWS S3 in our example).

## Usage

> You might need to create bucket manually here
> aws --endpoint-url=http://localhost:4572 s3 mb s3://localstack.s3.plugin.test

```bash
npx nx run verdaccio-v4-amazon-s3:force-recreate --mode=localstock
```

## Articles

- [How to fake AWS locally with LocalStack](https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me)
