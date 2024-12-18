
/**
Constructor
Do not call Function in Constructor.
*/
function food()
{
	AView.call(this);
	this.count = 0;

}
afc.extendsClass(food, AView);


food.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

food.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

food.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

food.prototype.Food_Plus_Menu = function(comp, info, e)
{	
	
	if(++this.count === 2){
		this.food_btn.$ele.css("display", "none");
		this.plus2.$ele.css("display", "block");
	}else if(this.count === 1){
		this.plus1.$ele.css("display", "block");
	}

};
