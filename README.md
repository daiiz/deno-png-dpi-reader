# deno-png-dpi-reader-writer

Reader/Writer for png image's pHYs chunk. \
A [deno](https://github.com/denoland/deno) port of [png-dpi-reader-writer](https://github.com/daiiz/png-dpi-reader-writer).

## Usage
Detect width, height and DPI for PNG image.
```ts
// buf: deno/Buffer
const { width, height, dpi } = await parsePngFormat(buf)
```

Write DPI for PNG image.
```ts
const ui8arr = await writePngDpi(buf, dpi)
```

## Examples
### Reader
```
$ deno run --allow-read ./examples/reader.ts ./examples/retina/7127a0c2a987ea50dbba0ebd6455c206.png
$ deno run --allow-net https://raw.githubusercontent.com/daiiz/deno-png-dpi-reader-writer/master/examples/reader.ts https://i.gyazo.com/7127a0c2a987ea50dbba0ebd6455c206.png
```

Result:
```
{ width: 1102, height: 994, dpi: 144 }
```

### Writer
```
$ deno run --allow-read ./examples/writer.ts ./examples/non-retina/8d132d64902c1323ffa8ca688b2c40eb.png 72 > a.png
```


## Tests

```
$ deno test --allow-read
```
