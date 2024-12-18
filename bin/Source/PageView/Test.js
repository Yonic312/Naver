/**
Constructor
Do not call Function in Constructor.
*/
function Test()
{
	AView.call(this);

	// Scroll variables
	this.currentPosition = 0;
	this.itemHeight = 18;
	this.top = 0;
}
afc.extendsClass(Test, AView);

Test.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	this.startScrolling();
};

Test.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
};

Test.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
};


Test.prototype.startScrolling = function() {
    // 텍스트 리스트 요소를 가져옴 (스크롤링 대상)
    let textList = document.getElementById('textList');
    
    // 스크롤 컨테이너 요소를 가져옴 (스크롤 제한 영역)
    let scrollContainer = document.getElementById('scrollContainer');
    
    // 일정 간격으로 실행되는 타이머 설정
    setInterval(() => {
        // 현재 위치 값을 1씩 감소시켜 위로 스크롤하는 효과
        this.currentPosition -= 18;

        // 잘못된 참조 수정 필요: 요소 직접 접근으로 변경
         this.textList.element.style.top = this.currentPosition + 'px'; 

        // 텍스트 리스트가 완전히 스크롤되었는지 확인
        if (Math.abs(this.currentPosition) >= 72) {
		// if (Math.abs(this.currentPosition) >= textList.offsetHeight) {
		
            // 스크롤이 끝까지 도달하면 초기 위치로 재설정
            this.currentPosition = this.top+18;
        }
    }, 3000); // 50밀리초마다 실행
};

