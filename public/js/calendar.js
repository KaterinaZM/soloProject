document.getElementById('calendarFormButton').addEventListener('click', async event =>{
let training = document.getElementById("training").value;
let startTime = document.getElementById("startTime").value;
let endTime = document.getElementById("endTime").value;
let date = document.getElementById('calendar').value;
const response = await fetch('/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify({
    training, startTime, endTime, date
  }),
});
const text = await response.text();
if (text === 'Updated') {
  // window.location = '/';
}
});

