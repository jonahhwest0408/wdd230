document.addEventListener("DOMContentLoaded", function() {
    fetch('data/spotlight.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p>Level: ${member.level}</p>
            `;
            const spotlightContainer = document.getElementById('member-spotlight');
            spotlightContainer.appendChild(memberElement);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
