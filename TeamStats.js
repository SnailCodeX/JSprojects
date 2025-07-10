const team = {
    _players: [
    player1= {firstName:'', lastName:'',age:''},
    player2= {firstName:'', lastName:'',age:''},
    player3= {firstName:'', lastName:'',age:''}
    ],
  _games: [
    game1= {opponent:'', teamPoints:'', opponentPoints:''},
    game2= {opponent:'', teamPoints:'', opponentPoints:''},
    game3= {opponent:'', teamPoints:'', opponentPoints:''}
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
    player= {firstName: newFirstName, lastName: newLastName,age:newAge}
    this._players.push(player) 
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    game= {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints}
    this._games.push(game)
  }
}

//Testing Example
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players)

team.addGame('Titans', '100', 98)
console.log(team.games)
