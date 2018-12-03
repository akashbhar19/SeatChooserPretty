var highlightedMap = new Map();//key = section, value = color

$(document).ready(function(){
    setCheckboxLimit();
    activeColor();
    submitMap();


    test();
});

var setCheckboxLimit = function(){
    var limit = 22;
    $('input.single-checkbox').on('change', function(evt) {
        if($(this).siblings(':checked').length >= limit) {
            this.checked = false;
        }
    });
}


var test = function(){
    $("#test3").click(function(){
        console.log('hello this is a test');
        console.log($('.tableRow ').css('background-color'));
        console.log($('.tableRow ').children());
    });
}

//changes the background color of the majors in the legend to show that it is active 
//and stores color that will be used when selecting sections on the map
var activeColor = function(){
    //if a tag with table as the class exists....
    if( $('.tableRow').length ){

        var tdColor; //represents the color of the major selected on the legend. td is for the table data tag that holds the color
        $(".tableRow").click(function(){
        
            $(".tableRow").removeClass('selected'); //removes the other highlighted majors if they exist
            $(this).toggleClass('selected'); //highlights selected            
            tdColor = $(this).children().first().css("background-color"); //stores the rbg color value on the legend            
            console.log(tdColor); //output the color value to the console

        });

    //changes the color of the row/section when clicked
    for (var i = 0; i < sections.length; i++) {
        
        sections[i].click(function (e) { //sections is being accessed from adminMap.js. When a variable is declared globally it can be accessed from any javscript file

            if(typeof tdColor !== "undefined"){ //if the user click a section without selecting a color, do nothing
                let id = this.data('id'); //this id is set in adminMap. it is part of the path tag I think

        
                console.log(this.node.style.fill); //shows current color of the section

                switch(this.node.style.fill){               
                    //if the fill color is black or if the fill color is blank AKA the attribute doesnt exist
                    case "rgb(0, 0, 0)": 
                    case "":                    
                            this.node.style.fill = tdColor; //change the fill color to the highlighted color
                            highlightedMap.set(id, tdColor); //add the section number and the color that the section is highlighted                 
                            break;

                    //when fill is set to red make it black
                    case tdColor: //if the fill is already the td color 

                            this.node.style.fill = "#000000";//change the fill back to black                       
                            highlightedMap.delete(id);//delete the id from the map                     
                            break;
                            
                    default:
                        //if the section already has a color and is not black, remove it from the map
                        if(this.node.style.fill != tdColor){
                            highlightedMap.delete(id);//delete the id from the map
                        }
                            this.node.style.fill = "rgb(0,0,0)"                        
                            //add the id to the map
                            //highlighted.push(id);
                            break;
                }//end of switch

                console.log(highlightedMap); //log map to the console 
            
            }
        });
    }//end of for loop    
    }//end of if statement
   
}


var submitMap = function(){

    //this button handler passes the sections that are highlighted to the app.js
    $("#highlightedSubmit").click(function(){
        //$('#object').val($.param(obj));
        $('#sections').val(Array.from(highlightedMap.keys()));
        $('#colors').val(Array.from(highlightedMap.values()));
        $('#highlightedForm').submit();
    });

}
