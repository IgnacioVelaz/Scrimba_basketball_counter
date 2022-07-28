
window.onload = function () {
    /*---------- Set variables for the Score elements ----------*/
    const homeScoreEl = document.getElementById('home-score-el')
    const guestScoreEl = document.getElementById('guest-score-el')

    const plusHome = document.getElementsByClassName('plus-home')
    const plusGuest = document.getElementsByClassName('plus-guest')
    /*---------- Set variable for Reset button ----------*/
    const resetEl = document.getElementById('reset')


    /*---------- Ser variables for Score boxes ----------*/
    const homeScoreBoxEl = document.getElementById('home-score-box')
    const guestScoreBoxEl = document.getElementById('guest-score-box')

    /*---------- Set the initial score to 0 ----------*/
    let homeScore = 0;
    homeScoreEl.innerHTML = homeScore
    let guestScore = 0;
    guestScoreEl.innerHTML = guestScore




    /*----------Add points to the Home team function ----------*/
    function addPointsHome(num) {
        homeScore += num;
        homeScoreEl.innerHTML = homeScore
        compare()
    }
    /*----------Add points to the Guest team function ----------*/

    function addPointsGuest(num) {
        guestScore += num;
        guestScoreEl.innerHTML = guestScore
        compare()
    }

    /*---------- Add points to the Home team on click ----------*/

    for (let i = 0; i < plusHome.length; i++) {
        plusHome[i].addEventListener('click', function () {
            addPointsHome(i + 1)
        })
    }
    /*---------- Add points to the Guest team on click  ----------*/

    for (let i = 0; i < plusGuest.length; i++) {
        plusGuest[i].addEventListener('click', function () {
            addPointsGuest(i + 1)
        })
    }

    /*---------- Reset Score on Click ----------*/
    resetEl.addEventListener('click', function () {
        homeScore = 0;
        homeScoreEl.innerHTML = homeScore

        guestScore = 0;
        guestScoreEl.innerHTML = guestScore

        homeScoreBoxEl.style.border = "none";
        guestScoreBoxEl.style.border = "none";
    })

    /*---------- Check winning team ----------*/

    function compare() {
        if (homeScore > guestScore) {

            homeScoreBoxEl.style.border = "2px solid var(--winning-team-color)"
            guestScoreBoxEl.style.border = "2px solid var(--losing-team-color)"


        }
        else if (homeScore < guestScore) {
            guestScoreBoxEl.style.border = "2px solid var(--winning-team-color)"
            homeScoreBoxEl.style.border = "2px solid var(--losing-team-color)"


        }
        else {
            homeScoreBoxEl.style.border = "none";
            guestScoreBoxEl.style.border = "none";
        }
    }
}

