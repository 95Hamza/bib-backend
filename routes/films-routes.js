const express = require('express')
const router = express.Router()

let FILMS = [
    {
        id: "1",
        auteur: "hamza",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://th.bing.com/th/id/OIP.iMAPjdPv35MhyhOYnYIYyQHaJ4?pid=ImgDet&rs=1"
    },
    {
        id: "2",
        auteur: "David Guetta feat Sia",
        annee: "2011",
        titre: "Titanium",
        imageUrl: "https://i.pinimg.com/originals/58/2b/c5/582bc50f36731b5dfd6668345b1aa23e.jpg"
    },
    {
        id: "3",
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: "Smells like teen spirits",
        imageUrl: "https://th.bing.com/th/id/R.034c8393286ed054f24b90c02f837e55?rik=C7V3C0LMv5935A&pid=ImgRaw&r=0"
    },
    {
        id: "4",
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/019/skyscraper-photo-affiche-1019631.jpg"
    }

]

router.get('/', (req, res) => {
    // console.log('Liste des films')
    res.json({message: {FILMS}})
})

router.get('/:filmid', (req, res) => {

    const fId = req.params.filmid;
    // console.log({fId})

    const film = FILMS.find((f) => {
        return f.id === fId;
    })

    if (!film){
        return res.status(404).json({"Film" : "Film non trouvé pour cet Id"})      
    }

    res.json({message: {film}})

})


module.exports = router;