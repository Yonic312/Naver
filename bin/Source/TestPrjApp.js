
/**
Constructor
Do not call Function in Constructor.
*/
function TestPrjApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(TestPrjApp, AApplication);


TestPrjApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	
	
	// PC용 프레임워크용! 
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

TestPrjApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new TestPrjApp();
	    theApp.isLoadTheme = false;
        if(PROJECT_OPTION.unitUrl) theApp.unitTest(PROJECT_OPTION.unitUrl);
        else theApp.onReady();
    });
};

if(!AApplication.manualStart)
{
    $(document).ready(function()
    {
        AApplication.start();
    });
}
else if(AApplication.manualStart == 2)
{
    AApplication.start();
}

