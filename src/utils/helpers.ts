export function formatDateUsCentral(dateObj: Date) {
  return dateObj
    .toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
}

//Function getTodayUSCentral -> returns time in Central time
export function getTodayUsCentral() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }));
}
