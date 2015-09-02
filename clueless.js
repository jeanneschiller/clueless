$(document).ready(function(){

// create arrays to store images
// create function to display one item in the array
// create scroll function with for loop

var tops = [
	{
		imageSource: "images/top-001.png",
		score:5
	},
	{ 
		imageSource:"images/top-002.png",
		score:1
	},
	{
		imageSource:"images/top-003.png",
		score:4
	},
	{
		imageSource: "images/top-004.png",
		score:1
	},
	{
		imageSource: "images/top-005.png",
		score:4
	},
	{
		imageSource:"images/top-006.png",
		score:3
	},
	{
		imageSource: "images/top-007.png",
		score:1
	},
	{
		imageSource:"images/top-008.png",
		score:4
	},
	{
		imageSource:"images/top-009.png",
		score:1
	},
	{
		imageSource:"images/top-010.png",
		score:3
	},
	{
		imageSource:"images/top-011.png",
		score:1
	},
	{
		imageSource:"images/top-012.png",
		score:4
	},
	{
		imageSource: "images/top-023.png",
		score:1
	},
	{
		imageSource:"images/top-013.png",
		score:4
	},
	{
		imageSource: "images/top-021.png",
		score:1
	},
	{
		imageSource:"images/top-014.png",
		score:3
	},
	{
		imageSource:"images/top-015.png",
		score:1
	},
	{
		imageSource: "images/top-016.png",
		score:3
	},
	{
		imageSource: "images/top-020.png",
		score:4
	},
	{
		imageSource: "images/top-017.png",
		score:1
	},
	{
		imageSource: "images/top-024.png",
		score:1
	},
];//end of tops

var bottoms = [
	{
		imageSource: "images/bottom-001.png",
		score: 5
	},
	{
		imageSource: "images/bottom-002.png",
		score: 3
	},
	{
		imageSource: "images/bottom-003.png",
		score: 3
	},
	{
		imageSource: "images/bottom-004.png",
		score: 1
	},
	{
		imageSource: "images/bottom-005.png",
		score: 3
	},
	{
		imageSource: "images/bottom-006.png",
		score:4
	},
	{
		imageSource: "images/bottom-011.png",
		score:1
	},
	{
		imageSource:"images/bottom-007.png",
		score:4
	},
	{
		imageSource:"images/bottom-008.png",
		score:1
	},
	{
		imageSource: "images/bottom-009.png",
		score:4
	},
	{
		imageSource: "images/bottom-010.png",
		score:1
	},
	
	{
		imageSource: "images/bottom-012.png",
		score:1
	},
	{
		imageSource: "images/bottom-018.png",
		score:4
	},
	{
		imageSource: "images/bottom-013.png",
		score:3
	},
	{
		imageSource: "images/bottom-014.png",
		score:3
	},
	{
		imageSource: "images/bottom-016.png",
		score:1
	},
	{
		imageSource: "images/bottom-015.png",
		score:3
	},
	{
		imageSource: "images/bottom-017.png",
		score:1
	},
	{
		imageSource: "images/bottom-019.png",
		score:4
	},
	{
		imageSource: "images/bottom-020.png",
		score:1
	},				
]; //end of bottoms
var topTotal = 0;
var bottomTotal = 0;

//top scroll  ***********************************************
var scrollRightT = function(){
	$(".scroll-right-T").on("click", function(e){
		e.preventDefault();
		if( tops.length <= topTotal){
			$(this).addClass("grey");
		} else {
			topTotal++;
			$("img.top").attr("src",tops[topTotal].imageSource).data('score',tops[topTotal].score);
		}
	});
};

var scrollLeftT = function(){
	$(".scroll-left-T").on("click", function(e){
		e.preventDefault();
		if( topTotal <= 0 ){
			$(this).addClass("grey");
		} else {
			topTotal--;
			$("img.top").attr("src",tops[topTotal].imageSource).data('score',tops[topTotal].score);
		}	
	});
};

//bottoms scroll ***********************************************
var scrollRight = function(){
	$(".scroll-right").on("click", function(e){
		e.preventDefault();
		if( bottoms.length <= bottomTotal){
			$(this).addClass("grey");
		} else {
			bottomTotal++;
			$("img.bottom").attr("src",bottoms[bottomTotal].imageSource).data('score',bottoms[bottomTotal].score);
		}
	});
};

var scrollLeft = function(){
	$(".scroll-left").on("click", function(e){
		e.preventDefault();
		if( bottomTotal <= 0 ){
			$(this).addClass("grey");
		} else {
			bottomTotal--;
			$("img.bottom").attr("src",bottoms[bottomTotal].imageSource).data('score',bottoms[bottomTotal].score);
		}	
	});
};
//top randomize
var randomizeT = function(){
	$(".randomize-T").on("click", function(e){
		e.preventDefault();
		topTotal = Math.floor(Math.random()* $(tops).length);
		$("img.top").attr("src",tops[topTotal].imageSource).data('score',tops[topTotal].score);		
	});
};
//bottom randomize
var randomize = function(){
	$(".randomize").on("click", function(e){
		e.preventDefault();
		bottomTotal = Math.floor(Math.random()* $(bottoms).length);
		$("img.bottom").attr("src",bottoms[bottomTotal].imageSource).data('score',bottoms[bottomTotal].score);		
	});
};



//DRES ME ***************************************************
var totalScore = function(){
	$(".submit").on("click", function(e){
		e.preventDefault();
		var score = $('img.bottom').data('score') + $('img.top').data('score');
		$('.modal p').hide();
		$('.modal .choice-' + score).show();
	});

};


//MODALS *****************************************************
showModal = function(){
	$(".submit").on("click",function(){
		$(".modal-container").addClass("show");
	});
};

closeModal = function(){
	$(".close-button").on("click",function(){
		$(".modal-container").removeClass("show");
	});
};
showModal2 = function(){
	$(".browse").on("click",function(){
		$(".modal-container-2").addClass("show");
	});
};

closeModal2 = function(){
	$(".close-button").on("click",function(){
		$(".modal-container-2").removeClass("show");
	});
};

function initialize(){
	scrollRightT();
	scrollLeftT();
	scrollRight();
	scrollLeft();
	randomizeT();
	randomize();
	$("img.bottom").attr("src",bottoms[bottomTotal].imageSource).data('score',bottoms[bottomTotal].score);
	$("img.top").attr("src",tops[topTotal].imageSource).data('score', tops[topTotal].score);
	showModal();
	closeModal();
	showModal2();
	closeModal2();
	totalScore();
	$("p").hide();
	totalScore(); 
	console.log("It only took 20 years but the Internet has finally caught up with Clueless!")
}
initialize();

}); //end of document.ready

