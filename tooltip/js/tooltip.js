goog.provide('tooltip'); //Providing your app namespace
goog.require('goog.dom.dataset');
goog.require('goog.ui.Tooltip');
tooltip.init = function(){
    var tooltipElements = goog.dom.getElementsByClass('tooltip'),
        i = 0,
        length = tooltipElements.length;

    for (; i < length; i++) {
        new goog.ui.Tooltip(tooltipElements[i]).setHtml(goog.dom.dataset.get(tooltipElements[i], 'tooltiptext').toString());
    };
}

//make sure we can call this function from outside, even in advanced compilation mode.
goog.exportSymbol('tooltip.init', tooltip.init);