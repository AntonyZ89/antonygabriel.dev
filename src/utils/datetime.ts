import date from './date'

function toString(date?: string): string {
  const instance = date !== undefined ? new Date(date) : new Date()

  return instance.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Recife'
  })
}

export default { toString, toDays: date.toDays }
