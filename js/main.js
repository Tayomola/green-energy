// Load your images on page-load
function preloader() {
    const imagesList = [
           "./img/energy2.jpg",
			"./img/energy3.jpg",
			"./img/energy4.jpg"
        ];

    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};


window.addEventListener("load", preloader);


const mybuttons = document.querySelectorAll(".mybuttons button");
const article = document.querySelector("article");


let articleTopics = {

    home: {
        headingContent: 'Electricity',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ex id libero blandit vestibulum id non elit. Phasellus imperdiet ultrices massa, id vulputate sem efficitur sed. Proin ut elementum magna. Integer vitae nulla orci. Phasellus mollis magna eget odio dignissim luctus. Ut interdum, odio in consequat suscipit, nisl augue finibus mi, ac luctus tellus ex ut massa. Duis tincidunt, tortor sed maximus varius, nulla orci ullamcorper dui, ac elementum massa urna quis augue. Donec vitae tempor tortor. Fusce consequat et nulla eu consectetur. Integer felis urna, sollicitudin ut dignissim vel, euismod vitae eros. Phasellus vitae aliquam nisl. Sed egestas quam eget semper malesuada. Cras justo nibh, venenatis et venenatis ac, eleifend vel dui. Suspendisse vehicula ante nec malesuada pretium. Ut congue ipsum risus, et vestibulum diam mollis nec.',
        imgUrl:'img/energy2.jpg',
        imgAlt: 'Renewable'
    },
    power: {
        headingContent: 'Gas',
        bodyText: 'Vestibulum fringilla id quam eu facilisis. Duis tristique sollicitudin tincidunt. Maecenas ligula felis, ornare id commodo pulvinar, viverra rhoncus ligula. Nulla facilisis augue a lacus consequat, quis vulputate erat lacinia. Etiam lorem nisi, auctor faucibus libero ut, sodales ullamcorper lacus. Nullam vitae tellus tincidunt, pretium tellus eu, laoreet enim.Vivamus et ante neque. Vivamus elementum enim nisi, eu rhoncus ante malesuada vel. Aliquam bibendum, magna eget porta laoreet, mi nibh ullamcorper erat, quis dignissim massa nisi a nibh. Mauris molestie nibh lectus, et ultrices justo egestas at. Etiam ullamcorper nisi nec enim malesuada dignissim. Donec consectetur, mauris convallis lacinia sagittis, massa dui vestibulum lectus, ac cursus ante velit at felis. Curabitur velit ante, mollis quis nunc sed, luctus dictum sapien. Donec bibendum sollicitudin arcu, nec aliquam erat placerat ac. Nulla nec nunc quis enim efficitur fermentum imperdiet quis ipsum. Etiam gravida vestibulum velit. Nam vel nulla eleifend, maximus mauris et, condimentum eros. Ut at venenatis mi',
        imgUrl: 'img/energy3.jpg',
        imgAlt: 'water'
    },
    appliances: {
        headingContent: 'Green House',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices, magna eget placerat dignissim, tellus lorem auctor sapien, vitae porttitor neque odio non lectus. Pellentesque et nisi turpis. Quisque in imperdiet odio. Curabitur interdum dictum augue auctor commodo. Integer at pulvinar nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec augue nisi, ultrices eget ligula sit amet, elementum rhoncus odio. Nulla fringilla rutrum elit. Ut massa dolor, consectetur quis fringilla id, interdum nec dui. Vivamus eleifend, eros ut aliquet volutpat, urna risus accumsan ligula, at ullamcorper massa quam ac metus. Aliquam eu euismod lectus, eget auctor turpis. ',
        imgUrl: 'img/energy4.jpg',
        imgAlt: 'green'
    }

};

function handleSelection(ev) {


    for (let i = 0; i < mybuttons.length; i++) {

        if (mybuttons[i].hasAttribute("id")) {
            mybuttons[i].removeAttribute("id");
        }

        let clickedBtn = ev.target;
        clickedBtn.setAttribute("id", "working");
        let key = clickedBtn.getAttribute("data-content");

        article.innerHTML = "";


        article.innerHTML = `<h2>${articleTopics[key].headingContent}</h2><img src="${articleTopics[key].imgUrl}" alt="${articleTopics[key].imgAlt}"><p>${articleTopics[key].bodyText}</p>`;

    }
}

for (let i = 0; i < mybuttons.length; i++) {
    mybuttons[i].addEventListener("click", handleSelection);
}