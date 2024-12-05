
/**
Constructor
Do not call Function in Constructor.
*/
function TestView5()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView5, AView);


TestView5.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView5.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView5.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
