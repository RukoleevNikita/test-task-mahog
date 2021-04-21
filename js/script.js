function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2)
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}
 
testWebP(function (support) { 
    if (support == true) {
        document.querySelector('body').classList.add('webp')
    } else{
        document.querySelector('body').classList.add('no-webp')
    }
})

const blockNominationItem = [...document.getElementsByClassName('_nomination_blocks_hoverjs')]

blockNominationItem.forEach((e) => {
    e.addEventListener('mouseover', function(e) {
        this.classList.add('_border_red')
        this.querySelector('.nomination__nominees-items').style.display = 'flex'
        
    })
    e.addEventListener('mouseleave', function (e) {
        this.classList.remove('_border_red')
        this.querySelector('.nomination__nominees-items').style.display = 'none'
    })
})

const blockSocial = [...document.getElementsByClassName('_social_block_hoverjs')]

blockSocial.forEach((e) => {
    e.addEventListener('mouseover', function(e) {
        this.classList.add('_border_red')
        
    })
    e.addEventListener('mouseleave', function (e) {
        this.classList.remove('_border_red')
    })
})

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((t / 1000) % 60)
    const minutes = Math.floor((t / 1000 / 60) % 60)
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    }
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id)
    const daysSpan = clock.querySelector('.days')
    const hoursSpan = clock.querySelector('.hours')
    const minutesSpan = clock.querySelector('.minutes')
    const secondsSpan = clock.querySelector('.seconds')
  
    function updateClock() {
        const t = getTimeRemaining(endtime)
  
      daysSpan.innerHTML = t.days
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
  
      if (t.total <= 0) {
        clearInterval(timeinterval)
      }
    }
  
    updateClock()
    const timeinterval = setInterval(updateClock, 1000)
  }
  
  const deadline = '2020-12-31'
  const deadline = new Date(Date.parse(new Date()) + 23 * 24 * 60 * 60 * 1000)
  initializeClock('countdown', deadline)
