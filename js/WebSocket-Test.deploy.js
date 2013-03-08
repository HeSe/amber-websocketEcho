smalltalk.addPackage('WebSocket-Test', {});
smalltalk.addClass('WebSocketTest', smalltalk.Object, ['wsUri', 'output', 's'], 'WebSocket-Test');
smalltalk.addMethod(
"_doSend_",
smalltalk.method({
selector: "doSend:",
fn: function (message) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", [smalltalk.send("SENT: ", "__comma", [message])]);
    smalltalk.send(smalltalk.send(self, "_s", []), "_send_", [message]);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function () {
    var self = this;
    smalltalk.send(self, "_output_", [smalltalk.send(document, "_getElementById_", ["output"])]);
    smalltalk.send(self, "_testWebSocket", []);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onClose_",
smalltalk.method({
selector: "onClose:",
fn: function (evt) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", ["DISCONNECTED"]);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onError_",
smalltalk.method({
selector: "onError:",
fn: function (evt){
var self=this;
smalltalk.send(self,"_writeToScreen_",[smalltalk.send("<span style=\x22color: red;\x22>ERROR:</span> ","__comma",[smalltalk.send(evt,"_data",[])])]);
return self}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onMessage_",
smalltalk.method({
selector: "onMessage:",
fn: function (evt){
var self=this;
smalltalk.send(self,"_writeToScreen_",[smalltalk.send(smalltalk.send("<span style=\x22color: blue;\x22>RESPONSE: ","__comma",[smalltalk.send(evt,"_data",[])]),"__comma",["</span>"])]);
smalltalk.send(smalltalk.send(self,"_s",[]),"_close",[]);
return self}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_onOpen_",
smalltalk.method({
selector: "onOpen:",
fn: function (evt) {
    var self = this;
    smalltalk.send(self, "_writeToScreen_", ["CONNECTED"]);
    smalltalk.send(self, "_doSend_", ["Amber rocks"]);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_output",
smalltalk.method({
selector: "output",
fn: function () {
    var self = this;
    return self['@output'];
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_output_",
smalltalk.method({
selector: "output:",
fn: function (aString) {
    var self = this;
    self['@output'] = aString;
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_s",
smalltalk.method({
selector: "s",
fn: function () {
    var self = this;
    return self['@s'];
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_s_",
smalltalk.method({
selector: "s:",
fn: function (aSocket) {
    var self = this;
    self['@s'] = aSocket;
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_testWebSocket",
smalltalk.method({
selector: "testWebSocket",
fn: function () {
    var self = this;
    smalltalk.send(self, "_testWebSocket_", [smalltalk.send(self, "_wsUri", [])]);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_testWebSocket_",
smalltalk.method({
selector: "testWebSocket:",
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
return self}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_writeToScreen_",
smalltalk.method({
selector: "writeToScreen:",
fn: function (message) {
    var self = this;
    var pre;
    pre = smalltalk.send(document, "_createElement_", ["p"]);
    smalltalk.send(smalltalk.send(pre, "_style", []), "_at_put_", ["wordWrap", "break-word"]);
    smalltalk.send(pre, "_at_put_", ["innerHTML", message]);
    smalltalk.send(smalltalk.send(self, "_output", []), "_appendChild_", [pre]);
    return self;
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_wsUri",
smalltalk.method({
selector: "wsUri",
fn: function () {
    var self = this;
    return self['@wsUri'];
}
}),
smalltalk.WebSocketTest);

smalltalk.addMethod(
"_wsUri_",
smalltalk.method({
selector: "wsUri:",
fn: function (aString) {
    var self = this;
    self['@wsUri'] = aString;
    return self;
}
}),
smalltalk.WebSocketTest);



smalltalk.addClass('WebSocketTestWidget', smalltalk.Widget, ['websocketTest'], 'WebSocket-Test');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Widget);
smalltalk.send(self,"_websocketTest_",[smalltalk.send((smalltalk.WebSocketTest || WebSocketTest),"_new",[])]);
smalltalk.send(smalltalk.send(self,"_websocketTest",[]),"_wsUri_",["ws://echo.websocket.org"]);
return self}
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h2_", ["Amber WebSocket Test"]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["output"]);
    smalltalk.send(smalltalk.send(self, "_websocketTest", []), "_init", []);
    return self;
}
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_websocketTest",
smalltalk.method({
selector: "websocketTest",
fn: function () {
    var self = this;
    return self['@websocketTest'];
}
}),
smalltalk.WebSocketTestWidget);

smalltalk.addMethod(
"_websocketTest_",
smalltalk.method({
selector: "websocketTest:",
fn: function (aTest) {
    var self = this;
    self['@websocketTest'] = aTest;
    return self;
}
}),
smalltalk.WebSocketTestWidget);


smalltalk.addMethod(
"_startTest",
smalltalk.method({
selector: "startTest",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
}
}),
smalltalk.WebSocketTestWidget.klass);


