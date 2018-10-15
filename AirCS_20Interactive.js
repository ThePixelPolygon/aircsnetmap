(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WindowRect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("EhK4AF7IAAr1MCVxAAAIAAL1g");
	this.shape.setTransform(-0.1,-241.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhK5AlHMAAAhKNMCVzAAAMAAABKNg");
	this.shape_1.setTransform(0,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.WindowRect, new cjs.Rectangle(-479.4,-279.2,958.9,558.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B40000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#790000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_2.setTransform(0,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_3.setTransform(0,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiqDzIAAnlIFVAAIAAHlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-24.3,34.3,48.6);


(lib.SQTRSquitterLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2DB5E2").s().p("AGgL3IAAkWIkWAAIAAEWIiKAAIAAq2IGgAAIAAEVICKAAIAAGhgACKFWICLAAIAAiLIiLAAgAmsL3IAAosIh9AAIAAiKIGgAAIAACKIiZAAIAAIsgAEVhAIAAkWIkVAAIAAmgIGgAAIAAIsICKAAIAACKgACKnhICLAAIAAiKIiLAAgAophKIAAiKIEWAAIAAiCIkWAAIAAmgIGgAAIAACLIkVAAIAACKIEVAAIAAGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-75.9,110.9,151.8);


(lib.baselinetrain24pxsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baseline-train-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoBfIgUgUIglAAIgUAUIgWAAIAAgFIAPgPQgPAAgKgKQgKgLAAgOIAAheQAAgXAZgKQATgHAjAAQAnAAARAHQAYAJAAAYIAABeQAAAOgKALQgLAKgOAAIAPAPIAAAFgAAjAeQgFAEAAAGQAAAHAFAEQAEAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgFgGAAQgGAAgEAFgAg2AeQgFAEAAAGQAAAHAFAEQAEAEAGAAQAGAAAFgEQAEgEAAgHQAAgGgEgEQgFgFgGAAQgGAAgEAFgAAKgOIAyAAIAAgoIgyAAgAg7gOIAyAAIAAgoIgyAAg");
	this.shape.setTransform(12,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,2,16,19);


(lib.baselinelocal_airport24pxsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baseline-local_airport-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABaIgiAKIAAgPIAUgPIAAg3IhQAZIAAgUIBQgxIAAg3QAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGIAAA3IBQAxIAAAUIhQgZIAAA3IAUAPIAAAPg");
	this.shape.setTransform(11.5,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,19,20);


(lib.baselineinfo24pxsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baseline-info-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGBHQgdgeAAgpQAAgpAdgdQAegdAoAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAQgoAAgegdgAgJAyIATAAIAAg7IgTAAgAgJgdIATAAIAAgUIgTAAg");
	this.shape.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,20,20);


(lib.CommonStationEOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.CommonInterchange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.awwitsacutelittleheart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgAsAseQhWiah6iJQhnhzjgjFQjhjEjUihQpynYjOimQjLijkAjsQnWmwjUnMQjTnMABpOQAAkfAaiXQAbiWBRiqQCJkgDIjUQDIjVEBiDQDOhoB2gfQCjgrEbgCQEogCCXAqQBrAdDSBzQDkB9DLDoQDKDnAxC+IAoCdIBijYQDKm6GXjxQF/jiHOAFQHOAFGKDqQGkD5DhG/QBICPAqDcQAoDTAHDzQANINiDFhQiqHLltGPQltGQrkIaQm2E+n0HMQjGC3iLCPQiHCJgTAnQgWAsgHADIgBAAQgIAAgSgfg");
	this.shape.setTransform(0,0,0.103,0.103);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-29.6,66,59.3);


(lib.RedEOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.MagentaLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.LavenderInterchange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E8EDE").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E8EDE").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.LavenderEOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E8EDE").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.GreenLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.GreenEOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.BrownLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#492C00").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#492C00").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.BlueLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.BlueEOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.AirCSLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AHYJNIAArCIHXAAIAADrIjrAAIAAHXgAAGJNIAArCIDsAAIAALCgAnXJNIAAjrIjsAAIAADrIjrAAIAAuuILDAAIAAOugArDB2IDsAAIAAjrIjsAAgAAGlhIAAjrIDsAAIAADrg");
	this.shape.setTransform(-94.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AB1JNIAAjrIHXAAIAAjsInXAAIAArCILDAAIAADrInXAAIAADsIHXAAIAALCgAs3JNIAAyZILDAAIAADrInYAAIAALDIHYAAIAADrg");
	this.shape_1.setTransform(106.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.4,-58.9,376.9,117.9);


(lib.Accent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FF0000"],[0.212,1],1096,804.3,1210.9,689.2).s().p("Ehj7AIuIAAxbMDH3AAAIAARbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.6,-55.8,1279.2,111.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAuQAIgGAEgMQAEgMAAgPIAAgBQAAgJgCgKQgCgIgDgHQgEgIgFgDIACgFQAGADAFAIQAGAIADAKQADAKAAALQAAALgDAKQgDAKgGAIQgFAJgGADg");
	this.shape.setTransform(94.4,77.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAJAAAFAEQAFAFAAAHIgJAAQAAgDgCgDQgDgDgFAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgFgBgFgCg");
	this.shape_1.setTransform(90.3,77.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_2.setTransform(86.5,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(84.1,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_4.setTransform(80.1,77.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_5.setTransform(75.6,76.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_6.setTransform(71.6,77.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_7.setTransform(65.9,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_8.setTransform(58.2,77.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_9.setTransform(54.1,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_10.setTransform(49.3,77.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAIQADgDAEgCQAFgDAFAAQASAAAAASIAAAjg");
	this.shape_11.setTransform(42.1,77.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_12.setTransform(33.7,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_13.setTransform(28.9,77.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgFQAAgIAEgGQADgEAJAAIAGABIgBAHIgEAAQgFAAgDACQgBADAAAFIAAAFIAKAAIAAAHIgKAAIAAAtg");
	this.shape_14.setTransform(24.5,76.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_15.setTransform(17.4,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_16.setTransform(11.8,77.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(7.7,76.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_18.setTransform(4.7,76.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_19.setTransform(0.5,77.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_20.setTransform(-4,76.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAIAAAGAEQAFAFABAHIgJAAQAAgDgEgDQgDgDgEAAQgFAAgCADQgDACAAADQAAADADACIAIADIALADQAEABACADQACAEAAAEQAAAHgGAEQgFAEgJABQgFgBgGgCg");
	this.shape_21.setTransform(-8.1,77.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AALAmIgRgZIgGAGIAAATIgJAAIAAhLIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAgg");
	this.shape_22.setTransform(-15.3,76.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_23.setTransform(-20.7,77.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(-24.6,76.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_25.setTransform(-27.1,76.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_26.setTransform(-30.8,77.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAnQgLgRAAgWQAAgKADgLQADgKAGgIQAEgJAHgCIACAFQgHAFgFAMQgEALAAAOIAAADQAAATAGAOQAEAIAGAFIgCAFQgHgDgFgJg");
	this.shape_27.setTransform(-34.9,77.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_28.setTransform(85.5,60.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgKgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgIAJg");
	this.shape_29.setTransform(76.5,60.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgDgCg");
	this.shape_30.setTransform(70,58.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_31.setTransform(65.1,59.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_32.setTransform(58.4,60.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_33.setTransform(51.2,59.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTA2QgKgFgGgHQgFgIAAgKIAPAAQAAALAHAFQAIAHAMAAQALAAAHgGQAGgFAAgHQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgIAAgMQAAgNALgKQALgIAQgBQALABAKAEQAJAFAFAHQAFAJAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAEAAAKQAAAGAGAFQAGAFANAEQAOAEAIAEQAIAFAEAGQAEAHAAAIQAAAOgLAIQgKAJgSgBQgLABgKgFg");
	this.shape_34.setTransform(44.1,58.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUArIAAhTIAPAAIAAAJQAGgLANAAIAHABIAAANIgIAAQgNAAgFAMIAAA7g");
	this.shape_35.setTransform(33.1,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_36.setTransform(25.8,60.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAqIgfhTIAPAAIAVBAIAVhAIAOAAIgfBTg");
	this.shape_37.setTransform(17.6,60.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_38.setTransform(9.1,60.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAoQgHgDgFgHQgEgGgBgIIAPAAQAAAIAFAEQAGAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgKgCgHgDQgGgDgDgEQgDgFAAgGQgBgKAJgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgOAAQAAgGgGgFQgFgEgIAAQgHAAgEADQgEAEAAAFQAAAGAEACQAEADAKACQALADAGADQAHADADAEQAEAFAAAHQgBALgIAHQgJAHgPAAQgJAAgIgEg");
	this.shape_39.setTransform(0.4,60.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGABgIIAOAAQAAAIAGAEQAFAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgLgCgGgDQgHgDgDgEQgCgFAAgGQAAgKAIgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgPAAQAAgGgEgFQgGgEgIAAQgGAAgFADQgEAEAAAFQAAAGAEACQAEADAKACQAKADAIADQAGADAEAEQACAFAAAHQABALgKAHQgJAHgOAAQgJAAgIgEg");
	this.shape_40.setTransform(-7.8,60.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_41.setTransform(-16.5,60.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_42.setTransform(-23.3,60.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAsQgMgOAAgZIAAgKQAAgPAGgNQAFgLALgHQAKgGANgBQASAAALALQALAKACASIgPAAQgCgOgHgGQgGgGgMAAQgOAAgIALQgIAKAAAUIAAAKQAAASAIAMQAIAKANABQAMAAAHgHQAGgFADgOIAPAAQgCASgMAKQgLAJgSAAQgUAAgMgOg");
	this.shape_43.setTransform(-31.6,58.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_44.setTransform(9.3,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbAgQgLgMAAgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_45.setTransform(0.3,1.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgCgDAAgDQAAgEACgCQADgDADAAQAFAAACADQABACAAAEQAAADgBADQgCACgFAAQgDAAgDgCg");
	this.shape_46.setTransform(-6.2,0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_47.setTransform(-11.1,0.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQAAgHgFgFQgFgEgIAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQADgGAJgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgCgJQgLALgNAAQgMAAgIgHgAgUARQAAAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgaAAAAAQg");
	this.shape_48.setTransform(-17.8,1.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_49.setTransform(-25,0.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTA2QgKgEgGgIQgFgIAAgKIAPAAQAAAKAHAHQAIAFAMABQALgBAHgEQAGgFAAgIQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgJAAgMQAAgMALgJQALgKAQABQALAAAKAEQAJAFAFAIQAFAIAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAFAAAIQAAAIAGAEQAGAFANAEQAOAEAIAEQAIAEAEAHQAEAGAAAJQAAAOgLAJQgKAIgSAAQgLgBgKgEg");
	this.shape_50.setTransform(-32.1,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_51.setTransform(43.5,-66);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_52.setTransform(34.5,-64.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_53.setTransform(25.8,-66.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_54.setTransform(17,-66);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AATA8IAAg4QAAgIgEgFQgFgEgIAAQgGAAgGAEQgFADgDAGIAAA8IgOAAIAAh3IAOAAIAAAuQAKgMAOAAQAbAAAAAdIAAA4g");
	this.shape_55.setTransform(8.3,-67.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAgQgLgLAAgUIAAgCQAAgMAFgKQAFgJAIgGQAIgFALAAQAOAAAKAJQAJAIABAOIgOAAQgBgIgFgGQgGgFgIAAQgKAAgGAIQgGAIAAAPIAAACQAAAOAGAIQAGAIAKAAQAIAAAGgFQAFgEABgHIAOAAQgBAHgEAGQgFAHgIAEQgHAEgJAAQgQAAgKgMg");
	this.shape_56.setTransform(-0.3,-66);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTArIAAhUIANAAIAAAKQAHgLANAAIAGABIAAAOIgHgBQgNAAgFAMIAAA7g");
	this.shape_57.setTransform(-6.8,-66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_58.setTransform(-14.1,-66);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCAvQgEgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgEgGg");
	this.shape_59.setTransform(-21.3,-67);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_60.setTransform(-28.1,-66.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_61.setTransform(-34.7,-67.5);

	this.instance = new lib.awwitsacutelittleheart();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,67,0.591,0.591,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CommonStationEOL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.3,2.2,0.72,0.72);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.CommonStationEOL(), 3);

	this.instance_2 = new lib.CommonInterchange();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68.8,-67.9,0.675,0.675);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.CommonInterchange(), 3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAXAzQgaAAgRgNQgSgNAAgWQAAgUAPgNIg/AAIAAgUICrAAIAAATIgNABQAPAMAAAVQAAAVgRAOQgRANgcAAgAgUgBQAAAOAMAJQALAIAXAAQAVAAALgIQAMgJAAgOQAAgUgSgJIg3AAQgRAKAAATg");
	this.shape_62.setTransform(-119.3,-76);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag6AwIAAgUIAPgBQgSgNAAgWQAAgmArgBIBQAAIAAAVIhQAAQgNAAgGAGQgGAGAAANQAAAIAFAIQAGAIAJAEIBVAAIAAAVg");
	this.shape_63.setTransform(-117,-63.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAAA0QgRAAgPgIQgOgGgHgNQgJgMAAgOQAAgYAQgMQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgOQgBgLgEgIQgFgIgHgGIAKgMQAXAPAAAfQAAAYgQAPQgQAQgcAAgAgkgVQgJAIABAMQAAAMAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_64.setTransform(-116.9,-51.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhEAmQgRgNAAgVQAAgWAQgMIgNgBIAAgTIB1AAQAXAAAOAOQAOAOAAAWQAAAOgGAMQgFANgKAGIgNgKQARgOAAgTQAAgOgIgJQgJgIgQAAIgKAAQAOAMAAAVQAAAVgRANQgRANgdAAQgcAAgRgNgAhDgBQAAAPAMAIQAMAJAXAAQAUAAALgJQAMgIAAgOQAAgUgSgJIg2AAQgSAJAAATg");
	this.shape_65.setTransform(-114.6,-38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAA0QgRAAgPgIQgOgHgHgLQgJgNAAgNQAAgYAQgNQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgPQgBgKgEgIQgFgIgHgFIAKgNQAXAQAAAeQAAAXgQAQQgQAQgcAAgAgkgVQgJAIABANQAAALAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_66.setTransform(-116.9,-26);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhRAxIAAgVICRAAIAAhNIASAAIAABig");
	this.shape_67.setTransform(-119,-14.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(2,1,1).p("Av3IdIldoTIAAv/MAqpAAAIAAfrMglMAAAg");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Av3P2IAAnZIldoTIAAv/MAqpAAAIAAfrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-102.3,275,204.8);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAuQAIgGAEgMQAEgMAAgPIAAgBQAAgJgCgKQgCgIgDgHQgEgIgFgDIACgFQAGADAFAIQAGAIADAKQADAKAAALQAAALgDAKQgDAKgGAIQgFAJgGADg");
	this.shape.setTransform(94.4,77.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAJAAAFAEQAFAFAAAHIgJAAQAAgDgCgDQgDgDgFAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgFgBgFgCg");
	this.shape_1.setTransform(90.3,77.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_2.setTransform(86.5,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(84.1,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_4.setTransform(80.1,77.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_5.setTransform(75.6,76.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_6.setTransform(71.6,77.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_7.setTransform(65.9,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_8.setTransform(58.2,77.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_9.setTransform(54.1,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_10.setTransform(49.3,77.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAIQADgDAEgCQAFgDAFAAQASAAAAASIAAAjg");
	this.shape_11.setTransform(42.1,77.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_12.setTransform(33.7,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_13.setTransform(28.9,77.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgFQAAgIAEgGQADgEAJAAIAGABIgBAHIgEAAQgFAAgDACQgBADAAAFIAAAFIAKAAIAAAHIgKAAIAAAtg");
	this.shape_14.setTransform(24.5,76.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_15.setTransform(17.4,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_16.setTransform(11.8,77.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(7.7,76.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_18.setTransform(4.7,76.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_19.setTransform(0.5,77.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_20.setTransform(-4,76.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAIAAAGAEQAFAFABAHIgJAAQAAgDgEgDQgDgDgEAAQgFAAgCADQgDACAAADQAAADADACIAIADIALADQAEABACADQACAEAAAEQAAAHgGAEQgFAEgJABQgFgBgGgCg");
	this.shape_21.setTransform(-8.1,77.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AALAmIgRgZIgGAGIAAATIgJAAIAAhLIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAgg");
	this.shape_22.setTransform(-15.3,76.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_23.setTransform(-20.7,77.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(-24.6,76.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_25.setTransform(-27.1,76.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_26.setTransform(-30.8,77.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAnQgLgRAAgWQAAgKADgLQADgKAGgIQAEgJAHgCIACAFQgHAFgFAMQgEALAAAOIAAADQAAATAGAOQAEAIAGAFIgCAFQgHgDgFgJg");
	this.shape_27.setTransform(-34.9,77.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_28.setTransform(85.5,60.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgKgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgIAJg");
	this.shape_29.setTransform(76.5,60.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgDgCg");
	this.shape_30.setTransform(70,58.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_31.setTransform(65.1,59.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_32.setTransform(58.4,60.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_33.setTransform(51.2,59.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTA2QgKgFgGgHQgFgIAAgKIAPAAQAAALAHAFQAIAHAMAAQALAAAHgGQAGgFAAgHQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgIAAgMQAAgNALgKQALgIAQgBQALABAKAEQAJAFAFAHQAFAJAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAEAAAKQAAAGAGAFQAGAFANAEQAOAEAIAEQAIAFAEAGQAEAHAAAIQAAAOgLAIQgKAJgSgBQgLABgKgFg");
	this.shape_34.setTransform(44.1,58.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUArIAAhTIAPAAIAAAJQAGgLANAAIAHABIAAANIgIAAQgNAAgFAMIAAA7g");
	this.shape_35.setTransform(33.1,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_36.setTransform(25.8,60.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAqIgfhTIAPAAIAVBAIAVhAIAOAAIgfBTg");
	this.shape_37.setTransform(17.6,60.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_38.setTransform(9.1,60.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAoQgHgDgFgHQgEgGgBgIIAPAAQAAAIAFAEQAGAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgKgCgHgDQgGgDgDgEQgDgFAAgGQgBgKAJgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgOAAQAAgGgGgFQgFgEgIAAQgHAAgEADQgEAEAAAFQAAAGAEACQAEADAKACQALADAGADQAHADADAEQAEAFAAAHQgBALgIAHQgJAHgPAAQgJAAgIgEg");
	this.shape_39.setTransform(0.4,60.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGABgIIAOAAQAAAIAGAEQAFAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgLgCgGgDQgHgDgDgEQgCgFAAgGQAAgKAIgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgPAAQAAgGgEgFQgGgEgIAAQgGAAgFADQgEAEAAAFQAAAGAEACQAEADAKACQAKADAIADQAGADAEAEQACAFAAAHQABALgKAHQgJAHgOAAQgJAAgIgEg");
	this.shape_40.setTransform(-7.8,60.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_41.setTransform(-16.5,60.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_42.setTransform(-23.3,60.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAsQgMgOAAgZIAAgKQAAgPAGgNQAFgLALgHQAKgGANgBQASAAALALQALAKACASIgPAAQgCgOgHgGQgGgGgMAAQgOAAgIALQgIAKAAAUIAAAKQAAASAIAMQAIAKANABQAMAAAHgHQAGgFADgOIAPAAQgCASgMAKQgLAJgSAAQgUAAgMgOg");
	this.shape_43.setTransform(-31.6,58.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_44.setTransform(9.3,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbAgQgLgMAAgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_45.setTransform(0.3,1.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgCgDAAgDQAAgEACgCQADgDADAAQAFAAACADQABACAAAEQAAADgBADQgCACgFAAQgDAAgDgCg");
	this.shape_46.setTransform(-6.2,0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_47.setTransform(-11.1,0.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQAAgHgFgFQgFgEgIAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQADgGAJgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgCgJQgLALgNAAQgMAAgIgHgAgUARQAAAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgaAAAAAQg");
	this.shape_48.setTransform(-17.8,1.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_49.setTransform(-25,0.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTA2QgKgEgGgIQgFgIAAgKIAPAAQAAAKAHAHQAIAFAMABQALgBAHgEQAGgFAAgIQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgJAAgMQAAgMALgJQALgKAQABQALAAAKAEQAJAFAFAIQAFAIAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAFAAAIQAAAIAGAEQAGAFANAEQAOAEAIAEQAIAEAEAHQAEAGAAAJQAAAOgLAJQgKAIgSAAQgLgBgKgEg");
	this.shape_50.setTransform(-32.1,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_51.setTransform(43.5,-66);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_52.setTransform(34.5,-64.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_53.setTransform(25.8,-66.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_54.setTransform(17,-66);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AATA8IAAg4QAAgIgEgFQgFgEgIAAQgGAAgGAEQgFADgDAGIAAA8IgOAAIAAh3IAOAAIAAAuQAKgMAOAAQAbAAAAAdIAAA4g");
	this.shape_55.setTransform(8.3,-67.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAgQgLgLAAgUIAAgCQAAgMAFgKQAFgJAIgGQAIgFALAAQAOAAAKAJQAJAIABAOIgOAAQgBgIgFgGQgGgFgIAAQgKAAgGAIQgGAIAAAPIAAACQAAAOAGAIQAGAIAKAAQAIAAAGgFQAFgEABgHIAOAAQgBAHgEAGQgFAHgIAEQgHAEgJAAQgQAAgKgMg");
	this.shape_56.setTransform(-0.3,-66);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTArIAAhUIANAAIAAAKQAHgLANAAIAGABIAAAOIgHgBQgNAAgFAMIAAA7g");
	this.shape_57.setTransform(-6.8,-66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_58.setTransform(-14.1,-66);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCAvQgEgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgEgGg");
	this.shape_59.setTransform(-21.3,-67);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_60.setTransform(-28.1,-66.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_61.setTransform(-34.7,-67.5);

	this.instance = new lib.awwitsacutelittleheart();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,67,0.591,0.591,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CommonStationEOL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.3,2.2,0.72,0.72);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.CommonStationEOL(), 3);

	this.instance_2 = new lib.CommonInterchange();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68.8,-67.9,0.675,0.675);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.CommonInterchange(), 3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAXAzQgaAAgRgNQgSgNAAgWQAAgUAPgNIg/AAIAAgUICrAAIAAATIgNABQAPAMAAAVQAAAVgRAOQgRANgcAAgAgUgBQAAAOAMAJQALAIAXAAQAVAAALgIQAMgJAAgOQAAgUgSgJIg3AAQgRAKAAATg");
	this.shape_62.setTransform(-119.3,-76);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag6AwIAAgUIAPgBQgSgNAAgWQAAgmArgBIBQAAIAAAVIhQAAQgNAAgGAGQgGAGAAANQAAAIAFAIQAGAIAJAEIBVAAIAAAVg");
	this.shape_63.setTransform(-117,-63.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAAA0QgRAAgPgIQgOgGgHgNQgJgMAAgOQAAgYAQgMQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgOQgBgLgEgIQgFgIgHgGIAKgMQAXAPAAAfQAAAYgQAPQgQAQgcAAgAgkgVQgJAIABAMQAAAMAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_64.setTransform(-116.9,-51.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhEAmQgRgNAAgVQAAgWAQgMIgNgBIAAgTIB1AAQAXAAAOAOQAOAOAAAWQAAAOgGAMQgFANgKAGIgNgKQARgOAAgTQAAgOgIgJQgJgIgQAAIgKAAQAOAMAAAVQAAAVgRANQgRANgdAAQgcAAgRgNgAhDgBQAAAPAMAIQAMAJAXAAQAUAAALgJQAMgIAAgOQAAgUgSgJIg2AAQgSAJAAATg");
	this.shape_65.setTransform(-114.6,-38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAA0QgRAAgPgIQgOgHgHgLQgJgNAAgNQAAgYAQgNQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgPQgBgKgEgIQgFgIgHgFIAKgNQAXAQAAAeQAAAXgQAQQgQAQgcAAgAgkgVQgJAIABANQAAALAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_66.setTransform(-116.9,-26);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhRAxIAAgVICRAAIAAhNIASAAIAABig");
	this.shape_67.setTransform(-119,-14.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(2,1,1).p("Av3IdIldoTIAAv/MAqpAAAIAAfrMglMAAAg");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Av3P2IAAnZIldoTIAAv/MAqpAAAIAAfrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-102.3,275,204.8);


(lib.NetworkMap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgLgOAAgQIAgAAQABAPAMAKQAMAJATAAQARAAALgHQALgHAAgNQAAgNgKgHQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgNQAAgYATgPQAUgQAdAAQAfAAATARQAUAPAAAaIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAFQAYAFAPAHQAOAHAHAKQAHALABAOQAAAZgUAPQgUAPgfAAQgWAAgRgIg");
	this.shape.setTransform(261.6,190.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BIQgYgZABgqIAAgFQAAgbAKgWQAKgWATgMQATgMAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAJgLIATAPQgYAkguAAQgkAAgYgYgAgdg3QgNAOgDAZIBcAAIAAgDQgBgXgNgOQgLgNgUAAQgSAAgNAOg");
	this.shape_1.setTransform(243.6,190.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnB6QgSgJgLgOIAQgTQAVAZAeAAQAVAAAOgNQANgNgBgYIAAgQQgSAWghAAQggAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAgAAATAYIACgUIAdAAIAACzQAAAkgVAVQgWAVgjAAQgUAAgTgJgAghhVQgMASAAAjQAAAgAMARQANARAWAAQAeAAAOgbIAAhTQgOgbgeAAQgWAAgNASg");
	this.shape_2.setTransform(224,193.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BqQgUgaAAgqIAAgDQAAgpAUgaQAUgaAhAAQAfAAATAWIAAhgIAgAAIAAEGIgdAAIgCgUQgTAXggAAQghAAgUgbgAgggNQgNARAAAjQAAAgANARQANASAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_3.setTransform(204.2,186.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgWQAKgVATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_4.setTransform(184.8,190.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhLB9IAAj5IAiAAIAADeIB1AAIAAAbg");
	this.shape_5.setTransform(166.4,187.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_6.setTransform(137.7,186.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3BHQgWgZAAgsIAAgFQAAgbAKgUQAKgWATgLQASgMAZAAQAeAAAVATQAVATABAdIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNASQgNARAAAgIAAAGQAAAfANASQANARAYAAQARAAAMgKQANgLABgPIAeAAQgBAQgKAPQgKAOgQAIQgRAJgTAAQglAAgXgZg");
	this.shape_7.setTransform(119.1,190.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_8.setTransform(104.7,190.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_9.setTransform(93.6,187.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhTB9IAAj5IBRAAQAnABAVAQQAUARAAAhQAAARgKAOQgJANgSAHQAVAGALAPQAMAQAAAWQgBAhgVAUQgWASgoABgAgzBiIA1AAQAXAAANgMQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAANgLQAMgKAAgTQAAgVgMgJQgMgKgXAAIgxAAg");
	this.shape_10.setTransform(78.9,187.3);

	this.blo = new lib.RedEOL();
	this.blo.parent = this;
	this.blo.setTransform(39.8,186.6);
	new cjs.ButtonHelper(this.blo, 0, 1, 2, false, new lib.RedEOL(), 3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_11.setTransform(-43.3,226.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAsBcIgsiKIgsCKIgZAAIg2i3IAgAAIAkCJIAriJIAYAAIAsCMIAkiMIAgAAIg2C3g");
	this.shape_12.setTransform(-66.2,226.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_13.setTransform(-89.3,226.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQB8IAAjcIhPAAIAAgbIC/AAIAAAbIhQAAIAADcg");
	this.shape_14.setTransform(-109.7,223.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_15.setTransform(-135.1,224.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag6BRQgRgQAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgRgKgKQgJgKgTAAQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQAAQAOgBANgHQANgIAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_16.setTransform(-149.8,226.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_17.setTransform(-169.3,226.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhUB8IAAj3IBRAAQAoAAAUAQQAVARAAAhQAAASgKANQgKANgRAIQAUAFAMAPQALAQAAAVQABAigWATQgVAUgogBgAgzBhIA1AAQAYAAAMgLQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAAMgLQANgKAAgTQAAgVgMgJQgMgKgYABIgwAAg");
	this.shape_18.setTransform(-189.7,223.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_19.setTransform(-219.3,222.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag3BHQgWgaAAgrIAAgEQAAgbAKgWQAKgUASgMQATgMAYAAQAfAAAVATQAVASABAeIgeAAQgBgSgNgLQgLgMgTAAQgXAAgNARQgNASAAAhIAAAEQAAAhANARQANARAXAAQARAAANgKQANgLABgPIAeAAQgBAQgKAOQgKAPgRAJQgQAIgUAAQgkAAgXgZg");
	this.shape_20.setTransform(-237.9,226.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_21.setTransform(-252.3,226.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_22.setTransform(-263.4,223);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhUB8IAAj3IBRAAQAoAAAVAQQAUARAAAhQAAASgKANQgKANgRAIQAUAFAMAPQAMAQAAAVQAAAigWATQgWAUgngBgAgzBhIA2AAQAWAAAOgLQANgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAUAAANgLQANgKAAgTQAAgVgMgJQgMgKgYABIgwAAg");
	this.shape_23.setTransform(-278.1,223.1);

	this.bbt = new lib.GreenEOL();
	this.bbt.parent = this;
	this.bbt.setTransform(-51,186.6);
	new cjs.ButtonHelper(this.bbt, 0, 1, 2, false, new lib.GreenEOL(), 3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAABxQAAALAFAGQAEAFALABIAPgCIAAAZQgMADgMABQgVgBgKgNg");
	this.shape_24.setTransform(-288,161.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgkBYQgRgIgKgOQgKgOAAgQIAhAAQAAAPAMAKQAMAJASAAQATAAALgHQAKgIAAgLQAAgNgJgIQgKgHgXgFQgYgFgOgGQgPgHgGgKQgHgKAAgOQAAgXAUgPQASgQAdAAQAgAAATARQAUAPAAAaIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAIQgJAHgBANQABALAIAGQAKAFAXAFQAXAGAPAIQAOAFAIALQAGALAAAOQAAAZgTAPQgUAPggAAQgVAAgRgIg");
	this.shape_25.setTransform(-302.2,163.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag4BNQgQgRAAgiIAAh3IAgAAIAAB2QAAAqAiAAQAjAAAMgbIAAiFIAgAAIAAC4IgeAAIgBgTQgSAWgjAAQgeAAgPgRg");
	this.shape_26.setTransform(-320.9,163.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag8BGQgXgbAAgqIAAgBQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAbAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgTAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_27.setTransform(-340.5,163.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_28.setTransform(-355.4,163.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag3BHQgWgZAAgsIAAgFQAAgaAKgWQAKgVASgLQATgMAYAAQAgAAAUATQAVATABAdIgeAAQgBgSgNgLQgMgMgSAAQgXAAgNASQgNARAAAgIAAAFQAAAgANASQANARAXAAQARAAANgKQANgLABgPIAeAAQgBAQgKAPQgKAOgRAIQgRAJgTAAQgkAAgXgZg");
	this.shape_29.setTransform(-371.2,163.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag5BqQgUgZAAgrIAAgCQAAgqAUgaQAUgaAhAAQAfAAATAXIAAhhIAgAAIAAEGIgdAAIgCgUQgTAXggAAQghAAgUgbgAgggNQgNARAAAjQAAAgANARQANASAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_30.setTransform(-390.9,159.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag6BRQgRgQAAgYQAAgcAWgQQAWgPAnAAIAeAAIAAgPQAAgQgKgLQgJgKgTABQgRAAgLAIQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgHQARgIATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQgBQAOAAANgIQANgHAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_31.setTransform(-409.9,163.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag2BIQgXgZgBgqIAAgFQAAgbALgWQAKgVAUgNQASgMAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQAAAbAQASQAQAQAWAAQARAAALgGQAMgIAIgLIAUAPQgXAkgvAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgCQAAgZgMgNQgMgNgUAAQgSAAgNAOg");
	this.shape_32.setTransform(-428.4,163.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_33.setTransform(-442.9,163.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhTB9IAAj5IBRAAQAnAAAVARQAUARAAAhQAAASgKANQgJANgSAHQAVAGALAPQAMAQAAAVQgBAigVAUQgWASgoABgAgzBhIA1AAQAXAAANgLQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAANgLQAMgKAAgTQAAgVgMgJQgMgKgXAAIgxAAg");
	this.shape_34.setTransform(-460.2,160.4);

	this.bco = new lib.LavenderEOL();
	this.bco.parent = this;
	this.bco.setTransform(-254.7,161.2);
	new cjs.ButtonHelper(this.bco, 0, 1, 2, false, new lib.LavenderEOL(), 3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape_35.setTransform(-316.9,68.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag2BHQgYgZABgpIAAgFQAAgbAKgVQAKgWATgMQATgNAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQABAcAPAQQAPARAXAAQAQAAAMgHQAMgGAJgMIATAPQgYAkguAAQgkAAgYgZgAgdg3QgNAOgDAZIBcAAIAAgDQgBgYgNgMQgLgOgUAAQgSAAgNAOg");
	this.shape_36.setTransform(-334.2,64.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_37.setTransform(-347.9,60.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_38.setTransform(-356.4,60.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_39.setTransform(-370.3,64.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOB8Ihbj3IAjAAIBGDMIBHjMIAkAAIhdD3g");
	this.shape_40.setTransform(-390.8,61.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_41.setTransform(-420.3,64.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_42.setTransform(-439.9,64.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag3BHQgWgZAAgsIAAgEQAAgbAKgWQAKgUATgMQASgMAZAAQAeAAAVATQAUASACAeIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNARQgNASAAAhIAAAFQAAAfANASQANARAYAAQARAAAMgKQANgKABgQIAeAAQgBAQgKAOQgKAPgQAJQgSAIgSAAQglAAgXgZg");
	this.shape_43.setTransform(-458.8,64.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_44.setTransform(-472.4,61.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_45.setTransform(-480.9,60.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_46.setTransform(-489.4,61.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrB2QgWgKgMgRQgMgRAAgWIAhAAQAAAXAQANQARANAbAAQAaAAAOgLQANgKAAgTQAAgSgMgKQgNgKghgKQgqgMgTgQQgTgSAAgaQgBgeAYgTQAYgTAkAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgOgNQgOgNgbAAQgXAAgOALQgOAKAAATQAAAQAOAKQAMALAfAIQAeAJASAKQARAKAJAOQAIAOAAATQABAegYATQgYASgnAAQgZAAgWgKg");
	this.shape_47.setTransform(-504,61.3);

	this.sil = new lib.LavenderEOL();
	this.sil.parent = this;
	this.sil.setTransform(-277.7,66.1);
	new cjs.ButtonHelper(this.sil, 0, 1, 2, false, new lib.LavenderEOL(), 3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BHQgYgZAAgpIAAgFQAAgbALgVQAKgXAUgLQASgNAVAAQAlAAAUAYQATAYABAsIAAAMIh9AAQAAAcAQAQQAPARAXAAQARAAALgHQAMgGAIgMIAUAPQgYAkguAAQgkAAgYgZgAgdg3QgNAOgDAZIBbAAIAAgDQAAgYgMgNQgMgNgUAAQgSAAgNAOg");
	this.shape_48.setTransform(-201,110.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_49.setTransform(-214.7,106.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgLgOAAgRIAgAAQABAQAMAKQAMAJATAAQARAAALgHQALgIAAgMQAAgNgKgGQgJgIgXgEQgYgGgPgGQgNgHgHgKQgHgKAAgNQAAgYATgPQAUgQAdAAQAfAAATAQQAUARAAAZIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAHQgKAIAAANQAAALAJAFQAJAGAWAGQAYAFAPAHQAOAHAHAKQAIAKAAAPQAAAZgUAPQgUAPgfAAQgWAAgRgIg");
	this.shape_50.setTransform(-228,110.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgPB9IAAj4IAfAAIAAD4g");
	this.shape_51.setTransform(-241.7,107.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag2BHQgXgZgBgpIAAgFQAAgbALgVQAKgXAUgLQASgNAVAAQAkAAAUAYQAVAYAAAsIAAAMIh9AAQAAAcAQAQQAQARAWAAQARAAALgHQAMgGAIgMIAUAPQgXAkgvAAQglAAgXgZgAgdg3QgNAOgDAZIBbAAIAAgDQAAgYgMgNQgMgNgUAAQgSAAgNAOg");
	this.shape_52.setTransform(-264.2,110.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag2BHQgXgZAAgpIAAgFQAAgbAKgVQALgXASgLQATgNAVAAQAkAAAVAYQATAYAAAsIAAAMIh8AAQABAcAPAQQAQARAWAAQAQAAAMgHQAMgGAJgMIATAPQgXAkgvAAQgkAAgYgZgAgdg3QgNAOgDAZIBcAAIAAgDQgCgYgMgNQgLgNgUAAQgSAAgNAOg");
	this.shape_53.setTransform(-282.7,110.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_54.setTransform(-296.4,106.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ABMB9IgYhCIhnAAIgYBCIghAAIBfj4IAbAAIBfD4gAgpAgIBTAAIgqhzg");
	this.shape_55.setTransform(-312.1,107.3);

	this.ali = new lib.LavenderInterchange();
	this.ali.parent = this;
	this.ali.setTransform(-155.3,105.2);
	new cjs.ButtonHelper(this.ali, 0, 1, 2, false, new lib.LavenderInterchange(), 3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag3BHQgWgaAAgrIAAgEQAAgcAKgUQAKgWATgLQASgMAZAAQAeAAAVATQAVASABAeIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNARQgNASAAAgIAAAGQAAAfANASQANARAYAAQARAAAMgKQANgKABgQIAeAAQgBAQgKAOQgKAPgQAIQgRAJgTAAQglAAgXgZg");
	this.shape_56.setTransform(-231.9,23.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_57.setTransform(-245.5,20.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOB9Ihbj4IAjAAIBGDMIBHjMIAjAAIhcD4g");
	this.shape_58.setTransform(-260.9,20.5);

	this.vic = new lib.RedEOL();
	this.vic.parent = this;
	this.vic.setTransform(-194.4,23.9);
	new cjs.ButtonHelper(this.vic, 0, 1, 2, false, new lib.RedEOL(), 3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_59.setTransform(-377.5,-120.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag2BIQgYgZAAgqIAAgFQAAgbALgWQALgWATgMQASgMAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAIgLIAUAPQgYAkguAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgDQgBgXgLgOQgMgNgUAAQgSAAgNAOg");
	this.shape_60.setTransform(-393.4,-120.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLBdIhDi5IAhAAIAuCNIAtiNIAhAAIhDC5g");
	this.shape_61.setTransform(-411.4,-120.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgWQAKgVATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_62.setTransform(-429.8,-120.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhxIghAAIAAgZIAhAAIAAgsIAfAAIAAAsIAjAAIAAAZIgjAAIAABxQAAALAFAGQAEAFALABIAPgCIAAAZQgMADgMABQgVgBgKgNg");
	this.shape_63.setTransform(-446.1,-122.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkBYQgRgIgKgOQgJgOgBgQIAhAAQAAAPAMAKQAMAJATAAQARAAALgHQALgHAAgNQAAgNgKgHQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgOQAAgXATgPQATgQAeAAQAfAAATARQAUAPAAAaIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAEQAYAGAPAHQAOAHAIAKQAGALABAOQgBAZgTAPQgUAPgfAAQgWAAgRgIg");
	this.shape_64.setTransform(-460.3,-120.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag2BIQgYgZABgqIAAgFQAAgbAKgWQALgWASgMQATgMAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQAAAbAQASQAPAQAXAAQAQAAAMgGQAMgIAJgLIATAPQgXAkgvAAQgkAAgYgYgAgdg3QgNAOgDAZIBcAAIAAgDQgBgXgNgOQgLgNgUAAQgSAAgNAOg");
	this.shape_65.setTransform(-478.3,-120.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA4B9Igzi1IgEgTIgDATIg1C1IgeAAIg8j5IAgAAIAoCqIAFAhIAHgdIAxiuIAaAAIAxCuIAGAeIAGgiIAmiqIAhAAIg8D5g");
	this.shape_66.setTransform(-503.2,-123.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag5BrQgUgbAAgqIAAgDQAAgpAUgaQAUgaAhAAQAfAAATAWIAAhgIAgAAIAAEFIgdAAIgCgUQgTAYggAAQghAAgUgagAgggNQgNARAAAjQAAAgANASQANARAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_67.setTransform(-287.5,-72.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_68.setTransform(-306.5,-68.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_69.setTransform(-325.8,-68.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_70.setTransform(-339.5,-72.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgLgOABgRIAfAAQABARAMAJQAMAJASAAQATAAAKgHQALgIAAgMQAAgNgJgGQgKgIgXgFQgYgFgOgGQgPgHgGgKQgHgKAAgNQAAgYAUgPQASgQAdAAQAgAAAUAQQATARAAAZIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAHQgKAIAAAMQAAAMAJAFQAKAGAXAGQAXAFAPAHQAPAHAGAKQAIAKgBAPQABAZgUAPQgUAPggAAQgVAAgRgIg");
	this.shape_71.setTransform(-352.8,-68.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPB8IAAj3IAfAAIAAD3g");
	this.shape_72.setTransform(-366.5,-71.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgmB6QgUgJgKgOIAQgTQAVAZAeAAQAVAAAOgNQANgNgBgYIAAgQQgSAWghAAQggAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAgAAATAYIACgUIAdAAIAACzQAAAkgVAVQgWAVgjAAQgTAAgTgJgAghhVQgNASABAjQgBAgANARQAOARAVAAQAfAAANgbIAAhTQgOgbgeAAQgVAAgOASg");
	this.shape_73.setTransform(-390.1,-65.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_74.setTransform(-409.2,-68.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_75.setTransform(-428.8,-68.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhLB8IAAj3IAiAAIAADcIB0AAIAAAbg");
	this.shape_76.setTransform(-447.2,-71.9);

	this.wst = new lib.awwitsacutelittleheart();
	this.wst.parent = this;
	this.wst.setTransform(-337.4,-118,0.786,0.786);
	new cjs.ButtonHelper(this.wst, 0, 1, 1);

	this.lng = new lib.BrownLine();
	this.lng.parent = this;
	this.lng.setTransform(-243.1,-69.3);
	new cjs.ButtonHelper(this.lng, 0, 1, 2, false, new lib.BrownLine(), 3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgzBxQgXgOgMgbQgNgbAAgjIAAgRQAAgkAMgbQANgcAXgOQAWgPAdAAQAeAAAXAPQAWAOANAbQAMAcAAAkIAAAPQAAAkgMAcQgNAbgWAOQgXAPgeAAQgcAAgXgPgAgwhLQgSAYAAAqIAAARQAAArASAYQASAZAeAAQAgAAARgXQASgYAAgrIAAgRQAAgsgRgYQgSgYggAAQgeAAgSAYg");
	this.shape_77.setTransform(-289.2,-191.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhMB9IAAj4ICZAAIAAAbIh4AAIAABVIBnAAIAAAZIhnAAIAABvg");
	this.shape_78.setTransform(-309.9,-191.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhBBoQgYgWAAgnIAAioIAhAAIAACnQgBAbAQAPQAOAPAbAAQAbAAAPgPQAPgOAAgbIAAioIAhAAIAACoQAAAjgWAXQgWAWgmADIgIAAQgoAAgZgWg");
	this.shape_79.setTransform(-331.8,-191.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("ABbB9IAAhhIADhoIhSDJIgYAAIhRjJIADBoIAABhIghAAIAAj4IArAAIBQDJIBRjJIArAAIAAD4g");
	this.shape_80.setTransform(-358.5,-191.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AA3B9Ig2hlIg5AAIAABlIghAAIAAj4IBSAAQApgBAXAUQAWATABAkQAAAYgNARQgMARgXAIIA6BpIAAADgAg4gCIAyAAQAXAAAPgNQAOgMAAgWQAAgWgNgNQgOgMgZAAIgyAAg");
	this.shape_81.setTransform(-383.4,-191.9);

	this.rmufo = new lib.BlueEOL();
	this.rmufo.parent = this;
	this.rmufo.setTransform(-250.2,-190.5);
	new cjs.ButtonHelper(this.rmufo, 0, 1, 2, false, new lib.BlueEOL(), 3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAAMAFAFQAEAGALgBIAPgCIAAAaQgMADgMAAQgVAAgKgNg");
	this.shape_82.setTransform(97.4,-190.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Ag3BHQgWgaAAgrIAAgEQAAgcAKgUQAKgWASgLQATgMAYAAQAgAAAUATQAVASABAeIgeAAQgBgSgNgLQgMgMgSAAQgXAAgNARQgNASAAAgIAAAGQAAAfANASQANARAXAAQARAAANgKQANgKABgQIAeAAQgBAQgKAOQgKAPgRAIQgRAJgTAAQgkAAgXgZg");
	this.shape_83.setTransform(83.3,-188.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_84.setTransform(69.7,-192.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_85.setTransform(60.4,-188.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAAMAFAFQAEAGALgBIAPgCIAAAaQgMADgMAAQgVAAgKgNg");
	this.shape_86.setTransform(47.3,-190.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkBYQgRgIgKgOQgKgOAAgRIAhAAQAAAQAMAKQAMAJASAAQATAAALgHQAKgIAAgMQAAgNgJgGQgKgIgXgEQgYgGgOgGQgPgHgGgKQgHgKAAgNQAAgYAUgPQASgQAdAAQAgAAAUAQQATARAAAZIggAAQAAgNgLgJQgLgKgRAAQgQAAgKAHQgJAIgBANQABALAIAFQAKAGAXAGQAXAFAPAHQAOAHAIAKQAGAKAAAPQAAAZgTAPQgUAPggAAQgVAAgRgIg");
	this.shape_87.setTransform(33,-188.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_88.setTransform(19.8,-192.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhZB9IAAj4IBGAAQAfAAAaAOQAZAPANAaQANAaABAjIAAAPQAAAjgOAaQgNAbgZAOQgaAOggABgAg5BiIAjAAQAlAAAWgYQAUgXABgsIAAgOQgBgqgTgXQgUgYgkAAIgnAAg");
	this.shape_89.setTransform(4.5,-191.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_90.setTransform(-20.3,-192.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgRgKgJQgJgLgTAAQgRAAgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOAAANgJQANgHAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_91.setTransform(-34.1,-188.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgmB6QgUgJgJgOIAPgTQAVAZAdAAQAXAAAMgNQANgNAAgYIAAgQQgTAWgfAAQghAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAhAAATAYIABgUIAdAAIAACzQAAAkgVAVQgVAVgkAAQgUAAgSgJgAgghVQgNASgBAjQABAgANARQANARAWAAQAdAAAOgbIAAhTQgOgbgdAAQgWAAgNASg");
	this.shape_92.setTransform(-53.7,-185.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag2BHQgYgZAAgpIAAgFQAAgbALgVQAKgXATgMQATgMAVAAQAlAAATAYQAVAYgBAsIAAAMIh8AAQABAcAPAQQAPARAXAAQAQAAAMgHQAMgGAIgMIAUAPQgYAkguAAQgkAAgYgZgAgdg3QgNAOgDAZIBcAAIAAgDQgCgYgMgNQgLgNgUAAQgSAAgNAOg");
	this.shape_93.setTransform(-72.2,-188.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhLB9IAAj4IAiAAIAADdIB1AAIAAAbg");
	this.shape_94.setTransform(-90.1,-191.9);

	this.ld = new lib.BlueEOL();
	this.ld.parent = this;
	this.ld.setTransform(-122.2,-190.5);
	new cjs.ButtonHelper(this.ld, 0, 1, 2, false, new lib.BlueEOL(), 3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("ABMB9IgYhCIhnAAIgYBCIghAAIBfj4IAbAAIBfD4gAgpAgIBTAAIgqhzg");
	this.shape_95.setTransform(493.3,-223.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_96.setTransform(470.7,-223.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AA4B9Igzi1IgEgTIgDATIg1C1IgeAAIg8j4IAgAAIAoCpIAFAhIAHgeIAxisIAaAAIAxCsIAGAfIAGgiIAmipIAhAAIg8D4g");
	this.shape_97.setTransform(443.7,-223.4);

	this.wca = new lib.MagentaLine();
	this.wca.parent = this;
	this.wca.setTransform(392.9,-220.9);
	new cjs.ButtonHelper(this.wca, 0, 1, 2, false, new lib.MagentaLine(), 3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape_98.setTransform(464.4,-147);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAALAFAGQAEAGALAAIAPgDIAAAaQgMAEgMAAQgVAAgKgOg");
	this.shape_99.setTransform(449.9,-152.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_100.setTransform(440.5,-154.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_101.setTransform(425,-153.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("Ag2BHQgYgYAAgqIAAgFQAAgbALgWQAKgWAUgMQASgMAVAAQAlAAAUAYQATAXABAtIAAAMIh9AAQAAAbAQARQAPARAXAAQARAAALgGQAMgIAIgLIAUAPQgXAkgvAAQgkAAgYgZgAgdg3QgNAOgDAZIBbAAIAAgDQAAgXgMgOQgMgNgUAAQgSAAgNAOg");
	this.shape_102.setTransform(395.7,-150.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_103.setTransform(382,-154.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgPQAWgQAnAAIAeAAIAAgOQAAgQgKgKQgJgKgTAAQgRgBgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgHQARgIATAAQAgAAASAQQASAQABAcIAABUQAAAaAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAOAKAJQAKAIAQAAQAOABANgJQANgHAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_104.setTransform(368.2,-150.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_105.setTransform(349.1,-154.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AA4B9Igzi1IgEgTIgDATIg1C1IgeAAIg8j5IAgAAIAoCqIAFAhIAHgeIAxitIAaAAIAxCtIAGAfIAGgiIAmiqIAhAAIg8D5g");
	this.shape_106.setTransform(324,-153.9);

	this.wc = new lib.GreenLine();
	this.wc.parent = this;
	this.wc.setTransform(273.2,-151.4);
	new cjs.ButtonHelper(this.wc, 0, 1, 2, false, new lib.GreenLine(), 3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_107.setTransform(177.9,2.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ag6BRQgRgQAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgRgKgKQgJgKgTAAQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQAAQAOgBANgHQANgIAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_108.setTransform(164,6.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_109.setTransform(149.6,6.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_110.setTransform(136.4,4.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_111.setTransform(121.6,6.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag2BIQgYgaAAgpIAAgFQAAgbALgWQALgVATgMQASgNAVAAQAkAAAUAYQAVAYAAAsIAAAMIh9AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAIgLIAUAPQgYAkguAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgCQgBgYgLgNQgMgOgUAAQgSAAgNAOg");
	this.shape_112.setTransform(102.9,6.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_113.setTransform(82.3,3.5);

	this.cnt = new lib.BlueLine();
	this.cnt.parent = this;
	this.cnt.setTransform(31.6,1.4);
	new cjs.ButtonHelper(this.cnt, 0, 1, 2, false, new lib.BlueLine(), 3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#492C00").ss(8.1,0,1).p("At0kwIAAkbIrUAAAZJJMIx3AAIAApgIw1AA");
	this.shape_114.setTransform(-154.6,-64.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#9E8EDE").ss(8.1,0,1).p("AU5rDIAAMdI1JAAAlqijIAAiiIv3AAAlzFLIAAFQIsLAA");
	this.shape_115.setTransform(-125.9,97.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FF0000").ss(8.1,0,1).p("AQ8qhIAAWfALorVI9LAA");
	this.shape_116.setTransform(-68.3,96.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FF00FF").ss(8.1,0,1).p("AP6rcIAADiIUAAAIAAIII/XAAIAAPXMgpEAAAAiyogIAAnEIOuAA");
	this.shape_117.setTransform(291.2,-122.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#00FF00").ss(8.1,0,1).p("AEynfIAArIMAiRAAAIAAk+EAjAgYXMgkJAAAMgl5AAAIAAFoAgZAvIAATrIqyAAIAAC3At1YYIrxAAIAAnx");
	this.shape_118.setTransform(22.9,23.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#0099FF").ss(8.1,0,1).p("ATYNYIAAw+IAAibI2AAAIAAkkAkSsuIvtAA");
	this.shape_119.setTransform(-108.4,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.cnt},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.wc},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.wca},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.ld},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.rmufo},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.lng},{t:this.wst},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.vic},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.ali},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.sil},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.bco},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.bbt},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.blo},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NetworkMap, new cjs.Rectangle(-520.8,-248.7,1045.8,495.1), null);


(lib.LegendClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31).call(this.frame_60).wait(1));

	// Layer 1
	this.instance = new lib.Tween3();
	this.instance.parent = this;

	this.instance_1 = new lib.Tween4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-240.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-240.4},29,cjs.Ease.get(1)).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.get(1)).wait(2).to({x:-239.6},0).wait(1).to({x:-237.4},0).wait(1).to({x:-233.8},0).wait(1).to({x:-229.1},0).wait(1).to({x:-223.3},0).wait(1).to({x:-216.5},0).wait(1).to({x:-208.9},0).wait(1).to({x:-200.4},0).wait(1).to({x:-191.3},0).wait(1).to({x:-181.6},0).wait(1).to({x:-171.4},0).wait(1).to({x:-160.8},0).wait(1).to({x:-149.8},0).wait(1).to({x:-138.5},0).wait(1).to({x:-127.1},0).wait(1).to({x:-115.6},0).wait(1).to({x:-104},0).wait(1).to({x:-92.5},0).wait(1).to({x:-81.1},0).wait(1).to({x:-70},0).wait(1).to({x:-59.3},0).wait(1).to({x:-49},0).wait(1).to({x:-39.2},0).wait(1).to({x:-30.2},0).wait(1).to({x:-22},0).wait(1).to({x:-14.8},0).wait(1).to({x:-8.8},0).wait(1).to({x:-4.2},0).wait(1).to({x:-1.2},0).wait(1).to({x:-0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-102.3,275,204.8);


(lib.InformationWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.close = new lib.Symbol1();
	this.close.parent = this;
	this.close.setTransform(448.2,-242.4);
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape.setTransform(317,174.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_1.setTransform(305.7,174.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_2.setTransform(293.2,172.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_3.setTransform(308.6,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_4.setTransform(294.4,87.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_5.setTransform(308.6,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_6.setTransform(294.4,58.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_7.setTransform(317,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_8.setTransform(305.7,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_9.setTransform(293.2,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_10.setTransform(308.6,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_11.setTransform(294.4,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_12.setTransform(308.6,-24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_13.setTransform(294.4,-26.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_14.setTransform(317,-52.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_15.setTransform(305.7,-52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_16.setTransform(293.2,-54.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_17.setTransform(308.6,-81.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_18.setTransform(294.4,-83.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_19.setTransform(197.1,172.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_20.setTransform(185.5,174.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_21.setTransform(173.1,172.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_22.setTransform(164,174.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_23.setTransform(153.4,174.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_24.setTransform(141.6,174.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_25.setTransform(130,174.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_26.setTransform(118,172.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_27.setTransform(101.2,173.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_28.setTransform(91.6,174.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_29.setTransform(77.5,172.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_30.setTransform(118.2,87.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gUIAEAAIAACbg");
	this.shape_31.setTransform(104.6,87.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_32.setTransform(97,89.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gUIAEAAIAACbg");
	this.shape_33.setTransform(86.9,87.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_34.setTransform(75.8,87.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_35.setTransform(118.2,58.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_36.setTransform(105.9,58.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_37.setTransform(97,60.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgTIA3gVIAEAAIAACdg");
	this.shape_38.setTransform(86.9,58.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_39.setTransform(75.8,58.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_40.setTransform(118.2,30.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_41.setTransform(106,30.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_42.setTransform(97,32.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gVIAEAAIAACcg");
	this.shape_43.setTransform(86.9,30.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_44.setTransform(75.8,30.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_45.setTransform(118.6,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_46.setTransform(106.3,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(97,4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gVIAEAAIAACcg");
	this.shape_48.setTransform(86.9,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_49.setTransform(75.8,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_50.setTransform(118.2,-26.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_51.setTransform(105.9,-26.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_52.setTransform(97,-24.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_53.setTransform(88.3,-26.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_54.setTransform(75.8,-26.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_55.setTransform(118.2,-54.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_56.setTransform(106.3,-54.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_57.setTransform(97,-52.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_58.setTransform(88.2,-54.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_59.setTransform(75.8,-54.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_60.setTransform(118.2,-83.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_61.setTransform(105.7,-83.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_62.setTransform(97,-81.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_63.setTransform(86.9,-83.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_64.setTransform(75.8,-83.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_65.setTransform(-232.3,174.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_66.setTransform(-240.9,172);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_67.setTransform(-249.3,174.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_68.setTransform(-257.9,172.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_69.setTransform(-272,174.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_70.setTransform(-283.6,174.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_71.setTransform(-292.2,172);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_72.setTransform(-302.1,172.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_73.setTransform(-300.2,145.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_74.setTransform(-306.2,145.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_75.setTransform(-300.2,116.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_76.setTransform(-306.2,116.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_77.setTransform(-137.8,87.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_78.setTransform(-144.2,89.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_79.setTransform(-154.8,89.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgwBSIAAigIASAAIABAMQAMgPAVAAQAVAAAMAQQAMAQAAAcIAAACQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA5gAgcgwIAAA3QAJAQASAAQAOAAAIgLQAJgMAAgVQAAgUgJgLQgIgMgOAAQgSAAgJAQg");
	this.shape_80.setTransform(-167,91.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_81.setTransform(-176.6,89.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_82.setTransform(-183.6,87.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_83.setTransform(-193.4,87.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgjBRIgHgCIAAgQIAFABQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgvCFQgKAdgYAAg");
	this.shape_84.setTransform(-211.2,91.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_85.setTransform(-220.4,87.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_86.setTransform(-226.3,87.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJASAAQAYAAAPAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgCAYgQAOQgPANgaAAQgbAAgRgTg");
	this.shape_87.setTransform(-236,87.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_88.setTransform(-254.4,89.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_89.setTransform(-263,86.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_90.setTransform(-271.7,89.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_91.setTransform(-283.7,86.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIACAVIAFgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_92.setTransform(-299.4,87.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_93.setTransform(-184.8,59.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_94.setTransform(-193.6,60.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_95.setTransform(-202.2,58.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_96.setTransform(-208,60.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_97.setTransform(-216.3,59.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_98.setTransform(-225.3,60.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_99.setTransform(-233.6,58.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ag4BOIAAibIAtAAQATAAAQAJQAPAJAJARQAIAQABAWIAAAJQAAAWgJARQgJAQgPAJQgQAJgUAAgAgjA9IAWAAQAXAAANgOQANgPAAgcIAAgIQAAgbgMgOQgNgPgWAAIgYAAg");
	this.shape_100.setTransform(-243.2,58.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_101.setTransform(-258.8,58.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_102.setTransform(-267.5,60.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgNgQQgMgQAAgcQAAgbAMgQQANgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_103.setTransform(-279.8,63);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_104.setTransform(-291.5,60.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AguBOIAAibIAUAAIAACKIBJAAIAAARg");
	this.shape_105.setTransform(-302.7,58.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_106.setTransform(-154.6,32.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBXIAWhXIAUAAIgiBzg");
	this.shape_107.setTransform(-169,32.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_108.setTransform(-183.5,32.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgJBOIAAiKIgyAAIAAgRIB3AAIAAARIgyAAIAACKg");
	this.shape_109.setTransform(-196.3,30.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_110.setTransform(-212.3,31.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_111.setTransform(-221.5,32.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_112.setTransform(-233.8,32.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_113.setTransform(-246.6,30.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAikIAUAAIAAA/QANgRAVAAQAkAAABAoIAABOg");
	this.shape_114.setTransform(-265.2,30);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_115.setTransform(-276.8,32.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_116.setTransform(-285.9,32.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_117.setTransform(-292.9,30.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_118.setTransform(-302.1,30.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_119.setTransform(-187.4,4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_120.setTransform(-198.7,4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgNgQQgMgQAAgcQAAgbAMgQQANgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_121.setTransform(-211,6.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVAAgMgRgAgUgIQgIAKAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_122.setTransform(-223.4,1.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_123.setTransform(-235.6,4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AguBOIAAibIAVAAIAACKIBIAAIAAARg");
	this.shape_124.setTransform(-247.2,2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABSIgUAAIAAikIAUAAIAAA/QANgQAVAAQAkAAABApIAABMg");
	this.shape_125.setTransform(-265.2,1.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_126.setTransform(-276.8,4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_127.setTransform(-285.9,3.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_128.setTransform(-292.9,1.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_129.setTransform(-302.1,2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgcBmQARgNAKgbQAJgbABggIAAgDQgBgWgFgTQgDgUgIgPQgJgQgLgJIAFgLQAOAHAMATQAMASAHAWQAGAXABAXQgBAYgGAXQgGAVgNATQgMASgOAIg");
	this.shape_130.setTransform(-161.9,-24.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_131.setTransform(-171.2,-24.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_132.setTransform(-183.6,-24.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_133.setTransform(-192.5,-26.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_134.setTransform(-199.1,-25.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_135.setTransform(-208.4,-24.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgWAAIAAgPIAWAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgFgIg");
	this.shape_136.setTransform(-218.3,-25.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbBKQgOgGgHgLQgIgKAAgOIAVAAQAAAOALAIQAKAJARAAQAQAAAJgHQAIgHAAgLQAAgMgIgGQgIgGgUgGQgbgIgMgKQgMgLAAgRQAAgSAPgMQAPgMAWAAQARAAAMAGQANAGAHALQAHALAAANIgVAAQAAgOgJgIQgJgIgRAAQgOAAgIAGQgJAHAAAMQAAAKAIAGQAIAHATAFQATAGALAFQALAHAGAJQAFAJAAAMQAAATgPALQgPALgYAAQgQAAgOgGg");
	this.shape_137.setTransform(-228.1,-26.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_138.setTransform(-240.3,-24.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAikIAUAAIAAA/QANgRAVAAQAkAAABAoIAABOg");
	this.shape_139.setTransform(-252.2,-26.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_140.setTransform(-262.2,-25.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgCBXQgZglAAgyQAAgYAGgWQAHgXAMgRQAMgTAOgHIAEAMQgPAMgKAZQgKAZAAAeIgBAJQAAAqAPAeQAJASAMALIgEALQgOgIgMgSg");
	this.shape_141.setTransform(-268.7,-24.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAOAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQAAAKgHAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_142.setTransform(-284,-24.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_143.setTransform(-292.6,-26.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgIBOIg6ibIAWAAIAsCAIAsiAIAXAAIg6Cbg");
	this.shape_144.setTransform(-302.2,-26.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgjBRIgHgCIAAgPIAFAAQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBWIAbhWIAWAAIgvCFQgKAdgYABg");
	this.shape_145.setTransform(-211.2,-50.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_146.setTransform(-220.4,-54.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_147.setTransform(-226.3,-54.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJASAAQAYAAAPAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgCAYgQAOQgPANgaAAQgbAAgRgTg");
	this.shape_148.setTransform(-236,-54.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_149.setTransform(-254.4,-52.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgJBSIAAikIATAAIAACkg");
	this.shape_150.setTransform(-263,-55.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_151.setTransform(-271.7,-52.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABSIgUAAIAAikIAUAAIAAA/QANgQAVAAQAkAAABApIAABMg");
	this.shape_152.setTransform(-283.7,-55.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIACAVIAFgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_153.setTransform(-299.4,-54.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_154.setTransform(-202.2,-83.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_155.setTransform(-214.2,-81.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_156.setTransform(-226.2,-81.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_157.setTransform(-234.9,-83.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_158.setTransform(-243.3,-81.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgKBOIAAibIAVAAIAACbg");
	this.shape_159.setTransform(-251.9,-83.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQASAAQAOAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_160.setTransform(-266.7,-79);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_161.setTransform(-278.8,-81.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_162.setTransform(-291.1,-81.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AguBOIAAibIAUAAIAACKIBJAAIAAARg");
	this.shape_163.setTransform(-302.7,-83.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_164.setTransform(-409.9,172.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA4gWIADAAIAACdg");
	this.shape_165.setTransform(-423.6,172.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaBPIAAgRIAEAAQAYAAANgMQANgNABgaQgGAHgIAEQgJAFgJAAQgOAAgKgHQgKgGgGgMQgFgMAAgOQAAgQAGgMQAGgNALgHQALgGAOAAQAXAAANARQANARAAAeIAAAGQAAAtgSAVQgSAVgjAAgAgVg0QgHAKAAARQAAAQAHAJQAIALANAAQAJAAAIgHQAJgFAEgJIAAgIQAAgTgJgNQgIgMgNAAQgNAAgIAKg");
	this.shape_166.setTransform(-416.3,143.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgjBEQgOgMAAgUQAAgNAHgKQAHgKAMgEQgKgFgGgKQgGgJAAgLQAAgUANgMQAMgLAUAAQAVAAAMALQANAMAAAUQAAALgGAKQgGAJgLAFQAMAEAIAKQAHAKAAANQAAAUgOAMQgOAMgWAAQgWAAgNgMgAgVAOQgIAIAAAOQAAANAIAIQAIAHANAAQAOAAAIgHQAIgIAAgNQAAgOgIgIQgJgIgNAAQgNAAgIAIgAgSg4QgHAIAAAMQAAAMAHAHQAHAIALAAQAMAAAHgIQAHgHAAgMQAAgMgHgHQgIgIgLAAQgLAAgHAHg");
	this.shape_167.setTransform(-416.1,115.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AggBOIBAiLIhUAAIAAgQIBpAAIAAALIhACQg");
	this.shape_168.setTransform(-416.2,87.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgiA+QgPgRAAgbIAAgIQABgqASgXQASgXAkAAIAEAAIAAARIgEAAQgYAAgMANQgOAOgCAYQANgOATAAQAVAAAMAOQAMANAAAXQAAAYgMAPQgOAOgWAAQgVAAgOgRgAgQgCQgJAFgDAKIAAAHQAAATAJAMQAIAMAMAAQANAAAIgKQAIgKAAgQQAAgQgIgKQgIgJgNAAQgJAAgIAGg");
	this.shape_169.setTransform(-415.9,58.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_170.setTransform(-415.7,30.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAPBOIAAgkIhGAAIAAgMIBFhrIAVAAIAABnIAVAAIAAAQIgVAAIAAAkgAANguIguBIIAwAAIAAhMg");
	this.shape_171.setTransform(-416.1,2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_172.setTransform(-416.3,-26.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_173.setTransform(-416,-54.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_174.setTransform(-417.4,-83.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgoBMQgPgTAAgeIAAgCQAAgdAPgSQAOgTAXAAQAXAAANAQIAAhFIAXAAIAAC7IgVAAIgBgPQgOARgXAAQgXAAgOgTgAgXgJQgJAMAAAZQAAAXAJAMQAJANAQAAQAVAAAKgTIAAg8QgKgTgVAAQgQAAgJANg");
	this.shape_175.setTransform(443.3,-115.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgnAzQgQgSAAgeIAAgDQAAgTAHgPQAIgQAOgJQANgIAOgBQAaABAOAQQAPARAAAgIAAAJIhZAAQABATALAMQALAMAPAAQANAAAIgFQAIgFAGgIIAOALQgQAZgiAAQgZAAgSgRgAgVgnQgIAKgDASIBCAAIAAgCQgCgRgIgKQgIgJgPAAQgMAAgKAKg");
	this.shape_176.setTransform(430.1,-113.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAYAAIAAARIgYAAIAABRQAAAIADAEQAEAEAHAAIALgBIAAASQgJACgJAAQgPAAgGgJg");
	this.shape_177.setTransform(418.9,-114.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgfBDIAAiDIAWAAIABAPQAJgRAVAAQAGAAAEABIAAAVIgLAAQgWAAgHATIAABcg");
	this.shape_178.setTransform(411.6,-113.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_179.setTransform(399.6,-113.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("Ag3BdIAAi2IAVAAIABAOQAOgRAXAAQAYAAAOASQAOASAAAgIAAACQAAAdgOATQgOASgXAAQgXAAgOgPIAABAgAggg2IAAA+QAKASAVAAQAPAAAKgNQAJgNAAgYQAAgXgJgNQgKgNgPAAQgVAAgKATg");
	this.shape_180.setTransform(385.7,-110.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag3BdIAAi2IAVAAIABAOQAOgRAXAAQAYAAAOASQAOASAAAgIAAACQAAAdgOATQgOASgXAAQgXAAgOgPIAABAgAggg2IAAA+QAKASAVAAQAPAAAKgNQAJgNAAgYQAAgXgJgNQgKgNgPAAQgVAAgKATg");
	this.shape_181.setTransform(371.6,-110.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgoA3QgLgMAAgYIAAhVIAWAAIAABUQAAAeAZAAQAZAAAJgTIAAhfIAWAAIAACDIgWAAIAAgNQgNAPgYAAQgWAAgLgMg");
	this.shape_182.setTransform(357.4,-113);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgeBUQgRgHgIgMQgJgMAAgQIAYAAQAAAQAMAKQALAJAUAAQASAAAKgIQAKgHAAgNQAAgNgJgHQgKgIgXgGQgegJgOgMQgNgMAAgTQAAgVARgOQAQgNAaAAQASAAAPAHQAOAHAIAMQAIANAAAOIgXAAQAAgQgLgJQgKgJgTAAQgQAAgKAHQgJAIgBAOQAAALAKAHQAJAIAVAGQAWAGANAHQAMAHAHAKQAFAKAAAOQAAAVgQANQgSANgbAAQgSAAgPgHg");
	this.shape_183.setTransform(343.2,-115.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAfBCIgfgxIgdAxIgbAAIAthCIgrhBIAaAAIAcAwIAdgwIAaAAIgrBBIAtBCg");
	this.shape_184.setTransform(323.3,-113.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("Ag4BZIAAixIBwAAIAAATIhYAAIAAA5IBMAAIAAATIhMAAIAAA/IBZAAIAAATg");
	this.shape_185.setTransform(310.6,-115.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AA2BZIgRgvIhJAAIgRAvIgYAAIBEixIATAAIBECxgAgdAXIA7AAIgehSg");
	this.shape_186.setTransform(294.8,-115.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgfBzQATgOALgeQALgfAAglIAAgDQAAgagGgWQgEgVgKgSQgJgRgMgKIAFgOQAQAJANAVQAPAUAHAaQAHAZAAAcQAAAbgHAZQgHAZgOAVQgOAVgQAJg");
	this.shape_187.setTransform(209.1,-113.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgaA/QgLgGgIgKQgHgKAAgLIAXAAQABAKAJAIQAIAGAMAAQANAAAJgFQAHgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQANgKAVgBQAWAAAOAMQAOALABATIgYAAQAAgJgHgIQgIgGgMAAQgLAAgIAGQgHAFAAAIQABAJAGAEQAGAEARAEQAQADALAGQALAEAEAHQAGAIAAAKQgBASgOALQgOALgXgBQgOABgNgGg");
	this.shape_188.setTransform(199,-113.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgZA/QgNgGgGgKQgIgKABgLIAWAAQABAKAIAIQAJAGANAAQANAAAHgFQAIgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQAOgKAUgBQAXAAAOAMQANALAAATIgWAAQgBgJgHgIQgIgGgMAAQgMAAgGAGQgIAFABAIQAAAJAGAEQAHAEAPAEQARADALAGQALAEAFAHQAEAIABAKQAAASgPALQgNALgXgBQgPABgMgGg");
	this.shape_189.setTransform(186.1,-113.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgKBAQgDgEAAgGQAAgFADgEQAEgFAGAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEADgGAAQgGAAgEgDgAgKgrQgDgEAAgFQAAgHADgDQAEgFAGAAQAHAAADAFQAEADAAAHQAAAFgEAEQgDAEgHgBQgGABgEgEg");
	this.shape_190.setTransform(176.7,-113.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ABGBDIAAhWQAAgOgGgHQgHgHgPAAQgNAAgIAHQgJAIAAANIAABWIgXAAIAAhVQAAgdgcAAQgWAAgIATIAABfIgXAAIAAiDIAWAAIABAPQAOgRAYAAQAdAAAIAVQAHgKAKgFQALgGAOAAQAsAAAAAuIAABXg");
	this.shape_191.setTransform(162.7,-113.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("ABGBDIAAhWQAAgOgHgHQgGgHgPAAQgMAAgJAHQgIAIgBANIAABWIgXAAIAAhVQAAgdgbAAQgXAAgIATIAABfIgXAAIAAiDIAWAAIABAPQAOgRAZAAQAbAAAJAVQAHgKAKgFQALgGAPAAQArAAABAuIAABXg");
	this.shape_192.setTransform(140.8,-113.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgCBjQgdgqAAg5QAAgbAHgZQAIgaAOgVQAOgUAQgJIAEAPQgRAOgMAcQgKAbgBAkIAAAJQAAAvAQAjQAKAUAOAMIgEAOQgQgJgOgVg");
	this.shape_193.setTransform(126.1,-113.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AA2BZIgRgvIhJAAIgRAvIgYAAIBEixIATAAIBECxgAgdAXIA7AAIgehSg");
	this.shape_194.setTransform(106.9,-115.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgLBZIAAieIg5AAIAAgTICJAAIAAATIg5AAIAACeg");
	this.shape_195.setTransform(91.3,-115.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ag3BZIAAixIBuAAIAAATIhXAAIAAA5IBMAAIAAATIhMAAIAAA/IBYAAIAAATg");
	this.shape_196.setTransform(77.4,-115.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAdBDIAAhWQABgOgHgHQgGgHgOAAQgKAAgJAGQgHAGgFAJIAABdIgXAAIAAiDIAWAAIAAARQAPgTAXAAQAqAAABAvIAABWg");
	this.shape_197.setTransform(-189.7,-113.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_198.setTransform(-203.8,-113.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKBaIAAiDIAVAAIAACDgAgJhDQgEgDAAgGQAAgFAEgEQADgEAGAAQAHAAADAEQAEAEgBAFQABAGgEADQgDADgHAAQgGAAgDgDg");
	this.shape_199.setTransform(-213.9,-115.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAYAAIAAARIgYAAIAABRQgBAIAEAEQAEAEAHAAIALgBIAAASQgJACgIAAQgQAAgGgJg");
	this.shape_200.setTransform(-221.4,-114.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgpA5QgMgLAAgRQAAgVAPgJQAQgMAbAAIAWAAIAAgLQAAgLgHgIQgHgHgNAAQgMABgIAGQgJAGABAJIgXAAQAAgKAHgKQAHgJAMgFQAMgFAOgBQAXAAAMAMQANAMAAATIAAA8QABATAFAKIAAACIgZAAQgCgEAAgKQgQAQgVAAQgTAAgNgLgAgfAaQAAALAHAGQAHAGALAAQAKAAAJgFQAKgGAEgJIAAgbIgRAAQgpAAAAAYg");
	this.shape_201.setTransform(-231.9,-113.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAeBDIAAhWQgBgOgGgHQgHgHgNAAQgKAAgIAGQgIAGgGAJIAABdIgWAAIAAiDIAVAAIABARQAPgTAYAAQAqAAAAAvIAABWg");
	this.shape_202.setTransform(-245.6,-113.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgLBaIAAiDIAWAAIAACDgAgJhDQgDgDgBgGQABgFADgEQAEgEAFAAQAHAAADAEQADAEAAAFQAAAGgDADQgDADgHAAQgFAAgEgDg");
	this.shape_203.setTransform(-255.5,-115.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAVAAIAAAgIAZAAIAAARIgZAAIAABRQAAAIAEAEQAEAEAHAAIALgBIAAASQgJACgJAAQgOAAgHgJg");
	this.shape_204.setTransform(-263,-114.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgaA/QgMgGgGgKQgIgKAAgLIAXAAQABAKAJAIQAIAGAMAAQAOAAAHgFQAIgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQAOgKAUgBQAWAAAOAMQAPALAAATIgYAAQAAgJgHgIQgIgGgMAAQgMAAgGAGQgIAFAAAIQABAJAGAEQAHAEAPAEQASADAKAGQALAEAEAHQAGAIAAAKQgBASgOALQgNALgYgBQgOABgNgGg");
	this.shape_205.setTransform(-273.2,-113.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgnAzQgQgSAAgeIAAgDQAAgTAHgPQAIgQAOgJQANgIAPgBQAaABANAQQAPARAAAgIAAAJIhYAAQAAATALAMQALAMAPAAQAMAAAJgFQAIgFAGgIIAOALQgQAZgiAAQgZAAgSgRgAgVgnQgIAKgDASIBBAAIAAgCQgBgRgIgKQgIgJgOAAQgNAAgKAKg");
	this.shape_206.setTransform(-286.1,-113.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ag/BZIAAixIAyAAQAWAAASAKQASALAKASQAJATAAAZIAAAKQAAAZgJATQgKATgSAKQgSALgXAAgAgoBGIAZAAQAaAAAPgRQAPgRAAgfIAAgKQAAgegOgRQgOgRgZAAIgcAAg");
	this.shape_207.setTransform(-300.8,-115.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgEADgEQAEgFAGAAQAHAAADAFQAEAEAAAEQAAAGgEAEQgDADgHAAQgGAAgEgDg");
	this.shape_208.setTransform(-367,-107.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_209.setTransform(-377.3,-113.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAtBZIhZiIIAACIIgXAAIAAixIAXAAIBZCJIAAiJIAXAAIAACxg");
	this.shape_210.setTransform(-393.4,-115.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAZAAIAAARIgZAAIAABRQAAAIADAEQADAEAJAAIAKgBIAAASQgJACgIAAQgQAAgGgJg");
	this.shape_211.setTransform(-412.9,-114.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgpA5QgNgLAAgRQAAgVAQgJQAPgMAcAAIAWAAIAAgLQAAgLgHgIQgHgHgNAAQgMABgIAGQgIAGAAAJIgXAAQAAgKAHgKQAHgJAMgFQAMgFANgBQAYAAAMAMQANAMABATIAAA8QAAATAEAKIAAACIgYAAQgCgEgBgKQgPAQgVAAQgTAAgNgLgAgfAaQAAALAHAGQAHAGALAAQAKAAAKgFQAJgGAEgJIAAgbIgSAAQgoAAAAAYg");
	this.shape_212.setTransform(-423.4,-113.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_213.setTransform(-433.2,-115.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("Ag/BZIAAixIBAAAQAeAAAQAPQARAPAAAYQAAAagQANQgQAOgfAAIgoAAIAABGgAgnAAIAoAAQAUAAAKgIQAJgJABgQQgBgQgJgKQgLgJgRgBIgqAAg");
	this.shape_214.setTransform(-443.5,-115.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgLgOAAgRIAgAAQABARAMAJQAMAJATAAQARAAALgHQALgIAAgMQAAgMgKgIQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgNQAAgYATgPQAUgQAdAAQAfAAATARQAUAQAAAZIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAFQAYAFAPAHQAOAHAHAKQAIAKAAAPQAAAZgUAPQgUAPgfAAQgWAAgRgIg");
	this.shape_215.setTransform(-222.6,-159.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ABiBeIAAh5QAAgUgJgJQgJgKgWAAQgRAAgMAKQgMALgCASIAAB5IgeAAIAAh4QAAgogoAAQgfAAgLAaIAACGIggAAIAAi4IAeAAIABAVQAVgYAiAAQAnAAANAeQAJgOAPgIQAPgIATAAQA+AAAABAIAAB7g");
	this.shape_216.setTransform(-246.9,-159.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_217.setTransform(-267.3,-159.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_218.setTransform(-284.1,-159.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAaQgIgCgJAAQgPAAgJAJQgIAIAAASIAAATIAnAAIAAAYIgnAAIAACgg");
	this.shape_219.setTransform(-299.6,-163.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAALAFAGQAEAGALAAIAPgDIAAAaQgMAEgMAAQgVAAgKgOg");
	this.shape_220.setTransform(-312.5,-161.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgPQAWgQAnAAIAeAAIAAgOQAAgQgKgKQgJgKgTAAQgRgBgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgHQARgIATAAQAgAAASAQQASAQABAcIAABUQAAAaAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAOAKAJQAKAIAQAAQAOABANgJQANgHAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_221.setTransform(-327.2,-159.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_222.setTransform(-340.9,-163.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AhZB9IAAj5IBbAAQApABAXAUQAYAVgBAjQABAkgXATQgXATgqAAIg6AAIAABigAg4AAIA6AAQAbAAAOgLQANgMAAgYQAAgXgNgMQgOgOgZgBIg8AAg");
	this.shape_223.setTransform(-355.4,-162.9);

	this.instance = new lib.baselinetrain24pxsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-408.7,-162.2,3.158,3.158,0,0,0,12.1,11.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAzB3IAAiZQABgagMgLQgLgMgYgBQgTAAgOALQgPAKgHARIAAClIgpAAIAAjoIAmAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_224.setTransform(32,-235.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AhLBYQgeghAAg2IAAgCQAAgiAOgcQANgbAYgPQAYgPAeAAQAvAAAeAhQAdAhAAA2IAAADQAAAigNAbQgNAagYAQQgYAPggAAQguAAgdghgAgvg/QgSAXAAArQAAAmASAYQASAXAdAAQAfAAARgYQASgXAAgqQAAgmgSgYQgSgYgeAAQgdAAgSAYg");
	this.shape_225.setTransform(7.2,-235.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgQh2QgHgHAAgKQAAgKAHgGQAFgHALABQALgBAHAHQAFAGAAAKQAAAKgFAHQgHAGgLAAQgLAAgFgGg");
	this.shape_226.setTransform(-10.6,-239.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_227.setTransform(-23.8,-238);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgXAAQgWAAgOAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAWgJQAUgKAZAAQAoAAAXAVQAXAUABAjIAABqQgBAgAJATIAAADIgqAAQgEgHgCgRQgbAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQAMALAUAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhJAAABArg");
	this.shape_228.setTransform(-42.3,-235.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_229.setTransform(-62.1,-238);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("Ag2CUQgcgMgPgWQgQgVAAgbIAqAAQAAAcAVAQQAVARAiAAQAgAAASgOQARgNAAgXQAAgXgQgMQgQgNgpgMQg1gPgYgWQgZgWAAghQAAglAegYQAdgYAvAAQAgAAAZANQAZAMAOAWQAOAWAAAaIgpAAQAAgcgSgRQgSgQghAAQgeAAgRANQgRAOAAAYQAAATAQANQAQANAnALQAmALAXANQAVANALARQALASAAAYQAAAmgeAXQgeAXgxAAQgfAAgcgNg");
	this.shape_230.setTransform(-81.7,-239.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_231.setTransform(-111,-240.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQANgRAUgJQAWgKAYAAQAoAAAXAVQAXAUAAAjIAABqQAAAgAJATIAAADIgqAAQgDgHgCgRQgcAdgmAAQgiAAgWgUgAg4AuQAAATANAKQAMALAUAAQASAAAQgKQASgJAHgQIAAgwIggAAQhHAAgBArg");
	this.shape_232.setTransform(-128.3,-235.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("Ag3B3IAAjoIAnAAIAAAbQATggAkAAQALAAAGAEIAAAlQgJgCgKAAQgmAAgOAhIAAClg");
	this.shape_233.setTransform(-146.6,-235.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_234.setTransform(-163,-238);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgPAKgHARIAAClIgpAAIAAjoIAmAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_235.setTransform(-181.7,-235.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AhEBaQgdgggBg0IAAgGQAAgiAOgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAaAeAAA4IAAAPIidAAQABAjAUAVQASAVAdAAQAVAAAPgIQAPgJALgOIAYATQgeAtg6AAQguAAgegfgAgkhFQgQARgEAgIBzAAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_236.setTransform(-205.2,-235.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AhWB5QghgoAAhDIAAgdQgBgrARghQAPghAcgSQAdgSAlAAQAxAAAfAcQAdAcAGAxIgqAAQgFgmgTgQQgSgRgfAAQgnAAgWAdQgXAdAAA2IAAAeQAAAzAWAeQAUAeAmAAQAiAAASgQQATgPAGgnIAqAAQgHAygeAbQgfAbgzAAQg3AAghgog");
	this.shape_237.setTransform(-231.1,-239.5);

	this.instance_1 = new lib.AirCSLogo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-391.4,-240.9,0.426,0.426,0,0,0,0.1,0.1);

	this.instance_2 = new lib.WindowRect();
	this.instance_2.parent = this;
	this.instance_2.shadow = new cjs.Shadow("#000000",5,5,28);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAPBOIAAgkIhHAAIAAgMIBGhrIAVAAIAABnIAWAAIAAAQIgWAAIAAAkgAANguIgtBIIAvAAIAAhMg");
	this.shape_238.setTransform(118.3,-54.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAZAAAQAOQAOAOADAYIgUAAQgDgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_239.setTransform(-282.4,-26.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_240.setTransform(-202.2,-55.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_241.setTransform(-250.6,-81.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJASAAQAZAAAOAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAIgIAEgTIAUAAQgDAYgPAOQgPANgaAAQgbAAgQgTg");
	this.shape_242.setTransform(-301.9,-83.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AhGCiIgPgCIAAghIALABQAUAAAMgIQALgIAHgWIAJgXIhTjlIArAAIA5CtIA3itIAqAAIhdELQgVA6gvAAg");
	this.shape_243.setTransform(-49.6,-230.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQAMgBAFAHQAGAGABAKQgBAKgGAHQgFAGgMAAQgLAAgGgGg");
	this.shape_244.setTransform(-79.6,-239.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AhWB5QgigoABhDIAAgdQAAgrAPghQAPghAdgSQAdgSAlAAQAxAAAeAcQAfAcAEAxIgpAAQgGgmgSgQQgRgRggAAQgnAAgWAdQgXAdAAA2IAAAeQAAAzAWAeQAUAeAmAAQAiAAASgQQATgPAGgnIApAAQgFAygfAbQgfAbgzAAQg3AAghgog");
	this.shape_245.setTransform(-99,-239.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgXAAQgVAAgPAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAVgJQAWgKAYAAQAoAAAXAVQAXAUABAjIAABqQAAAgAIATIAAADIgqAAQgDgHgDgRQgbAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhJAAABArg");
	this.shape_246.setTransform(-170.5,-235.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AA0ClIAAiaQAAgYgMgMQgLgMgYAAQgTAAgOALQgOAKgJAQIAAClIgnAAIAAlJIAnAAIAAB+QAbghApAAQBKAAAABSIAACag");
	this.shape_247.setTransform(-194.5,-240.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("ABHCdIhBjkIgFgXIgEAXIhDDkIglAAIhMk5IApAAIAyDWIAGApIAIglIA+jaIAjAAIA8DaIAIAmIAHgqIAxjWIApAAIhME5g");
	this.shape_248.setTransform(-226,-239.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAaAAAPAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAKgIACgTIAVAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_249.setTransform(-40,233.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIADAVIAEgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_250.setTransform(-56.9,233.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAOAAQAUAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgMAAQgOAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAOAAQALAAAIgGQAIgHABgJIATAAQAAAKgHAJQgGAJgLAFQgKAFgNAAQgWAAgOgPg");
	this.shape_251.setTransform(-140.2,235.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQALAAAHgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_252.setTransform(-200.1,235.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAJgPATAAQAFAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_253.setTransform(-244.9,235.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUgBQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_254.setTransform(-261,232.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_255.setTransform(-278.4,235.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_256.setTransform(-374.6,232.8);

	this.instance_3 = new lib.baselinelocal_airport24pxsvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-434.1,228,2.789,2.789,0,0,0,11.6,12);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_257.setTransform(-170.4,-81.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_258.setTransform(-277.3,-81.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_259.setTransform(-417.4,-83.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AhhCjIAAlBIAkAAIACAaQAYgeArAAQApAAAZAgQAYAfAAA4IAAAEQAAA0gYAhQgYAggqAAQgpAAgYgbIAABwgAg5hgIAABuQARAgAlAAQAcAAARgXQAQgXAAgrQAAgogQgXQgRgWgcAAQgkAAgSAgg");
	this.shape_260.setTransform(38.9,-231.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("Ag3B3IAAjoIAnAAIAAAbQATggAkAAQALAAAGAEIAAAlQgJgCgKAAQgmAAgOAhIAAClg");
	this.shape_261.setTransform(19.8,-235.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgQh2QgHgHABgKQgBgKAHgGQAFgHALABQALgBAGAHQAHAGgBAKQABAKgHAHQgGAGgLAAQgLAAgFgGg");
	this.shape_262.setTransform(5.9,-239.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("ABgCdIgfhSIiBAAIgeBSIgqAAIB3k5IAjAAIB3E5gAg0ApIBpAAIg1iRg");
	this.shape_263.setTransform(-13.9,-239.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgfBHQgPgJgIgRQgHgQgBgXIAAgKQAAgWAIgSQAIgRAPgJQAOgJARAAQATAAAOAJQAPAJAHARQAIARAAAXIAAAJQAAAXgIARQgHARgPAJQgOAJgTAAQgRAAgOgJgAgegvQgLAPAAAbIAAAKQAAAbALAQQALAPATAAQAUAAALgPQALgOAAgbIAAgLQABgcgMgPQgLgPgUAAQgSAAgMAPg");
	this.shape_264.setTransform(-242.5,-54.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgwBOIAAibIBhAAIAAARIhMAAIAAA1IBBAAIAAAQIhBAAIAABFg");
	this.shape_265.setTransform(-255.6,-54.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AAABPQgZAAgPgNQgPgOgBgZIAAhpIAVAAIAABpQAAARAJAJQAJAKARAAQARAAAKgKQAJgJAAgRIAAhpIAVAAIAABpQgBAWgNAOQgOAOgYACg");
	this.shape_266.setTransform(-269.3,-54.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AA5BOIAAg9IAChAIgzB9IgPAAIg0h9IADBAIAAA9IgVAAIAAibIAbAAIAyB+IAzh+IAbAAIAACbg");
	this.shape_267.setTransform(-286.1,-54.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AhFBZQgcggAAg3IAAgFQAAgiAMgbQANgaAXgPQAYgPAeAAQAnAAAaAYQAaAXACAmIgmAAQgBgXgQgOQgPgPgXAAQgdAAgQAWQgRAWAAApIAAAHQAAAoAQAVQARAWAeAAQAVAAAQgNQAQgNABgTIAmAAQgBAUgNASQgMASgWALQgVALgXAAQgvAAgcggg");
	this.shape_268.setTransform(-14.6,-235.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgQh2QgHgHAAgKQAAgKAHgGQAFgHALABQALgBAHAHQAFAGAAAKQAAAKgFAHQgHAGgLAAQgLAAgFgGg");
	this.shape_269.setTransform(-31.6,-239.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AguBvQgVgKgMgSQgMgSAAgUIAnAAQABAUAQAMQAOALAYAAQAWAAAOgJQAOgJAAgPQAAgRgMgIQgNgJgdgHQgegGgSgIQgRgJgJgNQgIgMAAgRQAAgdAYgUQAYgUAlAAQAnAAAZAVQAYAUAAAgIgoAAQAAgQgNgMQgOgMgVAAQgVAAgMAKQgNAJAAAPQAAAPAMAHQALAHAdAHQAeAHASAJQATAIAJANQAIANAAATQAAAfgYATQgZATgoAAQgbAAgWgKg");
	this.shape_270.setTransform(-77.7,-235.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AhwCdIAAk5IBYAAQAoABAgARQAeATASAhQARAiAAAqIAAATQAAAtgRAhQgRAhgfASQghASgpABgAhHB7IArAAQAvAAAbgeQAageAAg3IAAgRQAAg1gYgeQgagdgtAAIgwAAg");
	this.shape_271.setTransform(-113.6,-239.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgXAAQgWAAgOAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAWgJQAVgKAYAAQAoAAAXAVQAXAUABAjIAABqQgBAgAJATIAAADIgqAAQgEgHgCgRQgbAdglAAQgjAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAAQgKQASgJAHgQIAAgwIgfAAQhJAAABArg");
	this.shape_272.setTransform(-162.1,-235.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgxCaQgYgLgMgTIAUgYQAaAgAlAAQAcAAAQgQQAQgRAAgdIAAgUQgYAbgoAAQgpAAgZghQgZghAAg3QAAg3AZggQAZggAqAAQApAAAYAeIACgaIAkAAIAADiQAAAtgaAaQgbAagtAAQgZAAgYgKgAgphrQgQAXAAAsQAAAnAQAWQAQAWAcAAQAmAAARgiIAAhpQgSghglAAQgcAAgQAWg");
	this.shape_273.setTransform(-186.9,-231.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AheCdIAAk5IAqAAIAAEXICTAAIAAAig");
	this.shape_274.setTransform(-232.6,-239.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AhACPQgdgTgQghQgPgigBgsIAAgWQAAgtAQgjQAPgiAdgSQAdgTAkAAQAlAAAdASQAdASAPAjQAQAiAAAuIAAATQAAAugQAiQgPAigdATQgcASgmAAQgkAAgcgSgAg9hfQgWAegBA1IAAAWQAAA2AXAfQAWAfAnAAQAoAAAWgdQAWgeABg2IAAgWQAAg4gXgeQgWgdgoAAQgmAAgXAdg");
	this.shape_275.setTransform(-112.3,-239.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AhgCdIAAk5IDBAAIAAAjIiYAAIAABrICDAAIAAAgIiDAAIAACLg");
	this.shape_276.setTransform(-138.4,-239.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AhRCDQgfgcAAgwIAAjVIApAAIAADTQAAAiASATQATATAiAAQAjAAASgTQATgTAAgiIAAjTIApAAIAADUQAAAsgbAdQgcAcgvADIgLABQgzAAgegcg");
	this.shape_277.setTransform(-165.9,-239.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AByCdIAAh7IAEiCIhnD9IgeAAIhnj8IAFCBIAAB7IgqAAIAAk5IA1AAIBmD/IBmj/IA2AAIAAE5g");
	this.shape_278.setTransform(-199.4,-239.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("ABGCdIhFh/IhIAAIAAB/IgqAAIAAk5IBoAAQA0AAAcAZQAdAYAAAuQAAAdgQAVQgQAVgcALIBKCFIAAADgAhHgDIA/AAQAeAAATgQQASgPAAgbQAAgdgRgQQgSgPggAAIg/AAg");
	this.shape_279.setTransform(-230.8,-239.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_280.setTransform(-220.5,-24.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgGA6IgqhzIAUAAIAcBYIAdhYIAVAAIgqBzg");
	this.shape_281.setTransform(-241.7,-24.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_282.setTransform(-267.9,-82.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_283.setTransform(-416.3,-26.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AhICGQgZghAAg1IAAgDQAAg1AZggQAaghApAAQAoAAAYAcIAAh5IAnAAIAAFJIglAAIgCgZQgXAdgqAAQgoAAgaghgAgpgRQgQAWAAAsQAAAoAQAWQAQAWAcAAQAmAAASgiIAAhpQgSghglAAQgdAAgQAWg");
	this.shape_284.setTransform(-31.6,-240.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgOAKgJARIAAClIgnAAIAAjoIAlAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_285.setTransform(-55.6,-235.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgUCdIAAk5IApAAIAAE5g");
	this.shape_286.setTransform(-131,-239.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AA0B3IAAiZQgBgagKgLQgMgMgYgBQgSAAgPALQgPAKgIARIAAClIgoAAIAAjoIAmAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_287.setTransform(-184.8,-235.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgIAJQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEADQADAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgDg");
	this.shape_288.setTransform(33.8,147.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgFA8QgSAAgNgKQgMgLABgRIATAAQAAAKAHAGQAGAGALAAQAJAAAIgEQAIgFABgIQABgMgPgFIgSgGQgagIAAgUQABgQAOgJQANgKARAAQASAAAKAKQALAKAAAQIgTAAQAAgJgFgFQgHgFgJgBQgJAAgHAFQgHAFgBAIQgBAKAOAFIAIACQAUAFAJAIQAIAIgBAMQgBALgGAIQgHAIgKAFQgKADgJAAIgDAAg");
	this.shape_289.setTransform(26.3,142.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgXBTIAcilIATAAIgbClg");
	this.shape_290.setTransform(18.5,140);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgWBPIAThzIATAAIgTBzgAADg6QgCgDAAgFQAAgGACgDQAEgDAFAAQAFgBADAEQAEADgBAFQABAFgEADQgDADgFABQgFAAgEgDg");
	this.shape_291.setTransform(13.2,140.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_292.setTransform(4.1,142.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgSBBQgFgJABgOIALhHIgUAAIADgPIAUAAIAFgcIASAAIgEAcIAVAAIgDAPIgVAAIgLBIIAAAFQAAAIAIAAIAJgBIgBAQQgHACgGAAQgMAAgGgIg");
	this.shape_293.setTransform(-4.6,141.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_294.setTransform(-14.1,142.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgUBTQgQAAgKgMQgJgMgBgVIABgPQACgSAHgNQAIgOALgHQALgIAOABQASAAALAOIALg9IATAAIgcCkIgSAAIACgMQgNAPgTAAIgBgBgAgTgMQgIAHgFAMQgFANAAAOQAAAPAGAJQAGAIALABQAQAAANgRIAJg1QgGgQgRAAIgBAAQgKAAgJAHg");
	this.shape_295.setTransform(-25.5,140.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_296.setTransform(-43.1,142.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_297.setTransform(-52.1,142.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_298.setTransform(-62.5,142.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_299.setTransform(-78.4,142.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_300.setTransform(-96,142.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_301.setTransform(-106.3,142.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_302.setTransform(-114.7,139.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("Ag4BSIAcigIARAAIgCANQAOgQAUABQARAAAJAMQAKAMAAAVIgBANIAAADQgCARgHAOQgIAOgLAHQgLAHgNAAQgUgBgKgNIgKA4gAgOgvIgKA2QAHAQARAAQAOABAJgMQALgMADgVIABgJQAAgQgHgJQgFgIgMAAIAAgBQgQAAgMARg");
	this.shape_303.setTransform(-132.1,144.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_304.setTransform(-143.6,142.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_305.setTransform(-159,142.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAcBOIgWg/IgjAAIgLA/IgVAAIAcibIAuAAQAYAAANAMQANANgCAVQgBAPgKALQgJAKgQAGIAYBCIAAABgAgagBIAcAAQAQAAAKgIQALgIACgOQABgNgHgIQgGgIgPAAIgeAAg");
	this.shape_306.setTransform(-179.7,140.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgjBOIAYiKIgwAAIADgRIB0AAIgDARIgwAAIgYCKg");
	this.shape_307.setTransform(-191.5,140.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AADBDIgPABQgOAAgMgHQgLgHgGgNQgGgNgBgRQAAgNADgSQAEgTAIgPQAJgPAMgKQARgNAVABQAPAAALAHQALAHAHANQAGAOAAAQQABAJgBAJIgCAJQgGAuggATIAXAXIgOAMgAgOhCQgLAIgHARQgHAQgCAZIgBAGQAAAMADALQAEALAHAFQAHAGALAAQASABAOgPQANgPAFgbQACgNAAgLQABgVgIgMQgIgLgQgBIgBAAQgNAAgLAIg");
	this.shape_308.setTransform(-206.6,141.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgJBQQgOAAgNgGQgMgGgGgLQgHgLABgNIAUAAQgBAOAJAIQAJAJAPAAQAPAAAKgHQAKgHABgMQADgRgUgIIgSgHIgGgDQgggNACgaQACgNAHgKQAIgKANgFQANgGAOABQAOAAALAGQALAGAGALQAGALgBANIgUAAQABgOgIgIQgHgIgOAAQgOgBgKAHQgKAIgBAMQgCAQAWAIIAPAGIAIADQAeANgCAcQgCANgHAKQgIAJgNAFQgNAFgMAAIgDAAg");
	this.shape_309.setTransform(-220.3,140.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AASA7IANhLIAAgKQgBgPgQAAQgRgBgNATIgOBSIgUAAIAUhzIATAAIgDAPQAPgSAUABQAQAAAIALQAIALgCAUIgNBLg");
	this.shape_310.setTransform(-238.8,142.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_311.setTransform(-250.4,142.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_312.setTransform(-267.6,142.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgRBBQgHgJACgOIAMhHIgVAAIADgPIAUAAIAGgcIASAAIgGAcIAWAAIgDAPIgVAAIgLBIIAAAFQAAAIAIAAIAKgBIgCAQQgHACgGAAQgMAAgFgIg");
	this.shape_313.setTransform(-276.8,141.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_314.setTransform(-289.4,142.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_315.setTransform(-299.1,142.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_316.setTransform(-307.2,139.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_317.setTransform(-318,142.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAcBOIgWg/IgjAAIgLA/IgVAAIAcibIAuAAQAYAAANAMQANANgCAVQgBAPgKALQgJAKgQAGIAYBCIAAABgAgagBIAcAAQAQAAAKgIQALgIACgOQABgNgHgIQgGgIgPAAIgeAAg");
	this.shape_318.setTransform(-330.2,140.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgiBRIgIgCIAAgQIAFABQAKAAAGgEQAGgEADgLIAFgMIgqhyIAWAAIAcBXIAbhXIAVAAIguCFQgKAdgYAAg");
	this.shape_319.setTransform(-89.9,116.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJASAAQAZAAAOAOQAPAOADAYIgVAAQgCgTgJgIQgJgIgQAAQgTAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAIgIADgTIAVAAQgCAYgQAOQgPANgaAAQgbAAgQgTg");
	this.shape_320.setTransform(-114.6,112);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAjBOIgghxIgDgMIgBAMIgiBxIgSAAIgmibIAUAAIAZBqIADAVIAFgTIAehsIARAAIAfBsIADATIAEgVIAYhqIAVAAIgmCbg");
	this.shape_321.setTransform(-178,112);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgaANgQQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIAKAAAXQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_322.setTransform(-211.2,111.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBYIAWhYIAUAAIgiBzg");
	this.shape_323.setTransform(-244.8,114);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHADADQACAEAHAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_324.setTransform(-269.5,112.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_325.setTransform(-211.4,84.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_326.setTransform(-249.5,85.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUAAQgVAAgMgRgAgUgHQgIAJAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_327.setTransform(-288,83.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgjAwQgKgLAAgUIAAhLIAUAAIAABKQAAAaAWAAQAVAAAIgQIAAhUIAUAAIAABzIgTAAIAAgLQgMANgWAAQgSAAgKgLg");
	this.shape_328.setTransform(-305.4,85.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAeBRIAAg2QgMAMgUAAQgVAAgMgQQgNgQAAgaIAAgCQAAgbANgQQANgRAUABQAUgBAMAOIABgLIASAAIAACfgAgUg1QgIAMAAAWQAAATAIALQAJAMANAAQASAAAKgQIAAg4QgKgPgRAAQgOAAgJALg");
	this.shape_329.setTransform(-318,87.7);

	this.instance_4 = new lib.SQTRSquitterLogo("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-388.8,117.3,0.642,0.642,0,0,0,-0.1,0);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_330.setTransform(10.7,40.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_331.setTransform(-42,37.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_332.setTransform(-73.9,40.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgaANgQQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIAKAAAXQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_333.setTransform(-91.8,37.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgHA6IgphzIAUAAIAcBYIAdhYIAVAAIgqBzg");
	this.shape_334.setTransform(-114.7,40.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_335.setTransform(-123.1,40.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_336.setTransform(-182.4,37.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_337.setTransform(-217.2,40.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_338.setTransform(-227.5,40.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_339.setTransform(-282.1,37.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgMgQQgNgQAAgcQAAgbANgQQAMgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_340.setTransform(-296.6,42.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBYIAWhYIAUAAIgiBzg");
	this.shape_341.setTransform(-328.4,40.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_342.setTransform(-351.8,37.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_343.setTransform(-357.2,37.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgQBUIAAhkIgSAAIAAgPIASAAIAAgMQAAgTAKgKQAKgLARAAQAIAAAGACIgBAQIgLgBQgJAAgFAGQgGAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_344.setTransform(-375.9,37.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_345.setTransform(-403.1,37.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgJBOIAAiKIgyAAIAAgRIB3AAIAAARIgyAAIAACKg");
	this.shape_346.setTransform(-415.8,38.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_347.setTransform(-92,-13.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_348.setTransform(-111.6,-13.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_349.setTransform(-125.8,-16.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVABgKgNg");
	this.shape_350.setTransform(-136.4,-15.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAYAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_351.setTransform(-151.1,-13.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVABgKgNg");
	this.shape_352.setTransform(-166.9,-15.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgrB2QgWgKgMgRQgMgRAAgWIAgAAQAAAXARANQARANAbAAQAaAAAOgLQAOgKgBgTQABgSgNgKQgNgKghgKQgqgMgTgQQgTgSAAgaQAAgeAXgTQAYgTAkAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgOgNQgOgNgbAAQgXAAgNALQgPAKAAATQAAAQAOAKQAMALAfAIQAeAJASAKQASAKAIAOQAJAOAAATQAAAegYATQgXASgoAAQgZAAgWgKg");
	this.shape_353.setTransform(-182.4,-16.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("Ag2BHQgXgZgBgpIAAgFQAAgbALgVQAKgWAUgMQASgNAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQAAAcAQAQQAQARAWAAQARAAALgHQAMgHAIgLIAUAPQgXAkgvAAQglAAgXgZgAgdg3QgNAOgDAZIBbAAIAAgCQAAgYgMgNQgMgOgUAAQgSAAgNAOg");
	this.shape_354.setTransform(-222.3,-13.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgLBcIhDi3IAhAAIAuCNIAtiNIAhAAIhDC3g");
	this.shape_355.setTransform(-240.3,-13.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_356.setTransform(-258.7,-13.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgKgOAAgRIAfAAQABARAMAJQAMAJASAAQATAAAKgHQALgHAAgMQAAgOgKgGQgJgHgXgGQgYgFgPgGQgOgHgGgKQgHgKAAgOQAAgWAUgQQATgQAcAAQAgAAAUAQQATAQAAAaIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAHQgKAIABAMQgBAMAKAFQAJAHAXAEQAXAGAPAIQAPAGAGAKQAIAKgBAPQABAZgUAPQgUAPggAAQgVAAgRgIg");
	this.shape_357.setTransform(-277.8,-13.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgkBYQgRgIgKgOQgKgOAAgRIAhAAQAAARAMAJQAMAJATAAQARAAAMgHQAKgHAAgMQAAgOgJgGQgKgHgXgGQgYgFgOgGQgOgHgHgKQgHgKAAgOQAAgWATgQQATgQAdAAQAgAAATAQQAUAQAAAaIggAAQAAgNgKgKQgMgJgRAAQgQAAgKAHQgJAIgBAMQABAMAIAFQAKAHAWAEQAYAGAPAIQAOAGAIAKQAGAKAAAPQAAAZgTAPQgUAPgfAAQgWAAgRgIg");
	this.shape_358.setTransform(-295.8,-13.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_359.setTransform(-314.8,-13.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_360.setTransform(-329.7,-13.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_361.setTransform(-347.8,-16.6);

	this.instance_5 = new lib.awwitsacutelittleheart();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-404.3,-12.5,0.909,0.909);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_362.setTransform(-243.3,-81.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_363.setTransform(-278.8,-81.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_364.setTransform(-267.3,-159.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AhEBaQgdgggBg0IAAgGQAAgiAOgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAZAeAAA4IAAAPIicAAQABAjAUAVQASAVAdAAQAVAAAPgIQAOgJALgOIAZATQgdAtg7AAQguAAgegfgAgkhFQgQARgEAgIBzAAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_365.setTransform(-88.1,-235.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgNB0IhVjnIAoAAIA7CxIA5ixIApAAIhUDng");
	this.shape_366.setTransform(-110.7,-235.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AhEBaQgdggAAg0IAAgGQAAgiANgbQANgcAYgPQAXgQAbAAQAuAAAZAeQAZAegBA4IAAAPIicAAQABAjATAVQAUAVAcAAQAVAAAPgIQAPgJAKgOIAYATQgdAtg6AAQguAAgegfgAglhFQgQARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_367.setTransform(-194.8,-235.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAGAAADAEQADADAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_368.setTransform(-65.9,41.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_369.setTransform(-153.8,34.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_370.setTransform(-178.6,34.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_371.setTransform(-191,39.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAbAWAAQAVAAAIgRIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_372.setTransform(-203.1,37.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_373.setTransform(-235.2,34.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_374.setTransform(-295.8,39.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_375.setTransform(-403.1,34.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("ABiBeIAAh5QAAgUgJgJQgJgKgWAAQgRAAgMAKQgLALgDASIAAB5IgeAAIAAh4QAAgognAAQggAAgLAaIAACGIggAAIAAi4IAeAAIABAVQAVgYAiAAQAnAAANAeQAJgOAPgIQAPgIATAAQA+AAAABAIAAB7g");
	this.shape_376.setTransform(-279.2,-13.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAZQgIgCgJAAQgPAAgJAKQgIAIAAARIAAAUIAnAAIAAAYIgnAAIAACgg");
	this.shape_377.setTransform(-331.9,-17.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_378.setTransform(-348.1,-13.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgPB8IAAj3IAfAAIAAD3g");
	this.shape_379.setTransform(-362.5,-16.6);

	this.instance_6 = new lib.baselineinfo24pxsvg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-410.5,-15.4,2.405,2.405,0,0,0,11.9,12);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("Ag4DLQAigZAUg2QASg1ABhBIAAgHQAAgsgJgnQgJgngRgfQgRgfgVgQIAJgZQAcAPAZAmQAaAkAMAtQANArAAAyQAAAwgNAsQgNAsgZAlQgZAmgcAPg");
	this.shape_380.setTransform(49.1,-236.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AA0B3IAAiZQAAgagMgLQgLgMgYgBQgTAAgOALQgOAKgJARIAAClIgnAAIAAjoIAlAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_381.setTransform(30.5,-235.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQANgRAUgJQAWgKAYAAQAoAAAXAVQAXAUAAAjIAABqQABAgAIATIAAADIgqAAQgDgHgCgRQgcAdgmAAQgiAAgWgUgAg4AuQAAATANAKQANALATAAQASAAARgKQARgJAHgQIAAgwIggAAQhHAAgBArg");
	this.shape_382.setTransform(-43.8,-235.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AhEBaQgeggAAg0IAAgGQAAgiAOgbQANgcAYgPQAXgQAbAAQAuAAAZAeQAYAeAAA4IAAAPIicAAQABAjATAVQAUAVAcAAQAVAAAPgIQAPgJAKgOIAYATQgdAtg6AAQguAAgegfgAglhFQgQARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_383.setTransform(-107.6,-235.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AAzClIAAiaQABgYgLgMQgMgMgYAAQgSAAgPALQgPAKgHAQIAAClIgpAAIAAlJIApAAIAAB+QAaghApAAQBKAAAABSIAACag");
	this.shape_384.setTransform(-131.6,-240.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgFCuQgzhKAAhkQAAgwANgtQANgtAagkQAZglAcgPIAIAaQggAYgUAxQgTAygCA9IAAARQAABUAdA8QATAlAZAVIgIAYQgdgQgZglg");
	this.shape_385.setTransform(-164.6,-236.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQAMgBAFAHQAGAGABAKQgBAKgGAHQgFAGgMAAQgLAAgGgGg");
	this.shape_386.setTransform(-212.3,-239.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgRCdIh0k5IAtAAIBYECIBZkCIAtAAIh0E5g");
	this.shape_387.setTransform(-231.7,-239.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AhEBaQgeggABg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAaAeAAA4IAAAPIidAAQABAjAUAVQASAVAdAAQAVAAAPgIQAPgJALgOIAXATQgcAtg7AAQguAAgegfgAgkhFQgRARgEAgIB0AAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_388.setTransform(-24.4,-235.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AhHCGQgaghAAg1IAAgDQAAg1AaggQAZghAoAAQApAAAXAcIAAh5IAoAAIAAFJIgkAAIgDgZQgXAdgqAAQgoAAgZghgAgpgRQgRAWAAAsQAAAoARAWQARAWAbAAQAmAAARgiIAAhpQgRghgmAAQgcAAgQAWg");
	this.shape_389.setTransform(-73.9,-240.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAzClIAAiaQABgYgLgMQgMgMgYAAQgSAAgPALQgPAKgHAQIAAClIgpAAIAAlJIApAAIAAB+QAaghApAAQBKAAABBSIAACag");
	this.shape_390.setTransform(-157.6,-240.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgRh2QgFgHAAgKQAAgKAFgGQAGgHALABQAMgBAFAHQAHAGgBAKQABAKgHAHQgFAGgMAAQgLAAgGgGg");
	this.shape_391.setTransform(-212.9,-239.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AhpCdIAAk5IBmAAQAyABAaAUQAZAWAAApQAAAWgMARQgNAQgVAKQAZAHAPATQAOAUAAAcQAAApgbAYQgbAZgyAAgAhAB7IBDAAQAdAAAQgPQARgPAAgaQAAg5g9AAIhEAAgAhAgWIA+AAQAaAAARgOQAQgNAAgXQAAgagPgMQgPgLgeAAIg9AAg");
	this.shape_392.setTransform(-231.5,-239.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgdBEIgBAOIgSAAIAAilIAUAAIAAA+QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAcgMAPQgMAQgVABQgVAAgMgQgAgcgBIAAAyQAJASATAAQANAAAIgLQAIgLAAgXQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_393.setTransform(-112.7,69.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AAbA6IgbgsIgaAsIgXAAIAng6Igmg5IAXAAIAZAqIAagqIAXAAIgmA5IAnA6g");
	this.shape_394.setTransform(-180.4,71.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_395.setTransform(-220.5,69.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_396.setTransform(-299.6,70.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgdBEIgBAOIgSAAIAAilIAUAAIAAA+QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAcgMAPQgMAQgVABQgVAAgMgQgAgcgBIAAAyQAJASATAAQANAAAIgLQAIgLAAgXQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_397.setTransform(-321,69.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_398.setTransform(-338.8,71.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_399.setTransform(-409.1,69.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_400.setTransform(-419.1,70.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgOAUQAKgOAAgOIAAgSIATAAIAAAPQAAALgFAKQgGALgGAGg");
	this.shape_401.setTransform(414.9,49.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_402.setTransform(409.1,41.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgdBEIgBANIgSAAIAAijIAUAAIAAA9QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAACQAAAbgMAPQgMARgVgBQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgMQAIgLAAgWQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_403.setTransform(375.4,40.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_404.setTransform(357.6,43.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_405.setTransform(317.9,43.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAaBSIAAhNQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABAoIAABNg");
	this.shape_406.setTransform(305.9,40.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_407.setTransform(290.5,41.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIALAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_408.setTransform(238,40.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgjAxQgKgLAAgWIAAhKIAUAAIAABKQAAAaAWABQAVgBAIgRIAAhTIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgKg");
	this.shape_409.setTransform(220.5,43.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgPBUIAAhkIgTAAIAAgPIATAAIAAgMQAAgTAKgKQAIgLATAAQAGAAAHACIgBAQIgLgBQgJAAgGAGQgFAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_410.setTransform(182.6,40.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAGAAADAEQADADAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_411.setTransform(164,48);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_412.setTransform(127.3,41.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AAaBSIAAhNQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABAoIAABNg");
	this.shape_413.setTransform(70.4,40.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIALAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_414.setTransform(45.2,40.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgjBRIgHgCIAAgQIAGABQAKAAAFgEQAGgEAEgLIAEgMIgqhyIAWAAIAcBXIAbhXIAVAAIgvCFQgJAdgYAAg");
	this.shape_415.setTransform(9.4,45.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgdBEIgBANIgSAAIAAijIAUAAIAAA9QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAACQAAAbgMAPQgMARgVgBQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgMQAIgLAAgWQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_416.setTransform(-13.3,40.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_417.setTransform(-59.2,41.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_418.setTransform(-68.4,43.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_419.setTransform(-80.5,43.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIALAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_420.setTransform(-128.5,40.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAaBSIAAhNQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABAoIAABNg");
	this.shape_421.setTransform(-162.6,40.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_422.setTransform(-209.9,41.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_423.setTransform(-219.1,43.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgdBEIgBANIgSAAIAAijIAUAAIAAA9QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAACQAAAbgMAPQgMARgVgBQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgMQAIgLAAgWQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_424.setTransform(-243.6,40.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_425.setTransform(-261.4,43.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgjAxQgKgLAAgWIAAhKIAUAAIAABKQAAAaAWABQAVgBAIgRIAAhTIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgKg");
	this.shape_426.setTransform(-303.4,43.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAeBRIAAg3QgMANgUAAQgVAAgMgQQgNgRAAgaIAAgBQAAgcANgQQANgQAUAAQAUAAAMAPIABgMIASAAIAACfgAgUg1QgIAMAAAWQAAATAIAMQAJALANAAQASAAAKgQIAAg3QgKgQgRAAQgOAAgJALg");
	this.shape_427.setTransform(-316,45.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgjAxQgKgLAAgWIAAhKIAUAAIAABKQAAAaAWABQAVgBAIgRIAAhTIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgKg");
	this.shape_428.setTransform(-390.6,43.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("Ag8BGQgXgaAAgsIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAbQAXAZAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_429.setTransform(-214.9,-7.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_430.setTransform(-229.1,-10.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAAMAFAFQAEAGALgBIAPgCIAAAaQgMADgMAAQgVAAgKgNg");
	this.shape_431.setTransform(-239.7,-9.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgRgKgJQgJgLgTAAQgRAAgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOAAANgJQANgHAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_432.setTransform(-254.4,-7.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("Ag8BGQgXgaAAgsIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAbQAXAZAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_433.setTransform(-316.4,-7.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgdAQgRQAPgQAdAAQALAAALADIgCAaQgIgCgJgBQgPAAgJAKQgIAJAAAQIAAAUIAnAAIAAAYIgnAAIAACgg");
	this.shape_434.setTransform(-331.9,-11.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgPB9IAAj4IAfAAIAAD4g");
	this.shape_435.setTransform(-362.5,-10.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_436.setTransform(308.6,-52.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_437.setTransform(173.1,-55.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_438.setTransform(153.4,-52.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_439.setTransform(130,-52.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_440.setTransform(101.2,-54.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_441.setTransform(91.6,-52.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_442.setTransform(-232.3,-52.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_443.setTransform(-257.9,-54.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_444.setTransform(-272,-52.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_445.setTransform(-283.6,-52.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgJBSIAAikIATAAIAACkg");
	this.shape_446.setTransform(-292.2,-55.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_447.setTransform(-170.4,-81.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_448.setTransform(-182.8,-81.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_449.setTransform(-191.7,-83.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_450.setTransform(-217.5,-82.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_451.setTransform(-250.6,-81.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_452.setTransform(-259.7,-81.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_453.setTransform(-267.9,-82.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_454.setTransform(-277.3,-81.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_455.setTransform(-289,-81.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgOAKgIARIAAClIgoAAIAAjoIAlAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_456.setTransform(63.7,-235.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AA4B0Ig4ivIg3CvIggAAIhEjnIAoAAIAuCtIA2itIAfAAIA3CwIAtiwIAoAAIhEDng");
	this.shape_457.setTransform(34.9,-235.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgTCdIAAkWIhlAAIAAgjIDxAAIAAAjIhlAAIAAEWg");
	this.shape_458.setTransform(-19.7,-239.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AhLBYQgeghAAg2IAAgCQAAgiAOgcQANgbAYgPQAYgPAeAAQAvAAAeAhQAdAhAAA2IAAADQAAAigNAbQgNAagYAQQgYAPggAAQguAAgdghgAgvg/QgSAXAAArQAAAmASAYQASAXAdAAQAfAAARgYQASgXAAgqQAAgmgSgYQgSgYgeAAQgdAAgSAYg");
	this.shape_459.setTransform(-94.7,-235.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AhpCdIAAk5IBmAAQAyABAaAUQAZAWAAApQAAAWgMARQgNAQgVAKQAZAHAPATQAOAUAAAcQAAApgbAYQgbAZgyAAgAhAB7IBDAAQAdAAAQgPQARgPAAgaQAAg5g9AAIhEAAgAhAgWIA+AAQAaAAARgOQAQgNAAgXQAAgagPgMQgPgLgeAAIg9AAg");
	this.shape_460.setTransform(-231.5,-239.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_461.setTransform(-234.5,235.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAQQAMAPAAAdIAAABQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQAOAAAIgMQAJgKAAgWQAAgTgJgMQgIgMgOAAQgSABgJAQg");
	this.shape_462.setTransform(-325,237.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_463.setTransform(-350.2,235.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVAAgMgRgAgUgIQgIAKAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_464.setTransform(173.1,1.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_465.setTransform(197.1,-26.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_466.setTransform(173.1,-26.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_467.setTransform(164,-24.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_468.setTransform(118,-26.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_469.setTransform(164,-52.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_470.setTransform(141.6,-52.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_471.setTransform(118,-54.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_472.setTransform(101.2,-54.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_473.setTransform(173.1,-83.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_474.setTransform(164,-81.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_475.setTransform(141.6,-81.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_476.setTransform(118,-83.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_477.setTransform(101.2,-82.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_478.setTransform(77.5,-83.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgJBTIAAikIATAAIAACkg");
	this.shape_479.setTransform(-241.9,-26.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHADADQACAEAHAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_480.setTransform(-193.9,-54.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgjAxQgKgLAAgWIAAhKIAUAAIAABKQAAAbAWgBQAVABAIgSIAAhTIAUAAIAABzIgTAAIAAgLQgMANgWAAQgSAAgKgKg");
	this.shape_481.setTransform(-214.7,-52.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_482.setTransform(-246.2,-52.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_483.setTransform(-258.6,-55.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_484.setTransform(-270.5,-52.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgiBRIgIgBIAAgRIAGABQAJAAAGgEQAGgEADgLIAFgMIgqhxIAWAAIAcBWIAbhWIAVAAIgvCFQgJAcgYAAg");
	this.shape_485.setTransform(-185.1,-78.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgIBOIg6ibIAXAAIArCAIAtiAIAWAAIg6Cbg");
	this.shape_486.setTransform(-231.5,-83.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_487.setTransform(-262.4,-81.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQAAAKgHAJQgHAJgKAFQgLAFgLAAQgXAAgOgPg");
	this.shape_488.setTransform(-274.2,-81.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgbBKQgOgGgHgLQgIgKAAgOIAVAAQAAAOALAIQAKAJARAAQAQAAAJgHQAIgHAAgLQAAgMgIgGQgIgGgUgGQgbgIgMgKQgMgLAAgRQAAgSAPgMQAPgMAWAAQARAAAMAGQANAGAHALQAHALAAANIgVAAQAAgOgJgIQgJgIgRAAQgOAAgIAGQgJAHAAAMQAAAKAIAGQAIAHATAFQATAGALAFQALAHAGAJQAFAJAAAMQAAATgPALQgPALgYAAQgQAAgOgGg");
	this.shape_489.setTransform(-302.7,-83.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgTCdIAAk5IAnAAIAAE5g");
	this.shape_490.setTransform(-142.9,-239.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AhEBaQgeggABg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAtAAAaAeQAZAeAAA4IAAAPIidAAQABAjATAVQAUAVAcAAQAVAAAPgIQAOgJAMgOIAXATQgdAtg6AAQguAAgegfgAgkhFQgRARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgQASg");
	this.shape_491.setTransform(-171.2,-235.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_492.setTransform(-211.7,-240.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("ABfCdIgdhSIiDAAIgdBSIgrAAIB4k5IAjAAIB4E5gAg0ApIBpAAIg1iRg");
	this.shape_493.setTransform(-231.4,-239.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQASAAQAOAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgNgQQgMgQAAgcQAAgbAMgQQANgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_494.setTransform(-126.4,96.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgvBOIAAibIAWAAIAACKIBJAAIAAARg");
	this.shape_495.setTransform(-168.2,92);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgQBUIAAhkIgSAAIAAgPIASAAIAAgMQABgTAJgKQAKgLARAAQAIAAAGACIgBAQIgKgBQgLAAgFAGQgFAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_496.setTransform(-234.4,91.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAPQAMAQAAAdIAAABQAAAagMAQQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQANAAAJgLQAJgLAAgWQAAgTgJgMQgJgMgNAAQgSABgJAQg");
	this.shape_497.setTransform(-289.1,96.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_498.setTransform(-214.9,43.4);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVAAgKgMg");
	this.shape_499.setTransform(-239.7,41.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_500.setTransform(-254.4,43.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_501.setTransform(-316.4,43.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgdAQgRQAPgQAdAAQALAAALADIgCAaQgIgDgJAAQgPAAgJAKQgIAJAAAQIAAAUIAnAAIAAAYIgnAAIAACgg");
	this.shape_502.setTransform(-331.9,39.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AhHBhQgTgWgBgqIAAiXIAoAAIAACVQAAA1ArAAQAtABAPgjIAAioIAoAAIAADoIgmAAIgBgXQgXAbgsABQglgBgUgVg");
	this.shape_503.setTransform(-56.4,-235.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AhICGQgZghAAg1IAAgDQAAg1AZggQAZghApAAQAoAAAZAcIAAh5IAnAAIAAFJIgkAAIgCgZQgYAdgqAAQgoAAgaghgAgpgRQgQAWAAAsQAAAoAQAWQARAWAbAAQAmAAASgiIAAhpQgTghglAAQgcAAgQAWg");
	this.shape_504.setTransform(-144.4,-240.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AhEBaQgdggAAg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAuAAAZAeQAZAeAAA4IAAAPIidAAQABAjATAVQAUAVAcAAQAVAAAPgIQAOgJAMgOIAXATQgdAtg6AAQguAAgegfgAglhFQgPARgFAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_505.setTransform(-191.6,-235.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AA0B3IAAiZQgBgagKgLQgMgMgYgBQgSAAgPALQgOAKgJARIAAClIgnAAIAAjoIAlAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_506.setTransform(-127.3,-235.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_507.setTransform(-203.6,-240.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQALgBAHAHQAFAGABAKQgBAKgFAHQgHAGgLAAQgLAAgGgGg");
	this.shape_508.setTransform(-214.2,-239.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_237},{t:this.shape_236,p:{x:-205.2}},{t:this.shape_235},{t:this.shape_234,p:{x:-163}},{t:this.shape_233,p:{x:-146.6}},{t:this.shape_232,p:{x:-128.3}},{t:this.shape_231,p:{x:-111}},{t:this.shape_230,p:{x:-81.7}},{t:this.shape_229,p:{x:-62.1}},{t:this.shape_228},{t:this.shape_227,p:{x:-23.8}},{t:this.shape_226,p:{x:-10.6}},{t:this.shape_225,p:{x:7.2}},{t:this.shape_224},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_173},{t:this.shape_172,p:{x:-416.3,y:-26.4}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167,p:{x:-416.1,y:115.6}},{t:this.shape_166,p:{x:-416.3,y:143.9}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162,p:{x:-291.1,y:-81.2}},{t:this.shape_161,p:{x:-278.8,y:-81.3}},{t:this.shape_160,p:{y:-79}},{t:this.shape_159,p:{y:-83.2,x:-251.9}},{t:this.shape_158,p:{x:-243.3,y:-81.2}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:-214.2,y:-81.3}},{t:this.shape_154,p:{x:-202.2}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150,p:{x:-263}},{t:this.shape_149,p:{x:-254.4,y:-52.8}},{t:this.shape_148},{t:this.shape_147,p:{x:-226.3,y:-54.9}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:-292.6,y:-26.5}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:-262.2,y:-25.7}},{t:this.shape_139,p:{x:-252.2,y:-26.8}},{t:this.shape_138,p:{x:-240.3,y:-24.4}},{t:this.shape_137,p:{x:-228.1,y:-26.4}},{t:this.shape_136,p:{x:-218.3,y:-25.7}},{t:this.shape_135,p:{x:-208.4,y:-24.4}},{t:this.shape_134,p:{x:-199.1,y:-25.7}},{t:this.shape_133,p:{x:-192.5,y:-26.5}},{t:this.shape_132,p:{x:-183.6,y:-24.4}},{t:this.shape_131,p:{x:-171.2,y:-24.5}},{t:this.shape_130},{t:this.shape_129,p:{y:2}},{t:this.shape_128,p:{x:-292.9,y:1.9}},{t:this.shape_127,p:{x:-285.9,y:3.9}},{t:this.shape_126},{t:this.shape_125,p:{x:-265.2,y:1.6}},{t:this.shape_124,p:{x:-247.2,y:2}},{t:this.shape_123,p:{x:-235.6,y:4}},{t:this.shape_122,p:{x:-223.4}},{t:this.shape_121},{t:this.shape_120,p:{x:-198.7,y:4}},{t:this.shape_119,p:{x:-187.4,y:4}},{t:this.shape_118,p:{y:30.4}},{t:this.shape_117,p:{x:-292.9,y:30.3}},{t:this.shape_116,p:{y:32.3}},{t:this.shape_115,p:{y:32.4}},{t:this.shape_114,p:{x:-265.2,y:30}},{t:this.shape_113,p:{y:30.4}},{t:this.shape_112,p:{x:-233.8,y:32.4}},{t:this.shape_111,p:{x:-221.5,y:32.4}},{t:this.shape_110,p:{x:-212.3,y:31.1}},{t:this.shape_109,p:{x:-196.3,y:30.4}},{t:this.shape_108,p:{x:-183.5,y:32.4}},{t:this.shape_107,p:{x:-169,y:32.5}},{t:this.shape_106,p:{x:-154.6,y:32.3}},{t:this.shape_105,p:{y:58.8,x:-302.7}},{t:this.shape_104,p:{x:-291.5,y:60.8}},{t:this.shape_103,p:{y:63}},{t:this.shape_102,p:{y:60.8,x:-267.5}},{t:this.shape_101,p:{x:-258.8,y:58.4}},{t:this.shape_100,p:{y:58.8}},{t:this.shape_99,p:{x:-233.6,y:58.7}},{t:this.shape_98,p:{x:-225.3,y:60.8}},{t:this.shape_97,p:{x:-216.3,y:59.5}},{t:this.shape_96,p:{y:60.7,x:-208}},{t:this.shape_95,p:{x:-202.2,y:58.7}},{t:this.shape_94,p:{x:-193.6,y:60.8}},{t:this.shape_93,p:{x:-184.8,y:59.5}},{t:this.shape_92,p:{y:87.2}},{t:this.shape_91,p:{x:-283.7,y:86.8}},{t:this.shape_90,p:{x:-271.7,y:89.2}},{t:this.shape_89,p:{x:-263,y:86.8}},{t:this.shape_88,p:{x:-254.4,y:89.2}},{t:this.shape_87,p:{y:87.2}},{t:this.shape_86,p:{x:-226.3,y:87.1}},{t:this.shape_85,p:{x:-220.4,y:87.9}},{t:this.shape_84},{t:this.shape_83,p:{x:-193.4,y:87.2}},{t:this.shape_82,p:{x:-183.6,y:87.1}},{t:this.shape_81,p:{x:-176.6,y:89.1}},{t:this.shape_80},{t:this.shape_79,p:{x:-154.8,y:89.2}},{t:this.shape_78,p:{x:-144.2,y:89.1}},{t:this.shape_77,p:{x:-137.8,y:87.9}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:-302.1,y:172.4}},{t:this.shape_71,p:{x:-292.2,y:172}},{t:this.shape_70,p:{x:-283.6,y:174.4}},{t:this.shape_69,p:{x:-272,y:174.4}},{t:this.shape_68,p:{x:-257.9,y:172.4}},{t:this.shape_67,p:{x:-249.3,y:174.4}},{t:this.shape_66,p:{x:-240.9,y:172}},{t:this.shape_65,p:{x:-232.3,y:174.4}},{t:this.shape_64},{t:this.shape_63,p:{x:86.9,y:-83.2}},{t:this.shape_62},{t:this.shape_61,p:{y:-83.2,x:105.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:88.3,y:-26.5}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:118.6,y:2.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{y:32.4}},{t:this.shape_41,p:{x:106,y:30.3}},{t:this.shape_40,p:{x:118.2,y:30.4}},{t:this.shape_39,p:{x:75.8,y:58.8}},{t:this.shape_38},{t:this.shape_37,p:{y:60.8}},{t:this.shape_36,p:{x:105.9,y:58.8}},{t:this.shape_35,p:{x:118.2,y:58.8}},{t:this.shape_34,p:{y:87.2,x:75.8}},{t:this.shape_33},{t:this.shape_32,p:{y:89.2,x:97}},{t:this.shape_31,p:{x:104.6,y:87.2}},{t:this.shape_30,p:{x:118.2,y:87.2}},{t:this.shape_29,p:{y:172.4}},{t:this.shape_28,p:{x:91.6,y:174.4}},{t:this.shape_27,p:{x:101.2,y:173.1}},{t:this.shape_26,p:{x:118,y:172.4}},{t:this.shape_25,p:{x:130,y:174.4}},{t:this.shape_24,p:{x:141.6,y:174.4}},{t:this.shape_23,p:{x:153.4,y:174.4}},{t:this.shape_22,p:{x:164,y:174.3}},{t:this.shape_21},{t:this.shape_20,p:{x:185.5,y:174.4}},{t:this.shape_19},{t:this.shape_18,p:{x:294.4,y:-83.2}},{t:this.shape_17,p:{x:308.6,y:-81.2}},{t:this.shape_16},{t:this.shape_15,p:{x:305.7,y:-52.8}},{t:this.shape_14,p:{x:317,y:-52.8}},{t:this.shape_13,p:{x:294.4,y:-26.4}},{t:this.shape_12,p:{x:308.6,y:-24.4}},{t:this.shape_11,p:{y:2}},{t:this.shape_10,p:{x:308.6,y:4}},{t:this.shape_9,p:{y:30.4}},{t:this.shape_8,p:{x:305.7,y:32.4}},{t:this.shape_7,p:{x:317,y:32.4}},{t:this.shape_6,p:{y:58.8,x:294.4}},{t:this.shape_5,p:{y:60.8,x:308.6}},{t:this.shape_4,p:{y:87.2}},{t:this.shape_3,p:{y:89.2,x:308.6}},{t:this.shape_2,p:{y:172.4,x:293.2}},{t:this.shape_1,p:{y:174.4,x:305.7}},{t:this.shape,p:{y:174.4,x:317}},{t:this.close}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246,p:{x:-170.5}},{t:this.shape_231,p:{x:-153.1}},{t:this.shape_236,p:{x:-135.9}},{t:this.shape_245},{t:this.shape_244,p:{x:-79.6}},{t:this.shape_227,p:{x:-67.8}},{t:this.shape_243,p:{x:-49.6}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_41,p:{x:-416,y:-54.9}},{t:this.shape_172,p:{x:-416.3,y:-26.4}},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_8,p:{x:-289,y:-81.2}},{t:this.shape_161,p:{x:-277.3,y:-81.3}},{t:this.shape_97,p:{x:-267.9,y:-82.5}},{t:this.shape_81,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_85,p:{x:-198.3,y:-82.5}},{t:this.shape_82,p:{x:-191.7,y:-83.3}},{t:this.shape_12,p:{x:-182.8,y:-81.2}},{t:this.shape_155,p:{x:-170.4,y:-81.3}},{t:this.shape_105,p:{y:-54.8,x:-302.7}},{t:this.shape_10,p:{x:-291.1,y:-52.8}},{t:this.shape_131,p:{x:-278.8,y:-52.9}},{t:this.shape_160,p:{y:-50.6}},{t:this.shape_159,p:{y:-54.8,x:-251.9}},{t:this.shape_7,p:{x:-243.3,y:-52.8}},{t:this.shape_150,p:{x:-234.9}},{t:this.shape_90,p:{x:-226.2,y:-52.8}},{t:this.shape_106,p:{x:-214.2,y:-52.9}},{t:this.shape_240,p:{x:-202.2}},{t:this.shape_92,p:{y:-26.4}},{t:this.shape_239},{t:this.shape_72,p:{x:-268.3,y:-26.4}},{t:this.shape_40,p:{x:75.8,y:-83.2}},{t:this.shape_39,p:{x:88.2,y:-83.2}},{t:this.shape_42,p:{y:-81.2}},{t:this.shape_45,p:{x:106.3,y:-83.1}},{t:this.shape_36,p:{x:118.2,y:-83.2}},{t:this.shape_35,p:{x:75.8,y:-54.8}},{t:this.shape_31,p:{x:86.9,y:-54.8}},{t:this.shape_37,p:{y:-52.8}},{t:this.shape_61,p:{y:-54.8,x:105.7}},{t:this.shape_238},{t:this.shape_34,p:{y:-26.4,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-26.4}},{t:this.shape_32,p:{y:-24.4,x:97}},{t:this.shape_63,p:{x:104.6,y:-26.4}},{t:this.shape_166,p:{x:118,y:-26.5}},{t:this.shape_2,p:{y:-83.2,x:293.2}},{t:this.shape_1,p:{y:-81.2,x:305.7}},{t:this.shape,p:{y:-81.2,x:317}},{t:this.shape_6,p:{y:-54.8,x:294.4}},{t:this.shape_5,p:{y:-52.8,x:308.6}},{t:this.shape_4,p:{y:-26.4}},{t:this.shape_3,p:{y:-24.4,x:308.6}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246,p:{x:-170.5}},{t:this.shape_231,p:{x:-153.1}},{t:this.shape_236,p:{x:-135.9}},{t:this.shape_245},{t:this.shape_244,p:{x:-79.6}},{t:this.shape_229,p:{x:-67.8}},{t:this.shape_243,p:{x:-49.6}},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261,p:{x:19.8}},{t:this.shape_260},{t:this.shape_225,p:{x:63.3}},{t:this.shape_233,p:{x:84.5}},{t:this.shape_227,p:{x:97.3}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_259},{t:this.shape_41,p:{x:-416,y:-54.9}},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_25,p:{x:-289,y:-81.2}},{t:this.shape_258,p:{x:-277.3,y:-81.3}},{t:this.shape_97,p:{x:-267.9,y:-82.5}},{t:this.shape_81,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_71,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_110,p:{x:-198.3,y:-82.5}},{t:this.shape_133,p:{x:-191.7,y:-83.3}},{t:this.shape_23,p:{x:-182.8,y:-81.2}},{t:this.shape_257,p:{x:-170.4,y:-81.3}},{t:this.shape_92,p:{y:-54.8}},{t:this.shape_125,p:{x:-283.7,y:-55.2}},{t:this.shape_90,p:{x:-271.7,y:-52.8}},{t:this.shape_150,p:{x:-263}},{t:this.shape_20,p:{x:-254.4,y:-52.8}},{t:this.shape_87,p:{y:-54.8}},{t:this.shape_128,p:{x:-226.3,y:-54.9}},{t:this.shape_93,p:{x:-220.4,y:-54.1}},{t:this.shape_145},{t:this.shape_36,p:{x:75.8,y:-83.2}},{t:this.shape_174,p:{x:86.9}},{t:this.shape_37,p:{y:-81.2}},{t:this.shape_63,p:{x:104.6,y:-83.2}},{t:this.shape_35,p:{x:118.2,y:-83.2}},{t:this.shape_34,p:{y:-54.8,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-54.8}},{t:this.shape_32,p:{y:-52.8,x:97}},{t:this.shape_31,p:{x:104.6,y:-54.8}},{t:this.shape_166,p:{x:118,y:-54.9}},{t:this.shape_6,p:{y:-83.2,x:294.4}},{t:this.shape_17,p:{x:308.6,y:-81.2}},{t:this.shape_4,p:{y:-54.8}},{t:this.shape_12,p:{x:308.6,y:-52.8}},{t:this.close},{t:this.instance_3},{t:this.shape_109,p:{x:-387.2,y:233.2}},{t:this.shape_256,p:{x:-374.6,y:232.8}},{t:this.shape_117,p:{x:-365.9,y:233.1}},{t:this.shape_7,p:{x:-357.6,y:235.2}},{t:this.shape_66,p:{x:-343.7,y:232.8}},{t:this.shape_99,p:{x:-338.4,y:233.1}},{t:this.shape_161,p:{x:-329.6,y:235.1}},{t:this.shape_15,p:{x:-317.6,y:235.2}},{t:this.shape_95,p:{x:-303.8,y:233.1}},{t:this.shape,p:{y:235.2,x:-295.5}},{t:this.shape_255,p:{x:-278.4,y:235.2}},{t:this.shape_254},{t:this.shape_86,p:{x:-251.9,y:233.1}},{t:this.shape_253,p:{x:-244.9,y:235.1}},{t:this.shape_8,p:{x:-235.8,y:235.2}},{t:this.shape_24,p:{x:-224.2,y:235.2}},{t:this.shape_85,p:{x:-215.4,y:233.9}},{t:this.shape_252},{t:this.shape_10,p:{x:-188.3,y:235.2}},{t:this.shape_155,p:{x:-176,y:235.1}},{t:this.shape_131,p:{x:-163.8,y:235.1}},{t:this.shape_1,p:{y:235.2,x:-151.8}},{t:this.shape_251},{t:this.shape_136,p:{x:-131.4,y:233.9}},{t:this.shape_82,p:{x:-124.8,y:233.1}},{t:this.shape_5,p:{y:235.2,x:-115.9}},{t:this.shape_106,p:{x:-103.5,y:235.1}},{t:this.shape_27,p:{x:-88.7,y:233.9}},{t:this.shape_3,p:{y:235.2,x:-78.5}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_72,p:{x:-25.8,y:233.2}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_274,p:{x:-232.6}},{t:this.shape_236,p:{x:-210.2}},{t:this.shape_273,p:{x:-186.9}},{t:this.shape_272},{t:this.shape_231,p:{x:-144.8}},{t:this.shape_271},{t:this.shape_226,p:{x:-94.3}},{t:this.shape_270,p:{x:-77.7}},{t:this.shape_229,p:{x:-59.8}},{t:this.shape_233,p:{x:-43.3}},{t:this.shape_269},{t:this.shape_268,p:{x:-14.6}},{t:this.shape_227,p:{x:3.2}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_173},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_1,p:{y:-81.2,x:-289}},{t:this.shape_131,p:{x:-277.3,y:-81.3}},{t:this.shape_97,p:{x:-267.9,y:-82.5}},{t:this.shape_81,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_85,p:{x:-198.3,y:-82.5}},{t:this.shape_82,p:{x:-191.7,y:-83.3}},{t:this.shape_10,p:{x:-182.8,y:-81.2}},{t:this.shape_106,p:{x:-170.4,y:-81.3}},{t:this.shape_26,p:{x:-301.8,y:-54.8}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_39,p:{x:75.8,y:-83.2}},{t:this.shape_63,p:{x:86.9,y:-83.2}},{t:this.shape_37,p:{y:-81.2}},{t:this.shape_36,p:{x:105.9,y:-83.2}},{t:this.shape_35,p:{x:118.2,y:-83.2}},{t:this.shape_34,p:{y:-54.8,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-54.8}},{t:this.shape_32,p:{y:-52.8,x:97}},{t:this.shape_53,p:{x:106,y:-54.9}},{t:this.shape_41,p:{x:118.3,y:-54.9}},{t:this.shape_6,p:{y:-83.2,x:294.4}},{t:this.shape_5,p:{y:-81.2,x:308.6}},{t:this.shape_4,p:{y:-54.8}},{t:this.shape_3,p:{y:-52.8,x:308.6}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_105,p:{y:-83.2,x:-302.7}},{t:this.shape_1,p:{y:-81.2,x:-291.5}},{t:this.shape_103,p:{y:-79}},{t:this.shape_102,p:{y:-81.2,x:-267.5}},{t:this.shape_66,p:{x:-258.8,y:-83.6}},{t:this.shape_100,p:{y:-83.2}},{t:this.shape_86,p:{x:-233.6,y:-83.3}},{t:this.shape,p:{y:-81.2,x:-225.3}},{t:this.shape_97,p:{x:-216.3,y:-82.5}},{t:this.shape_96,p:{y:-81.3,x:-208}},{t:this.shape_82,p:{x:-202.2,y:-83.3}},{t:this.shape_24,p:{x:-193.6,y:-81.2}},{t:this.shape_85,p:{x:-184.8,y:-82.5}},{t:this.shape_34,p:{y:-83.2,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-83.2}},{t:this.shape_32,p:{y:-81.2,x:97}},{t:this.shape_53,p:{x:106,y:-83.3}},{t:this.shape_41,p:{x:118.3,y:-83.3}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_3,p:{y:-81.2,x:308.6}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_274,p:{x:-232.6}},{t:this.shape_225,p:{x:-209.5}},{t:this.shape_287},{t:this.shape_273,p:{x:-160.8}},{t:this.shape_286},{t:this.shape_270,p:{x:-113.8}},{t:this.shape_231,p:{x:-97}},{t:this.shape_232,p:{x:-79.7}},{t:this.shape_285},{t:this.shape_284},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_53,p:{x:-416,y:-54.9}},{t:this.shape_283},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_20,p:{x:-289,y:-81.2}},{t:this.shape_131,p:{x:-277.3,y:-81.3}},{t:this.shape_282,p:{x:-267.9,y:-82.5}},{t:this.shape_81,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_93,p:{x:-198.3,y:-82.5}},{t:this.shape_86,p:{x:-191.7,y:-83.3}},{t:this.shape_17,p:{x:-182.8,y:-81.2}},{t:this.shape_106,p:{x:-170.4,y:-81.3}},{t:this.shape_153},{t:this.shape_125,p:{x:-283.7,y:-55.2}},{t:this.shape_90,p:{x:-271.7,y:-52.8}},{t:this.shape_150,p:{x:-263}},{t:this.shape_15,p:{x:-254.4,y:-52.8}},{t:this.shape_87,p:{y:-54.8}},{t:this.shape_82,p:{x:-226.3,y:-54.9}},{t:this.shape_85,p:{x:-220.4,y:-54.1}},{t:this.shape_145},{t:this.shape_92,p:{y:-26.4}},{t:this.shape_8,p:{x:-283.8,y:-24.4}},{t:this.shape,p:{y:-24.4,x:-272.5}},{t:this.shape_97,p:{x:-263.5,y:-25.7}},{t:this.shape_12,p:{x:-253.3,y:-24.4}},{t:this.shape_281},{t:this.shape_1,p:{y:-24.4,x:-230.5}},{t:this.shape_280,p:{x:-220.5,y:-24.5}},{t:this.shape_39,p:{x:75.8,y:-83.2}},{t:this.shape_41,p:{x:88.3,y:-83.3}},{t:this.shape_42,p:{y:-81.2}},{t:this.shape_36,p:{x:105.9,y:-83.2}},{t:this.shape_63,p:{x:116.9,y:-83.2}},{t:this.shape_35,p:{x:75.8,y:-54.8}},{t:this.shape_31,p:{x:86.9,y:-54.8}},{t:this.shape_37,p:{y:-52.8}},{t:this.shape_172,p:{x:105.7,y:-54.8}},{t:this.shape_238},{t:this.shape_34,p:{y:-26.4,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-26.4}},{t:this.shape_32,p:{y:-24.4,x:97}},{t:this.shape_61,p:{y:-26.4,x:105.7}},{t:this.shape_167,p:{x:118.2,y:-26.4}},{t:this.shape_11,p:{y:-83.2}},{t:this.shape_10,p:{x:308.6,y:-81.2}},{t:this.shape_6,p:{y:-54.8,x:294.4}},{t:this.shape_5,p:{y:-52.8,x:308.6}},{t:this.shape_4,p:{y:-26.4}},{t:this.shape_3,p:{y:-24.4,x:308.6}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_248},{t:this.shape_367},{t:this.shape_270,p:{x:-172.2}},{t:this.shape_227,p:{x:-154.2}},{t:this.shape_225,p:{x:-133.9}},{t:this.shape_366},{t:this.shape_365,p:{x:-88.1}},{t:this.shape_233,p:{x:-68.1}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_364},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_105,p:{y:-83.2,x:-302.7}},{t:this.shape_28,p:{x:-291.1,y:-81.2}},{t:this.shape_363,p:{x:-278.8,y:-81.3}},{t:this.shape_160,p:{y:-79}},{t:this.shape_159,p:{y:-83.2,x:-251.9}},{t:this.shape_362},{t:this.shape_66,p:{x:-234.9,y:-83.6}},{t:this.shape_90,p:{x:-226.2,y:-81.2}},{t:this.shape_258,p:{x:-214.2,y:-81.3}},{t:this.shape_154,p:{x:-202.2}},{t:this.shape_34,p:{y:-83.2,x:75.8}},{t:this.shape_30,p:{x:88.2,y:-83.2}},{t:this.shape_37,p:{y:-81.2}},{t:this.shape_61,p:{y:-83.2,x:105.7}},{t:this.shape_167,p:{x:118.2,y:-83.2}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_23,p:{x:308.6,y:-81.2}},{t:this.close},{t:this.instance_5},{t:this.shape_361},{t:this.shape_360,p:{x:-329.7,y:-13.6}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356,p:{x:-258.7}},{t:this.shape_355},{t:this.shape_354},{t:this.shape_217,p:{x:-206.4,y:-13.6}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351,p:{x:-151.1}},{t:this.shape_350,p:{x:-136.4}},{t:this.shape_349,p:{x:-125.8,y:-16.8}},{t:this.shape_348,p:{x:-111.6}},{t:this.shape_347,p:{x:-92,y:-13.6}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_69,p:{x:-391.2,y:40.2}},{t:this.shape_344},{t:this.shape_17,p:{x:-366.1,y:40.2}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_12,p:{x:-342.9,y:40.2}},{t:this.shape_341},{t:this.shape_143,p:{x:-317.4,y:38.1}},{t:this.shape_257,p:{x:-308.6,y:40.1}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_133,p:{x:-276.7,y:38.1}},{t:this.shape_161,p:{x:-268,y:40.1}},{t:this.shape_65,p:{x:-256,y:40.2}},{t:this.shape_158,p:{x:-244.7,y:40.2}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_25,p:{x:-208.2,y:40.2}},{t:this.shape_255,p:{x:-191.1,y:40.2}},{t:this.shape_336,p:{x:-182.4,y:37.8}},{t:this.shape_119,p:{x:-174.1,y:40.2}},{t:this.shape_10,p:{x:-162.1,y:40.2}},{t:this.shape_98,p:{x:-144.8,y:40.2}},{t:this.shape_20,p:{x:-133.1,y:40.2}},{t:this.shape_335,p:{x:-123.1,y:40.1}},{t:this.shape_334,p:{x:-114.7,y:40.2}},{t:this.shape_15,p:{x:-103.4,y:40.2}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_93,p:{x:-64.7,y:38.9}},{t:this.shape_97,p:{x:-52,y:38.9}},{t:this.shape_331},{t:this.shape_128,p:{x:-33.3,y:38.1}},{t:this.shape_67,p:{x:-25,y:40.2}},{t:this.shape_14,p:{x:-8.2,y:40.2}},{t:this.shape_77,p:{x:0.8,y:38.9}},{t:this.shape_330,p:{x:10.7,y:40.2}},{t:this.shape_85,p:{x:19.9,y:38.9}},{t:this.shape_117,p:{x:26.5,y:38.1}},{t:this.shape_5,p:{y:40.2,x:35.5}},{t:this.shape_155,p:{x:47.8,y:40.1}},{t:this.shape_32,p:{y:40.2,x:56.6}},{t:this.instance_4},{t:this.shape_137,p:{x:-330.5,y:83.6}},{t:this.shape_329},{t:this.shape_328,p:{x:-305.4,y:85.7}},{t:this.shape_99,p:{x:-296.6,y:83.5}},{t:this.shape_327},{t:this.shape_109,p:{x:-269.5,y:83.6}},{t:this.shape_280,p:{x:-258.6,y:85.5}},{t:this.shape_326},{t:this.shape_131,p:{x:-237.5,y:85.5}},{t:this.shape_7,p:{x:-225.8,y:85.6}},{t:this.shape_95,p:{x:-217.4,y:83.5}},{t:this.shape_325,p:{x:-211.4,y:84.3}},{t:this.shape_124,p:{x:-330.4,y:112}},{t:this.shape_86,p:{x:-322.5,y:111.9}},{t:this.shape_106,p:{x:-313.7,y:113.9}},{t:this.shape_8,p:{x:-301.7,y:114}},{t:this.shape_31,p:{x:-285.7,y:112}},{t:this.shape_324,p:{x:-269.5,y:112.7}},{t:this.shape_3,p:{y:114,x:-259.3}},{t:this.shape_323,p:{x:-244.8,y:114}},{t:this.shape_111,p:{x:-230.5,y:114}},{t:this.shape_81,p:{x:-220.2,y:113.9}},{t:this.shape_322},{t:this.shape,p:{y:114,x:-199.1}},{t:this.shape_321},{t:this.shape_91,p:{x:-162.3,y:111.6}},{t:this.shape_135,p:{x:-150.3,y:114}},{t:this.shape_89,p:{x:-141.7,y:111.6}},{t:this.shape_1,p:{y:114,x:-133.1}},{t:this.shape_320},{t:this.shape_82,p:{x:-105,y:111.9}},{t:this.shape_136,p:{x:-99,y:112.7}},{t:this.shape_319,p:{x:-89.9,y:116.4}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_387,p:{x:-231.7}},{t:this.shape_386},{t:this.shape_268,p:{x:-195.3}},{t:this.shape_385},{t:this.shape_234,p:{x:-151.6}},{t:this.shape_384},{t:this.shape_383,p:{x:-107.6}},{t:this.shape_230,p:{x:-83.2}},{t:this.shape_229,p:{x:-63.6}},{t:this.shape_382},{t:this.shape_227,p:{x:-25.3}},{t:this.shape_244,p:{x:-12.1}},{t:this.shape_225,p:{x:5.7}},{t:this.shape_381},{t:this.shape_380},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_360,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_25,p:{x:-289,y:-81.2}},{t:this.shape_161,p:{x:-277.3,y:-81.3}},{t:this.shape_97,p:{x:-267.9,y:-82.5}},{t:this.shape_335,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_93,p:{x:-198.3,y:-82.5}},{t:this.shape_95,p:{x:-191.7,y:-83.3}},{t:this.shape_17,p:{x:-182.8,y:-81.2}},{t:this.shape_155,p:{x:-170.4,y:-81.3}},{t:this.shape_35,p:{x:75.8,y:-83.2}},{t:this.shape_41,p:{x:88.3,y:-83.3}},{t:this.shape_32,p:{y:-81.2,x:97}},{t:this.shape_34,p:{y:-83.2,x:105.9}},{t:this.shape_30,p:{x:118.2,y:-83.2}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_12,p:{x:308.6,y:-81.2}},{t:this.close},{t:this.instance_6,p:{y:-15.4}},{t:this.shape_379,p:{y:-16.6}},{t:this.shape_378,p:{y:-13.6}},{t:this.shape_377},{t:this.shape_356,p:{x:-316.4}},{t:this.shape_217,p:{x:-299.6,y:-13.6}},{t:this.shape_376,p:{y:-13.6}},{t:this.shape_351,p:{x:-254.4}},{t:this.shape_350,p:{x:-239.7}},{t:this.shape_349,p:{x:-229.1,y:-16.8}},{t:this.shape_348,p:{x:-214.9}},{t:this.shape_347,p:{x:-195.3,y:-13.6}},{t:this.shape_109,p:{x:-415.8,y:35.2}},{t:this.shape_375},{t:this.shape_86,p:{x:-394.4,y:35.1}},{t:this.shape_14,p:{x:-386.1,y:37.2}},{t:this.shape_7,p:{x:-369.3,y:37.2}},{t:this.shape_85,p:{x:-360.3,y:35.9}},{t:this.shape_90,p:{x:-350.4,y:37.2}},{t:this.shape_27,p:{x:-341.2,y:35.9}},{t:this.shape_82,p:{x:-334.6,y:35.1}},{t:this.shape_10,p:{x:-325.6,y:37.2}},{t:this.shape_131,p:{x:-313.3,y:37.1}},{t:this.shape_374},{t:this.shape_5,p:{y:37.2,x:-283.1}},{t:this.shape_20,p:{x:-270.9,y:37.2}},{t:this.shape,p:{y:37.2,x:-259.6}},{t:this.shape_325,p:{x:-245.2,y:35.9}},{t:this.shape_373},{t:this.shape_81,p:{x:-224.8,y:37.1}},{t:this.shape_3,p:{y:37.2,x:-215.4}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_136,p:{x:-163.8,y:35.9}},{t:this.shape_369},{t:this.shape_15,p:{x:-141.9,y:37.2}},{t:this.shape_106,p:{x:-124.7,y:37.1}},{t:this.shape_8,p:{x:-112.7,y:37.2}},{t:this.shape_134,p:{x:-103.7,y:35.9}},{t:this.shape_256,p:{x:-93.7,y:34.8}},{t:this.shape_1,p:{y:37.2,x:-81.8}},{t:this.shape_22,p:{x:-71.8,y:37.1}},{t:this.shape_368,p:{x:-65.9,y:41.9}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_392,p:{x:-231.5}},{t:this.shape_391},{t:this.shape_233,p:{x:-199}},{t:this.shape_268,p:{x:-181}},{t:this.shape_390},{t:this.shape_274,p:{x:-121.5}},{t:this.shape_225,p:{x:-98.4}},{t:this.shape_389},{t:this.shape_273,p:{x:-49.1}},{t:this.shape_388,p:{x:-24.4}},{t:this.shape_270,p:{x:-1.8}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_1,p:{y:-81.2,x:-289}},{t:this.shape_131,p:{x:-277.3,y:-81.3}},{t:this.shape_97,p:{x:-267.9,y:-82.5}},{t:this.shape_81,p:{x:-259.7,y:-81.3}},{t:this.shape_241,p:{x:-250.6,y:-81.2}},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_77,p:{x:-217.5,y:-82.5}},{t:this.shape_111,p:{x:-207.6,y:-81.2}},{t:this.shape_85,p:{x:-198.3,y:-82.5}},{t:this.shape_82,p:{x:-191.7,y:-83.3}},{t:this.shape_5,p:{y:-81.2,x:-182.8}},{t:this.shape_106,p:{x:-170.4,y:-81.3}},{t:this.shape_34,p:{y:-83.2,x:75.8}},{t:this.shape_63,p:{x:86.9,y:-83.2}},{t:this.shape_32,p:{y:-81.2,x:97}},{t:this.shape_45,p:{x:106.3,y:-83.1}},{t:this.shape_30,p:{x:118.2,y:-83.2}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_3,p:{y:-81.2,x:308.6}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_460},{t:this.shape_391},{t:this.shape_233,p:{x:-199}},{t:this.shape_268,p:{x:-181}},{t:this.shape_390},{t:this.shape_392,p:{x:-120.3}},{t:this.shape_459},{t:this.shape_246,p:{x:-70.1}},{t:this.shape_227,p:{x:-51.6}},{t:this.shape_458},{t:this.shape_225,p:{x:5.9}},{t:this.shape_457},{t:this.shape_456},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_360,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.4}},{t:this.shape_53,p:{x:-416,y:-54.9}},{t:this.shape_242,p:{y:-83.2}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_66,p:{x:-241.9,y:-83.6}},{t:this.shape_137,p:{x:-227.3,y:-83.2}},{t:this.shape_450},{t:this.shape_330,p:{x:-207.6,y:-81.2}},{t:this.shape_140,p:{x:-198.3,y:-82.5}},{t:this.shape_449},{t:this.shape_448,p:{x:-182.8,y:-81.2}},{t:this.shape_447},{t:this.shape_72,p:{x:-302.1,y:-54.8}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443,p:{y:-54.8}},{t:this.shape_119,p:{x:-249.3,y:-52.8}},{t:this.shape_150,p:{x:-240.9}},{t:this.shape_442},{t:this.shape_34,p:{y:-83.2,x:75.8}},{t:this.shape_63,p:{x:86.9,y:-83.2}},{t:this.shape_32,p:{y:-81.2,x:97}},{t:this.shape_41,p:{x:106,y:-83.3}},{t:this.shape_30,p:{x:118.2,y:-83.2}},{t:this.shape_6,p:{y:-54.8,x:77.5}},{t:this.shape_441,p:{x:91.6,y:-52.8}},{t:this.shape_440,p:{y:-54.1}},{t:this.shape_26,p:{x:118,y:-54.8}},{t:this.shape_439},{t:this.shape_24,p:{x:141.6,y:-52.8}},{t:this.shape_438,p:{x:153.4,y:-52.8}},{t:this.shape_22,p:{x:164,y:-52.9}},{t:this.shape_437},{t:this.shape_149,p:{x:185.5,y:-52.8}},{t:this.shape_240,p:{x:197.1}},{t:this.shape_9,p:{y:-83.2}},{t:this.shape_138,p:{x:305.7,y:-81.2}},{t:this.shape_98,p:{x:317,y:-81.2}},{t:this.shape_4,p:{y:-54.8}},{t:this.shape_436,p:{x:308.6,y:-52.8}},{t:this.close},{t:this.instance_6,p:{y:-9.3}},{t:this.shape_435},{t:this.shape_378,p:{y:-7.6}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_217,p:{x:-299.6,y:-7.6}},{t:this.shape_376,p:{y:-7.6}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_347,p:{x:-195.3,y:-7.6}},{t:this.shape_2,p:{y:41.2,x:-415.8}},{t:this.shape_162,p:{x:-402.9,y:43.2}},{t:this.shape_428},{t:this.shape_107,p:{x:-370.8,y:43.3}},{t:this.shape_147,p:{x:-359.8,y:41.1}},{t:this.shape_336,p:{x:-354.4,y:40.8}},{t:this.shape_89,p:{x:-349.1,y:40.8}},{t:this.shape_335,p:{x:-336.6,y:43.1}},{t:this.shape_120,p:{x:-327.6,y:43.2}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_143,p:{x:-294.6,y:41.1}},{t:this.shape_81,p:{x:-287.6,y:43.1}},{t:this.shape_104,p:{x:-278.5,y:43.2}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_132,p:{x:-231.4,y:43.2}},{t:this.shape_423},{t:this.shape_422},{t:this.shape_111,p:{x:-194.5,y:43.2}},{t:this.shape_110,p:{x:-185.3,y:41.9}},{t:this.shape_282,p:{x:-172.6,y:41.9}},{t:this.shape_421},{t:this.shape_133,p:{x:-153.9,y:41.1}},{t:this.shape_67,p:{x:-145.6,y:43.2}},{t:this.shape_420},{t:this.shape_88,p:{x:-116.1,y:43.2}},{t:this.shape_14,p:{x:-104.8,y:43.2}},{t:this.shape_324,p:{x:-95.8,y:41.9}},{t:this.shape_128,p:{x:-89.2,y:41.1}},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_117,p:{x:-52.6,y:41.1}},{t:this.shape_123,p:{x:-43.6,y:43.2}},{t:this.shape_363,p:{x:-31.3,y:43.1}},{t:this.shape_416},{t:this.shape_70,p:{x:-1.5,y:43.2}},{t:this.shape_415},{t:this.shape_112,p:{x:20.9,y:43.2}},{t:this.shape_258,p:{x:33.2,y:43.1}},{t:this.shape_414},{t:this.shape_93,p:{x:60.4,y:41.9}},{t:this.shape_413},{t:this.shape_69,p:{x:82.4,y:43.2}},{t:this.shape_7,p:{x:99.1,y:43.2}},{t:this.shape_85,p:{x:108.1,y:41.9}},{t:this.shape_90,p:{x:118,y:43.2}},{t:this.shape_412},{t:this.shape_99,p:{x:133.9,y:41.1}},{t:this.shape_108,p:{x:142.8,y:43.2}},{t:this.shape_257,p:{x:155.2,y:43.1}},{t:this.shape_411},{t:this.shape_68,p:{x:175.5,y:41.2}},{t:this.shape_410},{t:this.shape_319,p:{x:196.8,y:45.6}},{t:this.shape_79,p:{x:208.2,y:43.2}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_28,p:{x:250.8,y:43.2}},{t:this.shape_161,p:{x:268.6,y:43.1}},{t:this.shape_23,p:{x:280.9,y:43.2}},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_334,p:{x:329.2,y:43.3}},{t:this.shape_65,p:{x:340.5,y:43.2}},{t:this.shape_404},{t:this.shape_403},{t:this.shape_17,p:{x:387.6,y:43.2}},{t:this.shape_102,p:{y:43.2,x:399.9}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400,p:{x:-419.1,y:70.3}},{t:this.shape_399},{t:this.shape_25,p:{x:-397.1,y:71.6}},{t:this.shape_96,p:{y:71.5,x:-387.1}},{t:this.shape_20,p:{x:-378.1,y:71.6}},{t:this.shape_95,p:{x:-364.3,y:69.5}},{t:this.shape,p:{y:71.6,x:-356}},{t:this.shape_398,p:{x:-338.8,y:71.6}},{t:this.shape_397},{t:this.shape_328,p:{x:-309,y:71.8}},{t:this.shape_396},{t:this.shape_325,p:{x:-292.4,y:70.3}},{t:this.shape_12,p:{x:-282.2,y:71.6}},{t:this.shape_155,p:{x:-269.9,y:71.5}},{t:this.shape_241,p:{x:-252.4,y:71.6}},{t:this.shape_77,p:{x:-243.1,y:70.3}},{t:this.shape_27,p:{x:-230.5,y:70.3}},{t:this.shape_395},{t:this.shape_15,p:{x:-208.5,y:71.6}},{t:this.shape_8,p:{x:-191.5,y:71.6}},{t:this.shape_394},{t:this.shape_86,p:{x:-172.2,y:69.5}},{t:this.shape_134,p:{x:-166.3,y:70.3}},{t:this.shape_97,p:{x:-153.6,y:70.3}},{t:this.shape_10,p:{x:-143.4,y:71.6}},{t:this.shape_5,p:{y:71.6,x:-125.4}},{t:this.shape_393},{t:this.shape_136,p:{x:-103.5,y:70.3}},{t:this.shape_135,p:{x:-93.6,y:71.6}},{t:this.shape_82,p:{x:-85,y:69.5}},{t:this.shape_131,p:{x:-76.2,y:71.5}},{t:this.shape_3,p:{y:71.6,x:-58.4}},{t:this.shape_106,p:{x:-46.1,y:71.5}},{t:this.shape_1,p:{y:71.6,x:-34.1}},{t:this.shape_368,p:{x:-25.6,y:76.4}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_493},{t:this.shape_492,p:{x:-211.7}},{t:this.shape_383,p:{x:-194.5}},{t:this.shape_491},{t:this.shape_490},{t:this.shape_270,p:{x:-125.7}},{t:this.shape_231,p:{x:-108.9}},{t:this.shape_365,p:{x:-91.7}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_41,p:{x:-416,y:-54.9}},{t:this.shape_61,p:{y:-26.4,x:-416.3}},{t:this.shape_171},{t:this.shape_489},{t:this.shape_143,p:{x:-293.5,y:-83.3}},{t:this.shape_101,p:{x:-288.2,y:-83.6}},{t:this.shape_133,p:{x:-282.8,y:-83.3}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_258,p:{x:-250.1,y:-81.3}},{t:this.shape_486},{t:this.shape_90,p:{x:-218.6,y:-81.2}},{t:this.shape_71,p:{x:-209.9,y:-83.6}},{t:this.shape_66,p:{x:-204.6,y:-83.6}},{t:this.shape_149,p:{x:-196,y:-81.2}},{t:this.shape_485},{t:this.shape_129,p:{y:-54.8}},{t:this.shape_253,p:{x:-291.2,y:-52.9}},{t:this.shape_138,p:{x:-282.2,y:-52.8}},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_127,p:{x:-236.4,y:-52.9}},{t:this.shape_448,p:{x:-227,y:-52.8}},{t:this.shape_481},{t:this.shape_98,p:{x:-202.9,y:-52.8}},{t:this.shape_480},{t:this.shape_242,p:{y:-26.4}},{t:this.shape_120,p:{x:-289,y:-24.4}},{t:this.shape_257,p:{x:-277.3,y:-24.5}},{t:this.shape_282,p:{x:-267.9,y:-25.7}},{t:this.shape_335,p:{x:-259.7,y:-24.5}},{t:this.shape_241,p:{x:-250.6,y:-24.4}},{t:this.shape_479,p:{x:-241.9,y:-26.8}},{t:this.shape_137,p:{x:-227.3,y:-26.4}},{t:this.shape_400,p:{x:-217.5,y:-25.7}},{t:this.shape_330,p:{x:-207.6,y:-24.4}},{t:this.shape_93,p:{x:-198.3,y:-25.7}},{t:this.shape_128,p:{x:-191.7,y:-26.5}},{t:this.shape_441,p:{x:-182.8,y:-24.4}},{t:this.shape_161,p:{x:-170.4,y:-24.5}},{t:this.shape_118,p:{y:2}},{t:this.shape_117,p:{x:-292.9,y:1.9}},{t:this.shape_116,p:{y:3.9}},{t:this.shape_115,p:{y:4}},{t:this.shape_125,p:{x:-265.2,y:1.6}},{t:this.shape_113,p:{y:2}},{t:this.shape_438,p:{x:-233.8,y:4}},{t:this.shape_111,p:{x:-221.5,y:4}},{t:this.shape_85,p:{x:-212.3,y:2.7}},{t:this.shape_109,p:{x:-196.3,y:2}},{t:this.shape_436,p:{x:-183.5,y:4}},{t:this.shape_323,p:{x:-169,y:4.1}},{t:this.shape_155,p:{x:-154.6,y:3.9}},{t:this.shape_478},{t:this.shape_162,p:{x:91.6,y:-81.2}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_104,p:{x:130,y:-81.2}},{t:this.shape_475},{t:this.shape_132,p:{x:153.4,y:-81.2}},{t:this.shape_474},{t:this.shape_473},{t:this.shape_88,p:{x:185.5,y:-81.2}},{t:this.shape_154,p:{x:197.1}},{t:this.shape_29,p:{y:-54.8}},{t:this.shape_123,p:{x:91.6,y:-52.8}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_70,p:{x:130,y:-52.8}},{t:this.shape_470},{t:this.shape_112,p:{x:153.4,y:-52.8}},{t:this.shape_469},{t:this.shape_437},{t:this.shape_69,p:{x:185.5,y:-52.8}},{t:this.shape_240,p:{x:197.1}},{t:this.shape_18,p:{x:77.5,y:-26.4}},{t:this.shape_108,p:{x:91.6,y:-24.4}},{t:this.shape_440,p:{y:-25.7}},{t:this.shape_468},{t:this.shape_65,p:{x:130,y:-24.4}},{t:this.shape_94,p:{x:141.6,y:-24.4}},{t:this.shape_79,p:{x:153.4,y:-24.4}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_25,p:{x:185.5,y:-24.4}},{t:this.shape_465},{t:this.shape_13,p:{x:77.5,y:2}},{t:this.shape_28,p:{x:91.6,y:4}},{t:this.shape_27,p:{x:101.2,y:2.7}},{t:this.shape_26,p:{x:118,y:2}},{t:this.shape_20,p:{x:130,y:4}},{t:this.shape_24,p:{x:141.6,y:4}},{t:this.shape_23,p:{x:153.4,y:4}},{t:this.shape_78,p:{x:164,y:3.9}},{t:this.shape_464},{t:this.shape_15,p:{x:185.5,y:4}},{t:this.shape_122,p:{x:197.1}},{t:this.shape_11,p:{y:-83.2}},{t:this.shape_17,p:{x:308.6,y:-81.2}},{t:this.shape_6,p:{y:-54.8,x:294.4}},{t:this.shape_12,p:{x:308.6,y:-52.8}},{t:this.shape_2,p:{y:-26.4,x:293.2}},{t:this.shape_8,p:{x:305.7,y:-24.4}},{t:this.shape_67,p:{x:317,y:-24.4}},{t:this.shape_4,p:{y:2}},{t:this.shape_10,p:{x:308.6,y:4}},{t:this.close},{t:this.instance_3},{t:this.shape_72,p:{x:-386.6,y:233.2}},{t:this.shape_105,p:{y:233.2,x:-372.9}},{t:this.shape_159,p:{y:233.2,x:-364.6}},{t:this.shape_463},{t:this.shape_99,p:{x:-341.5,y:233.1}},{t:this.shape_81,p:{x:-334.5,y:235.1}},{t:this.shape_462},{t:this.shape_5,p:{y:235.2,x:-312.8}},{t:this.shape_22,p:{x:-302.2,y:235.1}},{t:this.shape_77,p:{x:-295.8,y:233.9}},{t:this.shape_95,p:{x:-283.7,y:233.1}},{t:this.shape_14,p:{x:-275.4,y:235.2}},{t:this.shape_131,p:{x:-258.2,y:235.1}},{t:this.shape_1,p:{y:235.2,x:-246.2}},{t:this.shape_461},{t:this.shape_96,p:{y:235.1,x:-224.2}},{t:this.shape_324,p:{x:-212.4,y:233.9}},{t:this.shape_256,p:{x:-202.4,y:232.8}},{t:this.shape_86,p:{x:-193.7,y:233.1}},{t:this.shape_7,p:{x:-185.4,y:235.2}},{t:this.shape,p:{y:235.2,x:-168.6}},{t:this.shape_97,p:{x:-159.6,y:233.9}},{t:this.shape_255,p:{x:-149.7,y:235.2}},{t:this.shape_136,p:{x:-140.4,y:233.9}},{t:this.shape_82,p:{x:-133.8,y:233.1}},{t:this.shape_3,p:{y:235.2,x:-124.9}},{t:this.shape_106,p:{x:-112.5,y:235.1}},{t:this.shape_368,p:{x:-103.7,y:239.9}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_392,p:{x:-231.5}},{t:this.shape_261,p:{x:-209.7}},{t:this.shape_505},{t:this.shape_246,p:{x:-168.2}},{t:this.shape_504},{t:this.shape_268,p:{x:-119.7}},{t:this.shape_233,p:{x:-99.8}},{t:this.shape_225,p:{x:-81}},{t:this.shape_503},{t:this.shape_270,p:{x:-32.9}},{t:this.shape_227,p:{x:-15}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_360,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_83,p:{x:-302.1,y:-83.2}},{t:this.shape_71,p:{x:-292.2,y:-83.6}},{t:this.shape_70,p:{x:-283.6,y:-81.2}},{t:this.shape_69,p:{x:-272,y:-81.2}},{t:this.shape_443,p:{y:-83.2}},{t:this.shape_14,p:{x:-249.3,y:-81.2}},{t:this.shape_66,p:{x:-240.9,y:-83.6}},{t:this.shape_65,p:{x:-232.3,y:-81.2}},{t:this.shape_6,p:{y:-83.2,x:77.5}},{t:this.shape_17,p:{x:91.6,y:-81.2}},{t:this.shape_27,p:{x:101.2,y:-82.5}},{t:this.shape_26,p:{x:118,y:-83.2}},{t:this.shape_25,p:{x:130,y:-81.2}},{t:this.shape_24,p:{x:141.6,y:-81.2}},{t:this.shape_12,p:{x:153.4,y:-81.2}},{t:this.shape_22,p:{x:164,y:-81.3}},{t:this.shape_473},{t:this.shape_20,p:{x:185.5,y:-81.2}},{t:this.shape_154,p:{x:197.1}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_10,p:{x:308.6,y:-81.2}},{t:this.close},{t:this.instance_6,p:{y:41.4}},{t:this.shape_379,p:{y:40.2}},{t:this.shape_378,p:{y:43.2}},{t:this.shape_502},{t:this.shape_501},{t:this.shape_217,p:{x:-299.6,y:43.2}},{t:this.shape_376,p:{y:43.2}},{t:this.shape_500},{t:this.shape_499},{t:this.shape_349,p:{x:-229.1,y:40}},{t:this.shape_498},{t:this.shape_347,p:{x:-195.3,y:43.2}},{t:this.shape_109,p:{x:-415.8,y:92}},{t:this.shape_139,p:{x:-403.1,y:91.6}},{t:this.shape_99,p:{x:-394.4,y:91.9}},{t:this.shape_7,p:{x:-386.1,y:94}},{t:this.shape_479,p:{x:-372.3,y:91.6}},{t:this.shape_95,p:{x:-366.9,y:91.9}},{t:this.shape_131,p:{x:-358.2,y:93.9}},{t:this.shape_15,p:{x:-346.2,y:94}},{t:this.shape_86,p:{x:-332.4,y:91.9}},{t:this.shape,p:{y:94,x:-324.1}},{t:this.shape_135,p:{x:-306.9,y:94}},{t:this.shape_497},{t:this.shape_398,p:{x:-277.2,y:94}},{t:this.shape_81,p:{x:-266.9,y:93.9}},{t:this.shape_325,p:{x:-260.5,y:92.7}},{t:this.shape_5,p:{y:94,x:-244.8}},{t:this.shape_496},{t:this.shape_85,p:{x:-222.2,y:92.7}},{t:this.shape_114,p:{x:-212.2,y:91.6}},{t:this.shape_8,p:{x:-200.2,y:94}},{t:this.shape_72,p:{x:-181.9,y:92}},{t:this.shape_495},{t:this.shape_68,p:{x:-159.9,y:92}},{t:this.shape_280,p:{x:-147.1,y:93.9}},{t:this.shape_1,p:{y:94,x:-138.1}},{t:this.shape_494},{t:this.shape_82,p:{x:-117.4,y:91.9}},{t:this.shape_3,p:{y:94,x:-108.4}},{t:this.shape_106,p:{x:-96.1,y:93.9}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_230,p:{x:-232.7}},{t:this.shape_508},{t:this.shape_507},{t:this.shape_226,p:{x:-192.8}},{t:this.shape_268,p:{x:-175.8}},{t:this.shape_225,p:{x:-152}},{t:this.shape_506},{t:this.shape_387,p:{x:-90.2}},{t:this.shape_246,p:{x:-64.3}},{t:this.shape_492,p:{x:-46.9}},{t:this.shape_231,p:{x:-36.2}},{t:this.shape_388,p:{x:-19}},{t:this.shape_243,p:{x:2.7}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_360,p:{x:-267.3,y:-159.9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.4,y:-83.2}},{t:this.shape_83,p:{x:-302.1,y:-83.2}},{t:this.shape_71,p:{x:-292.2,y:-83.6}},{t:this.shape_70,p:{x:-283.6,y:-81.2}},{t:this.shape_69,p:{x:-272,y:-81.2}},{t:this.shape_443,p:{y:-83.2}},{t:this.shape_14,p:{x:-249.3,y:-81.2}},{t:this.shape_66,p:{x:-240.9,y:-83.6}},{t:this.shape_65,p:{x:-232.3,y:-81.2}},{t:this.shape_6,p:{y:-83.2,x:77.5}},{t:this.shape_17,p:{x:91.6,y:-81.2}},{t:this.shape_27,p:{x:101.2,y:-82.5}},{t:this.shape_26,p:{x:118,y:-83.2}},{t:this.shape_25,p:{x:130,y:-81.2}},{t:this.shape_24,p:{x:141.6,y:-81.2}},{t:this.shape_12,p:{x:153.4,y:-81.2}},{t:this.shape_22,p:{x:164,y:-81.3}},{t:this.shape_473},{t:this.shape_20,p:{x:185.5,y:-81.2}},{t:this.shape_154,p:{x:197.1}},{t:this.shape_4,p:{y:-83.2}},{t:this.shape_10,p:{x:308.6,y:-81.2}},{t:this.close},{t:this.instance_6,p:{y:41.4}},{t:this.shape_379,p:{y:40.2}},{t:this.shape_378,p:{y:43.2}},{t:this.shape_502},{t:this.shape_501},{t:this.shape_217,p:{x:-299.6,y:43.2}},{t:this.shape_376,p:{y:43.2}},{t:this.shape_500},{t:this.shape_499},{t:this.shape_349,p:{x:-229.1,y:40}},{t:this.shape_498},{t:this.shape_347,p:{x:-195.3,y:43.2}},{t:this.shape_109,p:{x:-415.8,y:92}},{t:this.shape_139,p:{x:-403.1,y:91.6}},{t:this.shape_99,p:{x:-394.4,y:91.9}},{t:this.shape_7,p:{x:-386.1,y:94}},{t:this.shape_479,p:{x:-372.3,y:91.6}},{t:this.shape_95,p:{x:-366.9,y:91.9}},{t:this.shape_131,p:{x:-358.2,y:93.9}},{t:this.shape_15,p:{x:-346.2,y:94}},{t:this.shape_86,p:{x:-332.4,y:91.9}},{t:this.shape,p:{y:94,x:-324.1}},{t:this.shape_135,p:{x:-306.9,y:94}},{t:this.shape_497},{t:this.shape_398,p:{x:-277.2,y:94}},{t:this.shape_81,p:{x:-266.9,y:93.9}},{t:this.shape_325,p:{x:-260.5,y:92.7}},{t:this.shape_5,p:{y:94,x:-244.8}},{t:this.shape_496},{t:this.shape_85,p:{x:-222.2,y:92.7}},{t:this.shape_114,p:{x:-212.2,y:91.6}},{t:this.shape_8,p:{x:-200.2,y:94}},{t:this.shape_72,p:{x:-181.9,y:92}},{t:this.shape_495},{t:this.shape_68,p:{x:-159.9,y:92}},{t:this.shape_280,p:{x:-147.1,y:93.9}},{t:this.shape_1,p:{y:94,x:-138.1}},{t:this.shape_494},{t:this.shape_82,p:{x:-117.4,y:91.9}},{t:this.shape_3,p:{y:94,x:-108.4}},{t:this.shape_106,p:{x:-96.1,y:93.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505.4,-305.2,1022,622);


(lib.AirCSNetworkMapLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BdIAAi3IAVAAIABAPQAOgRAXAAQAYAAAOASQAOASAAAgIAAACQAAAegOASQgOASgXAAQgYAAgNgPIAABAgAggg3IAAA/QAKASAVAAQAPAAAKgNQAJgNAAgYQAAgXgJgNQgKgNgPAAQgVAAgKASg");
	this.shape.setTransform(65.7,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA6QgNgLAAgSQAAgUAQgLQAQgLAbAAIAWAAIAAgLQAAgMgHgHQgHgHgNAAQgMAAgIAGQgIAHAAAIIgXAAQAAgKAHgJQAHgJAMgGQAMgFAOAAQAWAAANAMQAOALAAAUIAAA8QAAASAFALIAAACIgYAAQgCgEgBgKQgQARgVAAQgUAAgMgLgAgfAaQAAALAHAGQAHAGALAAQAKAAAJgGQAKgFAEgJIAAgbIgRAAQgpAAAAAYg");
	this.shape_1.setTransform(51.5,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABBBZIAAhFIAChKIg6CPIgRAAIg7iPIADBKIAABFIgYAAIAAixIAeAAIA6CQIA6iQIAfAAIAACxg");
	this.shape_2.setTransform(33.7,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcBeIgtg9IgOAPIAAAuIgXAAIAAi7IAXAAIAABxIAMgPIAogqIAcAAIgzA2IA5BNg");
	this.shape_3.setTransform(11,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBEIAAiEIAWAAIAAAPQALgRAUAAQAHAAADABIAAAVIgLgBQgVABgIASIAABeg");
	this.shape_4.setTransform(0.2,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrAyQgQgTAAgfIAAAAQAAgUAHgPQAIgQAOgIQANgJARAAQAbAAARATQAQATAAAeIAAABQAAAUgHAPQgIAQgNAIQgOAJgSAAQgaAAgRgTgAgagkQgLANAAAYQAAAWALAOQAKANAQAAQASAAAJgNQALgOAAgXQAAgWgLgOQgKgNgRAAQgQAAgKANg");
	this.shape_5.setTransform(-11.9,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgBCIgghjIgfBjIgSAAIgniDIAXAAIAaBiIAfhiIARAAIAfBkIAahkIAXAAIgnCDg");
	this.shape_6.setTransform(-28.5,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDBLQgIgKAAgRIAAhRIgYAAIAAgRIAYAAIAAghIAWAAIAAAhIAYAAIAAARIgYAAIAABSQAAAHADAEQADAEAIAAIALgBIAAASQgJADgIAAQgQAAgGgJg");
	this.shape_7.setTransform(-42.4,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAzQgRgSAAgdIAAgEQAAgTAHgQQAIgPANgJQAOgJAPAAQAaAAAOARQAOARAAAgIAAAIIhZAAQABAUALAMQALAMAQAAQAMAAAIgFQAIgFAHgIIAOALQgRAagiAAQgZAAgRgSgAgUgnQgKAKgCASIBCAAIAAgCQgBgRgJgKQgIgJgOAAQgNAAgJAKg");
	this.shape_8.setTransform(-52.6,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAtBZIhZiIIAACIIgYAAIAAixIAYAAIBZCJIAAiJIAYAAIAACxg");
	this.shape_9.setTransform(-68.4,22.2);

	this.instance = new lib.AirCSLogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.3,-16.2,0.378,0.378,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-38.5,157.1,77.2);


// stage content:
(lib.AirCSInteractive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//Information Window
		var inf = this.inwin;
		//Defines the stage as a variable
		var root = this;
		//Legend
		var lg = this.legend;
		//Central
		var cent = this.map.cnt;
		//Whale City
		var wc = this.map.wc;
		//WCA
		var wca = this.map.wca;
		//Legal
		var ld = this.map.ld;
		//Rahilu's UFO
		var rmufo = this.map.rmufo;
		//Long island
		var lng = this.map.lng;
		//Westover
		var wst = this.map.wst;
		//theStation
		var vic = this.map.vic;
		//Birch Lodges
		var blo = this.map.blo;
		//Birch Boat
		var bbt = this.map.bbt;
		//Alee Isle
		var ali = this.map.ali;
		//Breadcroust
		var bco = this.map.bco;
		//Silicon Valley
		var sil = this.map.sil;
		
		
		cent.on("click",function(evt){
			//Changes the frame of the information window.
			inf.gotoAndStop(0);
			//Plays animation.
			root.gotoAndPlay(1);
		});
		
		wc.on("click",function(evt){
			inf.gotoAndStop(1);
			root.gotoAndPlay(1);
		});
		
		wca.on("click",function(evt){
			inf.gotoAndStop(2);
			root.gotoAndPlay(1);
		});
		
		ld.on("click",function(evt){
			inf.gotoAndStop(3);
			root.gotoAndPlay(1);
		});
		
		rmufo.on("click",function(evt){
			inf.gotoAndStop(4);
			root.gotoAndPlay(1);
		});
		
		lng.on("click",function(evt){
			inf.gotoAndStop(5);
			root.gotoAndPlay(1);
		});
		
		wst.on("click",function(evt){
			inf.gotoAndStop(6);
			root.gotoAndPlay(1);
		});
		
		vic.on("click",function(evt){
			inf.gotoAndStop(7);
			root.gotoAndPlay(1);
		});
		
		blo.on("click",function(evt){
			inf.gotoAndStop(8);
			root.gotoAndPlay(1);
		});
		
		bbt.on("click",function(evt){
			inf.gotoAndStop(9);
			root.gotoAndPlay(1);
		});
		
		ali.on("click",function(evt){
			inf.gotoAndStop(10);
			root.gotoAndPlay(1);
		});
		bco.on("click",function(evt){
			inf.gotoAndStop(11);
			root.gotoAndPlay(1);
		});
		
		sil.on("click",function(evt){
			inf.gotoAndStop(12);
			root.gotoAndPlay(1);
		});
		
		
		lg.on("click", function(evt){
			lg.play();
		});
	}
	this.frame_15 = function() {
		this.stop();
		var root = this;
		var closebtn = this.inwin.close;
		
		closebtn.on("click", function(evt){
			root.gotoAndPlay(16);
		});
	}
	this.frame_32 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(17).call(this.frame_32).wait(1));

	// Information Boxes
	this.inwin = new lib.InformationWindow();
	this.inwin.parent = this;
	this.inwin.setTransform(645,356.2,0.655,0.655,0,0,0,0.6,0.8);
	this.inwin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.inwin).to({regX:0,regY:0,scaleX:1,scaleY:1,x:644.7,y:355.9,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regX:0.1,scaleX:0.66,scaleY:0.66,y:355.8,alpha:0},16,cjs.Ease.get(-1)).wait(1));

	// Hotbar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWArQgJgHAAgNQAAgIAFgHQAEgGAIgDQgHgDgDgGQgEgFAAgIQAAgMAIgIQAIgHAMAAQANAAAIAHQAIAIAAAMQAAAIgEAFQgDAGgHAEQAIACAEAGQAFAHAAAIQAAANgJAHQgJAIgOAAQgNAAgJgIgAgNAJQgFAFAAAJQAAAIAFAFQAFAFAIAAQAJAAAFgFQAFgFAAgIQAAgJgFgFQgGgFgIAAQgIAAgFAFgAgLgjQgFAEAAAIQAAAIAFAFQAEAEAHAAQAIAAAEgEQAFgFAAgIQAAgHgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape.setTransform(1274.1,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAyIAAhUIgYAKIAAgLIAjgOIACAAIAABjg");
	this.shape_1.setTransform(1265.4,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWApQgIgLAAgVIAAgQQAAgWAHgKQAIgLAPAAQAQAAAIAKQAHAKAAAWIAAAPQAAAXgHAKQgIALgQAAQgPAAgHgKgAgNggQgFAHAAAPIAAATQAAAQAFAIQAFAIAIAAQAJAAAFgHQAFgIAAgPIAAgUQAAgQgFgHQgEgIgKAAQgJAAgEAIg");
	this.shape_2.setTransform(1258.4,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAgJIAhgnQAJgIACgFQADgFAAgGQAAgIgFgFQgEgFgHAAQgJAAgGAFQgFAGAAAJIgNAAQAAgNAJgJQAJgJAPABQANgBAIAIQAIAHAAANQAAAOgTAUIgaAcIAyAAIAAALg");
	this.shape_3.setTransform(1250.6,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJANQAHgJAAgJIAAgMIAMAAIAAAKQAAAHgEAHQgDAGgFAEg");
	this.shape_4.setTransform(1241.6,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVArQgIgHgBgNIAMAAQABAJAFAEQAFAEAHAAQAJAAAFgGQAFgGAAgKQAAgKgGgHQgFgEgIgBQgIAAgFAEIgEABIgKgBIAFgyIAyAAIAAAMIgnAAIgDAcQAHgFAJAAQANAAAIAJQAIAIAAAQQAAAOgIAKQgIAIgPABQgMAAgJgIg");
	this.shape_5.setTransform(1236.7,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAyIAAhUIgYAKIAAgLIAjgOIACAAIAABjg");
	this.shape_6.setTransform(1227.8,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBApQgFgFAAgJIAAgtIgNAAIAAgKIANAAIAAgSIAMAAIAAASIAOAAIAAAKIgOAAIAAAtQAAAEACADQACACAEAAIAGgBIAAAKIgKACQgIAAgDgGg");
	this.shape_7.setTransform(1218.8,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcQgJgKAAgSIAAgBQAAgKAEgIQAEgJAHgEQAIgGAJAAQAMABAJAHQAHAIABAMIgMAAQAAgIgFgEQgFgFgHAAQgJAAgFAHQgGAHAAANIAAABQAAANAGAHQAFAHAJAAQAHAAAFgEQAEgEABgGIAMAAQAAAGgEAGQgEAFgHAEQgHAEgHAAQgPAAgIgLg");
	this.shape_8.setTransform(1213.1,30.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAtQgJgFgFgLQgFgLAAgOIAAgGQAAgOAFgLQAFgLAJgGQAJgGALAAQAMAAAJAGQAJAFAFALQAFALAAAPIAAAFQAAAPgFALQgFALgJAFQgJAGgMAAQgLAAgJgGgAgSgdQgIAJAAARIAAAGQAAARAIAKQAGAKAMAAQANAAAHgJQAHgKAAgRIAAgGQAAgSgHgJQgHgKgNAAQgMAAgGAKg");
	this.shape_9.setTransform(1204.5,29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWArQgIgLAAgRIAAgBQAAgQAIgKQAIgLANAAQAMAAAIAJIAAgmIAMAAIAABoIgLAAIgBgIQgIAJgMAAQgNAAgIgKgAgMgFQgGAHAAAOQAAAMAGAHQAFAHAIAAQAMAAAGgKIAAghQgGgLgMAAQgIAAgFAHg");
	this.shape_10.setTransform(1192.1,28.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgRIAAgCQAAgLAEgIQAEgJAIgEQAHgGAIAAQAOAAAIAKQAIAJAAASIAAAFIgxAAQABAKAGAIQAGAGAIAAQAHAAAFgDQAEgDAEgEIAHAGQgJAPgSAAQgPAAgJgLgAgLgVQgFAFgBALIAkAAIAAgCQgBgJgEgFQgFgGgIAAQgHAAgFAGg");
	this.shape_11.setTransform(1184.7,30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBApQgFgFAAgJIAAgtIgNAAIAAgKIANAAIAAgSIAMAAIAAASIAOAAIAAAKIgOAAIAAAtQAAAEACADQACACAEAAIAGgBIAAAKIgKACQgIAAgDgGg");
	this.shape_12.setTransform(1178.5,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAgQgIgGAAgKQAAgLAJgGQAJgGAPAAIAMAAIAAgFQAAgIgDgDQgFgEgHAAQgGAAgFAEQgFADAAAEIgMAAQAAgFAEgFQAEgFAHgEQAGgCAHgBQANABAIAGQAGAHABALIAAAgQAAALADAGIAAABIgOAAIgCgIQgJAKgKAAQgMAAgGgHgAgRAPQAAAFAEAEQAEAEAGgBQAFAAAFgDQAGgDACgFIAAgPIgJAAQgXAAAAAOg");
	this.shape_13.setTransform(1172.6,30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWArQgIgLAAgRIAAgBQAAgQAIgKQAIgLANAAQAMAAAIAJIAAgmIAMAAIAABoIgLAAIgBgIQgIAJgMAAQgNAAgIgKgAgMgFQgGAHAAAOQAAAMAGAHQAFAHAIAAQAMAAAGgKIAAghQgGgLgMAAQgIAAgFAHg");
	this.shape_14.setTransform(1164.7,28.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeA0IAAhlIALAAIABAIQAIgKAMAAQAOAAAIAKQAHALAAARIAAACQAAAPgHALQgIAKgNAAQgNAAgIgJIAAAkgAgSgeIAAAjQAGAKAMAAQAIAAAFgIQAGgHAAgNQAAgMgGgIQgFgHgIAAQgMAAgGAKg");
	this.shape_15.setTransform(1157.1,31.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAqQgKgKAAgOIAAhEIANAAIAABDQAAAKAGAHQAGAFAKAAQALAAAGgFQAGgHAAgKIAAhDIANAAIAABDQAAAOgIAJQgKAJgPABIgDABQgPgBgKgIg");
	this.shape_16.setTransform(1148.5,29.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWApQgIgLAAgVIAAgQQAAgWAHgKQAIgLAPAAQAQAAAIAKQAHAKAAAWIAAAPQAAAXgHAKQgIALgQAAQgPAAgHgKgAgNggQgFAHAAAPIAAATQAAAQAFAIQAFAIAIAAQAJAAAFgHQAFgIAAgPIAAgUQAAgQgFgHQgEgIgKAAQgJAAgEAIg");
	this.shape_17.setTransform(1274.1,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQACgDADAAQAEAAACADQACACAAACQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_18.setTransform(1268.2,14.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWApQgIgLAAgVIAAgQQAAgWAHgKQAIgLAPAAQAQAAAIAKQAHAKAAAWIAAAPQAAAXgHAKQgIALgQAAQgPAAgHgKgAgNggQgFAHAAAPIAAATQAAAQAFAIQAFAIAIAAQAJAAAFgHQAFgIAAgPIAAgUQAAgQgFgHQgEgIgKAAQgJAAgEAIg");
	this.shape_19.setTransform(1262.5,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQACgDADAAQAEAAACADQACACAAACQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_20.setTransform(1256.7,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAyIAAhUIgYAKIAAgLIAjgOIACAAIAABjg");
	this.shape_21.setTransform(1250.1,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQACgDADAAQAEAAACADQACACAAACQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_22.setTransform(1241.7,14.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAlIgahJIAMAAIASA4IATg4IAMAAIgaBJg");
	this.shape_23.setTransform(1236.5,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeA0IAAhlIALAAIABAIQAIgKAMAAQAOAAAIAKQAHALAAARIAAABQAAAQgHAKQgIALgNAAQgNAAgIgJIAAAkgAgSgeIAAAjQAGAKAMgBQAIABAFgIQAGgHAAgNQAAgMgGgIQgFgHgIAAQgMAAgGAKg");
	this.shape_24.setTransform(1225.9,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAgQgGgGgBgKQAAgLAJgGQAJgGAPAAIANAAIAAgFQgBgIgEgDQgEgEgHAAQgGAAgFAEQgFACAAAGIgMAAQAAgGAEgFQAEgGAGgDQAHgDAIAAQAMABAHAGQAIAHAAALIAAAhQAAAKACAGIAAABIgNAAIgBgIQgKAKgLAAQgLAAgHgHgAgRAPQAAAFAEAEQAEADAGAAQAFAAAGgDQAFgDADgFIAAgPIgLAAQgWAAAAAOg");
	this.shape_25.setTransform(1218,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAlAyIAAgnIAAgpIggBQIgJAAIgghQIABApIAAAnIgOAAIAAhjIARAAIAgBQIAghQIARAAIAABjg");
	this.shape_26.setTransform(1208.1,10.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVArQgIgHgBgNIAMAAQABAJAFADQAFAFAHAAQAJAAAFgGQAFgGAAgLQAAgJgGgHQgFgEgIAAQgIAAgFADIgEABIgKgBIAFgyIAyAAIAAAMIgnAAIgDAcQAHgFAJAAQANAAAIAJQAIAIAAAPQAAAPgIAKQgIAIgPABQgMAAgJgIg");
	this.shape_27.setTransform(1194.9,10.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIANAAIAABYIAuAAIAAALg");
	this.shape_28.setTransform(1187.3,10.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAlAyIAAgnIAAgpIggBQIgJAAIgghQIABApIAAAnIgOAAIAAhjIARAAIAgBQIAghQIARAAIAABjg");
	this.shape_29.setTransform(1177.1,10.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAyIAAhYIgfAAIAAgLIBLAAIAAALIgfAAIAABYg");
	this.shape_30.setTransform(1166.8,10.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAZAyIAAguIgxAAIAAAuIgNAAIAAhjIANAAIAAArIAxAAIAAgrIANAAIAABjg");
	this.shape_31.setTransform(1157.6,10.3);

	this.legend = new lib.LegendClip();
	this.legend.parent = this;
	this.legend.setTransform(1432.5,565.9,1.487,1.487);

	this.instance = new lib.AirCSNetworkMapLogo();
	this.instance.parent = this;
	this.instance.setTransform(98,59.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Accent("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(641.6,55.8,1.001,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.legend},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(33));

	// Netmap
	this.map = new lib.NetworkMap();
	this.map.parent = this;
	this.map.setTransform(642,376.9,1,1,0,0,0,2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(641.2,360,1635.8,718.2);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;