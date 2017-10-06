/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage',
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  /**
   * Auth Routes
   */
  'POST /login': {
    controller: 'AuthController',
    action: 'login',
  },

  /*
  ** User Routes
  */
  'POST /user': {
    controller: 'UserController',
    action: 'create',
  },
  'GET /user/:id': {
    controller: 'UserController',
    action: 'view',
  },
  'GET /user': {
    controller: 'UserController',
    action: 'list',
  },
  'PUT /user/:id': {
    controller: 'UserController',
    action: 'update',
  },
  'DELETE /user/:id': {
    controller: 'UserController',
    action: 'delete',
  },

  /*
  ** Facebook Profile Routes
  */
  'POST /facebookProfile': {
    controller: 'FacebookController',
    action: 'create',
  },
  'GET /facebookProfile/:id': {
    controller: 'FacebookController',
    action: 'view',
  },
  'GET /facebookProfile': {
    controller: 'FacebookController',
    action: 'list',
  },
  'PUT /facebookProfile/:id': {
    controller: 'FacebookController',
    action: 'update',
  },
  'DELETE /facebookProfile/:id': {
    controller: 'FacebookController',
    action: 'delete',
  },

  /**
   * Facebook Routes & WebHooks
   */
  'GET /facebook': {
    controller: 'FacebookController',
    action: 'verifyToken',
  },
  'POST /facebook': {
    controller: 'FacebookController',
    action: 'receiveMessage',
  },
  'POST /facebook/message': {
    controller: 'FacebookController',
    action: 'message',
  },
  'POST /facebook/broadcast': {
    controller: 'FacebookController',
    action: 'broadcast',
  },

  /*
  ** Twitter Profile Routes
  */
  'POST /twitterProfile': {
    controller: 'TwitterController',
    action: 'create',
  },
  'GET /twitterProfile/:id': {
    controller: 'TwitterController',
    action: 'view',
  },
  'GET /twitterProfile': {
    controller: 'TwitterController',
    action: 'list',
  },
  'PUT /twitterProfile/:id': {
    controller: 'TwitterController',
    action: 'update',
  },
  'DELETE /twitterProfile/:id': {
    controller: 'TwitterController',
    action: 'delete',
  },

};
