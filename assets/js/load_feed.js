( function(){
    const blogPostsToShow = 3
    const blogPostsFeed = "https://midhunhk.github.io/atom.xml"

    const t = (entry, tname) => entry.getElementsByTagName(tname)[0]
    const date = entry => new Date(t(entry, 'updated').textContent).toISOString().split('T')[0]
    const html2txt = html => html.replace(/<(?:.|\n)*?>/gm, '')
    const content = entry =>  (t(entry, 'excerpt').textContent)
    // const content = entry => html2txt( (t(entry, 'content').textContent).slice(0, 300))

    // Load the latest blog posts
    fetch(blogPostsFeed)
        .then(response => response.text())
        .then( xml => {
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(xml, "text/xml")
            // console.log(xmlDoc.getElementsByTagName('entry')[0])
            const entriesArray = Array.from( xmlDoc.getElementsByTagName('entry'))
            const numBlogs = Math.min(blogPostsToShow, entriesArray.length)
            const subarray = entriesArray.slice(0, numBlogs)
            const html = subarray.map( entry => `
                <div class="column is-one-third">
                    <div class="card is-shadowless">
                        <div class="card-image">
                            <img src="${t(entry, 'featured').innerHTML}" alt="featured image"/>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p class="m-t-tiny block">${date(entry)}</p>
                                <a href="${t(entry, 'link').getAttribute('href')}" class="mt-2 mb-2">
                                    <h2 class="title is-4 mb-2 pb-2">${t(entry, 'title').innerHTML}</h2>
                                </a>
                                <p>${content(entry)}...</p>
                                <p>
                                    <a class='button is-outlined' href="${t(entry, 'link').getAttribute('href')}">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            
            document.getElementById('items').innerHTML = html.join('')
        })
})();