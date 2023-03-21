// parse a pdf file and return the text content

var pdf = require('pdf-parse');

var fs = require('fs');
var dataBuffer = fs.readFileSync('glossaire.pdf');
var list = [];
pdf(dataBuffer).then(function (data) {

    // parse each line of the pdf file
    var lines = data.text.split('\n');

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        //console.log(line);
        // parse each word of the line
        line = line.match(/^ /) ? line.replace(/^ /, '') : line;
        // or regex match a word repeat 2 times
        // if word is not a word, continue
        if (line.match(/[0-9]+/)) {
            continue
        }
        var words = line.split('\n');
        console.log(words);
        console.log(words[0].split("\t"));
        var abrv = "";
        var def = "";
        console.log(abrv + ' ' + def);
        // remove whitespaces on the beginning of def
        if (!abrv || !def) {
            continue
        }
        abrv = abrv.replace(/\s+$/, '');
        def = def.replace(/^\s+/, '');
        list.push({ abrv: abrv, def: def });
    }
    console.log(list);

    // output a csv file with the words and their definitions
    var csv = require('fast-csv');
    var ws = fs.createWriteStream('glossaire.csv');
    csv
        .write(list, { headers: true })
        .pipe(ws);


});

