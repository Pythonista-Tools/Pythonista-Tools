// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1ERW9nHeg7N91eZC4BNCJjA8jsh5yRjxkahuMAE38DPY/edit?usp=sharing
';

// Load an entire sheet.
$('#scripts').sheetrock({
  url: mySpreadsheet
});

// Load top ten switch hitters.
$('#games').sheetrock({
  url: mySpreadsheet,
  sql: "select A,B,C,D,E,F where F = 'Games' order by B desc"
});
