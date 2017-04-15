const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
			   'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
			   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['The', 'A', 'An'];
const homeList = document.querySelector("#bands");

bands.sort((a, b) => {
	let cleanA = checkForArticle(a);
	let cleanB = checkForArticle(b);

	if(cleanA < cleanB){
		return -1;
	} else if(cleanA > cleanB){
		return 1;
	} else {
		return 0; 
	}
});

function checkForArticle(dirtyString){

	var cleanString = dirtyString;

	for (var i = 0; i < articles.length; i++){
		if (cleanString.startsWith(articles[i])){
			cleanString = cleanString.slice((articles[i].length)).trim();
		}
	}
	return cleanString;
}

bands.forEach((el, i) => {
	let newEl = document.createElement("LI");
	let elText = document.createTextNode(el);
	newEl.appendChild(elText);
	homeList.appendChild(newEl);
});

console.log(bands);