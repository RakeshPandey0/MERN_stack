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

const getFollowerData = (theApi) => {
  fetch(theApi)
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const getUserDataByGithubUserName = (name) => {
  const result = fetch(`https://api.github.com/users/${name}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    // .then((res)=>{console.log(res)})
    .catch((err) => {
      return err;
    });
  result.then((res) => {
    getFollowerData(res.followers_url);
  });
};

const username = prompt("Enter github username:");
getUserDataByGithubUserName(username);

// getUserDataByGithubUserName(username).then((res)=>{
//     getUserDataByGithubUserName(res).then(console.log(res)).catch(((err)=>{console.log(err)}));
// })
// .catch((err)=>{return err;});
