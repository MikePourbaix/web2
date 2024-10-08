import { Router } from "express";
import {Films, NewFilm} from "../types";

const router = Router();


const defaultFilm: Films[] = [
    {
        id: 1,
        title: "Parasite",
        director: "Bong Joon-Ho",
        duration: 131,
        budget: 13500000000,
        description: "Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable, dont personne ne sortira véritablement indemne..",
        imageURL: "https://www.allocine.fr/video/player_gen_cmedia=19583481&cfilm=255238.html",
    },
    {
        id: 2,
        title: "Scary Movie",
        director: "Keenen Ivory Wayans",
        duration: 88,
        budget: 19000000,
    },
    {
        id: 3,
        title: "Scary Movie 2",
        director: "Keenen Ivory Wayans",
        duration: 83,
        budget: 45000000,
    },
    {
        id: 3,
        title: "The Last Horizon",
        director: "James Nolan",
        duration: 115,
        budget: 120000000,
        description: "A crew of astronauts embarks on a perilous mission to save Earth from an imminent cosmic threat.",
    },
    {
        id: 4,
        title: "Midnight Heist",
        director: "Eva Rodriguez",
        duration: 105,
        budget: 35000000,
        description: "A team of expert thieves plans a daring heist in the middle of the night, but things quickly spiral out of control.",
    },
    {
        id: 5,
        title: "Echoes of the Past",
        director: "Sofia Kramer",
        duration: 98,
        budget: 20000000,
        description: "A journalist uncovers dark secrets about her family's history while investigating a series of mysterious disappearances in her hometown.",
    }
    
];



router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = defaultFilm.find((film) => film.id === id)
    if(!film){
        return res.sendStatus(404);
    }
    return res.json(film);
});


router.get("/", (req, res) => {
    if(!req.query["duration-min"]){
        return res.json(defaultFilm);
    }

    const durationMin = Number(req.query["duration-min"]);

    const filteredFilms = defaultFilm.filter((film) => {
        return film.duration >= durationMin;
    });

    return res.json(filteredFilms);
});


router.post("/", (req, res) => {
    const body: unknown = req.body;
    
    if(
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number"
    ) {
        return res.sendStatus(400);
    }

    const { title, director, duration } = body as NewFilm;

    const nextId = defaultFilm.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0)+1;

    const NewFilm: Films = {
        id: nextId,
        title,
        director,
        duration,
    };

    defaultFilm.push(NewFilm);
    return res.json(NewFilm);

});
////////////////////////////////////////////////////////////////////////

router.post("/", (req, res) => {
    const body: unknown = req.body;
  
    if (
      !body ||
      typeof body !== "object" ||
      !("title" in body) ||
      !("director" in body) ||
      !("duration" in body) ||
      typeof body.title !== "string" ||
      typeof body.director !== "string" ||
      typeof body.duration !== "number" ||
      !body.title.trim() ||
      !body.director.trim() ||
      body.duration <= 0 ||
      ("budget" in body &&
        (typeof body.budget !== "number" || body.budget <= 0)) ||
      ("description" in body &&
        (typeof body.description !== "string" || !body.description.trim())) ||
      ("imageUrl" in body &&
        (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ) {
      return res.json("Wrong body format"); 
    }
  
    const newFilm = body as NewFilm;
  
    const nextId =
      defaultFilm.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;
  
    const addedFilm: Films = { id: nextId, ...newFilm };
  
    defaultFilm.push(addedFilm);
  
    return res.json(addedFilm);
  });
////////////////////////////////////////////////////////////////////////
export default router;
