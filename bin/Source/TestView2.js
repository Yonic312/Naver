
/**
Constructor
Do not call Function in Constructor.
*/
function TestView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView2, AView);


TestView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
