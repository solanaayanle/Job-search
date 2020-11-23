 const searchField = document.querySelector('#search');
 const locationField = document.querySelector('#location')
 
//When the user clicks the button, the API returns values that match
document.querySelector('#search-button').addEventListener('click', function (e){
e.preventDefault()

    //Take in user search for job title and location 
    let jobSearch = searchField.value
    let locationSearch = locationField.value
    
    let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b42efab2&app_key=f8f41926ce69bb4e7c98de06888eddaf&what=${jobSearch}&where=${locationSearch}`
    const div = document.querySelector('.section-two')
    let html = ""

    //Fetch jobs that mathc search from the Adzuna API
    async function getJob() {
    const jobPromise = await fetch (url)
    const jobs = await jobPromise.json()
        
        //For each job, create a div that includes the jobs that match the search query
        jobs.results.forEach( job => {
        const title = job.title;
        const body = job.description;
        const viewMore = job.redirect_url
        const  cityLocation = job.location.display_name
        html += `
            <div class='job'>
                <h3 class='job-title'>${title}</h3>
                <h4 class='city'><small>${cityLocation}</small></h4>
                <p class='job-description'>${body}</p>
                <form style="display: inline" action="${viewMore}" method="get">
                <button class='view-more'>View More</button>
                </form>
            </div>
        `;
    });
    div.innerHTML = html;

   }
getJob()
})
