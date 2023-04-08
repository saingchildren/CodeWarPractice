const firstNonRepeatingLetter = (s) => {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
};
