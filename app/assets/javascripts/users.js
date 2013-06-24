$(document).ready(function(){
	User = Backbone.Model.extend({});

	var user = new User();
	user.url = '/users/1.json'

	user.fetch({
		success : function(){
			// view = new Userview({ model : user })
			// $('ul').append(view.render());
			console.log(user.get("name"));
			console.log(user.get("address"));
		}
	});

	Users = Backbone.Collection.extend({});

	var users = new Users();

	users.url = '/users.json'

	users.fetch({
		success : function(){
			_.each(users.models, function(model){
				view = new Userview({ model : model });
				$('ul').append(view.render());
			});
			console.log(users);
		}
	});

	Userview = Backbone.View.extend({
		tagName : 'li',
		render : function(){
			return $(this.el).text(this.model.get('name'));
		}

	});
});