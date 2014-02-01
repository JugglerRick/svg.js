SVG.G = function() {
  this.constructor.call(this, SVG.create('g'))
}

// Inherit from SVG.Container
SVG.G.prototype = new SVG.Container

//
SVG.extend(SVG.G, {
  // Move over x-axis
  x: function(x) {
    return x == null ? this.trans.x : this.transform('x', x)
  }
  // Move over y-axis
, y: function(y) {
    return y == null ? this.trans.y : this.transform('y', y)
  }
  // Move by center over x-axis
, cx: function(x) {
    return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2)
  }
  // Move by center over y-axis
, cy: function(y) {
    return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2)
  }
  
})

//
SVG.extend(SVG.Container, {
  // Create a group element
  group: function() {
    return this.put(new SVG.G)
  }
  
})