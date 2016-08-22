import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('dashboard');
    }
  }
});
