const villainShowcaseRef = document.querySelector("tbody");

async function makeTable() {
    const allVillains = await getVillains();
    // console.log(getVillains);

    for (let i = 0; i < allVillains.length; i++) {
        const villain = allVillains[i];
        // console.log(villain);

        villainShowcaseRef.innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${villain.name}</td>
            <td>
            <img src="${villain.image}" height="100"/>
            </td>
            <td>${villain.films}</td>
            <td>${villain.year}</td>
        </tr>`
        
    }
}

makeTable();