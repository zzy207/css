var wp = document.getElementById('wp');
var tableHtml = [
    '<table border="1">'
];

for (var i=1; i<10; i++) {

    tableHtml.push('<tr>');

    for (var j=1; j<=i; j++) {
        tableHtml.push('<td>'+i+'*'+j+'='+i*j+'</td>');
    }

    tableHtml.push('</tr>');  
}



tableHtml.push('</table>');

console.log(tableHtml);

wp.innerHTML = tableHtml.join('');