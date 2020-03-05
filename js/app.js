function askPreference(){
  var preference = prompt('Do you prefer a firm or soft mattress?')
  var message; 

  if (preference === firm) {
    message = 'Nice! That\'s what I have!';
  } else if (preference === soft) {
      message = 'That might be why your back hurts';
  } else {
      message = 'Follow me to the page!';
  };

  return document.write('<h1>' + 'message' + '</h1>');
}

function askName(){
  var username = prompt("what is your name?");
  
  return document.write('<h1>' + 'Nice to meet you, ' + username + '</h1>');
}

function offerGreeting(){
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var message;
  if (hourNow > 18) {
      greeting = 'Good evening!';
  } else if (hourNow > 12) {
      greeting = "IT\'S BEER O\'CLOCK";
  } else if (hourNow > 0) {
      greeting = 'Good morning!';
  } else {
      greeting = 'Welcome!';
  }
  message = '<h1>'+ greeting + '</h1>'
  return document.write(message);
}