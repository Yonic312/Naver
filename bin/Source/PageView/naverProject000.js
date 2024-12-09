
/**
Constructor
Do not call Function in Constructor.
*/
function naverProject000()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(naverProject000, AView);


naverProject000.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

naverProject000.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.tabview.addTab('탭1','','tab1');

	//TODO:edit here

};

naverProject000.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

naverProject000.prototype.onATabView1Swipe = function(comp, info, e)
{

	//TODO:edit here

};
