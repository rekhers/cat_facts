$(document).ready(function(){
	console.log("getting here?");

	getCatFacts();

	$(".btn").click(function(){
		getCatFacts();
	})

});


function getCatFacts(){

$.ajax({
  url: "https://catfacts-api.appspot.com/api/facts?number=1",
  dataType: "json"
}).done(function(data){
  	console.log(data);
  	$("#currFact").text(data.facts);
});
};



