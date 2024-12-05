
/**
Constructor
Do not call Function in Constructor.
*/
function SubView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView3, AView);


SubView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SubView3.prototype.onAButton1Click = function(comp, info, e) // Subview3의 버튼을 클릭시
{
	
	this.owner.selectTabById('tab1'); // owner가 탭뷰가 된다

};
