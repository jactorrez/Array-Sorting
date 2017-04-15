const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
			   'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
			   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['The', 'A', 'An'];
const homeList = document.querySelector("#bands");

function stripArticle(name){
	return name.replace(/^(the |an |a )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
	  sortedBands
	  	.map(band => `<li>${band}</li>`)
	  	.join('');


