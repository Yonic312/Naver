
/**
Constructor
Do not call Function in Constructor.
*/
function PlusOne()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(PlusOne, AView);


PlusOne.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

PlusOne.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

PlusOne.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
