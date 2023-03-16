export function urlWrapper(image: string) {
  return `${process.env.PUBLIC_URL}/images/${image}`
}
export function urlAssetsWrapper(file: string) {
  return `${process.env.PUBLIC_URL}/assets/${file}`
}
