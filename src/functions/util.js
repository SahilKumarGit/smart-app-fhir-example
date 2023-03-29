export const CapFirstChar = (data) => {
    if (typeof data === 'string') return `${data[0].toUpperCase()}${data.slice(1)}`
    return data
}