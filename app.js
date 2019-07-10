const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    loocation: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jane Doe',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    loocation: 'Phoenix AZ',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'James Smith',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    loocation: 'Washington DC',
    image: 'https://randomuser.me/api/portraits/men/25.jpg'
  }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
