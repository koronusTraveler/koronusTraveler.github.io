// Javascript Section

//addRow function to add rows to the interactive table on web page 
    function addRow()
    {
            //get input values
            var game = document.getElementById('game').value;
    var meme = document.getElementById('meme').value;
    //get html table
    var table = document.getElementsByTagName('table')[0];
    //insert new empty row at the bottom of table
    var newRow = table.insertRow(table.rows.length);
    //add cells to rows
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    //add values to cells
    cell1.innerHTML = game;
    cell2.innerHTML = meme;


}

//function that generates a random number and then redirects user when they click the button "Jam" to a music video.
function tunes()
{   //generate random number between 1 and 5
     random = Math.floor((Math.random() * 5) + 1);

    if (random == 1)
    {
        
        window.location = "https://www.youtube.com/watch?v=UhjG47gtMCo&list=PLyYzsp1xJ7S6V_py-s5myUze0dtmRbvgT";
    }
    else if (random == 2)
    {
    
        window.location = "https://www.youtube.com/watch?v=GUrs8SR0tGI&index=3&list=PLyYzsp1xJ7S6V_py-s5myUze0dtmRbvgT";
    }
    else if (random == 3)
    {
        
        window.location = "https://www.youtube.com/watch?v=YV4oYkIeGJc";
    }
    else if (random == 4)
    {
        
        window.location= "https://www.youtube.com/watch?v=EDKwCvD56kw";
    }
    else if(random == 5)
    {
        
        window.location = "https://www.youtube.com/watch?v=CSvFpBOe8eY&list=PLkNpUIZAvv2D7zmbpS9FNpc-AghftLJ2l";
    }
    //generate and fill random again if the user wants to use the back button to get another music video
     random = Math.floor((Math.random() * 5) + 1);
}



//function that changes the background color of the page randomly
function changeColor()
{
    random = Math.floor((Math.random() * 6) + 1);

    if (random == 1)
    {

        document.body.style.background = 'red';
    }
    else if (random == 2)
    {

        document.body.style.background = 'blue';
    }
    else if (random == 3)
    {

        document.body.style.background = 'green';
    }
    else if (random == 4)
    {

        document.body.style.background = 'purple';
    }
    else if (random == 5)
    {

        document.body.style.background = 'yellow';
    }
    else if (random == 6)
    {

        document.body.style.background = 'grey';
    }
}