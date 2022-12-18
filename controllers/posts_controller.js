module.exports.usersPosts = function(req,res){

    // return res.end('<h1>This is users/posts controller</h1>');
    return res.render('posts',{
        title: 'posts'
    })

};