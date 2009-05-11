/**
Ê* @extends Ext.tree.TreeNode
Ê*
Ê* Tree node extension to allow icon image and class set
Ê* 
Ê* @forum Ê Ê 14426
Ê* @author Ê ÊScott Penrose <scottp@dd.com.au>, elrevin (see forum)
Ê* @version Ê 1.0
Ê* @date Ê Ê Ê12 May 2009
Ê* @revision Ê$Id$
Ê*
Ê* @license Ext.ux.data.Binder is licensed under the terms of
Ê* the Open Source LGPL 3.0 license. ÊCommercial use is permitted to the extent
Ê* that the code/component(s) do NOT become part of another Open Source or Commercially
Ê* licensed development library or toolkit without explicit permission.
 */

/**
Ê* Extends TreeNode
Ê*/
Ext.override(Ext.tree.TreeNode, {

/**
	* sets the tree node icon from a URL (gif, png, jpg etc)
	* @param {Text} href of the icon
	*/
	setIcon: function(src) {
		var iel = this.getUI().getIconEl();
		if (iel) {
			var el = Ext.get(iel);
			if (el) {
				el.addClass('x-tree-node-inline-icon');
				el.dom.src = src;
			}
		}
	},

/**
	* sets the tree node icon class from a string
	* @param {Text} class to add
	*/
	/* TODO - work out method of removing class when changing a second time -
		maybe store the last one and use it to remove... */
	setIconCls: function(iconClassName) {
		var iel = this.getUI().getIconEl();
		if (iel) {
			var el = Ext.get(iel);
			if (el) {
				el.addClass(iconClassName);
			}
		}
	}
});

/* CSS example
.some-icon
{
background-image: url(images/some-icon.gif) !important;
}
*/

