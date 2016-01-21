var palindrone = function(word) {
  var normal = word.split("").reverse().join("");

  if (normal === word) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  $("form#palindrone").submit(function(event){
    var userWord = $("input#word").val();
    var palindroneOutput = palindrone(userWord);

    if (userWord.length === 0) {
      alert("Please enter a word!");
    }
    else if (palindroneOutput === true) {
      $("#true").show();
    }
    else {
      $("#false").show();
    }

    event.preventDefault();
  });

});
