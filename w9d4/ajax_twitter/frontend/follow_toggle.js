const FollowToggleUtil = require('./follow_toggle_util.js');
class FollowToggle {
  
  constructor($elObj) {
    this.$el = $elObj;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();

    this.$el.on('click', () => {
      let f_id = this.userId;
      this.handleClick(f_id);
      this.render();
    });

  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.prop('disabled', false);
      this.$el.html("Follow!");
    } else if (this.followState === "following" || this.followState === "unfollowing"){
      this.$el.prop('disabled', true);
    } else {
      this.$el.prop('disabled', false);
      this.$el.html("Unfollow!");

    }
  }

  

  handleClick(f_id){

    const success = () => {
      // this.followState = this.followState === "followed" ? "unfollowed" : "followed";
      this.followState = this.followState === "unfollowing" ? "unfollowed" : "followed";
      this.render(); 
    };

    const failure = () => {
      // $messages.text(errors.responseJSON);
      console.log("oops");
    };
  
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      FollowToggleUtil.followAJAX(f_id)
        .then(success, failure);
      
    } else {
      this.followState = "unfollowing";
      this.render();
      FollowToggleUtil.unfollowAJAX(f_id)
        .then(success, failure);
    }
    // this.render(); 
    
  }
}



module.exports = FollowToggle;