
/**
Constructor
Do not call Function in Constructor.
*/
function mens()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(mens, AView);


mens.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

mens.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

mens.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
