export const CapFirstChar = (data) => {
    if (typeof data === 'string') return `${data[0].toUpperCase()}${data.slice(1)}`
    return data
}

export const margeQuentityAndValue = (unit, v) => {
    console.log({ unit, v })
    const prev = unit;
    const now = unit?.replace(/\{.*?\}/g, v);
    if (now === prev) return `${v} ${prev}`;
    return now
}