# Micronaut single-file application

[简体中文](README.zh-CN.md)

Run from this directory:

```text
norm web.norm
```

After the application starts, visit `http://127.0.0.1:8080/hello/Norm`. A local single-file application need not declare a `package`, Module name, or version. Its Repository inherits common persistence operations from `Repository<E, I>`, and `RepositoryContext` manages the transactional Store. Each request writes the name from the path to H2; `save` returns the persisted entity and throws directly if persistence fails. The Service's `Result` represents business failures only.

In `micronaut.web@9`, `DataSources()` uses an in-memory database by default. It creates no database file, and data disappears when the process exits. For a file-backed database, pass `DataSources(defaultSource: h2DataSource(storage: H2Storage.File))` and import `h2DataSource` and `H2Storage`. Without an explicit `database`, `application.mv.db` is created beside the delivered EXE, or beside the entry source file when running from source. An explicitly supplied database path keeps its meaning. See [application builds](https://normlanguage.github.io/Norm/tooling/application-build) for the path contract.

Build a native executable:

```text
norm build web.norm
```

On Windows this produces `web.norm.exe`. This Native Image needs neither Norm nor Java at runtime and does not unpack a JVM on startup.
