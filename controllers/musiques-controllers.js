const uuid = require('uuid')


let MUSIQUES = [
    {
        id: "1",
        auteur: "Daft punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://www.clashmusic.com/wp-content/uploads/2018/04/get_lucky_daft_punk_by_rothdog-d62aa4m-scaled.jpg"
    },
    {
        id: "2",
        auteur: "David Guetta feat Sia",
        annee: "2011",
        titre: "Titanium",
        imageUrl: "https://i.discogs.com/LGuCJBxtHcFjjHiE1q_VTF1iWZLJZO1sxkwQOKrhFgg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1OTc1/MzgtMTMzNjc5Njkx/Ni02NTA4LmpwZWc.jpeg"
    },
    {
        id: "3",
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: "Smells like teen spirits",
        imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
    },
    {
        id: "4",
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
    }

]

const getMusiques = (req, res) => {
    res.json({MUSIQUES});
};

const getMusiquesById = (req, res) => {

    const mId = req.params.musiqueid;
    // console.log({mId})
    const musique = MUSIQUES.find((m) => {
        return m.id === mId;
    });

    if (!musique){
        return res.status(404).json({"Musique" : "Musique non trouvé pour cet Id"});
    }

    res.json({musique});
};


const createMusiques = (req, res) => {
    const {auteur, annee, titre, imageUrl} = req.body
    const createdMusique = {
        id: uuid.v4(),
        auteur,
        annee,
        titre,
        imageUrl
    }

    MUSIQUES.push(createMusiques)
    res.status(201).json({musique: createdMusique})
    

};

const updateMusiques = (req, res) => {
    const {auteur, annee, titre, imageUrl} = req.body
    const musiqueId = req.params.musiqueid

    const updatedMusiques = MUSIQUES.find((m) => {
        return (m.id === musiqueId);
    });

    const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId)
    updatedMusiques.auteur = auteur;
    updatedMusiques.annee = annee;
    updatedMusiques.titre = titre;
    updatedMusiques.imageUrl = imageUrl

    MUSIQUES[musiqueIndex] = updatedMusiques;

    res.status(200).json({musique : updatedMusiques})

};


const deleteMusiques = (req, res) => {
    const musiqueId = req.params.musiqueid;
    MUSIQUES = MUSIQUES.filter(m => m.id !== musiqueId);
    res.status(200).json({message: "Musique supprimée !"})
}



exports.getMusiques = getMusiques;
exports.getMusiquesById = getMusiquesById;
exports.createMusiques = createMusiques;
exports.updateMusiques = updateMusiques;
exports.deleteMusiques = deleteMusiques;



