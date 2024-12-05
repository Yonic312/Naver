
/**
Constructor
Do not call Function in Constructor.
*/
class SubView3()
{
	super();

	//TODO:edit here

}
extends AView;


function SubView3*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubView3*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SubView3*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SubView3*onAButton1Click(comp, info, e) // Subview3의 버튼을 클릭시
{
	
	this.owner.selectTabById('tab1'); // owner가 탭뷰가 된다

};
