const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const meme = {
    image: document.getElementById('meme-image'),
    title: document.getElementById('meme-title'),
    author: document.getElementById('meme-author')
}

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },
    mices: {
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')
    }
}


let dogList = [
    {
        name: "chihuahua",
        region: "mexico",
        description: "A tiny noise dog"
    },
    {
        name: "beagle",
        region: "england",
        description: "A medium hunting dog"
    },
    {
        name: "german shepherd",
        region: "germany",
        description: "Big dog for farm work"
    },
    {
        name: "huskey",
        region: "siberia",
        description: "Big dog for recue work in gelid wather"
    }
];

let catList = [
    {
        name: "Ocicat",
        region: "EU",
        description: "Posee una capa moteada como si fuera una fiera salvaje"
    },
    {
        name: "Siberiano",
        region: "Rusia",
        description: "Resultado del cruce entre el gato europeo y el gato salvaje de los bosques siberianos"
    },
    {
        name: "Bengala",
        region: "EU",
        description: "Felinos salvajes exóticos tales como son los leopardos, ocelotes, margays"
    },
    {
        name: "Siames",
        region: "Tailandia",
        description: "Se distinguen dos variedades: por un lado el siamés moderno, y por otro el siamés tradicional o Thai"
    }
];

let miceList = [
    {
        name: "Cebra",
        region: "Marruecos",
        description: "Es el miembro más pequeño de su género"
    },
    {
        name: "Pigmeo",
        region: "Africano",
        description: "Es “Mus minutoides”"
    },
    {
        name: "Crespado",
        region: "Arabe",
        description: "Son la mejor especie apara tener en manadas porque son 0 conflictivos"
    },
    {
        name: "Chino o Mickey",
        region: "Asiatico",
        description: "Su pelaje se caracteriza por ser blanco y negro, aspecto que sumado a sus diminutas dimensiones los hacen adorables"
    }
];

//Buscar Perros
categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;
    });
}

//Buscar Gatos
categories.cats.button.onclick = ()=>{
if(categories.cats.content.innerHTML){
    categories.cats.content.innerHTML = '';
    return;
}
catList.forEach(cat =>{
    categories.cats.content.innerHTML += `<li>
        <span>${cat.name}</span>
        <div>region: ${cat.region}</div>
        <div>description: ${cat.description}</div>
    </li>`;
});
}

//Buscar Ratones
categories.mices.button.onclick = ()=>{
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        return;
    }
    miceList.forEach(mice =>{
        categories.mices.content.innerHTML += `<li>
            <span>${mice.name}</span>
            <div>region: ${mice.region}</div>
            <div>description: ${mice.description}</div>
        </li>`;
    });
 }

//API
const GetMemes = async () =>{
    const data = await fetch('https://meme-api.herokuapp.com/gimme');
    const josonData = await data.json();
   
    const {url, author, nsfw, postLink, spoiler, subreddit, title} = josonData;

    //console.log(data.json());

    //console.log(spoiler);

    meme.title.innerHTML = `title ${title}`;
    meme.author.innerHTML = `author ${author}`;
    meme.image.src = url;
}

GetMemes();