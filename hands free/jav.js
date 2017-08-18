function main(){
var test = 0;
	$(document).keydown(function(key){
		if (parseInt(key.which,10) === 39){
			$('#first-page').hide("drop" , 1500);
			$('#last-item').remove();
			setTimeout(function(){$('#first-page').remove()},2000);
			setTimeout(function(){$('body').append('<div id="second-page" class="container"><div class="row"><div class="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-md-offset-2  col-md-6 col-sm-6 col-lg-6 col-lg-offset-2 text-center"><h1>Education</h1></div></div></div>')},2250);
			setTimeout(function(){$('#second-page').hide()},2250);
			setTimeout(function(){$('#second-page').fadeIn('slow')} , 2500);
			setTimeout(function(){$('#second-page').append('<div class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 text-center"><p id="school">Damascus University Faculty of Information Technology Engineering</p></div></div>')},4000);
			setTimeout(function(){$('#school').hide()} , 4000);
			setTimeout(function(){$('#school').fadeIn('slow')} , 4500);
			setTimeout(function(){$('#second-page').append('<div  class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1  text-center"><p id="special">Bachelor Degree of Information Technology Engineering Department of Artificial Intelligence</p></div></div>')},5000);
			setTimeout(function(){$('#special').hide()} , 5000);
			setTimeout(function(){$('#special').fadeIn('slow')} , 5500);
			setTimeout(function(){makeList()} , 6500);
			setTimeout(function(){$('.academic').hide()} , 6500);
			setTimeout(function(){$('.academic').show()} , 7000);
			setTimeout(function(){$('#second-page').hide("drop" , 1500)}, 15000);
			setTimeout(function(){$('#second-page').remove()}, 17000);
			setTimeout(function(){$('body').empty()},17000);

			setTimeout(function(){$('body').append('<div id="t-page" class="container"><div class="row"><div class="col-xs-offset-2 col-xs-7 col-sm-offset-4 col-md-offset-1  col-md-9 col-sm-6 col-lg-6 col-lg-offset-2 text-center"><h1>Programming Skills</h1></div></div></div>')},18000);
			setTimeout(function(){makeThird()},18000);

			setTimeout(function(){$('#first').hide()},18000);
			setTimeout(function(){$('#second').hide()},18000);
			setTimeout(function(){$('#third').hide()},18000);
			setTimeout(function(){$('#fourth').hide()},18000);
			setTimeout(function(){$('#fifth').hide()},18000);

			setTimeout(function(){$('#first').show()},19000);
			setTimeout(function(){$('#second').show()},19250);
			setTimeout(function(){$('#third').show()},19500);
			setTimeout(function(){$('#fourth').show()},19750);
			setTimeout(function(){$('#fifth').show()},20000);
			setTimeout(function(){$('#t-page').hide("drop" , 1500)}, 25500);
			setTimeout(function(){$('#skill').hide('drop', 1500)},25500);
			setTimeout(function(){$('#t-page').remove()}, 28000);
			setTimeout(function(){$('#skill').remove()},28000);

			setTimeout(function(){$('body').empty()},28000);
			setTimeout(function(){$('body').append('<div id="fourth-page" class="container"><div class="row"><div class="col-sm-offset-2 col-md-offset-1 col-xs-offset-2 col-md-10 col-sm-8 col-xs-9 text-center"><h1>Work Experince</h1></div></div></div>')},29000);
			setTimeout(function(){$('#fourth-page').hide()},29000);
			setTimeout(function(){$('#fourth-page').fadeIn('slow')} , 30000);
			setTimeout(function(){$('body').append('<div id = "f1" class="container fourth"><div class="row"><div id="zit" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">ZAITOUNY Company for tourism<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Registration and customer service employee<br> (6/2014-3/2016)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('body').append('<div id = "f2" class="container fourth"><div class="row"><div id="taiba" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">TAIBA for designing and printing<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Print worker and design trainer <br>(6/2010-12/2010)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('body').append('<div id = "f3" class="container fourth"><div class="row"><div id="twen" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">Twenty-Four for Printing Services<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Market Manager and Co-designer <br>(12/2016-7/2017)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('.fourth').hide()},32500);
			setTimeout(function(){$('#f1').show('slow')},33500);
			setTimeout(function(){$('#f2').show('slow')},34000);
			setTimeout(function(){$('#f3').show('slow')},34500);
			setTimeout(function(){$('#fourth-page , #f1 , #f2 , #f3').hide('drop', 1500)},40000);
			setTimeout(function(){$('#fourth-page , #f1 , #f2 , #f3').remove()},42000);
			setTimeout(function(){$('body').empty()},42000);
			setTimeout(function(){$('body').append('<div class="container"><div class="row"><div id= "last" class=" col-sm-offset-1 col-md-offset-1 col-xs-offset-1 col-md-10 col-sm-10 col-xs-10 col-lg-10 col-lg-offset-0 text-center"><p>Thanks for enjoying my CV<br><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mazenak94@gmail.com"> E-mail: mazenak94@gmail.com<br><a href="tel:00963992355357"> Phone Number: +963992355357</p></div></div></div>')},43000);
		}

	});



$(document).on("touchmove", "#first-page" , function(event){
	if (event.handled !== true && test === 0){
		test++;
		$('#first-page').hide("drop" , 1500);
			$('#last-item').remove();
			setTimeout(function(){$('#first-page').remove()},2000);
			setTimeout(function(){$('body').append('<div id="second-page" class="container"><div class="row"><div class="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-md-offset-2  col-md-6 col-sm-6 col-lg-6 col-lg-offset-2 text-center"><h1>Education</h1></div></div></div>')},2250);
			setTimeout(function(){$('#second-page').hide()},2250);
			setTimeout(function(){$('#second-page').fadeIn('slow')} , 2500);
			setTimeout(function(){$('#second-page').append('<div class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 text-center"><p id="school">Damascus University Faculty of Information Technology Engineering</p></div></div>')},4000);
			setTimeout(function(){$('#school').hide()} , 4000);
			setTimeout(function(){$('#school').fadeIn('slow')} , 4500);
			setTimeout(function(){$('#second-page').append('<div  class="row"><div class="col-lg-6 col-lg-offset-0 col-md-8 col-sm-10 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1  text-center"><p id="special">Bachelor Degree of Information Technology Engineering Department of Artificial Intelligence</p></div></div>')},5000);
			setTimeout(function(){$('#special').hide()} , 5000);
			setTimeout(function(){$('#special').fadeIn('slow')} , 5500);
			setTimeout(function(){makeList()} , 6500);
			setTimeout(function(){$('.academic').hide()} , 6500);
			setTimeout(function(){$('.academic').show()} , 7000);
			setTimeout(function(){$('#second-page').hide("drop" , 1500)}, 15000);
			setTimeout(function(){$('#second-page').remove()}, 17000);
			setTimeout(function(){$('body').empty()},17000);

			setTimeout(function(){$('body').append('<div id="t-page" class="container"><div class="row"><div class="col-xs-offset-2 col-xs-7 col-sm-offset-4 col-md-offset-1  col-md-9 col-sm-6 col-lg-6 col-lg-offset-2 text-center"><h1>Programming Skills</h1></div></div></div>')},18000);
			setTimeout(function(){makeThird()},18000);

			setTimeout(function(){$('#first').hide()},18000);
			setTimeout(function(){$('#second').hide()},18000);
			setTimeout(function(){$('#third').hide()},18000);
			setTimeout(function(){$('#fourth').hide()},18000);
			setTimeout(function(){$('#fifth').hide()},18000);

			setTimeout(function(){$('#first').show()},19000);
			setTimeout(function(){$('#second').show()},19250);
			setTimeout(function(){$('#third').show()},19500);
			setTimeout(function(){$('#fourth').show()},19750);
			setTimeout(function(){$('#fifth').show()},20000);
			setTimeout(function(){$('#t-page').hide("drop" , 1500)}, 25500);
			setTimeout(function(){$('#skill').hide('drop', 1500)},25500);
			setTimeout(function(){$('#t-page').remove()}, 28000);
			setTimeout(function(){$('#skill').remove()},28000);

			setTimeout(function(){$('body').empty()},28000);
			setTimeout(function(){$('body').append('<div id="fourth-page" class="container"><div class="row"><div class="col-sm-offset-2 col-md-offset-1 col-xs-offset-2 col-md-10 col-sm-8 col-xs-9 text-center"><h1>Work Experince</h1></div></div></div>')},29000);
			setTimeout(function(){$('#fourth-page').hide()},29000);
			setTimeout(function(){$('#fourth-page').fadeIn('slow')} , 30000);
			setTimeout(function(){$('body').append('<div id = "f1" class="container fourth"><div class="row"><div id="zit" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">ZAITOUNY Company for tourism<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Registration and customer service employee<br> (6/2014-3/2016)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('body').append('<div id = "f2" class="container fourth"><div class="row"><div id="taiba" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">TAIBA for designing and printing<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Print worker and design trainer <br>(6/2010-12/2010)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('body').append('<div id = "f3" class="container fourth"><div class="row"><div id="twen" class="col-sm-6 col-md-6 col-xs-6 triangle-isosceles">Twenty-Four for Printing Services<span class="tooltiptext tooltip-right col-sm-4 col-md-4 col-xs-4"><strong>Market Manager and Co-designer <br>(12/2016-7/2017)</strong></span></div></div></div>')},32500);
			setTimeout(function(){$('.fourth').hide()},32500);
			setTimeout(function(){$('#f1').show('slow')},33500);
			setTimeout(function(){$('#f2').show('slow')},34000);
			setTimeout(function(){$('#f3').show('slow')},34500);
			setTimeout(function(){$('#fourth-page , #f1 , #f2 , #f3').hide('drop', 1500)},40000);
			setTimeout(function(){$('#fourth-page , #f1 , #f2 , #f3').remove()},42000);
			setTimeout(function(){$('body').empty()},42000);
			setTimeout(function(){$('body').append('<div class="container"><div class="row"><div id= "last" class=" col-sm-offset-1 col-md-offset-1 col-xs-offset-1 col-md-10 col-sm-10 col-xs-10 col-lg-10 col-lg-offset-0 text-center"><p>Thanks for enjoying my CV<br><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mazenak94@gmail.com"> E-mail: mazenak94@gmail.com<br><a href="tel:00963992355357"> Phone Number: +963992355357</p></div></div></div>')},43000);
		}

});

}


function makeThird(){
	$('body').append('<div  id="skill" class="skill-section"></div>');
	$('#skill').append('<div id="first" class="row list"><div class="col-md-8  col-sm-8  col-xs-8"><div class="progress"><div class="progress-bar bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style="width: 50%"><span class="skill-name"><strong>JavaScript/JQuery</strong></span></div></div></div><div class="col-md-2 col-sm-2 col-xs-2 text-left">50%</div></div>');
	$('#skill').append('<div id="second" class="row list"><div class="col-md-8  col-sm-8  col-xs-8"><div class="progress"><div class="progress-bar bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style="width: 50%"><span class="skill-name"><strong>HTML/CSS</strong></span></div></div></div><div class="col-md-2 col-sm-2 col-xs-2 text-left">50%</div></div>');
	$('#skill').append('<div id="third" class="row list"><div class="col-md-8  col-sm-8  col-xs-8"><div class="progress"><div class="progress-bar bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style="width: 75%"><span class="skill-name"><strong>Java/C++</strong></span></div></div></div><div class="col-md-2 col-sm-2 col-xs-2 text-left">75%</div></div>');
	$('#skill').append('<div id="fourth" class="row list"><div class="col-md-8  col-sm-8  col-xs-8"><div class="progress"><div class="progress-bar bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="skill-name"><strong>OpenCV/Weka</strong></span></div></div></div><div class="col-md-2 col-sm-2 col-xs-2 text-left">80%</div></div>');
	$('#skill').append('<div id="fifth" class="row list"><div class="col-md-8  col-sm-8  col-xs-8"><div class="progress"><div class="progress-bar bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style="width: 50%"><span class="skill-name"><strong>Bootstrap</strong></span></div></div></div><div class="col-md-2 col-sm-2 col-xs-2 text-left">50%</div></div>');

}



function makeList(){
	var $list = $('#second-page').append('<div class="row"><div class="col-md-9 col-sm-10 col-xs-11 col-xs-offset-0 col-sm-offset-1 col-md-offset-1 col-lg-7 col-lg-offset-0 text-center"><ul class="academic"></ul></div></div>').find('ul');
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
