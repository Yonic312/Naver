
/**
Constructor
Do not call Function in Constructor.
*/
function TestView9()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView9, AView);


TestView9.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView9.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView9.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
