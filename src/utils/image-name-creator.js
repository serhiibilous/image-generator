export default function imageNameCreator() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `goodques-${month}-${day}-${year}`
}
