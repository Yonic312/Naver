
/**
Constructor
Do not call Function in Constructor.
*/
function List1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(List1, AView);


List1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.listData = 
    [
        {title : '[속보] 국정원 “파병 북한군 최소 100명 사망, 1천여명 부상”'},
        {title : '김병주 “선관위 30명 복면 씌워 납치하는 게 정보사 HID 임무”'},
        {title : '이재명, 항소심 소송서류 수령…공직선거법 위반 2심 시작'},
        {title : '민주 “탄핵 기간 빈집에 통지서”…‘이재명 재판 지연’ 주장 반박'},
        {title : '권성동, MBC 기자 질문 노골적 무시…“다른 언론사 하세요”'},
        {title : '‘윤석열 내란 이첩’ 심우정 검찰총장 “절차 논란 빌미 없어야”'}
    ];



};

List1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.listView.addItem('Source/Items/ListItemView.lay', this.listData);

};

List1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
