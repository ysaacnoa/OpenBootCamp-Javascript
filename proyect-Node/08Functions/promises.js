//asyn functions

function myAsync() {
  //call a external database and get the data
}

const mypromise = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  console.log(i);
    //if all goes well
  if (i!==0) {
    resolve();
  } else {
    reject();
  }
});

mypromise
    .then(()=>console.log("ejecutando ..."))
    .catch(()=>console.log("error ..."))
    .finally(()=>console.log("Wait and stay in this page"));