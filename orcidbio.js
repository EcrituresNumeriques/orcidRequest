/**
 * Created by marviro on 05/04/2017.
 */


function ORCIDbio(orcidID, mydiv) {

    var ORCIDLink = "https://pub.orcid.org/v2.0/" + orcidID + "/biography";

    fetch(ORCIDLink,

        {
            headers: {
                "Accept": "application/orcid+json"
            }
        })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {

                    ////DEBUG!
                    console.log();

                  
                 
                        //bio
                        
                           var bio = data.content;
   
                        

                    document.getElementById(mydiv).innerHTML = bio;

                    document.writeln = bio;
                 
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


