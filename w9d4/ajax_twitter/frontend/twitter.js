const FollowToggle = require('./follow_toggle.js');
const FollowToggleUtil = require('./follow_toggle_util.js');



$(() => {
  $(".follow-toggle").each(function(index) {
    new FollowToggle($(this));
  });
});


