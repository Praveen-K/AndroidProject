//Form JS File
function addWidgetsHelloWorldMobileForm() {
    var label186678712315 = new kony.ui.Label({
        "id": "label186678712315",
        "isVisible": true,
        "text": "Welcome to Kony Android Build!!!",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    HelloWorldMobileForm.add(
    label186678712315);
};

function HelloWorldMobileFormGlobals() {
    var MenuId = [];
    HelloWorldMobileForm = new kony.ui.Form2({
        "id": "HelloWorldMobileForm",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsHelloWorldMobileForm
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};