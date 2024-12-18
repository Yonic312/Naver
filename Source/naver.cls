
/**
Constructor
Do not call Function in Constructor.
*/
class naver()
{
	super();

	//TODO:edit here

}
extends AView;


function naver*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function naver*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function naver*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function naver*onAButton1Click(comp, info, e)
{

	var con = document.getElementById("menuPlus"); 	
    if(con.style.display=='none'){ 		
    	con.style.display = 'block'; 	
    }else{ 		
    	con.style.display = 'none'; 	
    } 

};
