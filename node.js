

let message = {
  Zodiacs:['Virgo','Sagittarius','Libra'],
  Months: ['Jan','Feb','March'],
  Messages: ['Your sign is sun.','Your intellect and quick-thinking are impressive, I always learn something new from you.','Your creativity is inspiring, I love seeing what you come up with.']
}

let  randomessage = ()=>{
  let Zodiac= message.Zodiac[Math.floor (Math.random()*3)]
  let Month= message.Zodiac[Math.floor (Math.random()*3)]
  let Message= message.Zodiac[Math.floor (Math.random()*3)]

  console.log (`${Zodiac}+'in' ${Month}+'Here is your fortune:'+${Message}`)
}

randomessage()