# Norm integration acceptance

[English](README.md) | [简体中文](README.zh-CN.md)

User-facing examples live with their libraries:

- [Micronaut Web samples](https://github.com/normlanguage/micronaut-web/tree/main/samples)
- [ORM samples](https://github.com/normlanguage/orm/tree/main/samples)
- [Commons Lang samples](https://github.com/normlanguage/commons-lang/tree/main/samples)
- [Norm's `hello` programs](https://github.com/normlanguage/Norm/tree/main/cli/compiler/src/main/resources/hello)

This repository retains independent integration fixtures: [single-file Web](micronaut-single-file/README.md), [BBS](micronaut-bbs/README.md), [ORM](norm-orm/README.md), and [Java interoperability](java-commons-lang/README.md). The [verification script](scripts/verify.mjs) is their executable entry point; its Native mode also exercises HTTP, validation, database commit, read, and rollback. Those fixtures target the older published package set documented in their module files. They remain as regression evidence while the library-owned samples are released with the current toolchain.

Run `node scripts/verify.mjs` or `node scripts/verify.mjs --native` with a matching published Norm CLI. Set `NORM_CLI` to select it. The [workflow](.github/workflows/verify.yml) retains both checks.
