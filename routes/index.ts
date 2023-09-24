import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req:any, res, _next:any) {
  res.render('index', { title: 'Express' });
});

export default router;
