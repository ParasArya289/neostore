
export const uniqueColors = (products) => {
    const colorsFiltered = products.flatMap(({ colors }) => colors);
    return [...new Set(colorsFiltered)]
}