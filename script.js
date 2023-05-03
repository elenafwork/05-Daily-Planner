var plannerContainer=$('.container-lg');
var currentHour=dayjs().hour();
var currentMin=dayjs().minute();
var currentSecond =dayjs().second();
console.log(currentHour);
$(function () {
  //Add a listener for click events on the save button. 
  
  $(".saveBtn").on("click", function(){
    // message 'saved!' will appear for 1s on the top 
    var saveMessage=$('#save-message').text('Saved to LocalStorage!'); 
    setTimeout(function(){saveMessage.text('  ')}, 1000);
   var hour = $(this).parent().attr('id');
   console.log("event " + hour);
   var taskInput=$(this).siblings(".description").val();
   console.log(taskInput);
   localStorage.setItem(hour, taskInput);
   
   console.log(hour + "  hour id")
   var savedItem=$(this).siblings('.description');
   console.log(savedItem)
   savedItem.html(localStorage.getItem(hour));
  })
   //loading page with saved items /in localStorage
  var currentHour=dayjs().hour();
  //var currentMin=dayjs().minute();
  //var currentSecond =dayjs().second();
  console.log(currentHour);
  for (var i=9; i<=18;i++){
    var divHourId=$('#hour-'+i);
    var textarea=divHourId.children('.description')
    var savedItemId='hour-'+i;
    textarea.html(localStorage.getItem(savedItemId))
    //  Add code to apply the past, present, or future class to each time
    if (i==currentHour){
      divHourId.addClass("present");
    } else if(i<currentHour){
      divHourId.addClass("past");
    } else {
      divHourId.addClass("future");
    }
    
  }
     
  // Add code to display the current date in the header of the page.
    setInterval(function(){
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY hh:mm:ss a'));
  },1000)
  
  
});

