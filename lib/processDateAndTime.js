 
import set from 'date-fns/set'

export function processDateAndTime(theDate, theTime) {
 
    const isPm = theTime.includes('PM')
    const hour = theTime.substring(0, theTime.indexOf(':'))
    const militaryHour = isPm ? parseInt(hour) + 12 : hour
    const minutes = parseInt(theTime.substring(theTime.indexOf(':') + 1, theTime.indexOf(' ')))
   return set(new Date(theDate), {hours: militaryHour, minutes: minutes, seconds: 0})
    
   
  }