# Norm ORM

[简体中文](README.zh-CN.md)

This example uses only the entity annotations from `orm`. The `orm.hibernate` module creates the H2 schema and performs actual transactions, writes, and primary-key reads.

At the JVM application boundary, `orm.Entity`, `orm.Id`, and `orm.Generated` become actual Jakarta Persistence annotations. The application entity remains an ordinary Norm class, and the database-generated primary key is synchronized back to the same Norm object.

```text
norm run norm-orm/app/sample/orm/Main.norm
```
