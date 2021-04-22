var lastAction;



 // start code validatejson
 function jsonValidator() {
  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  editorOutput.getSession().setMode("ace/mode/text");
  var jsonValue = editor.getValue();
    try{
      JSON.parse(jsonValue);
      lastAction="validate"
      return editorOutput.setValue("This JSON code is perfectly valid.");
      
    } catch (e) {
      return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
     
    }
  
 }




function jsonTocsv() {
  var editor = ace.edit("editor");
  var jsonVariable = editor.getValue();
  try {
    lastAction="jsonTocsv";
    return jsonTocsvbyjson(jsonVariable)  
  } catch (e) {
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
  
}

function jsonTocsvbyjson(e, t, o) {
  var i;
  var editorOutput = ace.edit("editorOutput");
  try {
    i = jsonToCsv(e, ",", !0, !1, !1)
  } catch (e) {
   // return console.log(e), null != t && t ? openErrorDialog("Error in Convert :" + e) : editorResult.setValue("Error in Convert"), !1
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
  if (null != t && t) return i;
  editorOutput.getSession().setMode("ace/mode/text");
  editorOutput.setValue(i)
}




function jsonToBase64() {
    var editor = ace.edit("editor");
    var editorOutput = ace.edit("editorOutput");
    try{
      var e = editor.getValue();
      var b64 = btoa(unescape(encodeURIComponent(e)));
      editorOutput.getSession().setMode("ace/mode/text");
      lastAction="jsonToBase64";
      return editorOutput .setValue(b64);
    }catch(e){
      return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
    }
   
}

function jsonToPlainText(){

      var editor = ace.edit("editor");
      var editorOutput = ace.edit("editorOutput");
      try {
        var json = editor.getValue();
        editorOutput.getSession().setMode("ace/mode/text");
        lastAction="jsonToPlainText";
        return editorOutput .setValue(jsonToText1(JSON.parse(json)));
      } catch (e) {
        return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
      }
      

}

function jsonToText1(json) {
  var text = '';
  if (typeof json == "object") {
      if (json instanceof Array) {
          for (var key in json) {
              text += jsonToText(json[key]);
          }
      }
      else {
          for(var key in json) {
              var val = json[key];
              if (typeof val == "object") {
                  text += key + "\n" + jsonToText (val);
              }
              else {
                  text += key + " " + jsonToText (val);
              }
          }
      }
  }
  else {
      text += json.toString() + "\n";
  }

  return text; 
}

function jsonToText(json) {
var text = '';
if (typeof json == "object") {
    if (json instanceof Array) {
        for (var key in json) {
            text += jsonToText(json[key]);
        }
    }
    else {
        for(var key in json) {
            var val = json[key];
            if (typeof val == "object") {
                text += key + "\n" + jsonToText (val);
            }
            else {
                text += key + " " + jsonToText (val);
            }
        }
    }
}
else {
    text += json.toString() + "\n";
}

return text; 
}



function jsonToTsv () {
  var editor = ace.edit("editor");
  var r = editor.getValue();
  var editorOutput = ace.edit("editorOutput");
  try {
    n = jsonTocsvbyjson(r, !0);
    var i = getCSVTOTSV(n);
    editorOutput.getSession().setMode("ace/mode/text");
    lastAction="jsonToTsv";
    return editorOutput.setValue(i); 
    
  } catch (e) {
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
   
}
function getCSVTOTSV(e) {
  return e.split(",").join("\t")
}





function sampleFile(){
  var myObj= { employeeFirstName: "Leonardo",employeeLastName: "DiCaprio", city: "NewYork" };
  var spaces = "\t";
  var myJSON = JSON.stringify(myObj);
  var object  = JSON.parse(myJSON);
  var prettified = JSON.stringify(object, null, spaces);
  editorOutput.getSession().setMode("ace/mode/json");
  editor.setValue(prettified);
  jsonBeautify();
 }

function jsonBeautify(){
  if(jsonValidator()){
    var editor = ace.edit("editor");
    var editorOutput = ace.edit("editorOutput");
    try{
      var spaces = "\t";
      var json = editor.getValue();
      var object  = JSON.parse(json);
      var prettified = JSON.stringify(object, null, spaces);
      editorOutput.getSession().setMode("ace/mode/json");
      lastAction="jsonBeautify";
      editorOutput .setValue(prettified);
    }catch(e){
      editorOutput.getSession().setMode("ace/mode/text");
      editorOutput .setValue("JSON is Invalid Due to"+" : "+e.message );
    }
      
  }

}


function jsonMinify(){
 
  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  try{
    var json = editor.getValue();
    var object  = JSON.parse(json);
    var prettified = JSON.stringify(object, null, 0);
    editorOutput.getSession().setMode("ace/mode/json");
    editorOutput .setValue(prettified);
    lastAction="jsonMinify";
    }catch(e){
      return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
    }
 

}

 function inputCopyContent(){

  var my_disply = document.getElementById('clipboard-content').style.display;
  if(my_disply == "none"){
    document.getElementById('clipboard-content').style.display = "block";
    var copyTextarea = document.querySelector('#clipboard-content');
    copyTextarea.value = editor.getValue();
    copyTextarea.select();
    document.execCommand('copy');
    // Reset textarea
    copyTextarea.value = "";
    document.getElementById('clipboard-content').style.display = "none";
  }
}
function outputCopyContent(){

  var my_disply = document.getElementById('clipboard-content').style.display;
  if(my_disply == "none"){
    document.getElementById('clipboard-content').style.display = "block";
    var copyTextarea = document.querySelector('#clipboard-content');
    copyTextarea.value = editorOutput.getValue();
    copyTextarea.select();
    document.execCommand('copy');
    // Reset textarea
    copyTextarea.value = "";
    document.getElementById('clipboard-content').style.display = "none";
  }
}

function jsonToxml(){
  var formatting = null;
  formatting = "\t";
  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  try{
    var json = editor.getValue();
    var parsed = JSON.parse(json);
  
    var xml  = "<root>" + json2xml(parsed) + "</root>";
     xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>" + xml;
    editorOutput.getSession().setMode("ace/mode/xml");
    lastAction="jsonToxml";
    return editorOutput.setValue(!formatting ? xml : vkbeautify.xml(xml, formatting));
  }catch(e){
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
 

}
function jsonToyaml(){

  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  try{
    var json = editor.getValue(); 
    var test = JSON.parse(json);
    var yaml = YAML.stringify(test);
    editorOutput.getSession().setMode("ace/mode/text");
    lastAction="jsonToyaml";
    return editorOutput.setValue(yaml);
  }catch(e){
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
 

}


function downloadFile(){
  var outputEditor = editorOutput.getValue();
  if(lastAction != undefined){
    var blob = new Blob([outputEditor], {type: "text/plain;charset=utf-8"});
  
    if( lastAction == "validate"){
      saveAs(blob, "onlnejsontools.org.org.json");
    }else  if( lastAction == "jsonTocsv"){
      saveAs(blob, "onlnejsontools.org.txt");
    }else  if( lastAction  == "jsonToBase64"){
      saveAs(blob, "onlnejsontools.org.txt");
    }else  if( lastAction  == "jsonToPlainText"){
      saveAs(blob, "onlnejsontools.org.txt");
    }else  if( lastAction  == "jsonToTsv"){
      saveAs(blob, "onlnejsontools.org.tsv");
    }else  if( lastAction  == "jsonBeautify"){
      saveAs(blob, "onlnejsontools.org.json");
    }else  if( lastAction  == "jsonMinify"){
      saveAs(blob, "onlnejsontools.org.json");
    }else  if( lastAction  == "jsonToxml"){
      saveAs(blob, "onlnejsontools.org.xml");
    }else  if( lastAction  == "jsonToyaml"){
      saveAs(blob, "onlnejsontools.org.yaml");
    }else  if( lastAction  == "jsonToURLencode"){
      saveAs(blob, "onlnejsontools.org.txt");
    }else  if( lastAction  == "urlDecodeJson"){
      saveAs(blob, "onlnejsontools.org.txt");
    }else  if( lastAction  == "bsonToJSON"){
      saveAs(blob, "onlnejsontools.org.json");
    }

    
    
    
  }else{
    editorOutput.setValue("Your Result is Empty.")
  }
  
}

function clearInputAndOutput(){

  
  editor.setValue("")
   
   editorOutput.setValue("")
  

 }
 function clearOutput(){
  editorOutput.setValue("")
 }



function splitIntoGraphemes (text) {
  var splitter = new GraphemeSplitter();
  var chars = splitter.splitGraphemes(text);
  return chars;
}


function bytesToUrlEncoding (bytes, lowercase) {
  var urlEncoded = '';
  for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i].toString(16);
      if (byte.length == 1) {
          byte = "0" + byte;
      }
      urlEncoded = urlEncoded + "%" + byte;
  }
  if (!lowercase) urlEncoded = urlEncoded.toUpperCase();
  return urlEncoded;
}

function urlEncodeText (text, encoding, lowercase, bom) {
  var utf8 = textToUtf8(text);

  if (encoding == "utf8") {
      var urlEncoded = bytesToUrlEncoding(utf8, lowercase);
  }
  else if (/^(utf16|ucs2)/.test(encoding)) {
      var byteOrder  = encoding.substr(-2, 2);
      var utf16Units = utf8ToUtf16(utf8, byteOrder, bom);
      var utf16Bytes = utf16ToBytes(utf16Units);
      var urlEncoded = bytesToUrlEncoding(utf16Bytes, lowercase);
  }
  else if (/^(utf32|ucs4)/.test(encoding)) {
      var byteOrder  = encoding.substr(-2, 2);
      var utf32Units = utf8ToUtf32(utf8, byteOrder, bom);
      var utf32Bytes = utf32ToBytes(utf32Units);
      var urlEncoded = bytesToUrlEncoding(utf32Bytes, lowercase);
  }

  return urlEncoded;
}

function jsonToURLencode(){
  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  var text = editor.getValue(); 
  var encoding     =  'utf8';
  var method       = 'method';
  var skipNewlines = 'preserve-newlines';
  var skipTabs     = 'preserve-tabs';
  var skipSpaces   = 'preserve-spaces';
  var lowercase    = 'lowercase-hex';
  try {
    if (method == "escape") {
      var notEncode = "*+-./0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  }
  else if (method == "encode-uri") {
      var notEncode = "!#$&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
  }
  else if (method == "alphanumeric-underscore") {
      var notEncode = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  }
  else if (method == "custom-encode") {
      var encode = "custom-symbols" || "";
  }
  else if (method == "custom-don-not-encode") {
      var notEncode = "custom-symbols" || "";
  }
  else if (method == "encode-all-chars" || "encode-all-chars") {
      var notEncode = "";
  }
  else { // encode-uri-component method;
      var notEncode = "!'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
  }

  var chars = splitIntoGraphemes(text);
  var output = [];

  for (var i = 0; i < chars.length; i++) {
      var char = chars[i];

      var skipChar = (skipNewlines && char == "\n") || (skipTabs && char == "\t") || (skipSpaces && char == " ");
      if (skipChar) {
          output.push(char);
          continue;
      }

      if (method == "custom-encode") {
          var shouldEncode = encode.indexOf(char) >= 0;
      }
      else {
          var shouldEncode = notEncode.indexOf(char) < 0;
      }

      if (shouldEncode) {
          var urlEncodedChar = urlEncodeText(char, encoding, lowercase, false);
          output.push(urlEncodedChar);
      }
      else {
          output.push(char);
      }
  }
  if ('bom') {
      var bom = urlEncodeText("", encoding, lowercase, true);
      output.unshift(bom);
  }
  
  lastAction="jsonToURLencode";
  editorOutput.getSession().setMode("ace/mode/text");
  
  return editorOutput.setValue(output.join(""));  
  } catch (e) {
    return editorOutput.setValue( "JSON is Invalid Due to"+" : "+e.message );
  }
  

}
function textToUtf8(text) {
    var bytes = [];

    var encoded = utf8.encode(text);
    for (var i = 0; i < encoded.length; i++) {
        var byte = encoded[i].charCodeAt(0);
        bytes.push(byte);
    }

    return bytes;
}

function urlDecodeJson(){
  var editor = ace.edit("editor");
  editor.getSession().setMode("ace/mode/text");
  var editorOutput = ace.edit("editorOutput");
  try {
    var json = editor.getValue();
    var object  = decodeURIComponent(json);
    editorOutput.getSession().setMode("ace/mode/json");
    lastAction="urlDecodeJson";
    editorOutput .setValue(object);
  } catch (e) {
    return editorOutput.setValue( "Invalid Due to"+" : "+e.message );
  }
}
function jsonToBSON(){

  var editor = ace.edit("editor");
  var editorOutput = ace.edit("editorOutput");
  try {
   
    var json = editor.getValue();
    var newBSON = new BSON();
   // console.log(newBSON.serialize(json));
    //editorOutput.getSession().setMode("ace/mode/text");
    var jsonString = JSON.parse(json);
   // console.log(jsonString)
    var bsonGenerate=newBSON.serialize(jsonString);
    //console.log(bsonGenerate)
    var blob = new Blob([bsonGenerate]);
     saveAs(blob, "onlnejsontools.org.bson");
    editorOutput.getSession().setMode("ace/mode/text");
    return editorOutput.setValue("BSON File Downloaded Successfully.");
    
  } catch (e) {
    return editorOutput.setValue( "Invalid Due to"+" : "+e.message );
  }


}

function bsonToJSON(event){
  var editor = ace.edit("editor");
    var BSON = bson().BSON;
    var editorOutput = ace.edit("editorOutput");
  var reader = new FileReader();
  try {
    reader.onload = function(event) {
      // Create array for binary input
      //console.log("event targe result is:->",event.target.result)
      var uintArray = new Uint8Array(event.target.result);
      
      // Deserialize it
      var doc_2 = BSON.deserialize(uintArray);
      //console.log("doc_2 is:->",doc_2)
      var jsonDate = JSON.stringify(doc_2, null, 4);
      editorOutput.getSession().setMode("ace/mode/json");
      editorOutput.setValue(jsonDate)
    };
    
    // Assume that there is only one file and use it
    var file = event.target.files[0];
    reader.readAsArrayBuffer(file);
    editor.setValue("Please Find Your BSON To JSON On RightSide TextArea.")
    lastAction="bsonToJSON";
  } catch (e) {
    return editorOutput.setValue( "Invalid Due to"+" : "+e.message );
  }

 
}