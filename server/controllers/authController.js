const bcrypt = require('bcryptjs')

const login = async (req, res) => {

    const { username, password } = req.body
    const db = req.app.get('db')

    const foundUser = await db.get_user([username])

    if(!foundUser[0]) {
        return res.status(403).send('Invalid Crendentials')
    }

    if(!bcrypt.compareSync(password, foundUser[0].password)) {
        return res.status(403).send('Invalid Credentials')
    }

    res.status(200).send(foundUser[0].username)
}

const register = async (req, res) => {

    const { username, password } = req.body
    const db = req.app.get('db')

    const foundUser = await db.get_user([username])

    if(foundUser[0]) {
        return res.status(409).send('Username already in use')
    }

    const salt = bcrypt.genSaltSync(13)
    const passwordHash = bcrypt.hashSync(password, salt)

    const newUser = await db.register_user([username, passwordHash])

    res.status(200).send(`User ${username} successfully created`)
}

const editPassword = (req, res) => {
    console.log('hit edit password')
    res.send()
}

module.exports = {
    login,
    register,
    editPassword
}