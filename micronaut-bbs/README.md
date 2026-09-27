# Micronaut BBS

[简体中文](README.zh-CN.md)

`app/sample/bbs` is a pure Norm Micronaut application. In `application.norm`, the `micronaut`, `datasources`, `jpa`, and `endpoints` type tree under `MicronautConfig` declares application configuration that directly matches the structure of `application.yml`. `std.configuration` derives Micronaut properties from that tree, so the launcher does not maintain string keys. `module.norm` declares only three production dependencies. The application is organized into `Web.norm`, `service`, and `repository` layers. Each entity's Repository inherits general CRUD from `Repository<E, I>` and declares only domain queries; Services own transactions and business-object creation, while the Web layer handles HTTP only. The Hibernate Provider and official Micronaut Processors integrate persistence context, Controllers, constructor DI, Serde, Validation, Security, and Filters.

Run from a repository whose adapter NAR packages have been published:

```text
norm run micronaut-bbs/app/sample/bbs
```

The browser UI is at `http://127.0.0.1:8080/` and the HTTP API is at `/bbs`. The service keeps running and stores data in the project's `.tmp/micronaut-bbs` directory; press `Ctrl+C` to stop it.

The application covers a responsive HTML UI, registration and login sessions, boards, topics, replies, pagination, Controllers, DI, Serde JSON, validation, persistence, transactions, a database-session Filter, and the official Health Endpoint. The general `application()` entry point starts the service automatically and closes it on cancellation. See the [shared Web and ORM runtime verification](../scripts/verify-native-web.mjs).
