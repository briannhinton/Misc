// Regex


verify(/car|cat/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pop|prop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferret|ferry/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\w*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[::,.]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/[a-zA-Z0-9]{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/^((?!e).)*$/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
