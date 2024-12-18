
/**
Constructor
Do not call Function in Constructor.
*/
class naverProject000()
{
	super();
	
	this.currentPosition = 0;
	this.itemHeight = 18;
	this.top = 0;

}
extends AView;


function naverProject000*init(context, evtListener)
{
	super.init(context, evtListener);
	
	// 1. 검색창 포커스 기능
	this.main_text.setFocus();
	this.startScrolling();
	this.mini_adv();
	
	
	
};

function naverProject000*onInitDone()
{	
	super.onInitDone();
};

function naverProject000*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	
	//TODO:edit here

};

function naverProject000*onATabView1Swipe(comp, info, e)
{
	
	//TODO:edit here

};




// 더보기창
function naverProject000*onAButton1Click(comp, info, e)
{	
	this.menuPlus.$ele.css("display", "block");
};

// 더보기창
function naverProject000*onAButton2Click(comp, info, e)
{
	
	this.menuPlus.$ele.css("display", "none" );
	

};


function naverProject000*Stock_Button_Click(comp, info, e)
{
	const nowTime = new Date();
	
	const month = nowTime.getMonth() + 1;
	const day = nowTime.getDate();
	const hours = nowTime.getHours();
	const minutes = nowTime.getMinutes();
	
	
	this.stock_time.setText(month  + "." + day +". " + hours + ":" + minutes);

};

function naverProject000*bottom_fixedMenu_Click(comp, info, e)
{

	window.scrollTo(0,0);

};


// 위로 자동 무한 (5개)
function naverProject000*startScrolling() {
    
   let textList = document.getElementById('_1--textList');
    let currentPosition = 0;
    const itemHeight = 18;
    const maxScroll = 90;

    // 텍스트 복제 및 초기 위치 설정
    const clone = textList.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.top = maxScroll + "px"; 
    textList.parentElement.appendChild(clone);

    setInterval(() => {
        currentPosition -= itemHeight;
        
        textList.style.transition = "top 0.5s ease-in-out";
        textList.style.top = currentPosition + 'px';
        clone.style.transition = "top 0.5s ease-in-out";
        clone.style.top = currentPosition + maxScroll + 'px';

        if (Math.abs(currentPosition) >= maxScroll) {
            setTimeout(() => {
                currentPosition = 0;
                textList.style.transition = "none";
                textList.style.top = '0px';
                clone.style.transition = "none";
                clone.style.top = maxScroll + 'px';
            }, 500);
        }
    }, 3000); // 3초마다 실행
};

function naverProject000*news_menu2(comp, info, e)
{

	this.news_2.$ele.css("display", "none");

};

function naverProject000*news_menu1(comp, info, e)
{

	this.news_2.$ele.css("display", "block");

};

// mens로 넘어가기
function naverProject000*Menu_Mens(comp, info, e)
{
	this.centerMenu.selectTabById('mens');
	
	this.menu_t2.$ele.css("color", "rgb(0, 0, 0)", "font-weight", "bold");
	this.menu_t1.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t3.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t4.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
};




// shopping으로 넘어가기
function naverProject000*Menu_Shopping(comp, info, e)
{

	this.centerMenu.selectTabById('shopping');
	
	this.menu_t1.$ele.css("color", "rgb(0, 0, 0)", "font-weight", "bold");
	this.menu_t2.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");

};

function naverProject000*mini_adv() {
    const contentBox = document.getElementById("content_box");
    const advList = document.getElementById("_1--adv_List");
    const itemWidth = 330;
    const totalItems = advList.children.length;
    let currentIndex = 0;
	const images = [
		document.getElementById("_1--adv_i1"),
		document.getElementById("_1--adv_i2"),
		document.getElementById("_1--adv_i3")];
	

    function scrollLeft() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
		
        advList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        advList.style.transition = "transform 0.5s ease-in-out";
		
		for(let x=1; x < totalItems; x++){
			images[x].style.display = currentIndex === x ? "block" : "none";
		}
    }
    setInterval(scrollLeft, 3000);
	
};

window.onscroll = 
	function naverProject000*scroll(){
	const top = document.getElementById("_1--top_search");
	if(window.scrollY >= 72){
		top.style.display = "block";
	}else if(window.scrollY < 72) {
		top.style.display = "none";
	}
};



function naverProject000*Menu_shoppingLive(comp, info, e)
{

	this.centerMenu.selectTabById('shopping_Live');
	
	this.menu_t1.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t2.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t3.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t4.$ele.css("color", "rgb(0, 0, 0)", "font-weight", "bold");
	

};

function naverProject000*onMenu_t3Click(comp, info, e)
{

	this.centerMenu.selectTabById('onePlus');
	
	this.menu_t1.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t2.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	this.menu_t3.$ele.css("color", "rgb(0, 0, 0)", "font-weight", "bold");
	this.menu_t4.$ele.css("color", "rgb(211, 213, 215)", "font-weight", "normal");
	
	


};
