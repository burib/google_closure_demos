goog.provide('app'); //Providing your app namespace
goog.require('goog.dom.dataset');
goog.require('goog.ui.Tooltip');
app.init = function(){
    var tooltipElements = goog.dom.getElementsByClass('tooltip'),
        toolTips = [],
        i = 0,
        length = tooltipElements.length;

    for (; i < length; i++) {
        toolTips.push( new goog.ui.Tooltip(tooltipElements[i], goog.dom.dataset.get(tooltipElements[i], 'tooltiptext')) );
    };
}

//make sure we can call this function from outside, even in advanced compilation mode.
goog.exportSymbol('app.init', app.init);