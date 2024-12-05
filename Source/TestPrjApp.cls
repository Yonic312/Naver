
/**
Constructor
Do not call Function in Constructor.
*/
class TestPrjApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function TestPrjApp*onReady()
{
	super.onReady();
	
	
	// PC용 프레임워크용! 
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function TestPrjApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
