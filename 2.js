(function($){
  var ListView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'addItem',
      'click button#rm': 'rmItem'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'addItem');
      this.counter = 0; // 追加アイテム合計数
      this.render();
    },
    render: function(){
      $(this.el).append("<button id='add'>Add List item</button>");
      $(this.el).append("<button id='rm'>Remove List item</button>");
      $(this.el).append("<ul></ul>");
    },
    addItem: function(){
      this.counter++;
      $('ul', this.el).append("<li>hello world" + this.counter + "</li>");
    },
    rmItem: function(){
      if (this.counter <= 0) return;
      $('ul li:nth-child('+this.counter+')', this.el).remove();
      this.counter-=1;
    }
  });
  var ListView = new ListView();
})(jQuery);
