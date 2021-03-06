/**
 * Default 404 (Not Found) handler
 *
 * If no route matches are found for a request, Sails will respond using this handler.
 * 
 * This middleware can also be invoked manually from a controller or policy:
 * Usage: res.notFound()
 */

module.exports[404] = function pageNotFound(req, res) {
 sails.log.error("404 error mate");
   /*
   * NOTE: This function is Sails middleware-- that means that not only do `req` and `res`
   * work just like their Express equivalents to handle HTTP requests, they also simulate
   * the same interface for receiving socket messages.
   */

  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  // If the user-agent wants a JSON response, send json
  if (req.wantsJSON) {
	 sails.log.debug("returning jason new");
    return res.json({error:"404 error"});
    //return res.json(result, result.status);
  }
	sails.log.debug("still in 404.js mate");
  res.status(result.status);
  res.render(viewFilePath, function (err) {
    // If the view doesn't exist, or an error occured, send json
    if (err) {sails.log.debug("view doesnt exist");}
    if (err) { return res.json(result, result.status); }

    // Otherwise, serve the `views/404.*` page
    res.render(viewFilePath);
  });

};