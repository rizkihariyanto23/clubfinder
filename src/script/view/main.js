//Module
import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

//Menerapkan arrow function
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");
 
    //Fungsi Promise
    // const onButtonSearchClicked = () => {
    //     DataSource.searchClub(searchElement.value)
    //     .then(renderResult)
    //     .catch(fallbackResult)
    // };

    // Fungsi Promise dengan async/await
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    
    const renderResult = results => {
        //Menerapkan arrow function
        // clubListElement.innerHTML = "";
        // results.forEach(club => {

        //     //Menerapkan destructuring
        //     const {name, fanArt, description} = club;
        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");

        //     //Menerapkan tempalate literals
        //     clubElement.innerHTML = `
        //     <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //     <div class="club-info">
        //     <h2> ${name} </h2>
        //     <p> ${description}</p>
        //     </div>`;
            
        //     clubListElement.appendChild(clubElement);
        // })

        clubListElement.clubs = results;
    };

    
    const fallbackResult = message => {
        //Menerapkan arrow function
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

        clubListElement.renderError(message);
    };

    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;