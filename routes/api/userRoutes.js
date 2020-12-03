const express = require('express')
const router = express.Router()
const passport = require('../../passport/index')
const db = require('../../models')


router.post("/login",  function (req, res, next) {
    next()
}, passport.authenticate("local", { successRedirect: '/' }), (req, res) => {
});
router.get('/', function(req, res) {
    db.User.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err))
})
router.post('/signup', function(req, res) {
    console.log(req.body)
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    })
    .then(function(dbUser) {
        console.log(dbUser)
        res.redirect(307, '/api/users/login')
    })
    .catch(function(err) {
        res.json(err);
    });
})
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});
router.get('/info', function(req, res) {
    console.log(req.user)
    if (req.user) {
        db.User.findOne(
            {
                _id: req.user._id
            }
        ).then(dbUser => {
            console.log(dbUser)
            res.json(dbUser)
        })
    }
});


/**
 * Send in body with hobby id inside, as as logged-in user: { hobby_id: 213iwonfsipfno }
 */
router.post('/favoriteHobby', function(req, res) {
    console.log("connected to route");
    let hobby_id = req.body.hobby_id;
    console.log(hobby_id);
    db.User.findOne(
		{ _id: req.user._id }
    )
    .then(user => {
        console.log(user);
        db.Hobby
          .findById(hobby_id)
          .then(hobby => {
            console.log("found the hobby")
            user.favoriteHobbies.push(hobby);
            user.save(function(err, user) {
                if (err) return console.error(err);
                res.json({user: user});
                console.log("User saved succussfully!");
              });
            })
          .catch(err => res.status(422).json(err));
    });
})

module.exports = router;