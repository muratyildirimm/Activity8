$(document).ready(function () {
  $("#birthday").datepicker();

  var cities = ["Charlotte", "New York", "Washington DC"];
  $("#city").autocomplete({
    source: cities,
  });

  var programmingLanguages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "Swift",
  ];
  $("#programming").autocomplete({
    source: programmingLanguages,
  });
});
