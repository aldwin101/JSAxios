                            // Generate random activity
let bttn = document.getElementById('bttn');

function getActivity(){
axios.get("http://www.boredapi.com/api/activity/").then(successActivity).catch(failedActivity);
}

function successActivity(response){
    console.log(response);
    document.getElementById('randomActivity').innerText = response.data.activity;
}

function failedActivity(err){
    console.log(err);
}

bttn.addEventListener('click', getActivity)


                            // Generate activity based on participants
let button = document.getElementById('button');
function getActivityByParticipants(){
    axios.get("http://www.boredapi.com/api/activity/",
    {
        params: {
            participants: numberOf.value
        }
    }).then(showActivity).catch(failedToShow);
}

function showActivity(success){
    console.log(success);
    document.getElementById('activity').innerText = success.data.activity;
}

function failedToShow(error){
    console.log(error);
    document.getElementById('activity').innerText = "Please try again!";
}

button.addEventListener('click', getActivityByParticipants)