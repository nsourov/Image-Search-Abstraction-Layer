const mongoose = require("mongoose");
const Searched = require("../models/searchHistory");
const imageSearch = require("node-google-image-search");

const searchTerm = async (req, res) => {
  const newSearched = await new Searched({
    searched: req.params.searchTerm,
    time: new Date()
  });
 await newSearched.save(err => {
    if (err) {
      console.log(err);
    }
  });
  const results = imageSearch(
    req.params.searchTerm,
    search,
    parseInt(req.query.offset) || 0,
    10
  );
  let obj = { url: "", snippet: "", thumbnail: "", context: "" };
  function search(image) {
    res.json(
      image.map((result) => {
        return (obj = {
          url: result.link,
          snippet: result.snippet,
          thumbnail: result.image.thumbnailLink,
          context: result.image.contextLink
        });
      })
    );
  }
};

const latestSearched = async (req, res) => {
   await Searched.find({})
      .sort({ time: -1 })
      .limit(10)
      .exec(function(err, docs) {
          if(err) {
              res.json({error: err})
          }let obj = { searched: "", time: ""};
          const result = docs.map(results => {
              return( obj = {
                  searched: results.searched,
                  time: results.time
              })
          })
          res.json(result)
      });
  }
module.exports = {searchTerm, latestSearched}