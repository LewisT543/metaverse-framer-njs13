export const zeroPrefixNumber = (index) => {
  return `${index < 10 ? '0' : ''} ${index + 1}`
}