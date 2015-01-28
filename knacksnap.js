var Tasks = new Mongo.Collection("tasks");


if(Meteor.isClient) {
  

  /* Toolbar */

  Template.toolbar.events({
    "click .ks-toolbar-action-add": function(e) {
      e.stopPropagation();
      Tasks.insert({
        text: '', 
        createdAt: new Date(),
        isComplete: false
      });
    }
  });


  /* List */

  Template.list.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });


  /* Task */

  Template.task.events({
    'change .ks-task-value': function(e) {
      Tasks.update(this._id, {
        $set: {
          text: e.target.value
        }
      });
    },

    'click .ks-task-remove': function() {
      Tasks.remove(this._id);
    },

    'click .ks-task-complete': function() {
      Tasks.update(this._id, {
        $set: {
          isComplete: !this.isComplete
        }
      });
    }
  });

}