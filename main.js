function createGame(player1, hour, player2) {
  return `
      <li>
        <img class="bandeira-players" src="./assets/icon-bandeiras/${player1}.svg" alt="Bandeira ${player1}" />
          <strong>${hour}</strong>
        <img class="bandeira-players" src="./assets/icon-bandeiras/${player2}.svg" alt="Bandeira ${player2}" />
     </li>
  `
}

let delay = -0.2;
function createCard(date, games) {
  delay = delay + 0.2;
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}</h2>
          <ul>
            ${games}
          </ul>
        </div>  
  `
}

function createGroup(group) {
  return `
   <div class="group" style="animation-delay: ${delay}s">
      <h3><span>${group}</span></h3>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('20/11',
    createGroup("Group A") +
    createGame('qatar', '13:00', 'ecuador')) +

  createCard('21/11',
    createGroup("Group B") +
    createGame('england', '10:00', 'iran') +

    createGroup("Group A") +
    createGame('senegal', '13:00', 'netherlands') +

    createGroup("Group B") +
    createGame('united states', '16:00', 'wales')) +

  createCard('22/11',
    createGroup("Group C") +
    createGame('argentina', '07:00', 'saudi arabia') +

    createGroup("Group D") +
    createGame('denmark', '10:00', 'tunisia') +

    createGroup("Group C") +
    createGame('mexico', '13:00', 'poland') +

    createGroup("Group D") +
    createGame('france', '16:00', 'australia')) +

  createCard('23/11',
    createGroup("Group F") +
    createGame('morocco', '07:00', 'croatia') +

    createGroup("Group E") +
    createGame('germany', '10:00', 'japan') +

    createGroup("Group E") +
    createGame('spain', '13:00', 'costa rica') +

    createGroup("Group F") +
    createGame('belgium', '16:00', 'canada')) +

  createCard('24/11',
    createGroup("Group G") +
    createGame('switzerland', '07:00', 'cameroon') +

    createGroup("Group H") +
    createGame('uruguay', '10:00', 'south korea') +

    createGroup("Group H") +
    createGame('portugal', '13:00', 'ghana') +

    createGroup("Group G") +
    createGame('brazil', '16:00', 'Serbia')) +

  createCard('25/11',
    createGroup("Group B") +
    createGame('wales', '07:00', 'iran') +

    createGroup("Group A") +
    createGame('qatar', '10:00', 'senegal') +

    createGroup("Group A") +
    createGame('netherlands', '13:00', 'ecuador') +

    createGroup("Group B") +
    createGame('england', '16:00', 'united states')) +

  createCard('26/11',
    createGroup("Group D") +
    createGame('tunisia', '07:00', 'australia') +

    createGroup("Group C") +
    createGame('poland', '10:00', 'saudi arabia') +

    createGroup("Group D") +
    createGame('france', '13:00', 'denmark') +

    createGroup("Group C") +
    createGame('argentina', '16:00', 'mexico')) +

  createCard('27/11',
    createGroup("Group E") +
    createGame('japan', '07:00', 'costa rica') +

    createGroup("Group F") +
    createGame('belgium', '10:00', 'morocco') +

    createGroup("Group F") +
    createGame('croatia', '13:00', 'canada') +

    createGroup("Group E") +
    createGame('spain', '16:00', 'germany')) +

  createCard('28/11',
    createGroup("Group G") +
    createGame('cameroon', '07:00', 'serbia') +

    createGroup("Group H") +
    createGame('south korea', '10:00', 'ghana') +

    createGroup("Group G") +
    createGame('brazil', '13:00', 'switzerland') +

    createGroup("Group H") +
    createGame('portugal', '16:00', 'uruguay')) +

  createCard('29/11',
    createGroup("Group A") +
    createGame('ecuador', '12:00', 'senegal') +

    createGroup("Group A") +
    createGame('netherlands', '12:00', 'qatar') +

    createGroup("Group B") +
    createGame('iran', '16:00', 'united states') +

    createGroup("Group B") +
    createGame('wales', '16:00', 'england')) +

  createCard('30/11',
    createGroup("Group D") +
    createGame('tunisia', '12:00', 'france') +

    createGroup("Group D") +
    createGame('australia', '12:00', 'denmark') +

    createGroup("Group C") +
    createGame('poland', '16:00', 'argentina') +

    createGroup("Group C") +
    createGame('saudi arabia', '16:00', 'mexico')) +


  createCard('01/12',
    createGroup("Group F") +
    createGame('croatia', '12:00', 'belgium') +

    createGroup("Group F") +
    createGame('canada', '12:00', 'morocco') +

    createGroup("Group E") +
    createGame('japan', '16:00', 'spain') +

    createGroup("Group E") +
    createGame('costa rica', '16:00', 'germany')) +

  createCard('02/12',
    createGroup("Group H") +
    createGame('south korea', '12:00', 'portugal') +

    createGroup("Group H") +
    createGame('ghana', '12:00', 'uruguay') +

    createGroup("Groupo G") +
    createGame('serbia', '16:00', 'switzerland') +

    createGroup("Group G") +
    createGame('cameroon', '16:00', 'brazil'))




