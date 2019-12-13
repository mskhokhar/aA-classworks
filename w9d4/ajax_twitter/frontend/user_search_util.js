const UserSearchUtil = {
  searchAJAX: function (qval) {
    return $.ajax({
      method: "GET",
      url: `/users/search`,
      data: {query: qval},
      dataType: 'json'
    });
  }
};

module.exports = UserSearchUtil;