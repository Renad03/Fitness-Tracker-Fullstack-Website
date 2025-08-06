import User from '../Models/user.model.js'; // Ensure the .js extension is present

export async function getAllUsers(req, res, next) {
    try {
        const users = await User.find(); // Use User.find()
        res.send(users);
    } catch (err) {
        next(err);
    }
}

export function searchUser(req, res, next) {
    try {
        const users = User.find({ name: req.query.name }); // Use User.find()
        res.send(users); // Remember to await or use .exec() if needed
    } catch (err) {
        next(err);
    }
}

export async function getUserByEmail(req, res, next) {
    
    try {
        const user = await User.findOne({ email: req.params.email });
        res.send(user);
    } catch (err) {
        next(err);
    }
}
export async function addUser(req, res, next) {
    try {
        const user = await User.create(req.body); // Use User.create()
        res.send(user);
    } catch (err) {
        next(err);
    }
}

export async function updateUser(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Use User.findByIdAndUpdate()
        res.send(user);
    } catch (err) {
        next(err);
    }
}

export async function deleteUser(req, res) { // Make this async to use await
    try {
        const user = await User.findByIdAndDelete(req.params.id); // Use User.findByIdAndDelete()
        res.send(user);
    } catch (err) {
        next(err);
    }
}