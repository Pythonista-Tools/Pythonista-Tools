// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1NY7r9pvcEwKPNkCUVGJ0YEgBqi4Ksa3ZhQGmYcbKkAQ/edit#gid=0';

// Compile template
var scriptsTemplate = Handlebars.compile($('#games-template').html());

// Get query string parameters
var params = [], hash;
var q = document.URL.split('?')[1];
if(q != undefined){
    q = q.split('&');
    for(var i = 0; i < q.length; i++){
        hash = q[i].split('=');
        params.push(hash[1]);
        params[hash[0]] = hash[1];
    }
}

// Start with this if no params
var sqlString = "select B,C,D,E where D contains 'https' order by E asc";

// Check for parameters
if (params == 0) {
    loadResults(sqlString);
} else if (params['search-input']) { // Search user input
    searchTerm = params['search-input'].split('+').join([separator = ' ']).trim();
    loadResults(createSQL(searchTerm));
} else if (params['p']){ // Search via button
    searchTerm = params['p'];
    if (params['p'] == 'games') {
        $('.gamesBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Games' order by B asc";
    } else if (params['p'] == 'graphics') {
        $('.graphicsBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Graphics and Imaging' order by B asc";
    } else if (params['p'] == 'internet') {
        $('.internetBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Internet of Things' order by B asc";
    } else if (params['p'] == 'pypi') {
        $('.pypiBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Pypi Modules' order by B asc";
    } else if (params['p'] == 'sounds') {
        $('.soundsBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Sounds' order by B asc";
    } else if (params['p'] == 'ten') {
        $('.tenBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Ten lines or less' order by B asc";
    } else if (params['p'] == 'ui') {
        $('.uiBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'UI' order by B asc";
    } else if (params['p'] == 'utilities') {
        $('.utilitiesBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'Utilities' order by B asc";
    } else if (params['p'] == 'github') {
        $('.githubBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'GitHub Tools' order by B asc";
    } else if (params['p'] == 'objc') {
        $('.objcBtn').addClass('active');
        sqlString = "select B,C,D,E where E = 'ObjC Tools' order by B asc";
    }
    loadResults(sqlString);
}

// search string function
function createSQL(term) {
    return "select B,C,D,E where (E like '%" + term + "%') or (lower(B) like lower('%" + term + "%')) or (lower(C) like lower('%" + term + "%')) or (lower(E) like lower('%" + term + "%'))  order by B asc";

}

// define function to load results
function loadResults(sql){
  $('#scripts').sheetrock({
    url: mySpreadsheet,
    sql: sql,
    rowTemplate: scriptsTemplate,
    callback: function (error, options, response){
      if(!error){
        if ($('#scripts tr').length == 1) {
          $('#scripts').append('<h3>No results.</h3>')
        }
      } else {
        $('#scripts').append('<h3>Error.</h3>');
      }
    }
  });
}

Handlebars.registerHelper("normalize", function(input) {
  return input.toLowerCase().replace(/ +/g, "+").replace(/\.+|,.+|'.+/g, "");
});
