async function getVillains() {
    const villainResponse = await fetch ("https://class-api-six.vercel.app/api/fall-24/disney-villians/all")
    // console.log(villainResponse);
    const villainData = await
    villainResponse.json();
    console.log(villainData);
    return villainData;
}

getVillains();