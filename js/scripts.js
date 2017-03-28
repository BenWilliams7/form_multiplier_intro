function countup(final, multiple) {
  var result = [];
  for (var i = multiple; i <= final; i += multiple) {
    result.push(i);
  }
  return result;
}

$(document).ready(function() {
  $('form').submit(function() {
    //grab final and multiple
    var final = parseInt($('#num1').val());
    var multiple = parseInt($('#num2').val());
    //make sure it's not negative or greater than the final number
    if ((multiple < final) &&
        (final > 0) &&
        (multiple > 0)
      ) {
        //call function
        var resultArray = countup(final, multiple);
        //display output
        $('ul').empty();
        $.each(resultArray, function (idx, result) {
          $('<li>').text(result).appendTo('ul');
        })
    };
    return false;
  });
});
////////////////


var vowelReplace = function(char, replaceThese) {
    if (replaceThese.includes(char.toLowerCase())) {
      char = '~';
    }
    return char;
  }

  var wiggleString = function(string, replaceThese) {
    var stringArray = string.split('');
    var newArray = [];
    stringArray.forEach(function(char) {
      newArray.push(vowelReplace(char, replaceThese));
    });
    return newArray.join('');
  }

  var replaceVowels = function(string) {
    wiggleString(string['a','e','i','o','u']);
  }
