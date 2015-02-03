var Snaps = new Mongo.Collection("snaps");


if(Meteor.isClient) {
  

  /* Toolbar */

  Template.toolbar.events({
    "click .ks-toolbar-action-add": function(e) {
      e.stopPropagation();
      Snaps.insert({
        type: 'task',
        text: '', 
        createdAt: new Date(),
        isComplete: false
      });
    }
  });


  /* List */

  Template.list.helpers({
    snaps: function() {
      return Snaps.find({}, {sort: {createdAt: -1}});
    }
  });


  /* Task */

  Template.task.events({
    'change .ks-task-value': function(e) {
      Snaps.update(this._id, {
        $set: {
          text: e.target.value
        }
      });
    },

    'click .ks-task-remove': function() {
      Snaps.remove(this._id);
    },

    'click .ks-task-complete': function() {
      Snaps.update(this._id, {
        $set: {
          isComplete: !this.isComplete
        }
      });
    }
  });

}