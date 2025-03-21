function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    // const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
    //   'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    // const daysSpan = clock.querySelector('.days');
    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
    //   daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
//   const deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
//   const deadline="January 08 2025 00:00:00 GMT+0300"; //for Ukraine
console.log(Date.parse(new Date()));
// const a = setTimeout(()=>console.log('a'), 2500)
// const b = setInterval(()=>console.log('b'), 4000)
// console.log(new TimeRanges())



  const deadline = new Date(Date.parse(new Date()) + 1 * 22 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);