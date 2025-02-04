// Despues de dos segundos se ejecuta el console.log

// Asincrono

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

// Codigo sincrono es asi

console.log("Hello!");

// Se ejecuta primero el sincrono y luego el asincrono
