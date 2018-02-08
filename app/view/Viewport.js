Ext.define("LS.view.Viewport", {
	extend: "Ext.container.Viewport",
	layout: {
		type: "border"
	},
	items: [
		{
			xtype: "mainmenu",
			region: "west",
			width: 225
		}
	],
	/**
	 * @method initComponent
	 * @inheritdoc
	 * @return {void}
	 */
	initComponent: function() {
		console.log('viewport');
		this.callParent(arguments);
	}
});
