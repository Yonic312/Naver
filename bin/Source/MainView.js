
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	this.listData = [ 
            { 
                img : 'Assets/img/img1.png',  
                title : 'List Content Title 1' 
            }, 
            {    img : 'Assets/img/img2.png',  
                title : 'List Content Title 2' 
            },
             { 
                img : 'Assets/img/img3.png',  
                title : 'List Content Title 3' 
            }, 
            {    img : 'Assets/img/img4.png',  
                title : 'List Content Title 4' 
            },
            {    img : 'Assets/img/img5.png',  
                title : 'List Content Title 5' 
            }
        ]; 

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	
	

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.listView.addItem('Source/Items/ListItemView.lay', this.listData);

};

MainView.prototype.onActiveDone = function(isFirst)
{
	

	AView.prototype.onActiveDone.call(this, isFirst);

    // 리스트뷰에 데이터만큼의 아이템뷰를 추가한다.  
    this.listView.addItem('Source/Items/ItemView.lay', this.listData);

};
