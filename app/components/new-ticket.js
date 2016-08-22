import Ember from 'ember';

export default Ember.Component.extend({
  debugQ: true,
  askQ: false,
  timeQ: false,
  showFormQ: false,
  actions: {
    debug(){
      this.set('debugQ', false);
      this.set('askQ', true);
    },
    ask(){
      this.set('askQ', false);
      this.set('timeQ', true);
    },
    time(){
      this.set('timeQ', false);
      this.set('showFormQ', true);
    },
    newTicket() {
      var params = {
        name_one: this.get('name_one'),
        name_two: this.get('name_two') ? this.get('name_two') : "",
        issue: this.get('issue'),
        location: this.get('location'),
      };
      this.sendAction('newTicket', params);
    }
  }
});
