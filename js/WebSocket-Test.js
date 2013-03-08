smalltalk.addPackage('WebSocket-Test', {});
smalltalk.addClass('WebSocketTest', smalltalk.Object, ['wsUri', 'output', 's'], 'WebSocket-Test');
smalltalk.addMethod(
"_doSend_",
smalltalk.method({
selector: "doSend:",
category: 'not yet classified',
fn: function (message) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", [smalltalk.send("SENT: ", "__comma", [message])]);
    smalltalk.send(smalltalk.send(self, "_s", []), "_send_", [message]);
    return self;
},
args: ["message"],
source: "doSend: message\x0a  \x0a  \x09self writeToScreen: ('SENT: ' , message).\x0a    self s send: message\x0a  \x0a",
messageSends: ["writeToScreen:", ",", "send:", "s"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_output_", [smalltalk.send(document, "_getElementById_", ["output"])]);
    smalltalk.send(self, "_testWebSocket", []);
    return self;
},
args: [],
source: "init\x0a\x0a\x09self output: ( document getElementById: 'output' ).\x0a    self testWebSocket",
messageSends: ["output:", "getElementById:", "testWebSocket"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onClose_",
smalltalk.method({
selector: "onClose:",
category: 'not yet classified',
fn: function (evt) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", ["DISCONNECTED"]);
    return self;
},
args: ["evt"],
source: "onClose: evt\x0a  \x0a    self writeToScreen: 'DISCONNECTED'\x0a  \x0a",
messageSends: ["writeToScreen:"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onError_",
smalltalk.method({
selector: "onError:",
category: 'not yet classified',
fn: function (evt){
var self=this;
smalltalk.send(self,"_writeToScreen_",[smalltalk.send("<span style=\x22color: red;\x22>ERROR:</span> ","__comma",[smalltalk.send(evt,"_data",[])])]);
return self},
args: ["evt"],
source: "onError: evt\x0a\x0a    self writeToScreen: ( '<span style=\x22color: red;\x22>ERROR:</span> ' , (evt data )).\x0a  \x0a  ",
messageSends: ["writeToScreen:", ",", "data"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onMessage_",
smalltalk.method({
selector: "onMessage:",
category: 'not yet classified',
fn: function (evt){
var self=this;
smalltalk.send(self,"_writeToScreen_",[smalltalk.send(smalltalk.send("<span style=\x22color: blue;\x22>RESPONSE: ","__comma",[smalltalk.send(evt,"_data",[])]),"__comma",["</span>"])]);
smalltalk.send(smalltalk.send(self,"_s",[]),"_close",[]);
return self},
args: ["evt"],
source: "onMessage: evt\x0a  \x0a    self writeToScreen: ( '<span style=\x22color: blue;\x22>RESPONSE: ' , (evt data), '</span>').\x0a    self s close",
messageSends: ["writeToScreen:", ",", "data", "close", "s"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onOpen_",
smalltalk.method({
selector: "onOpen:",
category: 'not yet classified',
fn: function (evt) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", ["CONNECTED"]);
    smalltalk.send(self, "_doSend_", ["Amber rocks"]);
    return self;
},
args: ["evt"],
source: "onOpen: evt\x0a\x0a   self writeToScreen: 'CONNECTED'.\x0a   self  doSend: 'Amber rocks'",
messageSends: ["writeToScreen:", "doSend:"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_output",
smalltalk.method({
selector: "output",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@output'];
},
args: [],
source: "output\x0a\x0a\x09^output",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_output_",
smalltalk.method({
selector: "output:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@output'] = aString;
    return self;
},
args: ["aString"],
source: "output: aString\x0a\x0a\x09output := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_s",
smalltalk.method({
selector: "s",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@s'];
},
args: [],
source: "s\x0a\x0a\x09^s",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_s_",
smalltalk.method({
selector: "s:",
category: 'not yet classified',
fn: function (aSocket) {
    var self = this;
    self['@s'] = aSocket;
    return self;
},
args: ["aSocket"],
source: "s: aSocket\x0a\x0a\x09s := aSocket",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_testWebSocket",
smalltalk.method({
selector: "testWebSocket",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_testWebSocket_", [smalltalk.send(self, "_wsUri", [])]);
    return self;
},
args: [],
source: "testWebSocket\x0a\x0a\x09self testWebSocket: self wsUri \x0a    ",
messageSends: ["testWebSocket:", "wsUri"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_testWebSocket_",
smalltalk.method({
selector: "testWebSocket:",
category: 'not yet classified',
fn: function (aWSConnectionURL){
var self=this;
self["@s"]= new WebSocket(aWSConnectionURL);;
;
smalltalk.send(self["@s"],"_at_put_",["onopen",(function(evt){
return smalltalk.send(self,"_onOpen_",[evt]);
})]);
smalltalk.send(self["@s"],"_at_put_",["onclose",(function(evt){
return smalltalk.send(self,"_onClose_",[evt]);
})]);
smalltalk.send(self["@s"],"_at_put_",["onmessage",(function(evt){
return smalltalk.send(self,"_onMessage_",[evt]);
})]);
smalltalk.send(self["@s"],"_at_put_",["onerror",(function(evt){
return smalltalk.send(self,"_onError_",[evt]);
})]);
return self},
args: ["aWSConnectionURL"],
source: "testWebSocket: aWSConnectionURL\x0a\x0a     s := < new WebSocket(aWSConnectionURL);>.\x0a          \x0a    s at: 'onopen' put: [:evt | self onOpen: evt]. \x0a    s at: 'onclose' put: [:evt | self onClose: evt]. \x0a    s at: 'onmessage' put: [:evt | self onMessage: evt]. \x0a    s at: 'onerror' put: [:evt | self onError: evt ]. \x0a    \x0a   ",
messageSends: ["at:put:", "onOpen:", "onClose:", "onMessage:", "onError:"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_writeToScreen_",
smalltalk.method({
selector: "writeToScreen:",
category: 'not yet classified',
fn: function (message) {
    var self = this;
    var pre;
    pre = smalltalk.send(document, "_createElement_", ["p"]);
    smalltalk.send(smalltalk.send(pre, "_style", []), "_at_put_", ["wordWrap", "break-word"]);
    smalltalk.send(pre, "_at_put_", ["innerHTML", message]);
    smalltalk.send(smalltalk.send(self, "_output", []), "_appendChild_", [pre]);
    return self;
},
args: ["message"],
source: "writeToScreen: message\x0a \x09| pre |\x0a    pre := document createElement: 'p'.\x0a    pre style at: 'wordWrap' put: 'break-word'.\x0a    pre at: 'innerHTML' put: message.\x0a    self output appendChild: pre\x0a  ",
messageSends: ["createElement:", "at:put:", "style", "appendChild:", "output"],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_wsUri",
smalltalk.method({
selector: "wsUri",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@wsUri'];
},
args: [],
source: "wsUri\x0a\x0a\x09^wsUri",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_wsUri_",
smalltalk.method({
selector: "wsUri:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@wsUri'] = aString;
    return self;
},
args: ["aString"],
source: "wsUri: aString\x0a\x0a\x09wsUri := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTest);



smalltalk.addClass('WebSocketTestWidget', smalltalk.Widget, ['websocketTest'], 'WebSocket-Test');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Widget);
smalltalk.send(self,"_websocketTest_",[smalltalk.send((smalltalk.WebSocketTest || WebSocketTest),"_new",[])]);
smalltalk.send(smalltalk.send(self,"_websocketTest",[]),"_wsUri_",["ws://echo.websocket.org"]);
return self},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a    \x0a\x09self websocketTest: WebSocketTest new.\x0a    self websocketTest wsUri: 'ws://echo.websocket.org'. \x22 'ws://127.0.0.1:8080'. \x22",
messageSends: ["initialize", "websocketTest:", "new", "wsUri:", "websocketTest"],
referencedClasses: ["WebSocketTest"]
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h2_", ["Amber WebSocket Test"]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["output"]);
    smalltalk.send(smalltalk.send(self, "_websocketTest", []), "_init", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html h2: 'Amber WebSocket Test'.\x0a\x0a    html div id: 'output'.\x0a    \x0a    self websocketTest init.",
messageSends: ["h2:", "id:", "div", "init", "websocketTest"],
referencedClasses: []
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_websocketTest",
smalltalk.method({
selector: "websocketTest",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@websocketTest'];
},
args: [],
source: "websocketTest\x0a\x0a\x09^websocketTest",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_websocketTest_",
smalltalk.method({
selector: "websocketTest:",
category: 'not yet classified',
fn: function (aTest) {
    var self = this;
    self['@websocketTest'] = aTest;
    return self;
},
args: ["aTest"],
source: "websocketTest: aTest\x0a\x0a\x09websocketTest := aTest",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebSocketTestWidget);


smalltalk.addMethod(
"_startTest",
smalltalk.method({
selector: "startTest",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
},
args: [],
source: "startTest\x0a\x0a        self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.WebSocketTestWidget.klass);


