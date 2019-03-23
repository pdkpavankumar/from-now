const ftm = (dateInstance, fromDateInstance) => {
  const dateToCal = new Date(dateInstance).getTime();
  const currentDate = fromDateInstance ?
    new Date(fromDateInstance).getTime() :
    new Date().getTime();
  let timeDiff = (currentDate - dateToCal) / 1000; // in seconds
  const isFuture = timeDiff < 0;
  let time = '';
  let timeMsg = '';
  if (isFuture) {
    timeDiff *= -1;
    timeMsg += 'In ';
  }
  if (timeDiff < 60) {
    time = 'SS';
  } else {
    timeDiff /= 60; // in minutes
    if (timeDiff < 60) {
      time = 'MM';
    } else {
      timeDiff /= 60; // in hours
      if (timeDiff < 24) {
        time = 'HH';
      } else {
        timeDiff /= 24;
        if (timeDiff < 7) {
          time = 'DD';
        } else {
          timeDiff /= 7;
          if (timeDiff < 4) {
            time = 'WW';
          } else {
            timeDiff /= 4;
            if (timeDiff < 12) {
              time = 'MMM';
            } else {
              timeDiff /= 12;
              time = 'YY';
            }
          }
        }
      }
    }
  }

  if (Math.floor(timeDiff) === 1) {
    if (time === 'HH') {
      timeMsg += 'an ';
    } else {
      timeMsg += 'a ';
    }
  } else {
    timeMsg += `${Math.floor(timeDiff)} `;
  }

  switch (time) {
    case 'SS':
      timeMsg += 'seconds'; break;
    case 'MM':
      timeMsg += 'minutes'; break;
    case 'HH':
      timeMsg += 'hours'; break;
    case 'DD':
      timeMsg += 'days'; break;
    case 'WW':
      timeMsg += 'weeks'; break;
    case 'MMM':
      timeMsg += 'months'; break;
    case 'YY':
      timeMsg += 'years'; break;
    default:
      timeMsg += ''; break;
  }

  if (Math.floor(timeDiff) === 1) {
    timeMsg = timeMsg.substr(0, timeMsg.length - 1);
  }

  if (!isFuture) {
    timeMsg += ' ago';
  }
  return timeMsg;
};

export default ftm;
