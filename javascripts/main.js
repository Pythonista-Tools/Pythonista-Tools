// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1ERW9nHeg7N91eZC4BNCJjA8jsh5yRjxkahuMAE38DPY/edit?usp=sharing
';

// Load an entire sheet.
$('#scripts').sheetrock({
  url: mySpreadsheet
});

// Load games.
$('#games').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Games' order by B desc"
});

// Load Graphics.
$('#graphics').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Graphics' order by B desc"
});

// Load Internet of Things.
$('#internet').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Internet of Things' order by B desc"
});

// Load PyPI.
$('#pypi').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'PyPI' order by B desc"
});

// Load Sounds.
$('#sounds').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Sounds' order by B desc"
});
