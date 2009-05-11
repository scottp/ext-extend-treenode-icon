/**
�* @extends Ext.tree.TreeNode
�*
�* Tree node extension to allow icon image and class set
�* 
�* @forum � � 14426
�* @author � �Scott Penrose <scottp@dd.com.au>, elrevin (see forum)
�* @version � 1.0
�* @date � � �12 May 2009
�* @revision �$Id$
�*
�* @license Ext.ux.data.Binder is licensed under the terms of
�* the Open Source LGPL 3.0 license. �Commercial use is permitted to the extent
�* that the code/component(s) do NOT become part of another Open Source or Commercially
�* licensed development library or toolkit without explicit permission.
 */

/**
�* Extends TreeNode
�*/
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

