const router = require('express').Router();
const passport = require('passport')

// auth login
router.get('/login', (req, res) => {
    res.render('login');
    console.log('test');  
});

router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile');
});

module.exports = router;