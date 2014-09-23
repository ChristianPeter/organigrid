// Code goes here

$(document).ready(function(){
  
  
  var elts = [];
  // gf und verwaltung
  elts.push({
    x:8, y:0, w:2, h:2, 
    data: "<div><img src='http://us.cdn001.fansshare.com/photos/veronicamars/veronica-mars-hbic-characters-583939517.jpg'/><div class='txt'>Veronica Mars</div></div>",
    detail : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"
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
  legend.push({y:9, h:9, trow: 10, color: '#aa8', data: "Meister"});
  legend.push({y:17, h:5, trow: 18, color: '#bcd', data: "XYZ"});
  legend.push({y:21, h:4, trow: 22, color: '#dca', data: "Lehrlinge"});
  var $grid = $('#grid');
  
  // prepare grid
  
  var table = "<table id='grid-table'>";
  
  for (var y = 0; y < 25; y++){
    table += "<tr data-row='"+ y + "'>";
    for (var x = 0; x < 24; x++){
      table += "<td data-col='" + x + "' data-row='"+ y + "'>";
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
  $.each(legend, function(){
    //this.x = 24; // col for legend
    var $cell = $grid.find("tr[data-row="+this.trow+"] > td:last");
    $cell.html(this.data);
    $cell = $grid.find("tr[data-row="+this.y +"] > td:last");
    var $row = $cell.parent();
  
    
    var count = this.h;
    while (--count > 0){
      $row.css('background-color', this.color);
      $row = $row.next();
    }
    
  });
  
  // add click listener for element cells:
  
  $('#grid td.node').on('click', function(){
    //alert('click');
    var detail = $(this).data('detail');
    alert(detail);
  });
  
});