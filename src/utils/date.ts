function toString(date?: string): string {
  const instance = date !== undefined ? new Date(date) : new Date()

  return instance.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Recife'
  })
}

function toDays(date1: string | Date, date2: string | Date = new Date()): string {
  const instance1: Date = date1 instanceof Date ? date1 : new Date(date1)
  const instance2: Date = date2 instanceof Date ? date2 : new Date(date2)

  const diffTime = Math.abs(instance2.getTime() - instance1.getTime())
  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffYears = Math.floor(diffDays / 365)

  if (diffYears) {
    diffDays -= diffYears * 365
  }

  const diffMonths = Math.floor(diffDays / 30)

  if (diffMonths) {
    diffDays -= diffMonths * 30
  }

  let result = ''

  if (diffDays) {
    result += `${diffDays} dia${diffDays > 1 ? 's' : ''}`
  }

  if (diffMonths) {
    result += `${result ? ' e ' : ''}${diffMonths} ${diffMonths > 1 ? 'meses' : 'mês'}`
  }

  if (diffYears) {
    result += `${result ? ' e ' : ''}${diffYears} ano${diffYears > 1 ? 's' : ''}`
  }

  if (!result) {
    result = 'menos de 1 dia'
  }

  return result
}

function now(): string {
  const instance = new Date()

  return instance.getFullYear() + '-' + ('0' + (instance.getMonth() + 1)).slice(-2) + '-' + ('0' + instance.getDate()).slice(-2)
}

export default { toString, toDays, now }
