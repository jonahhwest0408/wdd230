// scripts/chamber.js

document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('member-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch member data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            displayMembers(members, 'grid');
        });

    // Event listeners for view toggle buttons
    gridViewButton.addEventListener('click', () => toggleView('grid'));
    listViewButton.addEventListener('click', () => toggleView('list'));

    function toggleView(view) {
        memberContainer.className = view + '-view';
        fetch('data/members.json')
            .then(response => response.json())
            .then(members => {
                displayMembers(members, view);
            });
    }

    function displayMembers(members, view) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');

            const memberImage = document.createElement('img');
            memberImage.src = member.image;
            memberImage.alt = `${member.name} logo`;

            const memberInfo = document.createElement('div');
            memberInfo.classList.add('member-info');

            const memberName = document.createElement('h2');
            memberName.textContent = member.name;

            const memberAddress = document.createElement('p');
            memberAddress.textContent = member.address;

            const memberPhone = document.createElement('p');
            memberPhone.textContent = member.phone;

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = member.website;
            memberWebsite.target = '_blank';

            const memberLevel = document.createElement('p');
            memberLevel.textContent = `Membership Level: ${member.membershipLevel}`;

            memberInfo.appendChild(memberName);
            memberInfo.appendChild(memberAddress);
            memberInfo.appendChild(memberPhone);
            memberInfo.appendChild(memberWebsite);
            memberInfo.appendChild(memberLevel);

            memberElement.appendChild(memberImage);
            memberElement.appendChild(memberInfo);

            memberContainer.appendChild(memberElement);
        });
    }
});
