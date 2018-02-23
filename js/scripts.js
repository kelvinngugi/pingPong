// Business logic
  var ans = function(num){
    var resultArray = [];
    for(var i = 1; i <= num; i++){
      if((i % 15) === 0){
        resultArray.push('pingpong');
      }else if((i % 5) === 0){
        resultArray.push('ping');
      }else if((i %3) === 0){
        resultArray.push('pong');
      }else{
        resultArray.push(i);
      }
    }
    return resultArray;
  };

  // User interface logic
  $(document).ready(function(){
    $('.submitButton').click(function(event){
      event.preventDefault();
      $('#uList').empty();
      var input = parseInt($('#userInput').val());
      console.log(resultArray);
      for(var i = 0; i < resultArray.length; i++){
        $('#uList').append('<li>' + resultArray[i] + '</li>');
      }
    });
  });
  
  $(document).ready(function(){
    $('#signup').submit(function(event){
      event.preventDefault();
      var email = $('#email').val();
      $('#signup').hide();
      $('#uList').prepend('<p>Thanks, ' + email + 'has been added to our list!</p>');
    });
  });