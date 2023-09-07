var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
});

router.get('/product/detail', function(req, res, next) {
  res.render('detail', { title: 'detail' });
});

router.get('/collection', function(req, res, next) {
  res.render('collection', { title: 'collection' });
});

router.get('/collection/detail', function(req, res, next) {
  res.render('collection-detail', { title: 'collection detail' });
});

router.get('/mixmatch', function(req, res, next) {
  res.render('mixmatch', { title: 'Mixmatch' });
});

router.get('/mixmatch/detail', function(req, res, next) {
  res.render('mixmatch-detail', { title: 'mixmatch detail' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'blog' });
});

router.get('/blog/detail', function(req, res, next) {
  res.render('blog-detail', { title: 'blog detail' });
});
module.exports = router;
