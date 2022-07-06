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

function now(): string {
  const instance = new Date()

  const _date = date.now()

  const time =
    ('0' + instance.getHours()).slice(-2) + ':' + ('0' + instance.getMinutes()).slice(-2) + ':' + ('0' + instance.getSeconds()).slice(-2)

  return _date + 'T' + time
}

export default { toString, toDays: date.toDays, now }
