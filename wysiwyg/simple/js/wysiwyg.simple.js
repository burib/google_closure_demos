goog.provide('wysiwyg'); //Providing your app namespace

goog.require('goog.dom');
goog.require('goog.editor.Command');
goog.require('goog.editor.Field');
goog.require('goog.editor.plugins.BasicTextFormatter');
goog.require('goog.editor.plugins.EnterHandler');

goog.require('goog.editor.plugins.LinkBubble');
goog.require('goog.editor.plugins.LinkDialogPlugin');
goog.require('goog.editor.plugins.ListTabHandler');

//image uploader
goog.require('goog.editor.plugins.ImagePlugin');
goog.require('goog.editor.plugins.ImageDialogPlugin');

goog.require('goog.editor.plugins.RemoveFormatting');
goog.require('goog.editor.plugins.SpacesTabHandler');
goog.require('goog.editor.plugins.UndoRedo');
goog.require('goog.ui.editor.DefaultToolbar');
goog.require('goog.ui.editor.ToolbarController');



wysiwyg.init = function (editorId, toolbarId, contentField) {
    function updateFieldContents() {
        contentField.value = editor.getCleanContents();
    }

    // Create an editable field.
    var editor = new goog.editor.Field(goog.dom.getElement(editorId)),
        contentField = goog.dom.getElement(contentField);

    // Create and register all of the editing plugins you want to use.
    editor.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
    editor.registerPlugin(new goog.editor.plugins.RemoveFormatting());
    editor.registerPlugin(new goog.editor.plugins.UndoRedo());
    editor.registerPlugin(new goog.editor.plugins.ListTabHandler());
    editor.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
    editor.registerPlugin(new goog.editor.plugins.EnterHandler());

    editor.registerPlugin(
    new goog.editor.plugins.LinkDialogPlugin());
    editor.registerPlugin(new goog.editor.plugins.LinkBubble());

    //register image plugin
    myField.registerPlugin(new goog.editor.plugins.ImagePlugin());
    myField.registerPlugin(new goog.editor.plugins.ImageDialogPlugin());

    // Specify the buttons to add to the toolbar, using built in default buttons.
    var buttons = [
        goog.editor.Command.BOLD,
        goog.editor.Command.ITALIC,
        goog.editor.Command.UNDERLINE,
        goog.editor.Command.LINK,
        goog.editor.Command.IMAGE,
        goog.editor.Command.UNDO,
        goog.editor.Command.REDO,
        goog.editor.Command.UNORDERED_LIST,
        goog.editor.Command.JUSTIFY_LEFT,
        goog.editor.Command.JUSTIFY_CENTER,
        goog.editor.Command.JUSTIFY_RIGHT,
        goog.editor.Command.SUBSCRIPT,
        goog.editor.Command.SUPERSCRIPT,
        goog.editor.Command.STRIKE_THROUGH,
        goog.editor.Command.REMOVE_FORMAT
    ];

    var myToolbar = goog.ui.editor.DefaultToolbar.makeToolbar(buttons,
    goog.dom.getElement(toolbarId));

    // Hook the toolbar into the field.
    var myToolbarController = new goog.ui.editor.ToolbarController(editor, myToolbar);

    // Watch for field changes, to display below.
    goog.events.listen(editor, goog.editor.Field.EventType.DELAYEDCHANGE,updateFieldContents);

    editor.makeEditable();
    updateFieldContents();

}

//make sure we can call this function from outside, even in advanced compilation mode.
goog.exportSymbol('wysiwyg.init', wysiwyg.init);