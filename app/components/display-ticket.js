import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin: false,
  bothNames: Ember.computed('ticket.name_one', 'ticket.name_two', function(){
    // console.log("fooooo");
    return this.get('ticket.name_one') + ' && ' + this.get('ticket.name_two');
  }),
  timestamp: Ember.computed('ticket.date', function() {
    var min = (this.get('ticket.time') - +new Date()) / 1000 / 60;
    return Math.floor(min) * -1 + "m";
  })
});
