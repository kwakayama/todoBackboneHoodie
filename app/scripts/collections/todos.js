/*global define*/

define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/todo'
], function (_, Backbone, Store, TodoModel) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({

        model: TodoModel,

        localStorage: new Backbone.LocalStorage('todos-backbone')

    });

    return TodosCollection;
});
