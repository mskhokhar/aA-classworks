const FollowToggleUtil = {
  followAJAX: function (followee_id) {
    return $.ajax({
      method: "POST",
      url: `/users/${followee_id}/follow`,
      dataType: 'json'
    });
  },
  unfollowAJAX: function (followee_id) {
    return $.ajax({
      method: "DELETE",
      url: `/users/${followee_id}/follow`,
      dataType: 'json'
    });
  }

};

module.exports = FollowToggleUtil;