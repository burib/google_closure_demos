goog.provide('example');
goog.require('goog.dom');

example.sayHello = function(message) {
    goog.dom.getElement('hello').innerHTML = message;
};
goog.exportSymbol('example.sayHello', example.sayHello);