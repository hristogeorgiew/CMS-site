module.exports = {
    index: (req, res) => {
        res.render('admin/index')
    },

    getPosts: (req, res) => {
        res.send('all');
    },

    submitPosts: (req, res) => {
        res.send('Post Submited');
    },

    createPosts: (req, res) => {
        res.render('admin/posts/create');
    }
}