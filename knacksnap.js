var Tasks = new Mongo.Collection("tasks");


if(Meteor.isClient) {
  
  Template.toolbar.events({
    "click .ks-toolbar-action-add": function(e) {
      e.stopPropagation();
      Tasks.insert({
        text: '', 
        createdAt: new Date()
      });
    }
  });

  Template.list.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.task.events({
    'change .ks-task-value': function(e) {
      console.log('changing', e.target.value)
      Tasks.update(this._id, {
        $set: {
          text: e.target.value
        }
      });
    },

    'click .ks-task-remove': function() {
      Tasks.remove(this._id);
    }
  });

}