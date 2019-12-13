const UserSearchUtil = require('./user_search_util.js');
class UserSearch{
  constructor($elObj){
    this.$el = $elObj;
    this.$input = $('input');
    this.$ul = $('users');

    this.$el.on('input', () => {
      this.handleInput();
    });
  }

  handleInput(){
    const success = () => {
      // this.followState = this.followState === "followed" ? "unfollowed" : "followed";
      this.followState = this.followState === "unfollowing" ? "unfollowed" : "followed";
      this.render();
    };

    const failure = () => {
      // $messages.text(errors.responseJSON);
      console.log("oops");
    };

    UserSearchUtil.searchAJAX(this.$input.val())
      .then(success, failure);

  }
}