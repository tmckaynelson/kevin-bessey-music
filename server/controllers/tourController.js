const createTour = (req, res) => {

    console.log('hit create post')
    res.status(200).send()
}

const getTours = (req, res) => {

    console.log('hit get posts')
    res.status(200).send()
}

const editTour = (req, res) => {

    console.log('hit edit post')
    res.status(200).send()
}

const deleteTour = (req, res) => {

    console.log('hit delete post')
    res.status(200).send()
}

module.exports = {
    createTour,
    getTours,
    editTour,
    deleteTour
}