const CLIENT_ID="7e9893a8043d4a809cee8c24a6e513a1" //Your Client id
const CLIENT_SECRET="d1d255cd13f343b4ab8693d2fb07a62b" //Your client Secret
async function A(b){
    var authParameters={
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    await fetch('https://accounts.spotify.com/api/token',authParameters)
        .then(result=>result.json())
        .then(data=>{console.log(data.access_token);
            d=data.access_token;
            
        })
        var artistParameter={
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+d
            }
        }
            await fetch('https://api.spotify.com/v1/search?q='+b+'&type=track',artistParameter)
                .then(response=>response.json())
                .then(data=>{
                    let i;
                    for(i=0;i<=10;i++)
                    {
                        document.write(`
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${data.tracks.items[i].id}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    `);
                    }
                    
                })
}


function App(){
    let a=$('#input').val();
    if(a=="")
      window.alert('Please enter any song name')
    else{
    document.write();
    A(a);
    }
}
