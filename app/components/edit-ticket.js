import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(ticket){
      this.sendAction('delete', ticket);
    }
  }
});
