const { readFile, Buffer } = Deno

export const loadLocalImage = async (srcPath: string): Promise<Deno.Buffer> => {
  const imgFile = await readFile(srcPath)
  const buf = new Buffer(imgFile)
  return buf // Buffer { off: 0, buf: [] }
}

export const fetchImage = async (srcUrl: string): Promise<Deno.Buffer> => {
  // https://github.com/denoland/deno/blob/master/js/fetch.ts
  const res = await fetch(srcUrl)
  const buf = new Buffer(await res.arrayBuffer())
  return buf
}
