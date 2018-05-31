function theBeatlesPlay(musicianArray, instrumentArray) {
  var arr = []
  var i = 0
  for (i = 0; i < musicianArray.length ; i++) {
    arr.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return arr
}

function johnLennonFacts(factsArray) {
  var arr = []
  var i = 0
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + "!!!"
  }
  return arr
}