(function($){
  var ListView = Backbone.View.extend({
    el: $('body'),               // 'this.el' を既存の element に接続する(？)
    initialize: function(){
      _.bindAll(this, 'render'); // コンテキストが失われるのをこれで補う(？)
      this.render();             // 自動的に rendering されないのでこれで render する(？)
    },
    render: function(){
      $(this.el).append("<ul><li>hello world</li></ul>");
    }
  });

  var ListView = new ListView();
})(jQuery);
