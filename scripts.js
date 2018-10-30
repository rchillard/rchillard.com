var bg = document.body
var date = new Date()
var hour = date.getHours()
console.log(hour)

if (hour >= 6 && hour < 20) {
  bg.classList.add('day')
} else {
  bg.classList.add('night')
}
