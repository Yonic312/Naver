
/**
Constructor
Do not call Function in Constructor.
*/
class food()
{
	super();
	this.count = 0;

}
extends AView;


function food*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function food*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function food*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function food*Food_Plus_Menu(comp, info, e)
{	
	
	if(++this.count === 2){
		this.food_btn.$ele.css("display", "none");
		this.plus2.$ele.css("display", "block");
	}else if(this.count === 1){
		this.plus1.$ele.css("display", "block");
	}

};
