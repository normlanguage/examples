# Norm 集成验收

[English](README.md) | [简体中文](README.zh-CN.md)

面向用户的示例位于各库仓库：

- [Micronaut Web 示例](https://github.com/normlanguage/micronaut-web/blob/main/samples/README.zh-CN.md)
- [ORM 示例](https://github.com/normlanguage/orm/blob/main/samples/README.zh-CN.md)
- [Commons Lang 示例](https://github.com/normlanguage/commons-lang/blob/main/samples/README.zh-CN.md)
- [Norm 的 `hello` 程序](https://github.com/normlanguage/Norm/blob/main/cli/compiler/src/main/resources/hello/README.zh-CN.md)

本仓库保留独立集成验收用例：[单文件 Web](micronaut-single-file/README.zh-CN.md)、[BBS](micronaut-bbs/README.zh-CN.md)、[ORM](norm-orm/README.zh-CN.md)和[Java 互操作](java-commons-lang/README.zh-CN.md)。[验收脚本](scripts/verify.mjs)检查 BBS 与单文件 Web，运行 ORM 和两个 Java 互操作程序；Native 模式还构建并验证 Web 的 HTTP、参数校验、数据库提交、读取和回滚。每个用例在模块文件中声明所用包版本。

使用匹配的正式 Norm CLI 执行 `node scripts/verify.mjs` 或 `node scripts/verify.mjs --native`。可通过 `NORM_CLI` 指定 CLI。[工作流](.github/workflows/verify.yml)保留两项检查。
