// Code goes here

(function($, window, document) {
  
  
  $.fn.lightbox = function(options){
    
    function showDialog(){
      
      var defaults = {header: ''};
      options = $.extend({}, defaults, options);
      
      var content = '';
      if (options.content){
        if(typeof (options.content) ==='function'){
          content = options.content();
        }
        else content = options.content;
      }
      
      var $overlay = $("<div class='lightbox-overlay'></div>");
      var $container = $("<div class='lightbox-container'></div>");
      var $header = $("<div class='lightbox-header'><span class='lightbox-header-text'>" + options.header + "</span><span class='lightbox-control'>X</span></div>");
      var $content = $("<div class='lightbox-content'>" + content + "</div>");
      
      if (options.target){
        $content.append(options.target.children().clone());
      }
      
      if (options.targetId){
        $content.append($(options.targetId).children().clone());
      }
      
      $('body').append($overlay);
      $('body').append($container);
      
      $container.append($header);
      $container.append($content);
      
      // close listener
      $header.find('span.lightbox-control').on('click', function(){
        $('body').find('div.lightbox-overlay').remove();
        $('body').find('div.lightbox-container').remove();
      });
    }
    
    /*$(this).on('click', function(){
      showDialog();
    });
    */
    showDialog();
    
    
  };

})(jQuery, window, document);


// organigrid plugin
(function($, window, document) {
	var defaults = {nodeClick: function(node){}};
   	var $grid;
   	var model;
	$.fn.organigrid = function(options){
		options = $.extend({}, defaults, options);
		
		$grid = $(this);
		model = options.model || {};
		initGrid();
		
		initElements(model.elements || []);
		initLines(model.lines || []);
		initLegend(model.legend || []);
		
		// node click listener
		$(this).on('click', 'td.node', function(){			
			options.nodeClick($(this));
		});
		
	};
	
	
	function initGrid(){
		var table = "<table class='grid-table'>";  		
		for (var y = 0; y < 24; y++){
		    table += "<tr data-row='"+ y + "'>";
		    for (var x = 0; x < 24; x++){
		      table += "<td data-col='" + x + "' data-row='"+ y + "'>";
		      table += "&nbsp;";
		      table += "</td>";
		    }
		    table += "</tr>";
		    
		}
		  
		table += "</table>";
		  
  		$grid.html(table);		
	}
	
	function initElements(elts){
		 // add elts
		  $.each(elts, function(){
		    //alert(this.x);
		    var $cell = $grid.find("tr[data-row="+this.y+"] > td[data-col="+this.x+"]");
		    $cell.html(this.data);
		    $cell.attr('colspan',this.w).attr('rowspan',this.h);
		    $cell.addClass('node');
		    
		    // add detail data:
		    $cell.data('detail', this.detail);
		    $cell.data('detailHeader', this.detailHeader);
		    // find neighbours and kill em
		    $cell.next().remove();
		    var neigh = $cell.parent().next().find("td[data-col="+this.x+"]"); //;.remove().next().remove();
		    var nn = neigh.next();//neigh.remove();
		    neigh.remove();
		    nn.remove();
		    
		  });
	}
	
	function initLines(lines){
	  // add lines
	  $.each(lines, function(){
	    var $cell = $grid.find("tr[data-row="+this.y+"] > td[data-col="+this.x+"]");
	    $cell.addClass(this.borders);
	  });
	}
	
	function initLegend(legend){
		// add legend
	  $.each(legend, function(index){
	    //this.x = 24; // col for legend
	    var $cell = $grid.find("tr[data-row="+this.trow+"] > td:last");
	    $cell.html(this.data);
	    $cell = $grid.find("tr[data-row="+this.y +"] > td:last");
	    var $row = $cell.parent();
	  
	    
	    var count = this.h;
	    while (--count > 0){
	      if (index % 2 === 0) {
	        //$row.css('background-color', this.color);
	        $row.addClass('row-even');
	      }
	      else {
	        $row.addClass('row-odd');
	      }
	      $row = $row.next();
	    }
	    
	  });
	}
		 
})(jQuery, window, document);



/*
$(document).ready(function(){
	
  var gridModel = {};
  var elts = [];
  // gf und verwaltung
  elts.push({
    x:8, y:0, w:2, h:2, 
    data: "<div><img src='http://www.diehl-elektrik.de/images/mitarbeiter_neu.jpg'/><div class='txt'>Max Mustermann</div></div>",
    detail : "#detail-kd",
    detailHeader : "Mehr über KD"
  });
  elts.push({x:6, y:4, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:10, y:6, w:2, h:2, data: "<div>hello</div>"});
  
  // meister
  elts.push({x:6, y:10, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:12, y:10, w:2, h:2, data: "<div>hello</div>"});
  
  // unter meister rechts
  elts.push({x:10, y:14, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:13, y:14, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:16, y:14, w:2, h:2, data: "<div>hello</div>"});
  
  // unter meister links
  elts.push({x:1, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:4, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:7, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:10, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:13, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:16, y:18, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:19, y:18, w:2, h:2, data: "<div>hello</div>"});
  
  // lehrlinge
  elts.push({x:3, y:22, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:7, y:22, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:11, y:22, w:2, h:2, data: "<div>hello</div>"});
  elts.push({x:15, y:22, w:2, h:2, data: "<div>hello</div>"});
  
  
  
  var lines = [];
  lines.push({x:8, y:2, borders: 'br bb'});
  lines.push({x:7, y:3, borders: 'bl bt'});
  lines.push({x:8, y:3, borders: 'br'});
  lines.push({x:8, y:4, borders: 'br'});
  lines.push({x:8, y:5, borders: 'br'});
  lines.push({x:9, y:5, borders: 'bt'});
  lines.push({x:10, y:5, borders: 'bt br'});
  lines.push({x:8, y:6, borders: 'br'});
  lines.push({x:8, y:7, borders: 'br'});
  lines.push({x:8, y:8, borders: 'br'});
  lines.push({x:8, y:9, borders: 'bt'});
  lines.push({x:9, y:9, borders: 'bt'});
  lines.push({x:10, y:9, borders: 'bt'});
  lines.push({x:11, y:9, borders: 'bt'});
  lines.push({x:12, y:9, borders: 'bt br'});
  lines.push({x:7, y:9, borders: 'bt bl'});
  
  lines.push({x:12, y:12, borders: 'br bb'});
  lines.push({x:11, y:13, borders: 'bt bl'});
  lines.push({x:13, y:13, borders: 'bt br'});
  lines.push({x:14, y:13, borders: 'bt'});
  lines.push({x:15, y:13, borders: 'bt'});
  lines.push({x:16, y:13, borders: 'bt br'});
  //lines.push({x:2, y:2, borders: 'bb'});
  //lines.push({x:1, y:3, borders: 'br'});
  
  // unter meister links
  lines.push({x:6, y:12, borders: 'br'});
  lines.push({x:6, y:13, borders: 'br'});
  lines.push({x:6, y:14, borders: 'br'});
  lines.push({x:6, y:15, borders: 'br'});
  lines.push({x:6, y:16, borders: 'br'});
  lines.push({x:6, y:17, borders: 'bt'});
  lines.push({x:5, y:17, borders: 'bt'});
  lines.push({x:4, y:17, borders: 'bt br'});
  lines.push({x:3, y:17, borders: 'bt'});
  lines.push({x:2, y:17, borders: 'bt bl'});
  lines.push({x:7, y:17, borders: 'bt br'});
  lines.push({x:8, y:17, borders: 'bt'});
  lines.push({x:9, y:17, borders: 'bt'});
  lines.push({x:10, y:17, borders: 'bt br'});
  lines.push({x:11, y:17, borders: 'bt'});
  lines.push({x:12, y:17, borders: 'bt'});
  lines.push({x:13, y:17, borders: 'bt br'});
  lines.push({x:14, y:17, borders: 'bt'});
  lines.push({x:15, y:17, borders: 'bt'});
  lines.push({x:16, y:17, borders: 'bt br'});
  lines.push({x:17, y:17, borders: 'bt'});
  lines.push({x:18, y:17, borders: 'bt'});
  lines.push({x:19, y:17, borders: 'bt br'});
  
  // lehrlinge
  lines.push({x:4, y:20, borders: 'br bb'});  
  lines.push({x:3, y:20, borders: 'bb'});
  lines.push({x:2, y:20, borders: 'bb'});
  lines.push({x:1, y:20, borders: 'br'});
  lines.push({x:5, y:20, borders: 'bb'});
  lines.push({x:6, y:20, borders: 'bb'});
  lines.push({x:7, y:20, borders: 'bb br'});
  lines.push({x:8, y:20, borders: 'bb'});
  lines.push({x:9, y:20, borders: 'bb'});
  lines.push({x:10, y:20, borders: 'bb br'});
  lines.push({x:11, y:20, borders: 'bb'});
  lines.push({x:12, y:20, borders: 'bb'});
  lines.push({x:13, y:20, borders: 'bb br'});
  lines.push({x:14, y:20, borders: 'bb'});
  lines.push({x:15, y:20, borders: 'bb'});
  lines.push({x:16, y:20, borders: 'bb br'});
  lines.push({x:17, y:20, borders: 'bb'});
  lines.push({x:18, y:20, borders: 'bb'});
  lines.push({x:19, y:20, borders: 'bb br'});
  
  
  lines.push({x:3, y:21, borders: 'br'}); 
  lines.push({x:7, y:21, borders: 'br'});
  lines.push({x:11, y:21, borders: 'br'});
  lines.push({x:15, y:21, borders: 'br'});
  
  // legend
  var legend = [];
  legend.push({y:0, h:4, trow: 0, color: '#8aa', data: "Inhaber"});
  legend.push({y:3, h:7, trow: 4, color: '#a8a', data: "Büro"});
  legend.push({y:9, h:6, trow: 10, color: '#aa8', data: "Meister"});
  legend.push({y:13, h:5, trow: 14, color: '#bd4', data: "Abt. A"});
  legend.push({y:17, h:5, trow: 18, color: '#bcd', data: "Abt. B"});
  legend.push({y:21, h:4, trow: 22, color: '#dca', data: "Lehrlinge"});
  
  
  gridModel.elements = elts;
  gridModel.lines = lines;
  gridModel.legend = legend;
  
  
  var $grid = $('#grid');
  
  // prepare grid
  
  var table = "<table class='grid-table'>";
  
  for (var y = 0; y < 24; y++){
    table += "<tr data-row='"+ y + "'>";
    for (var x = 0; x < 24; x++){
      table += "<td data-col='" + x + "' data-row='"+ y + "'>";
      table += "&nbsp;";
      table += "</td>";
    }
    table += "</tr>";
    
  }
  
  table += "</table>";
  
  $grid.html(table);
  
  // add elts
  $.each(elts, function(){
    //alert(this.x);
    var $cell = $grid.find("tr[data-row="+this.y+"] > td[data-col="+this.x+"]");
    $cell.html(this.data);
    $cell.attr('colspan',this.w).attr('rowspan',this.h);
    $cell.addClass('node');
    
    // add detail data:
    $cell.data('detail', this.detail);
    $cell.data('detailHeader', this.detailHeader);
    // find neighbours and kill em
    $cell.next().remove();
    var neigh = $cell.parent().next().find("td[data-col="+this.x+"]"); //;.remove().next().remove();
    var nn = neigh.next();//neigh.remove();
    neigh.remove();
    nn.remove();
    
  });
  
  
  // add lines
  $.each(lines, function(){
    var $cell = $grid.find("tr[data-row="+this.y+"] > td[data-col="+this.x+"]");
    $cell.addClass(this.borders);
  });
  
  
  // add legend
  $.each(legend, function(index){
    //this.x = 24; // col for legend
    var $cell = $grid.find("tr[data-row="+this.trow+"] > td:last");
    $cell.html(this.data);
    $cell = $grid.find("tr[data-row="+this.y +"] > td:last");
    var $row = $cell.parent();
  
    
    var count = this.h;
    while (--count > 0){
      if (index % 2 === 0) {
        //$row.css('background-color', this.color);
        $row.addClass('row-even');
      }
      else {
        $row.addClass('row-odd');
      }
      $row = $row.next();
    }
    
  });
  
  
  //console.log($grid.html());
  // add spacer row for header and footer
  
  //var $tableRows = $grid.find('tr');
  //$tableRows.first().before("<tr><td class='row-odd'>&nbsp;</td></tr>");
  //$tableRows.last().after("<tr><td class='row-odd'>&nbsp;</td></tr>");
  
  // add click listener for element cells:
  
  $('#grid td.node').on('click', function(){
    var detail = $(this).data('detail');
    $(this).lightbox({targetId : detail, header: $(this).data('detailHeader')});
  });
  
});
*/