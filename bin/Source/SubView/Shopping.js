
/**
Constructor
Do not call Function in Constructor.
*/
function Shopping()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Shopping, AView);


Shopping.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Shopping.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Shopping.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

