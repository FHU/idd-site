

$(function() {
	
	$( window ).resize(function() {
		load_chart();
	});

	load_chart();
});

function load_chart() {
	var chart = document.getElementById("jobs-chart");
	var jobs = chart.getElementsByTagName("li");
	var view_width = window.getComputedStyle(chart).width.replace("px", "").replace("PX", "");
	for(var i = 0; i < jobs.length; ++i) {
	   var job = jobs[i];
	   var wage = job.getElementsByTagName("span")[0].innerHTML;
	   var amount = wage.replace("$","").replace(",","");
	   var new_size = (amount * view_width) / 80000;
	   console.log(amount +"*"+ view_width + "/ 80000");
	   job.style.width = new_size + "PX";
	}
}
	        