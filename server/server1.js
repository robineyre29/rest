const {app} = require('./server');

app.get('/test', authenticate, (req, res) => {
  res.send('Success');
});
