// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1ERW9nHeg7N91eZC4BNCJjA8jsh5yRjxkahuMAE38DPY/edit#gid=1656026020';

// Load the entire sheet.
$('#scripts').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,F"
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

// Load Ten Lines or Less.
$('#ten').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Ten or Less' order by B desc"
});

// Load UI.
$('#ui').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'UI' order by B desc"
});

// Load Utilities.
$('#utilities').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E,F where F = 'Utilities' order by B desc"
});
