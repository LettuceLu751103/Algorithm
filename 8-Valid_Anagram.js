let s = "rat", t = "car"
var isAnagram = function (s, t) {
  s = s.split("")
  t = t.split("")
  if (s.length === t.length) {
    for (let a = 0; a < s.length; a++) {
      for (let b = 0; b < t.length; b++) {

        if (s[a] === t[b]) {
          s.splice(a, 1)
          t.splice(b, 1)
          a--
          b--
        }



      }
    }

    if (s.length !== 0) {
      return false
    } else {
      return true
    }

  } else {
    return false
  }
};

console.log(isAnagram(s, t)
)