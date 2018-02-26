// Business logic
   function ans(num){
    var resultArray = [];
    for(var i = 1; i <= num; i++){
      if((i % 15) === 0){
        resultArray.push('pingpong');
      }else if((i % 5) === 0){
        resultArray.push('pong');
      }else if((i %3) === 0){
        resultArray.push('ping');
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
      $('.results').empty();
      var input = parseInt($('#userInput').val());
      var output= ans(input).toString();
      var output1 = output.split(",").join("<br>");
      //console.log(output1);
        $('.results').addClass("list").append('<li class="list">' + output1 + '</li>');
      });
    });
