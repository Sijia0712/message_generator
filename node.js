function RandomNumber(arr){
  return Math.floor (Math.random()*arr)
 }
 
 
 const Message = {
   Zodiacs:['Virgo','Sagittarius','Libra'],
   Months: ['Jan','Feb','March'],
   Fortunes: ['Your sign is sun.','Your intellect and quick-thinking are impressive, I always learn something new from you.','Your creativity is inspiring, I love seeing what you come up with.'],
 }
 
 
 for (let prop in Message){
 
   let OptionIndex = RandomNumber(Message[prop].length)
 
    switch(prop) {

    case 'Zodiacs':

    console.log (`${Message[prop][OptionIndex]}`)

    break

    case 'Months':

    console.log (`${Message[prop][OptionIndex]}`)

    break

    case 'Fortunes':

    console.log (`${Message[prop][OptionIndex]}`)

    }

}

