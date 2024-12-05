
/**
Constructor
Do not call Function in Constructor.
*/
class SubView1()
{
	super();

	//TODO:edit here

}
extends AView;


function SubView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubView1*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SubView1*onActiveDone(isFirst) // 활성화 되면 실행
{
	super.onActiveDone(isFirst);
	
	AToast.show('Hello World!');
	
};

function SubView1*onDeactiveDone() // 종료 되면 실행
{	
	super.onDeactiveDone();
	this.text.setText('초기화');
	

};
