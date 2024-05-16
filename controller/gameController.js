let videoGames = [
    {
        "id": 1,
        "nombre": "Super Mario Bros.",
        "año": 1985,
        "dificultad": "Media",
        "público": "Todos"
      },
      {
        "id": 2,
        "nombre": "The Legend of Zelda",
        "año": 1986,
        "dificultad": "Alta",
        "público": "Adolescentes"
      },
      {
        "id": 3,
        "nombre": "Pac-Man",
        "año": 1980,
        "dificultad": "Baja",
        "público": "Todos"
      },
      {
        "id": 4,
        "nombre": "Donkey Kong",
        "año": 1981,
        "dificultad": "Media",
        "público": "Todos"
      },
      {
        "id": 5,
        "nombre": "Tetris",
        "año": 1984,
        "dificultad": "Media",
        "público": "Todos"
      }
]

const getAllGames = (req, res, next)=>{
    res.json({videoGames});
}

const getGameById = (req, res, next) => {
    const game = videoGames.find(g => {
        return g.id == req.params.gid;
    });
    if(!game){
       const error = new Error('Lugar no existe para el ID especificado');
       error.code = 404;
       next(error);
    }else{
        res.json({game});
        console.log(game);
    }
}

const getGameByName = (req, res, next)=>{
    const games = videoGames.find(g=>{
        return g.nombre == req.params.gid
    });
    if(!games){
        throw new HttpError('Lugar no existe para el ID de usuario especificado', 404);
    }
    res.json({games});
 }

 const addGame = (req, res, next)=>{
    const {id, nombre, año, dificultad, público} = req.body;
    const createdGame = {
        id, 
        nombre,
        año, 
        dificultad, 
        público
    };
    console.log(createdGame);
    videoGames.push(createdGame);
    res.status(201).json({game:createdGame});

 }

 const updateGame = (req, res, next)=>{
    const {nombre} = req.body;
    const gameId = req.params.gid;
  
    const updatedGame = {... videoGames.find(g=>g.id ==gameId)};
    const gameIndex = videoGames.findIndex(g=>g.id == gameId);
    updatedGame.nombre = nombre;
    console.log(updatedGame);
  
    updatedGame[gameIndex] = updatedGame;
    console.log(updatedGame);
  
    res.status(200).json({game: updatedGame});
  }

exports.getAllGames = getAllGames;
exports.getGameById = getGameById;
exports.getGameByName = getGameByName;
exports.addGame = addGame;
exports.updateGame = updateGame;