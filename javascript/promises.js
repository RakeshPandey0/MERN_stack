//states of promises
//state: pending
// some time
// state: fullfiled or rejected
// settled

// const promiseForIntern = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Got Internship")
//     }, 5000);
// })

// console.log(promiseForIntern);

// promiseForIntern.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });

//through function

// const getUserData = () =>{
//     return new Promise((resolve, reject)=>{
//         resolve({id:1, name:'rakesh', age:10});
//     });
// }

// getUserData().then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// });

// fetch("https://api.github.com/users/RakeshPandey0").then((res)=>{
//     return res.json();
// }).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});




//CALLBACK HELL !!!!!!!!!!!!!!!!!
// const getFollowerData = (theApi) => {
//   fetch(theApi)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// const getUserDataByGithubUserName = (name) => {
//   const result = fetch(`https://api.github.com/users/${name}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });

//   result.then((res) => {
//     getFollowerData(res.followers_url);
//   });
// };


//async and await
// use await where promise object is returned

const getData = async(name) => { // async function getData() {}
    try{
        const res = await fetch(`https://api.github.com/users/${name}`);
        const userData = await res.json();
        const followerRes = await fetch(userData.followers_url);
        const follower_data= await followerRes.json();
        console.log(follower_data);
    }catch(err){
        console.log(err)
    }
}


// const username = prompt("Enter github username:");
// getData(username);
// getUserDataByGithubUserName(username);

// async function getDataN(){
//     return 'yes'; //in resolve. If throw then in rejected.
// }
// console.log(getDataN().then((res)=>{console.log(res)}));

//https://randomuser.me/api/

const fetchUserDataWithPromises = ()=>{
    fetch('https://randomuser.me/api/').then((res)=>{
        res.json().then((res)=>{
            const data= res.results[0];
            const name = data.name;
            const location = data.location
            const email = data.email;

            console.log(`Name: ${name.first, name.last}`);
            console.log(`location: ${location.street.name}, ${location.city}, ${location.country}`);
            console.log(`email: ${email}`);
            
        })
    })
    
    .catch((err)=>console.log(err))
}

fetchUserDataWithPromises();    


//Using async and await

const fetchUserDataWithPromises_2 = async()=>{
    const res = await fetch('https://randomuser.me/api/');
    const res_json = await res.json();
    const data= res_json.results[0];
    const name = data.name;
    const location = data.location
    const email = data.email;


    console.log(`Name: ${name.first} ${name.last}`);
    console.log(`location: ${location.street.name}, ${location.city}, ${location.country}`);
    console.log(`email: ${email}`);
}

fetchUserDataWithPromises_2();