function onPageScript (){
    console.log('name');
}

onPageScript()

function info(){
    console.log(navigator.userAgent);
    console.log(navigator.userAgentData.platform);
}

info()


function online(){
    console.log(navigator.onLine)
}

online()

function screenWidth (){
console.log(screen.width + ' ' + screen.height)
}

screenWidth()


//location

function windowLocation (){
    console.log(location.href)
    console.log(location.hostname)
    console.log(location.protocol)
    console.log(location.host)
}

windowLocation()


function storageTest() {
    localStorage.setItem('name', 'Trklja Zeljko');

    var name = localStorage.getItem('name');

    localStorage.clear();
    if(localStorage.getItem('name') ===null){
        console.log('there is no local data')
    }
    else{
        console.log(`Name from local storage: ${name}`);

    }


}
    storageTest()

    function storageTwo() {
    sessionStorage.setItem('name', 'Trklja Zeljko');

    var name = sessionStorage.getItem('name');
    console.log(`Name from local storage: ${name}`);
       
    }

    storageTwo()
    
    function alertPromptConfirm() {
        alert('Hello Humans');
        var userInput = prompt('We will submit this answer now!');
        console.log(userInput);
        var yesNo = confirm('Are you a human?');
        console.log(yesNo);
        
    }
    alertPromptConfirm()