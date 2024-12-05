
/**
Constructor
Do not call Function in Constructor.
*/
function TestView4()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView4, AView);


TestView4.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView4.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView4.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
