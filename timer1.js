const repeatAlarm = process.argv.slice(2);

repeatAlarm.forEach(time => {
  
  setTimeout(() => {
    
    console.log('\007');
  
  }, time * 1000);

});