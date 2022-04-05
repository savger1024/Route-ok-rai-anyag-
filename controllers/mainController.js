const getRequest = async (req, res) => {
  
const User = require('../models/userModel')

  try { 
      const adatok = await User.find();
      res.render("index", {adatok})
  } catch (error {
      console.log(error.message);
  });
  
    const adatok = {
    nev: "Jane Doe",
  };
  res.render("index", { adatok });
};

const postRequest = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

module.exports = { getRequest, postRequest };
