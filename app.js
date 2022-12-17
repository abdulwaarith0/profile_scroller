const data = [
    {
        name: "John doe",
        age: 32,
        gender: "male",
        lookingFor: "female",
        location: "Miami FL",
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: "Jen Smith",
        age: 25,
        gender: "female",
        lookingFor: "male",
        location: "Boston MA",
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: "William Johnson",
        age: 36,
        gender: "male",
        lookingFor: "female",
        location: "Lynn MA",
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }
];

const profiles = ProfileIterator(data);

// call first profile
nextProfile();

// Next event
document.querySelector("#next").addEventListener("click", nextProfile);

// Next profile display
function nextProfile(e) {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) { 
        document.querySelector("#profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}
            </li>
            <li class="list-group-item">Age: ${currentProfile.age}
            </li>
            <li class="list-group-item">Location: ${currentProfile.location}
            </li>
            <li class="list-group-item">Preference: ${currentProfile.gender} Looking for  ${currentProfile.lookingFor}
            </li>
        </ul>
    `;

    document.querySelector("#imageDisplay").innerHTML = `
        <img
            src="${currentProfile.image}"
        > `;
    } else {
        // No more profiles to load
        window.location.reload();
    }
} 

// Profile iterator
function ProfileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}