/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'models/todo',
	'views/todo'
], function ($, _, Backbone, JST, TodoModel, TodoView) {
	'use strict';

	var TodolistView = Backbone.View.extend({
		el: '#todo-app',

	    template: JST['app/scripts/templates/todoList.ejs'],

	    events: {
	        'submit': 'createTodo'
	    },

	    initialize: function () {
	        this.render();

	        this.listenTo(this.collection, 'add', this.addTodoItem);
	        this.listenTo(this.collection, 'reset', this.addAllTodoItems);
	        // this.listenTo(this.collection, 'all', function  (argument,x,y,z) {
	        // 	debugger;
	        // });

	        // this.collection.fetch();
	        this.collection.fetch();
	        // this.collection.fetch({
         //        success: function(){
         //        	debugger;
         //        },
         //        error: function(){

         //        }
         //    });
	    },

	    render: function () {
	        this.$el.html(this.template());
	        return this;
	    },

	    createTodo: function (event) {
	        event.preventDefault();

	        var title = this.$('#new-todo').val().trim();

	        if (title) {
	            this.collection.create(new TodoModel({
	                title: title
	            }));

	            $('#new-todo').val('');
	        }
	    },

	    addTodoItem: function (todo) {
	        var view = new TodoView({ model: todo });
	        this.$('ul').append(view.render().el);
	    },

	    addAllTodoItems: function () {
	        this.collection.each(this.addTodoItem, this);
	    }
	});

	return TodolistView;
});
