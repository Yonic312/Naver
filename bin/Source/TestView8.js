
/**
Constructor
Do not call Function in Constructor.
*/
function TestView8() // 생성자
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView8, AView);


TestView8.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView8.prototype.onInitDone = function() // !컴포넌트는 onInitDone에서 하는게 좋음
// : 메인 뷰의 초기화가 완료되면 호출 됨
{
	AView.prototype.onInitDone.call(this);
	this.tabview.addTab('탭1','Source/items/SubView1.lay','tab1'); // 탭을 추가하기
	this.tabview.addTab('탭2','Source/items/SubView2.lay','tab2');
	this.tabview.addTab('탭3','Source/items/SubView3.lay','tab3');
	
	this.tabview.selectTabById('tab1'); // Run시 나타날 탭

	//TODO:edit here

};

TestView8.prototype.onActiveDone = function(isFirst) // 뷰가 호출 되면 활성화 됨
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
