import DS from 'ember-data';

export default DS.Model.extend({
    character: DS.belongsTo('character', {async: true}),
    age: DS.attr('number'),
    avatar: DS.attr('string'),
    avatar150: DS.attr('string'),
    averageDailySteps: DS.attr('number'),
    displayName: DS.attr('string'),
    distanceUnit: DS.attr('string'),
    encodedId: DS.attr('string'),
    gender: DS.attr('string'),
    timezone: DS.attr('string')
});
