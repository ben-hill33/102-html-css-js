var preference = prompt('Do you prefer a firm or soft mattress?')
var message; 

if (preference === firm) {
  message = 'Nice! That\'s what I have';
} else if (preference === soft) {
    message = 'That might be why your back hurts';
} else {
    message = 'Follow me to the page!';
}

document.write('<h3>' + 'message' + '</h3>');