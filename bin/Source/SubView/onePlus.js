
/**
Constructor
Do not call Function in Constructor.
*/
function onePlus()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(onePlus, AView);


onePlus.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

onePlus.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

onePlus.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
