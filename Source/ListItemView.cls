
/**
Constructor
Do not call Function in Constructor.
*/
class ListItemView()
{
	super();

	//TODO:edit here
	this.data = null;

}
extends AView;


function ListItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ListItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ListItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ListItemView*setData(data)
{
	this.data = data;

	this.itemLabel.setText(data.title);

};