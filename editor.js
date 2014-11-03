(function($, window, document) {
  
  var $grid;
  var model = {
  	elements: [],
  	lines: []
  };
  var isSelectionMode = false;
  
  var mode = 'E'; // E for Element L for Line
  $.fn.grideditor = function(options){
  	$grid = $(this);
  	initGrid();
  	
  	
  	$grid.find('td').mousedown(function(event){
  		isSelectionMode = true;
		$(".highlight").removeClass("highlight"); // clear previous selection
		event.preventDefault(); // this prevents text selection from happening
		$(this).addClass("highlight");

	});
	
	$grid.find('td').mousemove(function(event){			
		if (isSelectionMode) {
			$(this).addClass("highlight");
		}
	});
	
	$(document).mouseup(function(ev) {
		isSelectionMode = false;
	});
  };
  
  function processNodeClick(node){
  	
  }
  
  function initGrid(){
		var table = "<table class='grid-table'>";  		
		for (var y = 0; y < 24; y++){
		    table += "<tr data-row='"+ y + "'>";
		    for (var x = 0; x < 24; x++){
		      table += "<td data-col='" + x + "' data-row='"+ y + "'>";
		      table += "X";
		      table += "</td>";
		    }
		    table += "</tr>";
		    
		}		  
		table += "</table>";		  
  		$grid.html(table);		
	}

})(jQuery, window, document);