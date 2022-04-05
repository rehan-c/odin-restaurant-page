import _, { divide } from 'lodash';

console.log("Welcome!");

let headingContainer = document.createElement('div');
headingContainer.className = 'heading-container';
headingContainer.id = 'heading-container';
document.getElementById("content").appendChild(headingContainer);

let headingDiv = document.createElement('div');
headingDiv.classname = 'heading';
headingDiv.id = 'heading';
document.getElementById("heading-container").appendChild(headingDiv);

let h1 = document.createElement('h1');
h1.textContent = "Rehan's Cafe";
document.getElementById("heading").appendChild(h1);

let infoContainer = document.createElement('div');
infoContainer.className = 'info-container';
infoContainer.id = 'info-container';
document.getElementById("content").appendChild(infoContainer);

let infoDiv = document.createElement('div');
infoDiv.className = 'info';
infoDiv.id = 'info';
document.getElementById("info-container").appendChild(infoDiv);

let infoImage = document.createElement('img');
infoImage.src = "coffee.jpg";
document.getElementById("info").appendChild(infoImage);

let infoPara = document.createElement('p');
infoPara.textContent = "We provide caffeine in it's purest form, with boiling water only. Enjoy our tea and coffee, without a milky aftertaste.";
document.getElementById("info").appendChild(infoPara);

let hoursAndLocationContainer = document.createElement('div');
hoursAndLocationContainer.className = 'hours-and-location-container';
hoursAndLocationContainer.id = 'hours-and-location-container';
document.getElementById("content").appendChild(hoursAndLocationContainer);

let hoursContainer = document.createElement('div');
hoursContainer.className = 'hours-container';
hoursContainer.id = 'hours-container';
hoursContainer.innerHTML = `
                <div class="hours">
                    <h2>Hours</h2>
                    <p>Sunday: 8am - 8pm</p>
                    <p>Monday: 6am - 6pm</p>
                    <p>Tuesday: 6am - 6pm</p>
                    <p>Wednesday: 6am - 6pm</p>
                    <p>Thursday: 6am - 10pm</p>
                    <p>Friday: 8am - 10pm</p>
                </div>
`;
document.getElementById("hours-and-location-container").appendChild(hoursContainer);

let locationContainer = document.createElement('div');
locationContainer.className = 'location-container';
locationContainer.id = 'location-container';
locationContainer.innerHTML = `
                <div class="location">
                    <h2>Location</h2>
                    <p>We are located somewhere in the UK.</p>
                </div>
`;
document.getElementById("hours-and-location-container").appendChild(locationContainer);

let menuContainer = document.createElement('div');
menuContainer.classname = 'menu-container';
menuContainer.id = 'menu-container';
menuContainer.innerHTML = `
<div class="menu-container" id="menu">
            <div class="menu">
                <button id="menu-button">
                    View Menu
                </button>
        </div>
`;
document.getElementById('content').appendChild(menuContainer);

let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function() {
    console.log("Button clicked");
    menuContainer.innerHTML = `
        <div class="menu-container" id="menu">
                        <h2>Menu</h2>
                        <table>
                            <tr>
                                <td>Beverage</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>Chai</td>
                                <td>£4.50</td>
                            </tr>
                            <tr>
                                <td>Green Tea</td>
                                <td>£5.00</td>
                            </tr>
                    
                        </table>
                    </div>
                </div>
    `;
    document.getElementById('content').appendChild(menuContainer);
});