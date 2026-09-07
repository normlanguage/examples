# Norm examples

独立的 Norm 应用示例，使用正式发布的 CLI 和 NAR，不构建或引用编译器源码。

- [单文件 Web](micronaut-single-file/README.md)
- [Micronaut BBS](micronaut-bbs/README.md)
- [ORM](norm-orm/README.md)
- [Java 互操作](java-commons-lang/README.md)

要求 Norm 0.21.2 或更新版本。应用验收入口：`node scripts/verify.mjs`。Native Web/数据库验收：`node scripts/verify.mjs --native`。可用 `NORM_CLI` 指定编译器可执行文件。
