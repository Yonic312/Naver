
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	this.listData = [ 
            { 
                img : 'Assets/Naver/main/shoppingi12.PNG',  
                title : 'List Content Title 1' 
            }, 
            {    img : 'Assets/Naver/main/shoppingi12.PNG',  
                title : 'List Content Title 2' 
            },
             { 
                img : 'Assets/Naver/main/shoppingi12.PNG',  
                title : 'List Content Title 3' 
            }, 
            {    img : 'Assets/Naver/main/shoppingi12.PNG',  
                title : 'List Content Title 4' 
            },
            {    img : 'Assets/Naver/main/shoppingi12.PNG',  
                title : 'List Content Title 5' 
            }
        ];

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

    // 리스트뷰에 데이터만큼의 아이템뷰를 추가한다.  
    this.listView.addItem('Source/Items/ItemView.lay', this.listData);

};
