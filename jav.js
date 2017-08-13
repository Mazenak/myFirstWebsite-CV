function main(){
	var firstPage = true;
	var countArrow = 0;
	
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39 && firstPage === false && countArrow === 4){
			$('#next2').remove();
			$('#fourth-page , #f1 , #f2 , #f3').hide('drop', 1500);
			setTimeout(function(){$('#fourth-page , #f1 , #f2 , #f3').remove()},2000);
			setTimeout(function(){$('body').append('<div class="container"><div class="row"><div id= "last" class=" col-sm-offset-2 col-md-offset-1 col-xs-offset-1 col-md-10 col-sm-8 col-xs-10 col-lg-10 col-lg-offset-0 text-center"><p>Thanks for enjoying my CV<br><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mazenak94@gmail.com"> E-mail: mazenak94@gmail.com<br><a href="tel:0992355357"> Phone Number: 0992355357</p></div></div></div>')},3000);
		}
	});
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39 && firstPage === false && countArrow === 3){
			$('#next2').remove();
			$('#javaquery , #javacpp , #htmlcss , #openweka , #others ,#pro').hide('drop', 1500);
			setTimeout(function(){$('#javaquery , #javacpp , #htmlcss , #openweka , #others ,#pro').remove()},2000);
			$('body').append('<div id="fourth-page" class="container"><div class="row"><div class="col-sm-offset-2 col-md-offset-1 col-xs-offset-2 col-md-10 col-sm-8 col-xs-9 text-center"><h1>Work Experince</h1></div></div></div>');
			$('#fourth-page').hide();
			setTimeout(function(){$('#fourth-page').fadeIn('slow')} , 3000);
			setTimeout(function(){$('body').append('<div id = "f1" class="container fourth"><div class="row"><div id="zit" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">ZAITOUNY Company for tourism<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Registration and customer service employee<br> (6/2014-3/2016)</strong></span></div></div></div>')},5000);
			setTimeout(function(){$('body').append('<div id = "f2" class="container fourth"><div class="row"><div id="taiba" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">TAIBA for designing and printing<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Print worker and design trainer <br>(6/2010-12/2010)</strong></span></div></div></div>')},5000);
			setTimeout(function(){$('body').append('<div id = "f3" class="container fourth"><div class="row"><div id="twen" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">Twenty-Four for Printing Services<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Market Manager and Co-designer <br>(12/2016-7/2017)</strong></span></div></div></div>')},5000);
			setTimeout(function(){$('.fourth').hide()},5000);
			setTimeout(function(){$('#f1').show('slow')},5500);
			setTimeout(function(){$('#f2').show('slow')},6000);
			setTimeout(function(){$('#f3').show('slow')},6500);
			setTimeout(function(){$('body').append('<div id="next2" class="container"><div  class="row"><div class="col-sm-4 col-md-4 col-xs-6 col-sm-offset-3 col-md-offset-3 col-xs-offset-1 text-center"><p>Hover then Next &rarr;</p></div></div></div>')} , 7000);
			countArrow++;
		}
	});
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39 && firstPage === false && countArrow === 2){
			$('#next2').remove();
			$('#second-page').hide("drop" , 1500);
			setTimeout(function(){$('#next2').remove()} , 1500);
			setTimeout(function(){$('#second-page').remove()}, 1500);
			setTimeout(function(){$('body').empty()},1500);
			setTimeout(function(){makeThird()},2500);
			setTimeout(function(){$('#javaquery , #javacpp , #htmlcss , #openweka , #others ,#pro').hide()},2500);			
			setTimeout(function(){$('#javaquery').show()},3500);
			setTimeout(function(){$('#javacpp').show()},3750);
			setTimeout(function(){$('#pro').show()},4000);
			setTimeout(function(){$('#htmlcss').show()},4250);
			setTimeout(function(){$('#others').show()},4750);
			setTimeout(function(){$('#openweka').show()},4500);
			setTimeout(function(){$('body').append('<div id="next2" class="container"><div  class="row"><div class=" col-lg-4 col-lg-offset-1 col-sm-4 col-md-4 col-xs-4 col-sm-offset-3 col-md-offset-3 col-xs-offset-3 text-center"><p>Next &rarr;</p></div></div></div>')} , 6000);

			countArrow++;
		}
	});
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39 && firstPage === false && countArrow === 1){
			$('#next').remove();
			$('#first-page').remove();
			$('body').append('<div id="second-page" class="container"><div class="row"><div class="col-xs-offset-4 col-xs-6 col-sm-offset-4 col-md-offset-2  col-md-6 col-sm-6 col-lg-6 col-lg-offset-2 text-center"><h1>Education</h1></div></div></div>');
			$('#second-page').hide();
			$('#second-page').fadeIn('slow');
			setTimeout(function(){$('#second-page').append('<div class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 text-center"><p id="school">Damascus University Faculty of Information Technology Engineering</p></div></div>')},2000);
			setTimeout(function(){$('#school').hide()} , 2000);
			setTimeout(function(){$('#school').fadeIn('slow')} , 2500);
			setTimeout(function(){$('#second-page').append('<div  class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1  text-center"><p id="special">Bachelor Degree of Information Technology Engineering Department of Artificial Intelligence</p></div></div>')},2500);
			setTimeout(function(){$('#special').hide()} , 2500);
			setTimeout(function(){$('#special').fadeIn('slow')} , 3000);
			setTimeout(function(){makeList()} , 4000);
			setTimeout(function(){$('.academic').hide()} , 4000);
			setTimeout(function(){$('.academic').show()} , 5500);
			setTimeout(function(){$('body').append('<div id="next2" class="container"><div  class="row"><div class="col-lg-4 col-lg-offset-1 col-sm-4 col-md-4 col-xs-4 col-sm-offset-4 col-md-offset-3 col-xs-offset-4 text-center"><p>Next &rarr;</p></div></div></div>')} , 6000);
			countArrow++;

		}
	});
	
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39 && firstPage === true ){
			$('#first-page').hide("drop" , 1500);
			$('#last-item').remove();
			setTimeout(function(){$('body').append('<div id ="next" class="container"><div  class="row"><div class="col-sm-4 col-md-4 col-xs-4 col-sm-offset-3 col-md-offset-2 col-xs-offset-4 text-center"><p>Next &rarr;</p></div></div></div>')} , 1500);
			firstPage = false;
			countArrow++;
		}
		
	});
	

	
}	




function makeThird(){
	$('body').append('<div class="container"><div class="row"><div id="javaquery" class="col-lg-4 col-sm-4 col-md-4 col-xs-4"><p>JavaScript<br>JQuery</p></div></div></div>');
	$('body').append('<div class="container"><div class="row"><div id="javacpp" class="col-lg-4 col-sm-4 col-md-4 col-xs-4"><p>Java<br>C++</p></div><p id="pro" class="col-lg-3 col-sm-3 col-md-3 col-xs-3 text-center">Programming Skills</p><div id="htmlcss" class="col-lg-4 col-sm-4 col-md-4 col-xs-4"><p>HTML<br>CSS</p></div></div></div>');
	$('body').append('<div class="container"><div class="row"><div id="openweka" class="col-lg-4 col-sm-4 col-md-4 col-xs-4"><p>OpenCV<br>Weka</p></div><div id="others" class="col-lg-4 col-sm-4 col-md-4 col-xs-4"><p>Photoshop<br>AutoCAD</p></div></div></div>');
	
}



function makeList(){
	var $list = $('#second-page').append('<div class="row"><div class="col-md-9 col-sm-10 col-xs-9 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-7 col-lg-offset-0 text-center"><ul class="academic"></ul></div></div>').find('ul');
		$list.append('<li id="ll"><strong>Academic Projects</strong></li>');
		$list.append('<li>Car plate number recognition system.</li>');
		$list.append('<li>Bureau of university automation.</li>');
		$list.append('<li>Virtual reality game using mobile sensor.</li>');
		$list.append('<li>Arabic grammar corrector rule based approach.</li>');
		$list.append('<li>Expert system in Syrian punishment law of murders and theft.</li>');
		$list.append('<li>Digit recognition using machine learning.</li>');
		$list.append('<li>Age and Gender prediction using English tweets.</li>');
}
$(document).ready(main);