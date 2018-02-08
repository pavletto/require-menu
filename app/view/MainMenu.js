Ext.define("LS.view.MainMenu", {
    extend: "Ext.panel.Panel",
    alias: "widget.mainmenu",

    requires: ["Ext.toolbar.Toolbar"],

    title: "Feeds",
    collapsible: true,
    animCollapse: true,
    margins: "5 0 5 5",
    layout: "fit",

    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: "dataview",
                    trackOver: true,
                    // store: this.store,
                    store: {
                        fields: [
                            { name: "url", type: "string" },
                            { name: "name", type: "string" }
                        ],
                        data: [
                            {
                                name: "Sencha Blog",
                                url: "http://feeds.feedburner.com/extblog"
                            },
                            {
                                name: "Sencha Forums",
                                url:
                                    "http://sencha.com/forum/external.php?type=RSS2"
                            },
                            {
                                name: "Ajaxian",
                                url: "http://feeds.feedburner.com/ajaxian"
                            }
                        ]
                    },
                    cls: "feed-list",
                    itemSelector: ".feed-list-item",
                    overItemCls: "feed-list-item-hover",
                    tpl:
                        '<tpl for="."><div class="feed-list-item">{name}</div></tpl>',
                    listeners: {
                        selectionchange: this.onSelectionChange,
                        scope: this
                    }
                }
            ],

            dockedItems: [
                {
                    xtype: "toolbar",
                    items: [
                        {
                            iconCls: "feed-add",
                            text: "Add Feed",
                            action: "add"
                        },
                        {
                            iconCls: "feed-remove",
                            text: "Remove Feed",
                            disabled: true,
                            action: "remove"
                        }
                    ]
                }
            ]
        });

        this.callParent(arguments);
    },

    onSelectionChange: function(selmodel, selection) {
        Ext.require(["LS.controller.Test"]);

        var selected = selection[0],
            button = this.down("button[action=remove]");
        if (selected) {
            button.enable();
        } else {
            button.disable();
        }
    }
});
