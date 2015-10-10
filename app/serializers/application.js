import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    serializeIntoHash: function(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
  }
});
