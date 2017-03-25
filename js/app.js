function setOne() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Harry Potter')).then(function(response) {
		$('#one').attr('src',response.Poster);
		$('#one').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#one').parent().attr('data-title',info);
	});
}

function setTwo() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Star Wars')).then(function(response) {
		$('#two').attr('src',response.Poster);
		$('#two').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#two').parent().attr('data-title',info);
	});
}

function setThree() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Game of Thrones')).then(function(response) {
		$('#three').attr('src',response.Poster);
		$('#three').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#three').parent().attr('data-title',info);
	});
}

function setFour() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Lord of the Rings')).then(function(response) {
		$('#four').attr('src',response.Poster);
		$('#four').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#four').parent().attr('data-title',info);
	});
}

function setFive() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Batman')).then(function(response) {
		$('#five').attr('src',response.Poster);
		$('#five').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#five').parent().attr('data-title',info);
	});
}

function setSix() {
	$.getJSON('http://www.omdbapi.com/?t=' + encodeURI('Spider man')).then(function(response) {
		$('#six').attr('src',response.Poster);
		$('#six').parent().attr('href',response.Poster);
		var info = "Title: " + response.Title + ", Writers: " + response.Writer + ", Genre: " + response.Genre + ", Plot: " + response.Plot;
		$('#six').parent().attr('data-title',info);
	});
}

setOne();
setTwo();
setThree();
setFour();
setFive();
setSix();