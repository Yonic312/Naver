
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

// 'Hello World 출력'
function MainView*onAButton1Click(comp, info, e)
{

	alert('Hello World!');

};

// 
function MainView*onAButton2Click(comp, info, e)
{
	debugger;
	this.text_hw.setText('Change Label');
	
	console.log('Hello Label!');

};