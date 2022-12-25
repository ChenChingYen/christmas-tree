var christmasWishes = [
    "Wishing you a very Merry Christmas, ",
    "May this holiday season bring you joy and happiness, ",
    "Sending you warm wishes on this special day, ",
    "May the magic of Christmas fill your heart with love and joy, ",
    "Here's to making memories and celebrating the joy of the season, ",
    "May your Christmas be filled with love, laughter, and all the things you hold dear, ",
    "Wishing you and yours a happy and blessed Christmas, ",
    "May the beauty of the season bring you joy and peace, ",
    "Sending you love and holiday cheer, ",
    "May your Christmas be as bright and wonderful as you are, ",
    "Wishing you a Merry Christmas and a happy and prosperous new year, ",
    "May this Christmas be filled with moments of joy and love, ",
    "Sending you warm and heartfelt Christmas wishes, ",
    "May the spirit of Christmas bring you peace and happiness, ",
    "Wishing you a Merry Christmas and all the best for the new year, ",
    "May your holiday season be filled with love, laughter, and all the things that bring you joy, ",
    "Sending you lots of love and warm wishes on this special day, ",
    "Wishing you and your loved ones a Merry Christmas and a happy and healthy new year, ",
    "May the magic of the season fill your heart with joy and happiness, ",
    "Sending you my best wishes for a Merry Christmas and a happy new year, ",
    "May this Christmas be a time of love, laughter, and joy for you and your family, ",
    "Wishing you all the best this holiday season, ",
    "May the joy and magic of Christmas fill your heart and home, ",
    "Sending you heartfelt Christmas wishes and lots of love, ",
    "Wishing you a Merry Christmas and a happy new year, ",
    "May the spirit of Christmas bring you peace and joy this holiday season, ",
    "Sending you warm and loving Christmas wishes, ",
    "May this holiday season be a time of love, laughter, and joy for you and your loved ones, ",
    "Sending you warm wishes and lots of love on this special day, ",
    "Wishing you a Merry Christmas and a happy new year, filled with all the things that bring you joy, ",
    "May the magic of Christmas fill your heart with happiness and peace, ",
    "Sending you my best wishes for a joyous holiday season, ",
    "May this Christmas be a time of love, laughter, and all the things that bring you joy, ",
    "May the joy of the season fill your heart and your home, ",
];
var symbols = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
var alphabets = {
    'A':[ ' █▀▀█ ', ' █▄▄█ ', ' █. █ '],
    'B':[ ' █▀▀█ ', ' █▀▀▄ ' , ' █▄▄█ ' ],
    'C':[ ' █▀▀█ ', ' █ ..  ', ' █▄▄█ ' ],
    'D':[ ' █▀▀▄ ', ' █. █ ', ' █▄▄▀ ' ],
    'E':[ ' █▀▀▀ ', ' █▀▀▀ ' , ' █▄▄▄ ' ],
    'F':[ ' █▀▀▀ ', ' █▀▀▀ ' , ' █ ..  '],
    'G':[ ' █▀▀█ ', ' █ ▄▄ ', ' █▄▄█ ' ],
    'H':[ ' █. █ ', ' █▀▀█ ' , ' █. █ '],
    'I':[ ' ▀█▀ ', ' .█. ', ' ▄█▄ ' ],
    'J':[ ' .. █ ', ' ▄. █ ', ' █▄▄█ ' ],
    'K':[ ' █ ▄▀ ', ' █▀▄. ', ' █. █ '],
    'L':[ ' █ ..  ', ' █ .. ', ' █▄▄█ ' ],
    'M':[ ' █▀▄▀█ ' , ' █ █ █ ', ' █ . █ '],
    'N':[ ' █▄. █ ', ' █ █ █ ', ' █. ▀█ '],
    'O':[ ' █▀▀▀█ ' , ' █ . █ ', ' █▄▄▄█ ' ],
    'P':[ ' █▀▀█ ' , ' █▄▄█ ', ' █ ..  '],
    'Q':[ ' █▀▀█ ' , ' █. █ ', ' ▀▀█▄ '],
    'R':[ ' █▀▀█ ' , ' █▄▄▀ ', ' █. █ '],
    'S':[ ' █▀▀▀█ ', ' ▀▀▀▄▄ ', ' █▄▄▄█ ' ],
    'T':[ ' ▀▀█▀▀ ', ' . █ . ', ' . █ . '],
    'U':[ ' █. █ ', ' █. █ ', ' ▀▄▄▀ '],
    'V':[ ' █ █ ', '  █ █  ', '  ▀▄▀  '],
    'W':[ ' █ . █ ', ' █ █ █ ', ' █▄▀▄█ '],
    'X':[ ' ▀▄ ▄▀ ', ' . █ . ', ' ▄▀ ▀▄ '],
    'Y':[ ' █ . █ ', ' █▄▄▄█ ', ' . █ . '],
    'Z':[ ' █▀▀▀█ ', ' ▄▄▄▀▀ ', ' █▄▄▄█ ']
};
// for(const [key, value] of Object.entries(alphabets)){
//     console.log(value[0]+"\n"+value[1]+"\n"+value[2]);
// }
// var merryChristmasText =    " █▀▄▀█  █▀▀▀  █▀▀█  █▀▀█  █ . █ 　  █▀▀█  █. █  █▀▀█ ▀█▀  █▀▀▀█ ▀▀█▀▀  █▀▄▀█  █▀▀█  █▀▀▀█ █ \n"+
//                             " █ █ █  █▀▀▀  █▄▄▀  █▄▄▀  █▄▄▄█ 　  █ ..  █▀▀█  █▄▄▀ .█.  ▀▀▀▄▄ . █ .  █ █ █  █▄▄█  ▀▀▀▄▄ █ \n"+
//                             " █ . █  █▄▄▄  █. █  █. █  . █ . 　  █▄▄█  █. █  █. █ ▄█▄  █▄▄▄█ . █ .  █ . █  █. █  █▄▄▄█ ▄ \n";
// console.log(merryChristmasText);
var list = document.querySelector(".query-lines");
var input = document.querySelector(".input-name-current");
var inputs = document.querySelectorAll(".input-name-current");

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // update input from input-name-current class
        input = document.querySelector(".input-name-current");
        var name = input.value;
        // disable previous selected input
        input.setAttribute('disabled', 'disabled');
        // remove previous input-name-current class
        input.classList.remove("input-name-current");
        if(name!==''){
            appendNewQuery(name, "Output");
            appendNewQuery(name, 'Wish');
            appendNewQuery(name, "Christmas Tree");
        }
        appendNewQuery(name, "Enter your name");
    }
});

function appendNewQuery(name, lineType){
    var label = document.createElement("label");
    label.setAttribute('class','input-label');
    label.setAttribute('for','name');
    label.innerHTML = `C:\\${lineType}>`;

    if(lineType==='Output'){
        var input = document.createElement("label");
        input.setAttribute('type','text');
        input.setAttribute('class','input-name');
        input.innerHTML = christmasWishes[Math.floor(Math.random() * christmasWishes.length)]+`${name}!`;
        input.setAttribute('disabled', 'disabled');
        generateBoldString(name);
        // input.innerHTML += '\n'+generateTree();
    }else if(lineType==='Wish'){
        var input = document.createElement("div");
        var boldText = generateBoldString(name);
        // console.log(boldText);
        var rowText = '';
        for(let a=0; a<boldText.length; a++){
            var row = document.createElement("div");
            input.setAttribute('class','bold-text-row');
            // console.log(boldText.charAt(a));
            rowText += boldText.charAt(a);
            if(boldText.charAt(a)==='\n'){
                row.innerHTML = rowText;
                input.appendChild(row);
                rowText = '';
            }
        }
    }else if(lineType==='Christmas Tree'){
        var input = document.createElement("div");
        // input.setAttribute('class','input-name');
        var tree = generateTree();
        var rowText = '';
        for(let a=0; a<tree.length; a++){
            var row = document.createElement("div");
            input.setAttribute('class','tree-row');
            rowText += tree.charAt(a);
            // if(tree.charAt(a)!==' '){
            //     rowText += tree.charAt(a);
            //     console.log(tree.charAt(a));
            // }
            if(tree.charAt(a)==='\n'){
                row.innerHTML = rowText;
                input.appendChild(row);
                rowText = '';
            }
        }
    }else{
        var input = document.createElement("input");
        input.setAttribute('type','text');
        input.setAttribute('maxlength','50');
        input.setAttribute('class','input-name input-name-current');
    }
    
    var li = document.createElement("li");
    li.setAttribute('class','query-line');
    li.appendChild(label);
    li.appendChild(input);
    list.appendChild(li);

    input.focus();
}

function generateTree(){
    var width = 37;
    var height = 20;
    var store = '';
    for(let i=0; i<height-1; i++){
        var temp = '';
        // generate space
        for(let a=0; a<Math.floor(width/2)-i; a++){
            temp += ' ';
        }
        // generate symbol
        for(let j=0; j<i*2-1; j++){
            temp += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        // console.log(temp);
        store = store + temp + '\n';
        temp = '';
    }
    for(let i=0; i<4; i++){
        var temp = '';
        for(let a=0; a<13; a++){
            temp += ' ';
        }
        for(let j=0; j<7; j++){
            temp += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        // console.log(temp);
        store = store + temp + '\n';
        temp = '';
    }
    // console.log(store);
    return store;
}

function generateBoldString(str){
    str = "Merry Christmas "+ str;
    str = str.toUpperCase();
    // console.log(str);
    var result = '';
    for(let h=0; h<3; h++){
        for(let i=0; i<str.length; i++) {
            var letter = str.charAt(i);
            if(isLetter(letter))result += alphabets[letter][h];
            else if(letter===' ')result+='..';
        }
        result += "\n";
    }
    // console.log(merryChristmasText);
    // console.log(result);
    // return merryChristmasText+result;
    return result;
}

function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}