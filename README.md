# eslint-config-yyl-react
为 yyl-node 项目提供 eslint 文件

## install
```bash
npm i eslint-config-yyl-react --save-dev
```

### 依赖包
```bash
npm i prettier eslint --save-dev
```

## usage
修改 `package.json` 文件
```json
{
  "eslintConfig": {
    "extends": ["yyl-node"]
  },
  "eslintIgnore": [
    "node_modules"
  ],
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "endOfLine": "lf"
  },
  "scripts": {
    "eslint": "eslint ./",
    "prettier": "prettier --write ./**/*.js"
  }
}
```
> 为了和 `prettier` 不打架，请按照 `package.json` 的 `prettier` 属性进行配置

## 自定义 prettier
可以通过定义 `prettier/prettier` rules 来修改
```json
{
  "eslintConfig": {
    "rules": {
      "prettier/prettier": ["error", {
        "semi": true
      }]
    }
  },
  "prettier": {
    "semi": true
  }
}
```

## prettierignore
根目录创建 `.prettierignore`
```
node_modules/
```