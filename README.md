# A vue-cli plugin to minify font and generator css by [fontmin](https://github.com/ecomfe/fontmin) from a single .ttf font file

## Install

```vue add @bitmain/fontmin```

## Usage

### options

```
--input the directory where the raw .ttf files is in(default: src/assets/_fonts)
--output the directory where the minified files is to
```
#### by vue-cli-service
```javascript
  npx vue-cli-service fontmin
```

#### input directory demo
There must be a couple of files with the same name in the input directory.
i.e.
{input}/demo.ttf
{input}/demo.js
```
  //demo.js
  module.exports = {
    text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789视频大数据综合应用系统平台相似度'
  }
```
