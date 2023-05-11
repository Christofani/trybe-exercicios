const header = document.querySelector('header');
header.style.backgroundColor = 'rgb(0, 176, 105)';

 const emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
 for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = 'rgb(165, 0, 243)';
 }
 const emergencyTasksdivs = document.querySelectorAll('.emergency-tasks div');
 for (let index = 0; index < emergencyTasksdivs.length; index += 1) {
   emergencyTasksdivs[index].style.backgroundColor = 'rgb(255, 159, 132)';
 }
 const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
 for (let index = 0; index < noEmergencyTasks.length; index += 1) {
   noEmergencyTasks[index].style.backgroundColor = 'black'
 }
 const noEmergencyTasksDivs = document.querySelectorAll('.no-emergency-tasks div');
 for (let index = 0; index < noEmergencyTasksDivs.length; index += 1) {
   noEmergencyTasksDivs[index].style.backgroundColor = 'rgb(249, 219, 94)';
 }

 const footer = document.querySelector('footer');
 footer.style.backgroundColor = 'rgb(0, 53, 51)';