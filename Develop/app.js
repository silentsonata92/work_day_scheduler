//getting todays date and displaying on index.html
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

writeToday = mm + '/' + dd + '/' + yyyy;

document.getElementById('currentDay').innerHTML = writeToday

//setting class names to present, past, future
for (let i = 9; i < 18; i++) {
  let status = document.getElementById(`hour-${i}`)
  if (i == today.getHours()) {
    status.className = 'present'
  } else if (i < today.getHours()) {
    status.className = 'past'
  } else {
    status.className = 'future'
  }
}
//added buttons to save to local storage and to delete from local storage
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')){
    let text = $(event.target).prev('.description').val()
    let time = $(event.target).parent().attr('id')
    localStorage.setItem(time, text)
  } else if (event.target.classList.contains('trashBtn')) {
    let text = $(event.target).prev('.description').val()
    let time = $(event.target).parent().attr('id')
    localStorage.removeItem(time, text)
    window.location.reload()
  } else if (event.target.classList.contains('fas')) {
    let text = $(event.target).prev('.description').val()
    let time = $(event.target).parent().attr('id')
    localStorage.setItem(time, text)
  }
})

// grabbing from local storage
for (let i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}