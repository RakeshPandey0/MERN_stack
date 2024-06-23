// use await where promise object is returned

const getData = async (name) => {
  // async function getData() {}
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const userData = await res.json();
    const followerRes = await fetch(userData.followers_url);
    const follower_data = await followerRes.json();
    console.log(follower_data);
  } catch (err) {
    console.log(err);
  }
};

// const username = prompt("Enter github username:");
// getData(username);
// getUserDataByGithubUserName(username);

// async function getDataN(){
//     return 'yes'; //in resolve. If throw then in rejected.
// }
// console.log(getDataN().then((res)=>{console.log(res)}));

//https://randomuser.me/api/

const fetchUserDataWithPromises = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      res.json().then((res) => {
        const data = res.results[0];
        const name = data.name;
        const location = data.location;
        const email = data.email;

        console.log(`Name: ${(name.first, name.last)}`);
        console.log(
          `location: ${location.street.name}, ${location.city}, ${location.country}`
        );
        console.log(`email: ${email}`);
      });
    })

    .catch((err) => console.log(err));
};

// fetchUserDataWithPromises();

//Using async and await

const fetchUserDataWithPromises_2 = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const res_json = await res.json();
  const data = res_json.results[0];
  const name = data.name;
  const location = data.location;
  const email = data.email;

  console.log(`Name: ${name.first} ${name.last}`);
  console.log(
    `location: ${location.street.name}, ${location.city}, ${location.country}`
  );
  console.log(`email: ${email}`);
};

// fetchUserDataWithPromises_2();

//Task: create account in weatherapi.com and extract
// api for weather : https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION.
// api for github : https://api.github.com/users/USERNAME

//json from github res contains name and location.

const fetchGitHubUserAndTemperatureWithPromises = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => {
      res.json().then((res) => {
        const name = res.name;
        const location = res.location;

        //now fetching temperature from weather api.
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=d17f02981bb5465b8ca23846241906&q=${location}`
        ).then((res) => {
          res
            .json()
            .then((res) => {
              const temp_c = res.current.temp_c;
              console.log(
                `Name: ${name} \nLocation: ${location} \nTemperature: ${temp_c}`
              );
            })
            .catch((err) => console.log(err));
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// const username = prompt("Enter username:");
// fetchGitHubUserAndTemperatureWithPromises(username);

//Using async and await

const fetchGitHubUserAndTemperatureWithPromises_2 = async (username) => {
  try {
    const githubRes = await fetch(`https://api.github.com/users/${username}`);
    const githubData = await githubRes.json();
    const name = githubData.name;
    const location = githubData.location;
    //fetching temperature from weather api
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d17f02981bb5465b8ca23846241906&q=${location}`
    );
    const weatherData = await weatherRes.json();
    const tempInCelcius = weatherData.current.temp_c;

    console.log(
      `Name: ${name} \nLocation: ${location} \nTemperature: ${tempInCelcius}`
    );
  } catch (err) {
    console.log(err);
  }
};

// fetchGitHubUserAndTemperatureWithPromises_2(username);
