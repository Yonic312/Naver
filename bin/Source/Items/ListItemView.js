
/**
Constructor
Do not call Function in Constructor.
*/
function ListItemView()
{
	AView.call(this);

	//TODO:edit here
	this.data = null;

}
afc.extendsClass(ListItemView, AView);


ListItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ListItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ListItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ListItemView.prototype.setData = function(data)
{
	this.data = data;

	this.itemLabel.setText(data.title);

};