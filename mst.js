function MST(graph, time) {
	this.nodes 		= graph.nodes.slice();
	console.log(this.nodes);
	this.graph 		= graph;
	this.interval 	= null;
	this.done 		= false;
	this.time 		= time || 300;


	showCount('STARTING MST (RECURSIVE PRIM) >')
	this.prim();
}

MST.prototype.prim = function() {

	var that = this;
	var Q = this.nodes;
	if(Q.length == 0) {
		this.done = true;
		return;
	}

	showCount('<br/> Applying PRIM ----->');
	var u = getClosestNode(Q);
	removeFromArray(Q, u);
	nodeNumber++;

	showCount('Reached Node > ' + nodeNumber + ' *********');
	showCount('Moving to closest node');

	for(var i = 0; i < Q.length; ++i) {
		var v = Q[i];
		var length = getLength(u,v);
		if(v.key == null || v.key > length) {
			countUp();
			v.parent = u;
			v.key = length;
		}
	}
	showCount('Recalculated edges from here');

	this.graph.draw();
	this.graph.drawNode(u, "#00FF00", 5);

	setTimeout(function () {
		that.prim();
	}, this.time)

};

function getClosestNode(nodes) {
	var j = -1;
	var min = null;
	for(var i = 0; i < nodes.length; ++i) {
		if(min == null || nodes[i].key < min) {
			j = i;
			min = nodes[i].key;
			countUp();
		}
	}
	return nodes[j];
};