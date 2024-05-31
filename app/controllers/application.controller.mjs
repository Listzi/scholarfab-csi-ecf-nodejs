// Votre travail doit être effectué principalement dans ce fichier ...


export function loadApplicationController(app) {
    views.get('/', (req, res) => {
        const connexion = req.session
        res.render('formNote')
    })

    app.post('/service') //appelle de la donction getDatabase
    //get note id
    // get note id edit
    //get share
    //post share 
    // get share id edit
}