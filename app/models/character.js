import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    level: DS.attr('number'),
    totalSteps: DS.attr('number'),
    fitbitSteps: DS.attr(),
    user: DS.belongsTo('user', {async: true})
});
