
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

	this.listData = 
    [
        {title : 'List Content Title 1'},
        {title : 'List Content Title 2'},
        {title : 'List Content Title 3'},
        {title : 'List Content Title 4'},
        {title : 'List Content Title 5'},
        {title : 'List Content Title 6'}
    ];



};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.listView.addItem('Source/Items/ListItemView.lay', this.listData);
	


};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
