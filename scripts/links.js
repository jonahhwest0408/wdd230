// links.js

const baseURL = 'https://jonahhwest0408.github.io/wdd230/';
const linksURL = 'https://jonahhwest0408.github.io/wdd230/data/links.json';

async function getLinksData() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch links data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function generateLinksHTML(linksData) {
    const learningActivitiesList = document.getElementById('learning-activities-list');
    learningActivitiesList.innerHTML = '';

    linksData.weeks.forEach(week => {
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);
            learningActivitiesList.appendChild(listItem);
        });
    });
}

window.onload = async function() {
    const linksData = await getLinksData();
    generateLinksHTML(linksData);
};
