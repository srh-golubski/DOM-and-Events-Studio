// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    console.log('window loaded');
    
    takeoff.addEventListener('click', function(event){
        //confirm('Confirm that the shuttle is ready for takeoff.');
        
        if (confirm('Confirm that the shuttle is ready for takeoff')) {
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = 10000;
        }
    });

    landing.addEventListener('click', function(event){
        if (confirm('The shuttle is landing. Landing gear engaged')) {
            document.getElementById('flightStatus').innerHTML = 'The shuttle has landed';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    });

    missionAbort.addEventListener('click', function(event){
        if(confirm('Confirm that you want to abort the mission')) {
            document.getElementById('flightStatus').innerHTML = 'Mission aborted';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    });

    const up = document.querySelector('Up');
    const down = document.querySelector('Down');
    const right = document.querySelector('Right');
    const left = document.querySelector('Left');

    let motionButtons = [up, down, right, left];

    motionButtons.forEach(motion) => {
        motion.addEventListener('click', function(event){
            document.getElementById('')
        })
    }
})