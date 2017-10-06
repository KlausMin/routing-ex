import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-name', function() {
    this.route('new');
  });
  this.route('ex');
  this.route('ex', {path: '/ex/:ex_id'});
});

export default Router;
