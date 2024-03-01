// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


    function saveNote (event) {
  
      const clickedButton = event.target;
  
      const targetTextArea = $(clickedButton).siblings('textarea');   //the textarea besides the clickedButton
  
        console.log(targetTextArea)
      const blockHour = $(clickedButton).closest('.time-block').attr('id');     //div that contains 9AM/10Am/1AM
        console.log(blockHour)
      
      localStorage.setItem(blockHour, targetTextArea.val())
      
        //   const data = {
      //   time: blockHour,
      //   text: targetTextArea.val()
      // }
        // console.log(data)
      // save to localstorage the data
      // localStorage.setItem(blockHour, JSON.stringify(data));
      // console.log(clickedButton)
    }
  
    $('.saveBtn').on('click', saveNote);
  
  function createBlock(id, time, color) {
    const blockDiv = $('<div>')
    const hourDiv = $('<div>')
    const textArea = $('<textarea>')
    const button = $('<button>')
    const icon = $('<i>')
  
    blockDiv.attr('id', id)
    blockDiv.attr('class', 'row time-block '+color)
  
    hourDiv.attr('class', 'col-2 col-md-1 hour text-center py-3')
    hourDiv.text(time)
    
    textArea.attr('class', 'col-8 col-md-10 description')
    textArea.attr('rows', '3')
  
    const savedText = localStorage.getItem(id)
    textArea.val(savedText)
  
    button.attr('class', 'btn saveBtn col-2 col-md-1')
    button.attr('aria-label', 'save')
    button.on("click", saveNote)
  
    icon.attr('class', 'fas fa-save')
    icon.attr('aria-label', 'true')
  
    //Best work with innerMost element
    button.append(icon)
  
    blockDiv.append(hourDiv)
    blockDiv.append(textArea)
    blockDiv.append(button)
  
    $('.container-lg').append(blockDiv)
  
  }
  
  const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
  for (i = 0; i < hours.length; i++) {
  
    let color = "";
  
    const blockHour = i + 9;
    const currentHour = dayjs().hour(); //change this value to the actual current hour using dayjs
  
    if(blockHour < currentHour) {
      color = "past"
    } else if(blockHour == currentHour) {
      color = "present"
    } else if(blockHour > currentHour) {
      color = "future"
    }
  
    createBlock('hour-'+(blockHour), hours[i] , color)
  
  } 
  
  // const ids = ['hour-9', 'hour-10']
  
  
  
  
  
  
  
    
  
  // var timeBlocks = $('.time-block');
  
    // timeBlocks.each(function () {
    //   var timeBlocks = $(this);
  
    //   var timeBlockHour = timeBlock.attr('id').split('-')[1];
    //   var timeBlockHour = dayjs().hour();
    //   console.log(currentHour)
    // });
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  