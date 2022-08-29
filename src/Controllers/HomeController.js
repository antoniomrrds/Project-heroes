class HomeController {
  async index(req,res){
    res.send('<h1>Api Heroes</h1>');
  }
}

module.exports = new HomeController();