import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    delete(ticket){
      ticket.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
