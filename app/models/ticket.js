import DS from 'ember-data';

export default DS.Model.extend({
  name_one: DS.attr(),
  name_two: DS.attr(),
  issue: DS.attr(),
  location: DS.attr(),
  time: DS.attr()
});
