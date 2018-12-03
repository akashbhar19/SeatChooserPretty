var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});
var app = express();
var _ = require("underscore");
var session = require('express-session');
var cookieParser = require('cookie-parser');

const { check, validationResult } = require('express-validator/check');



//used for sessions
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!", resave: false, saveUninitialized: false}));

var helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by'); //this code hides that the app is powered by express


//set the view engine to render ejs files
app.set("view engine", "ejs");
app.set('views', './views');

app.use("/javascript", express.static("./javascript"));
app.use("/img", express.static("./img"));
app.use("/css", express.static("./css"));

    // #FF0000 //red
    // #8B0000 //dark red
    // #FFA07A //light salmon
    // #FFD700 //gold
    // #FFA500 //orange
    // #FFFF00 //yellow
    // #BDB76B //dark khaki
    // #7CFC00 //lawn green
    // #228B22 //forest green
    // #808000 //olive
    // #00FFFF //cyan
    // #008B8B //dark cyan
    // #4169E1 //royal blue
    // #6A5ACD //slate blue
    // #FF00FF //magenta
    // #8A2BE2 //blue violet
    // #800080 //purple
    // #4B0082 //indigo
    // #808080 //gray
    // #2F4F4F //dark slate gray
    // #708090 //slate gray
    // #D2B48C //tan

    //color count is 22

//These currently aren't being used but they're the values for the color legend on indexAdmin.ejs
const colors = ['#FF0000','#8B0000','#FFA07A','#FFD700','#FFA500','#FFFF00',
    '#BDB76B','#7CFC00','#228B22','#808000','#00FFFF','#008B8B','#4169E1','#6A5ACD',
    '#FF00FF','#8A2BE2','#800080','#4B0082','#808080','#2F4F4F','#708090','#D2B48C',
];

//Logan is trying to map the colors to majors, he asked that this be left for him to work on
var majorColorMap = new Map();

//Also leave this be for now including the assignColor
var assignColor = function(arrayOfMajors){
    for(let i=0; i<arrayOfMajors.length; i++){
        majorColorMap.set(arrayOfMajors[i], colors[i]);
    }
}



app.get("/", function(req, res){

  //Reads from a text file and populates checkboxes on indexAdmin.ejs
  //This interacts with the EJS that's enclosed in '<% %>' on indexAdmin.ejs
    var data = [];
    //majors.txt is a list of all majors from UNCC website that I edited for the way they're seated in the excel doc
    require('fs').readFileSync('majors.txt').toString().split('\n').forEach(function(line){
      data.push(line.trim()); //triim gets rid of the new line characters
     })
     //This sends a new object called data using the array 'data' declared above
    res.render("indexAdmin", {data: data});
});

app.post("/", urlencodedParser, function(req,res){

    //var majors = Array.from(majorColorMap.keys()); //stores majors
    req.session.checkedMajors = req.body.major;
    console.log(req.body);
    var majors = req.session.checkedMajors;
    var majorsAndColors = {majors: majors, colors: colors}; //object to pass to view that populates the legend

    res.render("indexAdmin", {majorsAndColors: majorsAndColors});

});







app.get("/edit", function(req, res){

    res.render("edit");
});



var highlightedSectionsColorsMap = new Map();
app.post("/edit", urlencodedParser, function(req, res){
    console.log('Entered POST of /edit');
    let sectionArray;
    let colorArray;

    if(!_.isEmpty(req.body)){
        //console.log(req.body);
        if(req.body.major){
            console.log("req.body.major is: " + req.body.major);
        }
        if(req.body.sections && req.body.colors){
            // console.log("req.body.sections is: " + req.body.sections);
            // console.log("req.body.colors is: " + req.body.colors);

            sectionArray = req.body.sections.split(","); //split the string into the sections
            colorArray = req.body.colors.split("),"); //split the string into the colors

            //add a parentheses back onto the color codes
            for(let i=0; i<colorArray.length; i++){
                if(i != colorArray.length -1){
                    colorArray[i] = colorArray[i] + ")";
                }
            }

            if(colorArray.length == sectionArray.length){
                for(let i=0; i<sectionArray.length; i++){
                    highlightedSectionsColorsMap.set(sectionArray[i], colorArray[i]);
                }
                console.log(highlightedSectionsColorsMap);
            }

        }

    }


    var majorsAndColors = {majors: req.session.checkedMajors, colors: colors}; //object to pass to view that populates the legend
    res.render("indexAdmin", {majorsAndColors: majorsAndColors, highlightedSections: sectionArray, highlightedColors: colorArray});
});




app.listen(3000);
