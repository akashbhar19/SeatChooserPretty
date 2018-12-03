
//$(window).on("load", mapFunc);

$(document).ready(function(){
        populateMap();
        mapFunc();
});

var sections = [];



var mapFunc = function(){

if($('#msform').length){ //if a tag with msform as the id exists....

        //var rsr = Raphael('map', '883.24', '661.41');
        var w = '883.24';
        var h = '530.41';
        var rsr = Raphael('map', w, h);
        rsr.setViewBox(0, 0, w, h, true);
        rsr.setSize('120%', '120%');



        //Overflow Sections

        var sec119 = rsr.path("M949.4,603.32c0-12,0-24,0-35.95,0-5.66,1.46-7.29,6.94-7.26,7.63,0,15.29.11,22.89.68a7.06,7.06,0,0,1,5,3.58c10.16,25.06,20.09,50.21,30,75.37,1.75,4.43.57,6.26-4.28,6.28-18.31.09-36.61,0-54.92,0-4.42,0-5.73-2.25-5.7-6.28C949.46,627.61,949.4,615.47,949.4,603.32Z");
        sec119.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        sec119.transform("t-379.99 -131.6").data('id', 'sec119');
        sections.push(sec119);

        var sec120 = rsr.path("M942.86,603.75c0,12.16-.12,24.31.07,36.47.07,4.57-1.73,6.2-6.2,6.18q-32.72-.17-65.44,0c-4.44,0-6.39-1.74-6.37-6.19q.15-36.72.14-73.43c0-4.23,1.79-5.79,6.08-5.76q33,.21,65.94,0c4.39,0,5.89,1.54,5.84,5.82C942.75,579.1,942.86,591.43,942.86,603.75Z");
        sec120.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        sec120.transform("t-379.99 -131.6").data('id', 'sec120');
        sections.push(sec120);

        var sec121 = rsr.path("M858.19,603.5c0,12.32-.1,24.65.05,37,.05,4.27-1.51,5.89-5.88,5.86-21.48-.17-43-.1-64.45-.13-6.65,0-7.35-.72-7.35-7.52q0-35.22,0-70.44c0-6.63.55-7.15,7.05-7.16q32,0,63.95,0c6.29,0,6.55.26,6.56,6.45q0,18,0,36Z");
        sec121.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        sec121.transform("t-379.99 -131.6").data('id', 'sec121');
        sections.push(sec121);

        var sec122 = rsr.path("M696.75,603.46c0-12.15.08-24.31,0-36.46,0-4.18,1.43-6,5.83-6q33,.19,65.92,0c4.25,0,6.06,1.52,6,5.81q-.11,36.71,0,73.41c0,4.24-1.61,6-5.89,6q-33-.13-65.92,0c-4.62,0-6.08-1.93-6-6.35C696.87,627.77,696.75,615.61,696.75,603.46Z");
        sec122.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        sec122.transform("t-379.99 -131.6").data('id', 'sec122');
        sections.push(sec122);

        var sec123 = rsr.path("M689.94,608.1c0,13.5-.13,27,.07,40.5.07,4.62-1.24,6.59-6.23,6.53q-28.25-.34-56.5,0c-4.54,0-6.77-1.5-6.13-6s1-9.33,2.67-13.5c9.59-23.39,19.61-46.61,29.34-69.94,1.4-3.35,3.18-4.94,7-4.91,7.8,0,15.6-.42,23.4-.66,4.48-.14,6.61,1.73,6.55,6.53-.19,13.83-.07,27.67-.07,41.5Z");
        sec123.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        sec123.transform("t-379.99 -131.6").data('id', 'sec123');
        sections.push(sec123);

        //Student Rows

        var G1R1 = rsr.path("M729.48,409.34v6.42H643.76v-6.42Z");
        G1R1.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R1.transform("t-379.99 -131.6").data('id', 'G1R1');
        sections.push(G1R1);

        var G1R2 = rsr.path("M643.56,424.68V418h85.9v6.67Z");
        G1R2.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R2.transform("t-379.99 -131.6").data('id', 'G1R2');
        sections.push(G1R2);

        var G1R3 = rsr.path("M643.54,433v-6.19h85.87V433Z");
        G1R3.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R3.transform("t-379.99 -131.6").data('id', 'G1R3');
        sections.push(G1R3);

        var G1R4 = rsr.path("M643.56,441.57v-6.23h85.86v6.23Z");
        G1R4.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R4.transform("t-379.99 -131.6").data('id', 'G1R4');
        sections.push(G1R4);

        var G1R5 = rsr.path("M729.41,443.63v6.92H643.66v-6.92Z");
        G1R5.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R5.transform("t-379.99 -131.6").data('id', 'G1R5');
        sections.push(G1R5);

        var G1R6 = rsr.path("M729.47,452.35v6.46H643.75v-6.46Z");
        G1R6.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R6.transform("t-379.99 -131.6").data('id', 'G1R6');
        sections.push(G1R6);

        var G1R7 = rsr.path("M643.59,467.43V461h85.87v6.44Z");
        G1R7.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R7.transform("t-379.99 -131.6").data('id', 'G1R7');
        sections.push(G1R7);

        var G1R8 = rsr.path("M643.6,476.22v-7h85.71v7Z");
        G1R8.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R8.transform("t-379.99 -131.6").data('id', 'G1R8');
        sections.push(G1R8);

        var G1R9 = rsr.path("M643.58,484.71v-6.43h85.72v6.43Z");
        G1R9.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R9.transform("t-379.99 -131.6").data('id', 'G1R9');
        sections.push(G1R9);

        var G1R10 = rsr.path("M729.38,486.65v6.27H643.66v-6.27Z");
        G1R10.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R10.transform("t-379.99 -131.6").data('id', 'G1R10');
        sections.push(G1R10);

        var G1R11 = rsr.path("M729.49,495.23v6.54H643.71v-6.54Z");
        G1R11.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R11.transform("t-379.99 -131.6").data('id', 'G1R11');
        sections.push(G1R11);

        var G1R12 = rsr.path("M729.49,504v6.16H643.65V504Z");
        G1R12.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R12.transform("t-379.99 -131.6").data('id', 'G1R12');
        sections.push(G1R12);

        var G1R13 = rsr.path("M643.55,519.21v-6.73h85.86v6.73Z");
        G1R13.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R13.transform("t-379.99 -131.6").data('id', 'G1R13');
        sections.push(G1R13);

        var G1R14 = rsr.path("M729.5,521.24v6.47H643.74v-6.47Z");
        G1R14.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R14.transform("t-379.99 -131.6").data('id', 'G1R14');
        sections.push(G1R14);

        var G1R15 = rsr.path("M729.38,529.48v6.84h-85.7v-6.84Z");
        G1R15.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R15.transform("t-379.99 -131.6").data('id', 'G1R15');
        sections.push(G1R15);

        var G1R16 = rsr.path("M643.57,544.8v-6.57H729.4v6.57Z");
        G1R16.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R16.transform("t-379.99 -131.6").data('id', 'G1R16');
        sections.push(G1R16);

        var G1R17 = rsr.path("M643.57,553.19V547h85.82v6.15Z");
        G1R17.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G1R17.transform("t-379.99 -131.6").data('id', 'G1R17');
        sections.push(G1R17);

        var G2R1 = rsr.path("M819.21,416H734.68v-6.63h84.53Z");
        G2R1.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R1.transform("t-379.99 -131.6").data('id', 'G2R1');
        sections.push(G2R1);

        var G2R2 = rsr.path("M819.37,417.94v6.66h-84.8v-6.66Z");
        G2R2.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R2.transform("t-379.99 -131.6").data('id', 'G2R2');
        sections.push(G2R2);

        var G2R3 = rsr.path("M819.41,426.67v6.21H734.55v-6.21Z");
        G2R3.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R3.transform("t-379.99 -131.6").data('id', 'path_t');
        sections.push(G2R3);

        var G2R4 = rsr.path("M819.42,435.23v6.27h-84.7v-6.27Z");
        G2R4.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R4.transform("t-379.99 -131.6").data('id', 'G2R4');
        sections.push(G2R4);

        var G2R5 = rsr.path("M734.54,450.48V443.6h84.79v6.88Z");
        G2R5.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R5.transform("t-379.99 -131.6").data('id', 'G2R5');
        sections.push(G2R5);

        var G2R6 = rsr.path("M734.43,458.75v-6.34H819.3v6.34Z");
        G2R6.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R6.transform("t-379.99 -131.6").data('id', 'G2R6');
        sections.push(G2R6);

        var G2R7 = rsr.path("M819.36,467.42H734.51V461h84.85Z");
        G2R7.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R7.transform("t-379.99 -131.6").data('id', 'G2R7');
        sections.push(G2R7);

        var G2R8 = rsr.path("M819.35,469.24v7H734.53v-7Z");
        G2R8.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R8.transform("t-379.99 -131.6").data('id', 'G2R8');
        sections.push(G2R8);

        var G2R9 = rsr.path("M819.33,478.24v6.51H734.64v-6.51Z");
        G2R9.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R9.transform("t-379.99 -131.6").data('id', 'G2R9');
        sections.push(G2R9);

        var G2R10 = rsr.path("M734.47,493v-6.34h84.84V493Z");
        G2R10.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R10.transform("t-379.99 -131.6").data('id', 'G2R10');
        sections.push(G2R10);

        var G2R11 = rsr.path("M819.37,495.21v6.58H734.62v-6.58Z");
        G2R11.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R11.transform("t-379.99 -131.6").data('id', 'G2R11');
        sections.push(G2R11);

        var G2R12 = rsr.path("M819.42,504v6.23H734.53V504Z");
        G2R12.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R12.transform("t-379.99 -131.6").data('id', 'G2R12');
        sections.push(G2R12);

        var G2R13 = rsr.path("M819.39,512.39v6.71H734.57v-6.71Z");
        G2R13.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R13.transform("t-379.99 -131.6").data('id', 'G2R13');
        sections.push(G2R13);

        var G2R14 = rsr.path("M734.4,527.8v-6.48h84.9v6.48Z");
        G2R14.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R14.transform("t-379.99 -131.6").data('id', 'G2R14');
        sections.push(G2R14);

        var G2R15 = rsr.path("M819.35,529.47v6.67H734.61v-6.67Z");
        G2R15.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R15.transform("t-379.99 -131.6").data('id', 'G2R15');
        sections.push(G2R15);

        var G2R16 = rsr.path("M819.37,538.13v6.58H734.58v-6.58Z");
        G2R16.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R16.transform("t-379.99 -131.6").data('id', 'G2R16');
        sections.push(G2R16);

        var G2R17 = rsr.path("M734.5,553.18v-6.13h84.79v6.13Z");
        G2R17.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G2R17.transform("t-379.99 -131.6").data('id', 'G2R17');
        sections.push(G2R17);

        var G3R1 = rsr.path("M824.39,415.71v-6.4H909v6.4Z");
        G3R1.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R1.transform("t-379.99 -131.6").data('id', 'G3R1');
        sections.push(G3R1);

        var G3R2 = rsr.path("M824.46,417.77h84.45v7H824.46Z");
        G3R2.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R2.transform("t-379.99 -131.6").data('id', 'G3R2');
        sections.push(G3R2);

        var G3R3 = rsr.path("M909.17,426.64v6.28H824.43v-6.28Z");
        G3R3.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R3.transform("t-379.99 -131.6").data('id', 'G3R3');
        sections.push(G3R3);

        var G3R4 = rsr.path("M909,435.36v6.22h-84.5v-6.22Z");
        G3R4.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R4.transform("t-379.99 -131.6").data('id', 'G3R4');
        sections.push(G3R4);

        var G3R5 = rsr.path("M824.45,450.56v-6.94h84.49v6.94Z");
        G3R5.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R5.transform("t-379.99 -131.6").data('id', 'G3R5');
        sections.push(G3R5);

        var G3R6 = rsr.path("M909,452.31v6.46h-84.5v-6.46Z");
        G3R6.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R6.transform("t-379.99 -131.6").data('id', 'G3R6');
        sections.push(G3R6);

        var G3R7 = rsr.path("M824.46,467.45V461H909v6.42Z");
        G3R7.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R7.transform("t-379.99 -131.6").data('id', 'G3R7');
        sections.push(G3R7);

        var G3R8 = rsr.path("M909.06,469.23v6.91H824.53v-6.91Z");
        G3R8.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R8.transform("t-379.99 -131.6").data('id', 'G3R8');
        sections.push(G3R8);

        var G3R9 = rsr.path("M824.43,484.77v-6.43H909v6.43Z");
        G3R9.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R9.transform("t-379.99 -131.6").data('id', 'G3R9');
        sections.push(G3R9);

        var G3R10 = rsr.path("M824.45,486.47h84.48V493H824.45Z");
        G3R10.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R10.transform("t-379.99 -131.6").data('id', 'G3R10');
        sections.push(G3R10);

        var G3R11 = rsr.path("M909.07,495.31v6.39H824.45v-6.39Z");
        G3R11.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R11.transform("t-379.99 -131.6").data('id', 'G3R11');
        sections.push(G3R11);

        var G3R12 = rsr.path("M824.35,510.27v-6.19h84.76v6.19Z");
        G3R12.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R12.transform("t-379.99 -131.6").data('id', 'G3R12');
        sections.push(G3R12);

        var G3R13 = rsr.path("M824.42,519.23v-6.87h84.65v6.87Z");
        G3R13.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R13.transform("t-379.99 -131.6").data('id', 'G3R13');
        sections.push(G3R13);

        var G3R14 = rsr.path("M824.28,527.8v-6.47h84.77v6.47Z");
        G3R14.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R14.transform("t-379.99 -131.6").data('id', 'G3R14');
        sections.push(G3R14);

        var G3R15 = rsr.path("M824.35,536.17v-6.67h84.59v6.67Z");
        G3R15.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R15.transform("t-379.99 -131.6").data('id', 'G3R15');
        sections.push(G3R15);

        var G3R16 = rsr.path("M909.06,538.11v6.73H824.45v-6.73Z");
        G3R16.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R16.transform("t-379.99 -131.6").data('id', 'G3R16');
        sections.push(G3R16);

        var G3R17 = rsr.path("M909.06,547.11v6.13H824.42v-6.13Z");
        G3R17.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G3R17.transform("t-379.99 -131.6").data('id', 'G3R17');
        sections.push(G3R17);

        var G4R1 = rsr.path("M999.82,409.38v6.43H914.32v-6.43Z");
        G4R1.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R1.transform("t-379.99 -131.6").data('id', 'G4R1');
        sections.push(G4R1);

        var G4R2 = rsr.path("M999.67,424.78H914.4V418h85.27Z");
        G4R2.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R2.transform("t-379.99 -131.6").data('id', 'G4R2');
        sections.push(G4R2);

        var G4R3 = rsr.path("M999.86,426.77v6.14H914.4v-6.14Z");
        G4R3.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R3.transform("t-379.99 -131.6").data('id', 'G4R3');
        sections.push(G4R3);

        var G4R4 = rsr.path("M999.74,435.32v6.37H914.41v-6.37Z");
        G4R4.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R4.transform("t-379.99 -131.6").data('id', 'G4R4');
        sections.push(G4R4);

        var G4R5 = rsr.path("M999.81,450.53H914.29v-6.95h85.51Z");
        G4R5.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R5.transform("t-379.99 -131.6").data('id', 'G4R5');
        sections.push(G4R5);

        var G4R6 = rsr.path("M914.34,458.81v-6.53h85.29v6.53Z");
        G4R6.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R6.transform("t-379.99 -131.6").data('id', 'G4R6');
        sections.push(G4R6);

        var G4R7 = rsr.path("M914.2,467.37V461h85.54v6.33Z");
        G4R7.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R7.transform("t-379.99 -131.6").data('id', 'G4R7');
        sections.push(G4R7);

        var G4R8 = rsr.path("M914.21,476.2v-6.82h85.4v6.82Z");
        G4R8.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R8.transform("t-379.99 -131.6").data('id', 'G4R8');
        sections.push(G4R8);

        var G4R9 = rsr.path("M999.78,484.85H914.42v-6.59h85.36Z");
        G4R9.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R9.transform("t-379.99 -131.6").data('id', 'G4R9');
        sections.push(G4R9);

        var G4R10 = rsr.path("M914.21,493v-6.32h85.53V493Z");
        G4R10.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R10.transform("t-379.99 -131.6").data('id', 'G4R10');
        sections.push(G4R10);

        var G4R11 = rsr.path("M999.82,495.29v6.51H914.31v-6.51Z");
        G4R11.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R11.transform("t-379.99 -131.6").data('id', 'G4R11');
        sections.push(G4R11);

        var G4R12 = rsr.path("M914.27,510.32v-6.2h85.35v6.2Z");
        G4R12.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R12.transform("t-379.99 -131.6").data('id', 'G4R12');
        sections.push(G4R12);

        var G4R13 = rsr.path("M914.22,519.18v-6.76h85.5v6.76Z");
        G4R13.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R13.transform("t-379.99 -131.6").data('id', 'G4R13');
        sections.push(G4R13);

        var G4R14 = rsr.path("M914.31,527.71v-6.54h85.34v6.54Z");
        G4R14.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R14.transform("t-379.99 -131.6").data('id', 'G4R14');
        sections.push(G4R14);

        var G4R15 = rsr.path("M999.84,529.38v6.76H914.37v-6.76Z");
        G4R15.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R15.transform("t-379.99 -131.6").data('id', 'G4R15');
        sections.push(G4R15);

        var G4R16 = rsr.path("M999.83,538.23v6.49H914.44v-6.49Z");
        G4R16.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R16.transform("t-379.99 -131.6").data('id', 'G4R16');
        sections.push(G4R16);

        var G4R17 = rsr.path("M914.28,546.9h85.35v6.34H914.28Z");
        G4R17.attr({ 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000' });
        G4R17.transform("t-379.99 -131.6").data('id', 'G4R17');
        sections.push(G4R17);


        for (var i = 0; i < sections.length; i++) {
                sections[i].mouseover(function (e) {
                        this.node.style.opacity = 0.7;
                });

                sections[i].mouseout(function (e) {
                        this.node.style.opacity = 1;
                });


                if(Array.from(highlightedMap.keys()).length){ //if the map is not empty
                        let highlightedSections = Array.from(highlightedMap.keys()); //store the sections that have color
                        let correspondingColors = Array.from(highlightedMap.values()); //store the colors that correspond to the sections


                        for(let a=0; a<highlightedSections.length; a++){
                                if(sections[i].data('id') == highlightedSections[a]){
                                        sections[i].node.style.fill = correspondingColors[a];
                                        console.log( " Populating " + sections[i].data('id') + " with color " + correspondingColors[a]);
                                }
                        }
                }
        }
}//end of if

}// end of mapFunc



var populateMap = function(){
        if($('#activeSections').length){

                let sectionArray = $('#activeSections').val().split(","); //split the string into the sections
                let colorArray = $('#activeColors').val().split("),"); //split the string into the colors

                //add a parentheses back onto the color codes
                for(let i=0; i<colorArray.length; i++){
                        if(i != colorArray.length -1){
                        colorArray[i] = colorArray[i] + ")";
                        }
                }

                if(colorArray.length == sectionArray.length){
                        for(let i=0; i<sectionArray.length; i++){
                                highlightedMap.set(sectionArray[i], colorArray[i]);
                        }

                }
                console.log(highlightedMap);
        }

}
