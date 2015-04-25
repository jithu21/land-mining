var GooglePlaces = require("googleplaces");
var googlePlaces = new GooglePlaces('AIzaSyDvYmlkWCYj9dpMdFUv0WJjIg47DpW8LVI', 'json');
var parameters;

/**
 * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};

module.exports.map_info = function (req, res, next) {
  googlePlaces.placeSearch(parameters, function (error, response) {
    if (error) throw error;
    res.send(response.results);
  });
}