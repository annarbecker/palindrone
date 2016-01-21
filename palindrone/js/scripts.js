var palindrone = function(word) {
  var normal = word.split("").reverse().join("");

  if (normal === word) {
    return true;
  } else {
    return false;
  }


}
