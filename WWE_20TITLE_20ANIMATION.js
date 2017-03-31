(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/WWE_20TITLE_20ANIMATION_atlas_.png", id:"WWE_20TITLE_20ANIMATION_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"WWE_20TITLE_20ANIMATION_atlas_", frames: [[1202,0,600,400],[1202,402,400,400],[0,677,1200,675],[0,1354,900,506],[902,1354,900,506],[0,0,1200,675]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["WWE_20TITLE_20ANIMATION_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(340,-4,0.111,0.111);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(-7,-4,0.141,0.141);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AglBBIAAgLQAAgVABgHQACgJAFAAQAFAAABAEIACAGIABAHQACAKANAAQATAAAAgNQAAgGgEgEQgEgEgIgDIgNgFQgOgFgGgGQgGgIAAgPQAAgVANgNQANgOAUAAQAMAAALAHQACgIAFAAQAHAAAAAKIAAAHIgBAHIAAACIgBALQgCAEgEAAQgGAAgCgHIgBgLQgKgHgLAAQgMAAgJAJQgJAJAAAOQAAAMAGAGQAEADANAFIAPAEQAIAEAEAFQAGAHAAAMQAAAMgKAHQgJAHgOAAQgMAAgHgGIgBAPQAAAIgHAAQgHAAAAgKg");
	this.shape.setTransform(322,35.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ag2A7IgBgMQAAgoAKgvQADgNACgGQAEgGAGAAQACAAADAEIAFAMQAXA2AdAkIAAgGQAAgsAHgnQACgKACgEQACgEAEAAQAHAAAAAJIgCAPIgEAaQgCAdAAATIAAAOIAAAKQABAKgJAAQgFAAgFgFQgFgEgIgLQgagmgVgtQgHAcgCAuIgBAXQgBAHgGAAQgGAAgBgIg");
	this.shape_1.setTransform(310.6,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgrAyQgQgSAAgeQAAgcAOgUQAPgUAeAAQAbAAARASQAQASAAAfQAAAggQARQgRASgcAAQgaAAgQgSgAghglQgLAOAAAYQAAAYANAOQAMAOATAAQAUAAAMgNQANgOAAgYQAAgZgMgOQgMgOgVgBQgVABgMAOg");
	this.shape_2.setTransform(297.2,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgQBBQgHgDAAgFQAAgHAHAAIAFABIAGABQADgdAAgTQAAgegIgaIgHACIgFACQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgCgCAAgDQAAgKAXAAQAMAAAJAEQAIAEAAAGQAAAGgEAAIgGgCIgKgCQAIAaAAAcQAAATgEAeIAJgEIAFgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAAGgHAEQgHADgNAAQgLAAgHgCg");
	this.shape_3.setTransform(287.5,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AgeA6IAFghQABgMAAgRQAAgagBgSQgFADgGAGQgFAEgDAAQgDAAgCgCQgCgCAAgDQAAgDAGgGQARgRAcAAQAYAAAOAMQAOALAAATQAAAUgKAKQgLAMgRAAQgKAAgFgEQgHgDAAgEIAAgBQAAgDACgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAFABQAFACAFAAQAKAAAHgGQAGgIAAgNQAAgMgKgIQgKgIgQAAIgLABIABAgIgBAqQgBAXgEARQgCAHgFAAQgIAAAAgLg");
	this.shape_4.setTransform(279,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAvA/IAAgIIACgTIABgdQABgYgFgfQgSASgOAjIgEAQQgDAFgFABQgDgBgCgEIgEgNQgJgcgZgbQgIAbAAArIAAAQIABANQAAALgIAAQgFAAgBgHQgCgFAAgSQAAgwAHggQADgLADgEQACgFAFAAQAEAAAHAHQAMANAIAKQALAQAFATQAOggAOgTQANgSAHAAQAEAAABADIADAIQAGAYAAAxQAAAdgCASQgCAKgHAAQgHAAAAgIg");
	this.shape_5.setTransform(266.1,34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AAzA8IgNgaQgcgBghgMQgdAdgJAAQgEAAgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDAEgEIALgHIAPgOQgMgFAAgGQAAgDABgBQACgBADAAIAHABIAJADQAcglADgRIACgNQACgEAFAAQAEAAADAEIABAGIABAIQAHAcAUApIAHAAIACgBQAJAAgBAIQAAAHgIAAIgCAAIAKASQAFAIgBADQAAAHgGAAQgGAAgGgJgAgNAJQAUAIAYACQgMgYgIgcQgLAYgNASg");
	this.shape_6.setTransform(250.8,34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AguBAQgCgDAAgHIABgzQgFgCAAgCQAAgFAGgBIADgvQABgJAHAAQAIAAAAAIIgBAOIgDAhIAaABQAUAAAVgCIABgvQABgKAHAAQAIAAAAAKIgBATIgBArIABAiIAAAOQgBALgHAAQgEAAgDgDIgBgIIAAgRIAAggIgZAAIgrgBIgBAhIABAKIAAAGQAAAIgCADQgCADgEAAQgEAAgCgDg");
	this.shape_7.setTransform(238.1,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AgnAxQgPgRAAgfQAAgbAPgTQARgUAaAAQAYAAAPAMQAGAFAAAEQAAADgCACQgDACgDABQgCgBgDgCQgQgMgQAAQgTAAgMAPQgMAPAAAWQAAAyApAAQAZAAALgMIAFgGQACgDADAAQADAAACACQACACAAADQAAAHgKAIQgQAOgbAAQgaAAgPgRg");
	this.shape_8.setTransform(225.5,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgbA4IACgQQABgUABgUQAAgfgEgPIgMABQgHAAgBgHQAAgKApAAQAZAAASADQALADAAAGQAAAGgJAAIgQgBQgSgCgRAAQADAMAAAWIAIAAIAQgBIAIgBQAJAAAAAIQAAAGgNABIgTAAIgJAAQgBAkgCALQgCAQgGAAQgHAAAAgHg");
	this.shape_9.setTransform(210.7,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AgrAyQgQgSAAgeQAAgcAOgUQAPgUAeAAQAbAAARASQAQASAAAfQAAAggQARQgRASgcAAQgaAAgQgSgAghglQgLAOAAAYQAAAYANAOQAMAOATAAQAUAAAMgNQANgOAAgYQAAgZgMgOQgMgOgVgBQgVABgMAOg");
	this.shape_10.setTransform(199.7,34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgHA3IABgTIABglIAAgwQgbAAgLAHQgCAOgHAAQgHAAAAgJQAAgPAKgFQAPgGAigBQA7AAABAPQgBADgCADQgCACgCAAIgFgBIgEgCQgJgDgcgCIABAxQAAAegBAVQgBAIgCACQgCAEgCAAQgHAAAAgKg");
	this.shape_11.setTransform(183.1,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AguBAQgCgDAAgHIABgzQgFgCAAgCQAAgFAGgBIADgvQACgJAHAAQAGAAABAIIgBAOIgDAhIAaABQAUAAAVgCIABgvQABgKAHAAQAIAAAAAKIgBATIgBArIABAiIAAAOQgBALgHAAQgFAAgCgDIgBgIIAAgRIAAggIgZAAIgrgBIgBAhIABAKIAAAGQAAAIgCADQgCADgEAAQgFAAgBgDg");
	this.shape_12.setTransform(170.9,34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgtAxQgOgQAAgcQAAggASgSQASgTAdAAQARAAAMAFQALAFAAAGQAAACgCADQgDACgCAAIgFgCIgFgCQgLgFgLAAQgXAAgOAPQgNAOAAAaQAAAWAJALQAJAMAQABQANAAAJgMQAJgLAFgXIgMgCQgFAAgHACIgGACQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDAAgCQAAgDAIgEQAGgCAOAAQARAAANAFQALAEAAAGQAAACgCACQgDACgCABIgGgDIgGgDIgBAUQAAAMABAKIACAIQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCABgDAAQgIABgCgXQgMAYgYAAQgWAAgNgQg");
	this.shape_13.setTransform(158.5,34.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AgQBBQgHgDAAgFQAAgHAHAAIAFABIAGABQADgdAAgTQAAgegIgaIgHACIgFACQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgCgCAAgDQAAgKAXAAQAMAAAJAEQAIAEAAAGQAAAGgEAAIgGgCIgKgCQAIAaAAAcQAAATgEAeIAJgEIAFgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAGgHAEQgHADgNAAQgLAAgHgCg");
	this.shape_14.setTransform(149.1,34.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("Ag2A7IgBgMQAAgoAKgvQADgNADgGQADgGAGAAQACAAADAEIAFAMQAXA2AeAkIAAgGQgBgsAIgnQABgKACgEQADgEADAAQAHAAAAAJIgCAPIgDAaQgDAdgBATIABAOIABAKQgBAKgHAAQgGAAgGgFQgFgEgHgLQgZgmgWgtQgHAcgCAuIgBAXQgBAHgGAAQgFAAgCgIg");
	this.shape_15.setTransform(139.6,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{rotation:0,x:-7,y:-4}},{t:this.instance,p:{rotation:0,x:340,y:-4}}]},35).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{rotation:90,x:270.3,y:-207}},{t:this.instance,p:{rotation:90,x:270.7,y:140}}]},14).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{rotation:0,x:-7,y:-4}},{t:this.instance,p:{rotation:0,x:340,y:-5}}]},10).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{rotation:0,x:-7,y:-4}},{t:this.instance,p:{rotation:0,x:340,y:-5}}]},15).wait(4));

	// TITLE 2
	this.instance_2 = new lib.Bitmap5();
	this.instance_2.setTransform(291,6,0.089,0.089);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({_off:true},15).wait(43));

	// BILL
	this.instance_3 = new lib.Bitmap4();
	this.instance_3.setTransform(261,-1,0.09,0.09);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag4CmQgUgLgKgQQgKgQgDgSQgCgRAAgjIAAhjQAAgwAFgXQAFgWAZgSQAZgSAoAAQAkgBAaARQAaAPAHAXQAIAVAAAqIAAAPIhYAAIAAgfQAAgegDgHQgCgHgJAAQgHAAgDAHQgDAFAAAbIAAChQAAAWADAIQADAHAHAAQAKAAADgIQAEgIAAgYIAAgoIgRAAIAAgyIBmAAIAAC0Ig3AAIgIgYQgKAQgNAIQgOAHgRAAQgWAAgTgKg");
	this.shape_16.setTransform(283.3,28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQCpIAAhwQAAgcgEgHQgEgGgRAAIAACZIhYAAIAAlRIA+AAQA9AAAWAEQAWAFAOAUQAOAUAAArQAAAogKAOQgJAOgdACQAaAGAJAKQAJAKACAKQACAJAAApIAABZgAgJgiQANgBAGgEQAGgEAAgXIAAgSQAAgQgGgFQgFgFgOgBg");
	this.shape_17.setTransform(260,28.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhLCpIAAlRICRAAIAABDIg7AAIAABBIA4AAIAAA/Ig4AAIAABLIBBAAIAABDg");
	this.shape_18.setTransform(239.9,28.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhlCpIAAlRIBYAAQAngBAWAHQAWAGANAUQANAVAAArQAAAegJAMQgJALgcAHQAfAHAKAOQAMAQAAAhIAAAgQgBAigHAQQgJARgQAHQgSAFg0AAgAgNBvQAQAAAGgGQAFgFAAgVIAAgfQAAgWgFgEQgEgFgSgBgAgNgiIAJgBQALAAADgGQAEgHAAgeQAAgQgDgGQgDgHgEgCQgEgBgNgBg");
	this.shape_19.setTransform(218.8,28.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhlCpIAAlRIBDAAQA9AAAXAFQAWAHAMANQAMANADARQADAQAAAwIAAB1QAAAugEAQQgFAPgKAJQgLAIgQAEQgQADgfAAgAgNBvQASAAAEgHQAFgIgBgiIAAiCQABgXgCgGQgCgHgFgDQgFgDgNgBg");
	this.shape_20.setTransform(195,28.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhGCpIAAlRIBXAAIAAEOIA2AAIAABDg");
	this.shape_21.setTransform(175.5,28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvCoQgWgJgNgSQgOgSgCgVQgDgVAAg0IAAg5QAAgzADgVQACgVANgSQANgRAVgKQAWgJAbAAQAbgBAWAKQAVAJAOARQANASACAVQADAVAAA0IAAA5QAAAzgCAWQgDAUgNASQgMARgWAKQgWAJgcAAQgaAAgVgIgAgIhwQgEAEAAAbIAACdQAAAdACAHQADAHAHAAQAIAAADgIQACgIAAgeIAAiaQAAgYgCgGQgDgHgIAAQgFAAgDAGg");
	this.shape_22.setTransform(154.9,28.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag4CmQgUgLgKgQQgKgQgDgSQgCgRAAgjIAAhjQAAgwAFgXQAFgWAZgSQAZgSAoAAQAkgBAaARQAaAPAHAXQAIAVAAAqIAAAPIhYAAIAAgfQAAgegDgHQgCgHgJAAQgHAAgDAHQgDAFAAAbIAAChQAAAWADAIQADAHAHAAQAKAAADgIQAEgIAAgYIAAgoIgRAAIAAgyIBmAAIAAC0Ig3AAIgIgYQgKAQgNAIQgOAHgRAAQgWAAgTgKg");
	this.shape_23.setTransform(131.2,28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhGCpIAAlRIBXAAIAAEOIA2AAIAABDg");
	this.shape_24.setTransform(104.4,28.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhGCpIAAlRIBXAAIAAEOIA2AAIAABDg");
	this.shape_25.setTransform(88,28.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgrCpIAAlRIBXAAIAAFRg");
	this.shape_26.setTransform(72.9,28.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhmCpIAAlRIBZAAQAogBAVAHQAVAGAOAUQANAVAAArQAAAegJAMQgKALgbAHQAeAHAMAOQALAQgBAhIAAAgQABAigJAQQgHARgSAHQgRAFg0AAgAgNBvQARAAAFgGQAFgFAAgVIAAgfQAAgWgEgEQgFgFgSgBgAgNgiIAJgBQALAAAEgGQADgHAAgeQAAgQgDgGQgDgHgFgCQgDgBgNgBg");
	this.shape_27.setTransform(55.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},20).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},14).to({state:[]},1).wait(43));

	// GOLDBERG
	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(375,-8,0.25,0.17);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(14).to({_off:true},1).wait(43));

	// BRAY
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(375,-2,0.155,0.155);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:true},1).wait(58));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqCpIAAkOIg1AAIAAhDIC/AAIAABDIg1AAIAAEOg");
	this.shape_28.setTransform(244.3,28.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgqCpIAAkOIg1AAIAAhDIC/AAIAABDIg1AAIAAEOg");
	this.shape_29.setTransform(224.5,28.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVCpIgFg8IgdAAIgGA8IhbAAIAtlRIB+AAIAyFRgAgPAwIAdAAQgHg4gHhVQgLBggEAtg");
	this.shape_30.setTransform(206,28.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgpCpIAAh6Ig+jXIBRAAQATBjADAjQAFg3ARhPIBSAAIhBDXIAAB6g");
	this.shape_31.setTransform(187.1,28.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAZCpQgPhOgKhiIgYCwIhuAAIgolRIBWAAIAJB2IAKBxQAEhXAUiQIBaAAIAJBvIAKCAQAIh6ARh1IBWAAIgoFRg");
	this.shape_32.setTransform(158.6,28.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgpCpIAAh6Ig+jXIBRAAQATBjADAjQAFg3ARhPIBSAAIhBDXIAAB6g");
	this.shape_33.setTransform(123.3,28.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVCpIgFg8IgdAAIgGA8IhbAAIAtlRIB+AAIAyFRgAgPAwIAdAAQgHg4gHhVQgLBggEAtg");
	this.shape_34.setTransform(104.8,28.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAQCpIAAhwQAAgcgEgHQgEgGgRAAIAACZIhYAAIAAlRIA+AAQA9AAAWAEQAWAFAOAUQAOAUAAArQAAAogKAOQgJAOgdACQAaAGAJAKQAJAKACAKQACAJAAApIAABZgAgJgiQANgBAGgEQAGgEAAgXIAAgSQAAgQgGgFQgFgFgOgBg");
	this.shape_35.setTransform(82.4,28.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhlCpIAAlRIBYAAQAngBAWAHQAWAGANAUQANAVAAArQAAAegJAMQgJALgcAHQAfAHAKAOQAMAQAAAhIAAAgQgBAigHAQQgJARgQAHQgSAFg0AAgAgNBvQAQAAAGgGQAFgFAAgVIAAgfQAAgWgFgEQgEgFgSgBgAgNgiIAJgBQALAAADgGQAEgHAAgeQAAgQgDgGQgDgHgEgCQgEgBgNgBg");
	this.shape_36.setTransform(59.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},19).to({state:[]},1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279,28,423,62);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;