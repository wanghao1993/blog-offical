## Fundry介绍
Foundry 是一个智能合约开发工具链。

Foundry 管理你的依赖关系、编译项目、运行测试、部署，并允许你通过命令行和 Solidity 脚本与链交互。

## 安装

参考官方文档，注意安装时候的提示。

## 开始

安装完成后我们就获得了 `forge`，这时候就可以通过 `forge init {project}`，来创建一个项目。

安装好的模版，包括一个简单的合约，一个测试脚本和forge标准库。

![foundy-init](https://blog-offical-1302483222.cos.ap-guangzhou.myqcloud.com/foundry-init.png)

我们可以使用`forge build`来编译合约，`forge test`来测试合约，相关命令后面介绍。

### 克隆链上的合约

这是它的一个功能，可以克隆链上的合约，例如我们克隆dydx的合约。

```bash
forge clone 0x92D6C1e31e14520e676a687F0a93788B716BEff5 DYDX
```