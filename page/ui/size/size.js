"use strict";
Editor.polymerElement({
    properties: {
        value: {
            type: Object,
            value: function() {
                return {
                    width: 0,
                    height: 0,
                    isWidthPer:false,
                    isHeightPer:false
                }
            },
            notify: !0
        },
        disabled: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0
        },
        readonly: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0
        }
    }
});