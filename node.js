const Gemini = ['I love hearing your thoughts and ideas.']
const Aries = ['You have such a great sense of humor, it always brightens my day.']
const Scorpio = ['You're so versatile, I admire how you can adapt to any situation.']
const Aquarius = ['I appreciate your intelligence and ability to think outside the box.']
const Cancer = ['Your energy is contagious, I always feel more alive around you.']
const Leo = ['I value your insights and perspectives on things.']
const Taurus = ['You're so interesting and multi-faceted, there's always something new to discover about you.']
const Capricon = ['I admire your confidence and fearlessness in expressing yourself.']
const Libra = ['Your creativity is inspiring, I love seeing what you come up with.']
const Virgo = ['Your intellect and quick-thinking are impressive, I always learn something new from you.']
const Pisces = ['You are having good luck']
const Sagittarius = ['Your sign is sun.']

const randomessage = () =>{
  const allmessage = [Gemini,Aries,Scorpio,Aquarius,Cancer,Leo,Taurus,Capricon,Libra,Virgo,Pisces,Sagittarius]
  return allmessage [Math.floor (Math.random()*12)]
}

console.log (randomessage())
