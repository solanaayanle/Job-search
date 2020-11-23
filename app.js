 const searchField = document.querySelector('#search');
 const locationField = document.querySelector('#location')
 

document.querySelector('#search-button').addEventListener('click', function (e){
e.preventDefault()
    let jobSearch = searchField.value
    let locationSearch = locationField.value
    console.log(`${jobSearch} ${locationSearch}`)
    let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b42efab2&app_key=f8f41926ce69bb4e7c98de06888eddaf&what=${jobSearch}&where=${locationSearch}`
   let resultDescription = document.createElement('p')
     let resultTitle = document.createElement('h3')
     resultTitle.classList.add('job-title')
    resultDescription.classList.add('.job-description')
        let div = document.querySelector('.section-two')
  let html = ""
    async function getJob() {
    const jobPromise = await fetch (url)
    const jobs = await jobPromise.json()
  
    console.log(jobs)
       jobs.results.forEach( job => {
        const title = job.title;
        const body = job.description;
        html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;
    });
    document.body.innerHTML = html;
        
       

   }
getJob()
})


//
