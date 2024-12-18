
/**
Constructor
Do not call Function in Constructor.
*/
function naver()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(naver, AView);


naver.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

naver.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

naver.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

naver.prototype.onAButton1Click = function(comp, info, e)
{

	var con = document.getElementById("menuPlus"); 	
    if(con.style.display=='none'){ 		
    	con.style.display = 'block'; 	
    }else{ 		
    	con.style.display = 'none'; 	
    } 

};
