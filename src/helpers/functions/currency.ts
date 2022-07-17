export function toCurrency(
  value: string | number,
  language = 'pt-BR',
  currency = 'BRL'
): string {
  const result = Number(value)

  return result.toLocaleString(language, {
    style: 'currency',
    currency
  })
}
