
/**
Constructor
Do not call Function in Constructor.
*/
function TestView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView3, AView);


TestView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
