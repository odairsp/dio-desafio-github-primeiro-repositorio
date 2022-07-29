// ainda nao funciona

async function resolvePromise() {
    const myPromisse = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvida!");
        }, 2000);
    });

    const resolved = await myPromisse
        .then((result) => result + ' Passando pelo then...')
        .then((result) => result + " acabou!")
        .catch((err) => console.log(err.message));

    return resolved;
}

await resolvePromise();