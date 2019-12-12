class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $inputEl = $('.square');
    $inputEl.on('click', (e) => {
      // console.log(e.currentTarget);
      // alert($(e.currentTarget).data("pos"));
      this.game.playMove($(e.currentTarget).data("pos"));
      this.makeMove($(e.currentTarget));
    });
  }

  makeMove($square) {
    let that = this.game;
    $square.html(this.game.currentPlayer);
    $square.addClass("square-clicked");
    if (this.game.isOver()) {
      const $inputEl = $('.square');
      $inputEl.off("click");
      if (this.game.winner() === null) {
        $(`li`).addClass("square-lost");
      } else {
          $("li").addClass("square-lost");
          $(`li:contains(${this.game.winner()})`).addClass("square-won");
          $(`li:contains(${this.game.winner()})`).removeClass("square-lost");
      
      }
      setTimeout(() => {
        alert(`Who won? Player ${that.winner().toUpperCase() || "NOBODY"}!!!`);
      }, 20);
    }
  }

  setupBoard() {
    let $grid = this.$el;
    // $grid.append("<ul class='grid'></ul>");
    // for (let i = 0; i < 9; i++) {
    //   $('.grid').append(`<li id='${i}' class='square'></li>`);
    // }
    $grid.append("<ul class='grid'></ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li class='square'></li>");
        $li.data("pos", [i,j]);
        // console.log($li.data());
        $('.grid').append($li);
      }
    }


    return $grid;
  }
  
  
}


module.exports = View;
