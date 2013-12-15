/*global define*/

define([
    'jquery',
    'backbone',
    '../views/todoList',
    '../collections/todos'
], function ($, Backbone, TodoListView, TodosCollection) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({

		todoListView: new TodoListView({
            collection: new TodosCollection()
        }),

        routes: {
            '': 'defaultAction'
        },

        defaultAction: function () {
            // this.todoListView.render();
        }

    });

    return RouterRouter;
});
