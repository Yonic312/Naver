
/**
Constructor
Do not call Function in Constructor.
*/
function food()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(food, AView);


food.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

food.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

food.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
