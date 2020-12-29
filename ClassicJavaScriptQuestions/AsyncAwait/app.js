const tlh = [{
    game: "Valorant",
    players: 7,
    tournaments: 3,
    winTournaments: 0,
    },
    {
    game: "Pubg",
    players: 13,
    tournaments: 7,
    winTournmaents: 3
    },
    {
    game: "League of Legends",
    players: 5,
    tournaments: 0,
    winTournaments: 0
    }];
  
  const getDatos = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(tlh); 
      },3000)
    })
  }
  
  // other simple form to get datos to this promise
  //getDatos().then((datos) => console.log(datos));
  
  async function fetchingData(){
    try{
      const datosfetched = await getDatos();
      console.log(datosfetched);
    } catch(err) {
      console.log(err.message)
    }
  }
  
  fetchingData()