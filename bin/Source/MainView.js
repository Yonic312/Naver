
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

// 'Hello World 출력'
MainView.prototype.onAButton1Click = function(comp, info, e)
{

	alert('Hello World!');

};

// 
MainView.prototype.onAButton2Click = function(comp, info, e)
{
	debugger;
	this.text_hw.setText('Change Label');
	
	console.log('Hello Label!');

};