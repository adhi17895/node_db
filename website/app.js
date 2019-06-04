function Infofunction()
{
 var x = document.getElementById("info1");
 var z = document.getElementById("info2");
 var w = document.getElementById("form-submit");
 var y= document.getElementById("artcle")
 
if(x.style.display === "none"  && z.style.display === "none" && w.style.display=== "none")
{
    x.style.display = "block";
    z.style.display = "block";
    w.style.display = "block";
    y.style.display = "none";
}
else{
    x.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
}

}

function appendRow() {
    var table = document.getElementById('table1'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}

function createCell(cell,style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(''); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);
    cell.style.width =  '50px';
    cell.style.height = '30px';                // append DIV to the table cell
    cell.style.paddingLeft="15px" ;
}