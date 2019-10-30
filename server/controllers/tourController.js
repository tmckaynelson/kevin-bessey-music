const createTour = async (req, res) => {

    console.log('hit create post')
    res.status(200).send()
}

const getTours = async (req, res) => {

    const db = req.app.get('db')

    const tours = await db
    console.log('hit get posts')
    res.status(200).send()
}

const editTour = async (req, res) => {

    console.log('hit edit post')
    res.status(200).send()
}

const deleteTour = async (req, res) => {

    console.log('hit delete post')
    res.status(200).send()
}

module.exports = {
    createTour,
    getTours,
    editTour,
    deleteTour
}