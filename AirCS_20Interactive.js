(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.WindowRect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("EhK4AF7IAAr1MCVxAAAIAAL1g");
	this.shape.setTransform(-0.125,-241.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhK5AlHMAAAhKNMCVzAAAMAAABKNg");
	this.shape_1.setTransform(0,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WindowRect, new cjs.Rectangle(-479.4,-279.2,958.9,558.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape.setTransform(-0.025,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B40000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_1.setTransform(-0.025,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#790000").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_2.setTransform(-0.025,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABXCJIhXhrIhWBrIg3AAIByiJIhviIIA2AAIBUBpIBUhpIA3AAIhvCIIByCJg");
	this.shape_3.setTransform(-0.025,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiqDzIAAnlIFVAAIAAHlg");
	this.shape_4.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-24.3,34.3,48.6);


(lib.SQTRSquitterLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2DB5E2").s().p("AGgL3IAAkWIkWAAIAAEWIiKAAIAAq2IGgAAIAAEVICKAAIAAGhgACKFWICLAAIAAiLIiLAAgAmsL3IAAosIh9AAIAAiKIGgAAIAACKIiZAAIAAIsgAEVhAIAAkWIkVAAIAAmgIGgAAIAAIsICKAAIAACKgACKnhICLAAIAAiKIiLAAgAophKIAAiKIEWAAIAAiCIkWAAIAAmgIGgAAIAACLIkVAAIAACKIEVAAIAAGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-75.9,110.9,151.8);


(lib.SkyrailLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABbHLIAAi4IC4AAIAAolIi4AAIAAi4IFxAAIAAOVgAnLHLIAAuVIFxAAIAAC4Ii4AAIAAIlIC4AAIAAC4g");
	this.shape.setTransform(46.075,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006DFF").s().p("AlwHLIAAi4ILhAAIAAC4gAi3BeIAAi4IIoAAIAAC4gAAAkSIAAi4IFxAAIAAC4g");
	this.shape_1.setTransform(-55.2,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-45.9,184.2,91.9);


(lib.baselinetrain24pxsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baseline-train-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoBfIgUgUIglAAIgUAUIgWAAIAAgFIAPgPQgPAAgKgKQgKgLAAgOIAAheQAAgXAZgKQATgHAjAAQAnAAARAHQAYAJAAAYIAABeQAAAOgKALQgLAKgOAAIAPAPIAAAFgAAjAeQgFAEAAAGQAAAHAFAEQAEAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgFgGAAQgGAAgEAFgAg2AeQgFAEAAAGQAAAHAFAEQAEAEAGAAQAGAAAFgEQAEgEAAgHQAAgGgEgEQgFgFgGAAQgGAAgEAFgAAKgOIAyAAIAAgoIgyAAgAg7gOIAyAAIAAgoIgyAAg");
	this.shape.setTransform(12,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,2,16,19);


(lib.baselinelocal_airport24pxsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baseline-local_airport-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABaIgiAKIAAgPIAUgPIAAg3IhQAZIAAgUIBQgxIAAg3QAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGIAAA3IBQAxIAAAUIhQgZIAAA3IAUAPIAAAPg");
	this.shape.setTransform(11.5,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,19,20);


(lib.baselineinfo24pxsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baseline-info-24px.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGBHQgdgeAAgpQAAgpAdgdQAegdAoAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAQgoAAgegdgAgJAyIATAAIAAg7IgTAAgAgJgdIATAAIAAgUIgTAAg");
	this.shape.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,20,20);


(lib.CommonStationEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.CommonInterchange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.awwitsacutelittleheart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgAsAseQhWiah6iJQhnhzjgjFQjhjEjUihQpynYjOimQjLijkAjsQnWmwjUnMQjTnMABpOQAAkfAaiXQAbiWBRiqQCJkgDIjUQDIjVEBiDQDOhoB2gfQCjgrEbgCQEogCCXAqQBrAdDSBzQDkB9DLDoQDKDnAxC+IAoCdIBijYQDKm6GXjxQF/jiHOAFQHOAFGKDqQGkD5DhG/QBICPAqDcQAoDTAHDzQANINiDFhQiqHLltGPQltGQrkIaQm2E+n0HMQjGC3iLCPQiHCJgTAnQgWAsgHADIgBAAQgIAAgSgfg");
	this.shape.setTransform(0.0023,0.0049,0.1031,0.1031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-29.6,66,59.3);


(lib.RedEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.PurpleEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8300FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.OrangeEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFA500").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.MagentaLine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.LavenderInterchange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E8EDE").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E8EDE").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.LavenderEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E8EDE").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.GreenLine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.BrownLine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#492C00").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#492C00").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.BrownEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#492C00").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.BlueLine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("Aj9j9IH7AAIAAH7In7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.BlueEOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(5,1,1).p("AiJiJIETAAIAAETIkTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiJCKIAAkTIETAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.AirCSLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AHYJNIAArCIHXAAIAADrIjrAAIAAHXgAAGJNIAArCIDsAAIAALCgAnXJNIAAjrIjsAAIAADrIjrAAIAAuuILDAAIAAOugArDB2IDsAAIAAjrIjsAAgAAGlhIAAjrIDsAAIAADrg");
	this.shape.setTransform(-94.075,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AB1JNIAAjrIHXAAIAAjsInXAAIAArCILDAAIAADrInXAAIAADsIHXAAIAALCgAs3JNIAAyZILDAAIAADrInYAAIAALDIHYAAIAADrg");
	this.shape_1.setTransform(106.05,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.4,-58.9,376.9,117.9);


(lib.Accent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FF0000"],[0,1],1536.7,12.9,1536.6,-121.1).s().p("Ehj7AIuIAAxbMDH3AAAIAARbg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.6,-55.8,1279.2,111.69999999999999);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAuQAIgGAEgMQAEgMAAgPIAAgBQAAgJgCgKQgCgIgDgHQgEgIgFgDIACgFQAGADAFAIQAGAIADAKQADAKAAALQAAALgDAKQgDAKgGAIQgFAJgGADg");
	this.shape.setTransform(94.375,77.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAJAAAFAEQAFAFAAAHIgJAAQAAgDgCgDQgDgDgFAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgFgBgFgCg");
	this.shape_1.setTransform(90.3,77.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_2.setTransform(86.5,76.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(84.075,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_4.setTransform(80.125,77.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_5.setTransform(75.625,76.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_6.setTransform(71.6,77.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_7.setTransform(65.925,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_8.setTransform(58.2,77.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_9.setTransform(54.075,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_10.setTransform(49.25,77.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAIQADgDAEgCQAFgDAFAAQASAAAAASIAAAjg");
	this.shape_11.setTransform(42.05,77.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_12.setTransform(33.725,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_13.setTransform(28.9,77.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgFQAAgIAEgGQADgEAJAAIAGABIgBAHIgEAAQgFAAgDACQgBADAAAFIAAAFIAKAAIAAAHIgKAAIAAAtg");
	this.shape_14.setTransform(24.5,76.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_15.setTransform(17.375,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_16.setTransform(11.75,77.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(7.675,76.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_18.setTransform(4.675,76.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_19.setTransform(0.475,77.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_20.setTransform(-4.025,76.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAIAAAGAEQAFAFABAHIgJAAQAAgDgEgDQgDgDgEAAQgFAAgCADQgDACAAADQAAADADACIAIADIALADQAEABACADQACAEAAAEQAAAHgGAEQgFAEgJABQgFgBgGgCg");
	this.shape_21.setTransform(-8.1,77.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAmIgRgZIgGAGIAAATIgJAAIAAhLIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAgg");
	this.shape_22.setTransform(-15.325,76.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_23.setTransform(-20.725,77.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(-24.625,76.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_25.setTransform(-27.1,76.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_26.setTransform(-30.825,77.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBAnQgLgRAAgWQAAgKADgLQADgKAGgIQAEgJAHgCIACAFQgHAFgFAMQgEALAAAOIAAADQAAATAGAOQAEAIAGAFIgCAFQgHgDgFgJg");
	this.shape_27.setTransform(-34.95,77.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_28.setTransform(85.475,60.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgKgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgIAJg");
	this.shape_29.setTransform(76.45,60.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA6IAAhUIANAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgDgCg");
	this.shape_30.setTransform(69.95,58.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_31.setTransform(65.1,59.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_32.setTransform(58.4,60.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_33.setTransform(51.15,59.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTA2QgKgFgGgHQgFgIAAgKIAPAAQAAALAHAFQAIAHAMAAQALAAAHgGQAGgFAAgHQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgIAAgMQAAgNALgKQALgIAQgBQALABAKAEQAJAFAFAHQAFAJAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAEAAAKQAAAGAGAFQAGAFANAEQAOAEAIAEQAIAFAEAGQAEAHAAAIQAAAOgLAIQgKAJgSgBQgLABgKgFg");
	this.shape_34.setTransform(44.075,58.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUArIAAhTIAPAAIAAAJQAGgLANAAIAHABIAAANIgIAAQgNAAgFAMIAAA7g");
	this.shape_35.setTransform(33.1,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_36.setTransform(25.775,60.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAqIgfhTIAPAAIAVBAIAVhAIAOAAIgfBTg");
	this.shape_37.setTransform(17.55,60.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_38.setTransform(9.1,60.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAoQgHgDgFgHQgEgGgBgIIAPAAQAAAIAFAEQAGAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgKgCgHgDQgGgDgDgEQgDgFAAgGQgBgKAJgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgOAAQAAgGgGgFQgFgEgIAAQgHAAgEADQgEAEAAAFQAAAGAEACQAEADAKACQALADAGADQAHADADAEQAEAFAAAHQgBALgIAHQgJAHgPAAQgJAAgIgEg");
	this.shape_39.setTransform(0.4,60.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAoQgIgDgEgHQgFgGABgIIAOAAQAAAIAGAEQAFAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgLgCgGgDQgHgDgDgEQgCgFAAgGQAAgKAIgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgPAAQAAgGgEgFQgGgEgIAAQgGAAgFADQgEAEAAAFQAAAGAEACQAEADAKACQAKADAIADQAGADAEAEQACAFAAAHQABALgKAHQgJAHgOAAQgJAAgIgEg");
	this.shape_40.setTransform(-7.85,60.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_41.setTransform(-16.55,60.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_42.setTransform(-23.35,60.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfAsQgMgOAAgZIAAgKQAAgPAGgNQAFgLALgHQAKgGANgBQASAAALALQALAKACASIgPAAQgCgOgHgGQgGgGgMAAQgOAAgIALQgIAKAAAUIAAAKQAAASAIAMQAIAKANABQAMAAAHgHQAGgFADgOIAPAAQgCASgMAKQgLAJgSAAQgUAAgMgOg");
	this.shape_43.setTransform(-31.575,58.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_44.setTransform(9.275,1.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_45.setTransform(0.25,1.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgCgDAAgDQAAgEACgCQADgDADAAQAFAAACADQABACAAAEQAAADgBADQgCACgFAAQgDAAgDgCg");
	this.shape_46.setTransform(-6.25,0.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_47.setTransform(-11.1,0.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQAAgHgFgFQgFgEgIAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQADgGAJgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgCgJQgLALgNAAQgMAAgIgHgAgUARQAAAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgaAAAAAQg");
	this.shape_48.setTransform(-17.8,1.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_49.setTransform(-25.05,0.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgIQgFgIAAgKIAPAAQAAAKAHAHQAIAFAMABQALgBAHgEQAGgFAAgIQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgJAAgMQAAgMALgJQALgKAQABQALAAAKAEQAJAFAFAIQAFAIAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAFAAAIQAAAIAGAEQAGAFANAEQAOAEAIAEQAIAEAEAHQAEAGAAAJQAAAOgLAJQgKAIgSAAQgLgBgKgEg");
	this.shape_50.setTransform(-32.125,0.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_51.setTransform(43.525,-66.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_52.setTransform(34.525,-64.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_53.setTransform(25.775,-66.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_54.setTransform(17,-66.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AATA8IAAg4QAAgIgEgFQgFgEgIAAQgGAAgGAEQgFADgDAGIAAA8IgOAAIAAh3IAOAAIAAAuQAKgMAOAAQAbAAAAAdIAAA4g");
	this.shape_55.setTransform(8.275,-67.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAgQgLgLAAgUIAAgCQAAgMAFgKQAFgJAIgGQAIgFALAAQAOAAAKAJQAJAIABAOIgOAAQgBgIgFgGQgGgFgIAAQgKAAgGAIQgGAIAAAPIAAACQAAAOAGAIQAGAIAKAAQAIAAAGgFQAFgEABgHIAOAAQgBAHgEAGQgFAHgIAEQgHAEgJAAQgQAAgKgMg");
	this.shape_56.setTransform(-0.275,-66.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgTArIAAhUIANAAIAAAKQAHgLANAAIAGABIAAAOIgHgBQgNAAgFAMIAAA7g");
	this.shape_57.setTransform(-6.8,-66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_58.setTransform(-14.125,-66.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCAvQgEgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgEgGg");
	this.shape_59.setTransform(-21.35,-66.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_60.setTransform(-28.125,-66.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_61.setTransform(-34.7,-67.475);

	this.instance = new lib.awwitsacutelittleheart();
	this.instance.setTransform(-68.55,66.95,0.5909,0.5909,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CommonStationEOL();
	this.instance_1.setTransform(-69.3,2.15,0.72,0.72);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.CommonStationEOL(), 3);

	this.instance_2 = new lib.CommonInterchange();
	this.instance_2.setTransform(-68.85,-67.9,0.6746,0.6746);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.CommonInterchange(), 3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAXAzQgaAAgRgNQgSgNAAgWQAAgUAPgNIg/AAIAAgUICrAAIAAATIgNABQAPAMAAAVQAAAVgRAOQgRANgcAAgAgUgBQAAAOAMAJQALAIAXAAQAVAAALgIQAMgJAAgOQAAgUgSgJIg3AAQgRAKAAATg");
	this.shape_62.setTransform(-119.325,-76.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag6AwIAAgUIAPgBQgSgNAAgWQAAgmArgBIBQAAIAAAVIhQAAQgNAAgGAGQgGAGAAANQAAAIAFAIQAGAIAJAEIBVAAIAAAVg");
	this.shape_63.setTransform(-117,-63.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAA0QgRAAgPgIQgOgGgHgNQgJgMAAgOQAAgYAQgMQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgOQgBgLgEgIQgFgIgHgGIAKgMQAXAPAAAfQAAAYgQAPQgQAQgcAAgAgkgVQgJAIABAMQAAAMAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_64.setTransform(-116.9,-51.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhEAmQgRgNAAgVQAAgWAQgMIgNgBIAAgTIB1AAQAXAAAOAOQAOAOAAAWQAAAOgGAMQgFANgKAGIgNgKQARgOAAgTQAAgOgIgJQgJgIgQAAIgKAAQAOAMAAAVQAAAVgRANQgRANgdAAQgcAAgRgNgAhDgBQAAAPAMAIQAMAJAXAAQAUAAALgJQAMgIAAgOQAAgUgSgJIg2AAQgSAJAAATg");
	this.shape_65.setTransform(-114.6,-38.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAA0QgRAAgPgIQgOgHgHgLQgJgNAAgNQAAgYAQgNQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgPQgBgKgEgIQgFgIgHgFIAKgNQAXAQAAAeQAAAXgQAQQgQAQgcAAgAgkgVQgJAIABANQAAALAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_66.setTransform(-116.9,-26.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhRAxIAAgVICRAAIAAhNIASAAIAABig");
	this.shape_67.setTransform(-118.975,-14.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(2,1,1).p("Av3IdIldoTIAAv/MAqpAAAIAAfrMglMAAAg");
	this.shape_68.setTransform(0.025,0.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Av3P2IAAnZIldoTIAAv/MAqpAAAIAAfrg");
	this.shape_69.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-102.3,274.9,204.7);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAuQAIgGAEgMQAEgMAAgPIAAgBQAAgJgCgKQgCgIgDgHQgEgIgFgDIACgFQAGADAFAIQAGAIADAKQADAKAAALQAAALgDAKQgDAKgGAIQgFAJgGADg");
	this.shape.setTransform(94.375,77.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAJAAAFAEQAFAFAAAHIgJAAQAAgDgCgDQgDgDgFAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgFgBgFgCg");
	this.shape_1.setTransform(90.3,77.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_2.setTransform(86.5,76.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(84.075,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_4.setTransform(80.125,77.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_5.setTransform(75.625,76.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_6.setTransform(71.6,77.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_7.setTransform(65.925,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_8.setTransform(58.2,77.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_9.setTransform(54.075,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_10.setTransform(49.25,77.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAIQADgDAEgCQAFgDAFAAQASAAAAASIAAAjg");
	this.shape_11.setTransform(42.05,77.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_12.setTransform(33.725,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_13.setTransform(28.9,77.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgFQAAgIAEgGQADgEAJAAIAGABIgBAHIgEAAQgFAAgDACQgBADAAAFIAAAFIAKAAIAAAHIgKAAIAAAtg");
	this.shape_14.setTransform(24.5,76.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_15.setTransform(17.375,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_16.setTransform(11.75,77.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(7.675,76.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_18.setTransform(4.675,76.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_19.setTransform(0.475,77.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_20.setTransform(-4.025,76.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAIAAAGAEQAFAFABAHIgJAAQAAgDgEgDQgDgDgEAAQgFAAgCADQgDACAAADQAAADADACIAIADIALADQAEABACADQACAEAAAEQAAAHgGAEQgFAEgJABQgFgBgGgCg");
	this.shape_21.setTransform(-8.1,77.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAmIgRgZIgGAGIAAATIgJAAIAAhLIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAgg");
	this.shape_22.setTransform(-15.325,76.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_23.setTransform(-20.725,77.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(-24.625,76.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_25.setTransform(-27.1,76.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_26.setTransform(-30.825,77.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBAnQgLgRAAgWQAAgKADgLQADgKAGgIQAEgJAHgCIACAFQgHAFgFAMQgEALAAAOIAAADQAAATAGAOQAEAIAGAFIgCAFQgHgDgFgJg");
	this.shape_27.setTransform(-34.95,77.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_28.setTransform(85.475,60.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgKgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgIAJg");
	this.shape_29.setTransform(76.45,60.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA6IAAhUIANAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgDgCg");
	this.shape_30.setTransform(69.95,58.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_31.setTransform(65.1,59.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_32.setTransform(58.4,60.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_33.setTransform(51.15,59.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTA2QgKgFgGgHQgFgIAAgKIAPAAQAAALAHAFQAIAHAMAAQALAAAHgGQAGgFAAgHQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgIAAgMQAAgNALgKQALgIAQgBQALABAKAEQAJAFAFAHQAFAJAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAEAAAKQAAAGAGAFQAGAFANAEQAOAEAIAEQAIAFAEAGQAEAHAAAIQAAAOgLAIQgKAJgSgBQgLABgKgFg");
	this.shape_34.setTransform(44.075,58.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUArIAAhTIAPAAIAAAJQAGgLANAAIAHABIAAANIgIAAQgNAAgFAMIAAA7g");
	this.shape_35.setTransform(33.1,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_36.setTransform(25.775,60.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAqIgfhTIAPAAIAVBAIAVhAIAOAAIgfBTg");
	this.shape_37.setTransform(17.55,60.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_38.setTransform(9.1,60.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAoQgHgDgFgHQgEgGgBgIIAPAAQAAAIAFAEQAGAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgKgCgHgDQgGgDgDgEQgDgFAAgGQgBgKAJgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgOAAQAAgGgGgFQgFgEgIAAQgHAAgEADQgEAEAAAFQAAAGAEACQAEADAKACQALADAGADQAHADADAEQAEAFAAAHQgBALgIAHQgJAHgPAAQgJAAgIgEg");
	this.shape_39.setTransform(0.4,60.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAoQgIgDgEgHQgFgGABgIIAOAAQAAAIAGAEQAFAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgLgCgGgDQgHgDgDgEQgCgFAAgGQAAgKAIgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgPAAQAAgGgEgFQgGgEgIAAQgGAAgFADQgEAEAAAFQAAAGAEACQAEADAKACQAKADAIADQAGADAEAEQACAFAAAHQABALgKAHQgJAHgOAAQgJAAgIgEg");
	this.shape_40.setTransform(-7.85,60.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_41.setTransform(-16.55,60.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_42.setTransform(-23.35,60.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfAsQgMgOAAgZIAAgKQAAgPAGgNQAFgLALgHQAKgGANgBQASAAALALQALAKACASIgPAAQgCgOgHgGQgGgGgMAAQgOAAgIALQgIAKAAAUIAAAKQAAASAIAMQAIAKANABQAMAAAHgHQAGgFADgOIAPAAQgCASgMAKQgLAJgSAAQgUAAgMgOg");
	this.shape_43.setTransform(-31.575,58.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_44.setTransform(9.275,1.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_45.setTransform(0.25,1.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgCgDAAgDQAAgEACgCQADgDADAAQAFAAACADQABACAAAEQAAADgBADQgCACgFAAQgDAAgDgCg");
	this.shape_46.setTransform(-6.25,0.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_47.setTransform(-11.1,0.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQAAgHgFgFQgFgEgIAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQADgGAJgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgCgJQgLALgNAAQgMAAgIgHgAgUARQAAAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgaAAAAAQg");
	this.shape_48.setTransform(-17.8,1.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBAvQgFgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgDgGg");
	this.shape_49.setTransform(-25.05,0.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgIQgFgIAAgKIAPAAQAAAKAHAHQAIAFAMABQALgBAHgEQAGgFAAgIQAAgJgGgFQgGgEgOgFQgTgFgJgHQgJgJAAgMQAAgMALgJQALgKAQABQALAAAKAEQAJAFAFAIQAFAIAAAJIgPAAQAAgKgHgGQgGgGgMAAQgKAAgGAFQgHAFAAAIQAAAIAGAEQAGAFANAEQAOAEAIAEQAIAEAEAHQAEAGAAAJQAAAOgLAJQgKAIgSAAQgLgBgKgEg");
	this.shape_50.setTransform(-32.125,0.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_51.setTransform(43.525,-66.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_52.setTransform(34.525,-64.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_53.setTransform(25.775,-66.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgHAAgFAEQgFAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAIAAQAPAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAEAEAIAAQAFAAAGgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_54.setTransform(17,-66.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AATA8IAAg4QAAgIgEgFQgFgEgIAAQgGAAgGAEQgFADgDAGIAAA8IgOAAIAAh3IAOAAIAAAuQAKgMAOAAQAbAAAAAdIAAA4g");
	this.shape_55.setTransform(8.275,-67.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAgQgLgLAAgUIAAgCQAAgMAFgKQAFgJAIgGQAIgFALAAQAOAAAKAJQAJAIABAOIgOAAQgBgIgFgGQgGgFgIAAQgKAAgGAIQgGAIAAAPIAAACQAAAOAGAIQAGAIAKAAQAIAAAGgFQAFgEABgHIAOAAQgBAHgEAGQgFAHgIAEQgHAEgJAAQgQAAgKgMg");
	this.shape_56.setTransform(-0.275,-66.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgTArIAAhUIANAAIAAAKQAHgLANAAIAGABIAAAOIgHgBQgNAAgFAMIAAA7g");
	this.shape_57.setTransform(-6.8,-66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_58.setTransform(-14.125,-66.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCAvQgEgFgBgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAEAAIAHgBIAAAMIgLABQgKAAgEgGg");
	this.shape_59.setTransform(-21.35,-66.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AATArIAAg3QAAgJgEgFQgFgEgIAAQgGAAgGAEQgFADgDAHIAAA7IgOAAIAAhUIANAAIABALQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_60.setTransform(-28.125,-66.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_61.setTransform(-34.7,-67.475);

	this.instance = new lib.awwitsacutelittleheart();
	this.instance.setTransform(-68.55,66.95,0.5909,0.5909,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CommonStationEOL();
	this.instance_1.setTransform(-69.3,2.15,0.72,0.72);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.CommonStationEOL(), 3);

	this.instance_2 = new lib.CommonInterchange();
	this.instance_2.setTransform(-68.85,-67.9,0.6746,0.6746);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.CommonInterchange(), 3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAXAzQgaAAgRgNQgSgNAAgWQAAgUAPgNIg/AAIAAgUICrAAIAAATIgNABQAPAMAAAVQAAAVgRAOQgRANgcAAgAgUgBQAAAOAMAJQALAIAXAAQAVAAALgIQAMgJAAgOQAAgUgSgJIg3AAQgRAKAAATg");
	this.shape_62.setTransform(-119.325,-76.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag6AwIAAgUIAPgBQgSgNAAgWQAAgmArgBIBQAAIAAAVIhQAAQgNAAgGAGQgGAGAAANQAAAIAFAIQAGAIAJAEIBVAAIAAAVg");
	this.shape_63.setTransform(-117,-63.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAA0QgRAAgPgIQgOgGgHgNQgJgMAAgOQAAgYAQgMQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgOQgBgLgEgIQgFgIgHgGIAKgMQAXAPAAAfQAAAYgQAPQgQAQgcAAgAgkgVQgJAIABAMQAAAMAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_64.setTransform(-116.9,-51.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhEAmQgRgNAAgVQAAgWAQgMIgNgBIAAgTIB1AAQAXAAAOAOQAOAOAAAWQAAAOgGAMQgFANgKAGIgNgKQARgOAAgTQAAgOgIgJQgJgIgQAAIgKAAQAOAMAAAVQAAAVgRANQgRANgdAAQgcAAgRgNgAhDgBQAAAPAMAIQAMAJAXAAQAUAAALgJQAMgIAAgOQAAgUgSgJIg2AAQgSAJAAATg");
	this.shape_65.setTransform(-114.6,-38.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAA0QgRAAgPgIQgOgHgHgLQgJgNAAgNQAAgYAQgNQAPgOAdAAIAIAAIAABSQASAAAMgLQAKgKABgPQgBgKgEgIQgFgIgHgFIAKgNQAXAQAAAeQAAAXgQAQQgQAQgcAAgAgkgVQgJAIABANQAAALAJAIQAIAJARACIAAg8IgCAAQgPABgJAIg");
	this.shape_66.setTransform(-116.9,-26.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhRAxIAAgVICRAAIAAhNIASAAIAABig");
	this.shape_67.setTransform(-118.975,-14.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(2,1,1).p("Av3IdIldoTIAAv/MAqpAAAIAAfrMglMAAAg");
	this.shape_68.setTransform(0.025,0.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Av3P2IAAnZIldoTIAAv/MAqpAAAIAAfrg");
	this.shape_69.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-102.3,274.9,204.7);


(lib.NetworkMap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape.setTransform(-335.975,117.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_1.setTransform(-350.525,111.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_2.setTransform(-359.925,110.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BHQgWgaAAgrIAAgEQAAgbAKgWQAKgUASgMQATgMAZAAQAfAAAUATQAUASACAeIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNARQgNASAAAhIAAAEQAAAhANARQANARAYAAQAQAAANgKQANgLABgPIAeAAQgBAQgKAOQgKAPgQAJQgSAIgSAAQglAAgXgZg");
	this.shape_3.setTransform(-373.15,113.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape_4.setTransform(-390.775,117.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnCDIg/hVIgUAUIAABBIgfAAIAAkFIAfAAIAACeIARgVIA4g8IAnAAIhHBNIBQBrg");
	this.shape_5.setTransform(-406.75,109.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrB2QgWgKgMgRQgNgRAAgWIAhAAQABAXARANQAQANAbAAQAaAAANgLQAOgKABgTQgBgSgNgKQgMgKghgKQgqgMgTgQQgUgSAAgaQABgeAXgTQAXgTAlAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgPgNQgOgNgaAAQgXAAgOALQgOAKABATQgBAQANAKQANALAeAIQAgAJARAKQARAKAJAOQAJAOgBATQAAAegXATQgXASgoAAQgZAAgWgKg");
	this.shape_6.setTransform(-427.15,110.625);

	this.sky = new lib.LavenderEOL();
	this.sky.name = "sky";
	this.sky.setTransform(-292.7,109.35);
	new cjs.ButtonHelper(this.sky, 0, 1, 2, false, new lib.LavenderEOL(), 3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_7.setTransform(-16.075,-241.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_8.setTransform(-28.075,-239.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_9.setTransform(-40.15,-239.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBTIAAikIATAAIAACkg");
	this.shape_10.setTransform(-48.775,-241.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBTIgog2IgMAMIAAAqIgUAAIAAikIAUAAIAABjIAKgOIAkglIAYAAIgsAwIAxBEg");
	this.shape_11.setTransform(-56.275,-241.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQAAAKgHAJQgHAJgKAFQgLAFgLAAQgXAAgOgPg");
	this.shape_12.setTransform(-68.15,-239.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAaAWABQAVgBAIgQIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_13.setTransform(-80.175,-238.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_14.setTransform(-93.375,-241.025);

	this.ack = new lib.BlueEOL();
	this.ack.name = "ack";
	this.ack.setTransform(-122.2,-239.45);
	new cjs.ButtonHelper(this.ack, 0, 1, 2, false, new lib.BlueEOL(), 3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_15.setTransform(-415.5,8.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_16.setTransform(-427.525,5.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_17.setTransform(-436.275,3.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_18.setTransform(-442.9,4.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_19.setTransform(-449.3,5.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_20.setTransform(-459.6,5.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAjBOIg2hIIgTATIAAA1IgVAAIAAibIAVAAIAABNIBEhNIAZAAIg9BFIBCBWg");
	this.shape_21.setTransform(-471.55,3.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_22.setTransform(-330.725,-23.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_23.setTransform(-340.025,-22.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcBHQgPgJgIgQQgIgRAAgVIAAgNQAAgjAQgUQARgTAdAAQAYAAAPAMQAPANADAXIgUAAQgGgfgfAAQgUAAgLAOQgKAPAAAbIAAAMQAAAaAMAQQAMAQATAAQAMAAAIgDQAJgDAGgGIAAgjIgkAAIAAgRIA4AAIAAA6QgIALgOAGQgOAFgTAAQgSAAgPgJg");
	this.shape_24.setTransform(-353.975,-24.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_25.setTransform(-369.9,-22.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_26.setTransform(-379.875,-22.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCBBQgIgIABgPIAAhHIgWAAIAAgPIAWAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgFgIg");
	this.shape_27.setTransform(-389.75,-23.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_28.setTransform(-399,-22.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBYIAWhYIAUAAIgiBzg");
	this.shape_29.setTransform(-413.275,-22.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_30.setTransform(-424.65,-22.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_31.setTransform(-434.625,-22.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVAAgMgRgAgUgIQgIAKAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIALg");
	this.shape_32.setTransform(-447.025,-24.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_33.setTransform(-459.025,-22.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAABPQgZAAgPgNQgPgOgBgZIAAhpIAVAAIAABpQAAARAJAJQAJAKARAAQARAAAKgKQAJgJAAgRIAAhpIAVAAIAABpQgBAWgNAOQgOAOgYACg");
	this.shape_34.setTransform(-472.175,-24.425);

	this.uwgc = new lib.BrownEOL();
	this.uwgc.name = "uwgc";
	this.uwgc.setTransform(-305.2,-25.85);
	new cjs.ButtonHelper(this.uwgc, 0, 1, 2, false, new lib.BrownEOL(), 3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_35.setTransform(350.525,-238.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_36.setTransform(341.85,-236.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_37.setTransform(333.225,-238.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQALAAAHgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_38.setTransform(325,-236.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_39.setTransform(315.95,-236.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_40.setTransform(305.975,-236.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA9A7IAAhLQAAgNgFgGQgGgGgOAAQgLAAgHAGQgHAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgHAQIAABUIgUAAIAAhzIATAAIABANQAMgPAWAAQAYAAAJATQAFgJAJgFQAKgFANAAQAmAAAAAoIAABNg");
	this.shape_41.setTransform(290.4,-236.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA+A7IAAhLQAAgNgGgGQgGgGgNAAQgMAAgGAGQgIAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgGAQIAABUIgUAAIAAhzIASAAIABANQAMgPAXAAQAXAAAIATQAGgJAJgFQAKgFAMAAQAnAAABAoIAABNg");
	this.shape_42.setTransform(271.1,-236.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_43.setTransform(255.175,-236.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJASAAQAYAAAPAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgCAYgQAOQgPANgaAAQgbAAgRgTg");
	this.shape_44.setTransform(241.9,-238.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiBRIgIgCIAAgQIAGABQAJAAAGgEQAGgEADgLIAFgMIgqhyIAWAAIAcBXIAbhXIAVAAIgvCFQgJAdgYAAg");
	this.shape_45.setTransform(223.95,-233.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_46.setTransform(214.8,-237.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_47.setTransform(208.875,-238.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRANgIQAPgJARAAQAZAAAQAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAJgIACgTIAVAAQgCAYgQAOQgQANgZAAQgbAAgRgTg");
	this.shape_48.setTransform(199.2,-238.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_49.setTransform(180.775,-236.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_50.setTransform(172.175,-238.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_51.setTransform(163.5,-236.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_52.setTransform(151.525,-238.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAjBOIgghxIgDgMIgBAMIgiBxIgSAAIgmibIAUAAIAZBqIAEAVIAEgTIAehsIARAAIAfBsIADATIAEgVIAYhqIAVAAIgmCbg");
	this.shape_53.setTransform(135.8,-238.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_54.setTransform(504.925,-55.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_55.setTransform(496.25,-52.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_56.setTransform(487.625,-55.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCBBQgIgIABgPIAAhHIgWAAIAAgPIAWAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgFgIg");
	this.shape_57.setTransform(481,-54.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_58.setTransform(471.675,-53.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_59.setTransform(459.925,-52.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUAAQgVAAgMgRgAgUgHQgIAJAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_60.setTransform(447.525,-55.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_61.setTransform(438.925,-55.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_62.setTransform(430.525,-52.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_63.setTransform(419.225,-52.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_64.setTransform(407.225,-54.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgjBRIgHgCIAAgQIAGABQAKAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgwCFQgJAdgYAAg");
	this.shape_65.setTransform(497.75,-78.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_66.setTransform(488.6,-82.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_67.setTransform(482.675,-83.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAaAAAPAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAKgIACgTIAVAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_68.setTransform(473,-83.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_69.setTransform(454.575,-81.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_70.setTransform(445.975,-83.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_71.setTransform(437.3,-81.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_72.setTransform(425.325,-83.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAYBqIAEAVIAEgTIAfhsIAQAAIAeBsIAEATIAEgVIAYhqIAVAAIgmCbg");
	this.shape_73.setTransform(409.6,-83.325);

	this.wcr = new lib.OrangeEOL();
	this.wcr.name = "wcr";
	this.wcr.setTransform(371.5,-86.75);
	new cjs.ButtonHelper(this.wcr, 0, 1, 2, false, new lib.OrangeEOL(), 3);

	this.wcc = new lib.OrangeEOL();
	this.wcc.name = "wcc";
	this.wcc.setTransform(194.85,-204.9);
	new cjs.ButtonHelper(this.wcc, 0, 1, 2, false, new lib.OrangeEOL(), 3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape_74.setTransform(226.475,117.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_75.setTransform(211.925,111.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_76.setTransform(202.525,110.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag2BHQgXgaAAgrIAAgEQAAgbAKgWQAKgUASgMQATgMAYAAQAgAAAUATQAUASACAeIgeAAQgBgSgMgLQgMgMgTAAQgWAAgOARQgNASAAAhIAAAEQAAAhANARQANARAXAAQASAAAMgKQANgLABgPIAeAAQgBAQgKAOQgKAPgRAJQgQAIgUAAQgkAAgWgZg");
	this.shape_77.setTransform(189.3,113.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_78.setTransform(173.675,111.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaCFIAAifIgdAAIAAgZIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAZQgIgCgJAAQgPAAgJAKQgIAIAAARIAAAUIAnAAIAAAZIgnAAIAACfg");
	this.shape_79.setTransform(163.025,109.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_80.setTransform(152.175,110.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_81.setTransform(138.275,109.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgrB2QgWgKgMgRQgNgRAAgWIAhAAQABAXARANQAQANAbAAQAaAAANgLQAOgKABgTQgBgSgNgKQgMgKghgKQgqgMgTgQQgUgSAAgaQABgeAXgTQAXgTAlAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgPgNQgOgNgaAAQgXAAgOALQgOAKABATQgBAQANAKQANALAeAIQAgAJARAKQARAKAJAOQAJAOgBATQAAAegXATQgXASgoAAQgZAAgWgKg");
	this.shape_82.setTransform(118.25,110.625);

	this.shc = new lib.PurpleEOL();
	this.shc.name = "shc";
	this.shc.setTransform(82.4,111.45);
	new cjs.ButtonHelper(this.shc, 0, 1, 2, false, new lib.PurpleEOL(), 3);

	this.bbt = new lib.PurpleEOL();
	this.bbt.name = "bbt";
	this.bbt.setTransform(-51.9,186.55);
	new cjs.ButtonHelper(this.bbt, 0, 1, 2, false, new lib.PurpleEOL(), 3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkBYQgRgIgJgOQgLgOAAgQIAgAAQABAPAMAKQAMAJATAAQARAAALgHQALgHAAgNQAAgNgKgHQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgNQAAgYATgPQAUgQAdAAQAfAAATARQAUAPAAAaIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAFQAYAFAPAHQAOAHAHAKQAHALABAOQAAAZgUAPQgUAPgfAAQgWAAgRgIg");
	this.shape_83.setTransform(261.55,190.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag2BIQgYgZABgqIAAgFQAAgbAKgWQAKgWATgMQATgMAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAJgLIATAPQgYAkguAAQgkAAgYgYgAgdg3QgNAOgDAZIBcAAIAAgDQgBgXgNgOQgLgNgUAAQgSAAgNAOg");
	this.shape_84.setTransform(243.55,190.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgnB6QgSgJgLgOIAQgTQAVAZAeAAQAVAAAOgNQANgNgBgYIAAgQQgSAWghAAQggAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAgAAATAYIACgUIAdAAIAACzQAAAkgVAVQgWAVgjAAQgUAAgTgJgAghhVQgMASAAAjQAAAgAMARQANARAWAAQAeAAAOgbIAAhTQgOgbgeAAQgWAAgNASg");
	this.shape_85.setTransform(223.95,193.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Ag5BqQgUgaAAgqIAAgDQAAgpAUgaQAUgaAhAAQAfAAATAWIAAhgIAgAAIAAEGIgdAAIgCgUQgTAXggAAQghAAgUgbgAgggNQgNARAAAjQAAAgANARQANASAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_86.setTransform(204.175,186.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgWQAKgVATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_87.setTransform(184.775,190.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhLB9IAAj5IAiAAIAADeIB1AAIAAAbg");
	this.shape_88.setTransform(166.4,187.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_89.setTransform(137.675,186.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag3BHQgWgZAAgsIAAgFQAAgbAKgUQAKgWATgLQASgMAZAAQAeAAAVATQAVATABAdIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNASQgNARAAAgIAAAGQAAAfANASQANARAYAAQARAAAMgKQANgLABgPIAeAAQgBAQgKAPQgKAOgQAIQgRAJgTAAQglAAgXgZg");
	this.shape_90.setTransform(119.05,190.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_91.setTransform(104.725,190.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_92.setTransform(93.625,187.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhTB9IAAj5IBRAAQAnABAVAQQAUARAAAhQAAARgKAOQgJANgSAHQAVAGALAPQAMAQAAAWQgBAhgVAUQgWASgoABgAgzBiIA1AAQAXAAANgMQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAANgLQAMgKAAgTQAAgVgMgJQgMgKgXAAIgxAAg");
	this.shape_93.setTransform(78.9,187.25);

	this.blo = new lib.RedEOL();
	this.blo.name = "blo";
	this.blo.setTransform(39.75,186.55);
	new cjs.ButtonHelper(this.blo, 0, 1, 2, false, new lib.RedEOL(), 3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_94.setTransform(-43.325,226.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAsBcIgsiKIgsCKIgZAAIg2i3IAgAAIAkCJIAriJIAYAAIAsCMIAkiMIAgAAIg2C3g");
	this.shape_95.setTransform(-66.175,226.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_96.setTransform(-89.275,226.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgQB8IAAjcIhPAAIAAgbIC/AAIAAAbIhQAAIAADcg");
	this.shape_97.setTransform(-109.675,223.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_98.setTransform(-135.075,224.25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag6BRQgRgQAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgRgKgKQgJgKgTAAQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQAAQAOgBANgHQANgIAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_99.setTransform(-149.825,226.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_100.setTransform(-169.275,226.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhUB8IAAj3IBRAAQAoAAAUAQQAVARAAAhQAAASgKANQgKANgRAIQAUAFAMAPQALAQAAAVQABAigWATQgVAUgogBgAgzBhIA1AAQAYAAAMgLQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAAMgLQANgKAAgTQAAgVgMgJQgMgKgYABIgwAAg");
	this.shape_101.setTransform(-189.7,223.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AApCDIAAh6QAAgTgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAkFIAgAAIAABkQAVgaAgAAQA7AAABBBIAAB6g");
	this.shape_102.setTransform(-219.325,222.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Ag3BHQgWgaAAgrIAAgEQAAgbAKgWQAKgUASgMQATgMAYAAQAfAAAVATQAVASABAeIgeAAQgBgSgNgLQgLgMgTAAQgXAAgNARQgNASAAAhIAAAEQAAAhANARQANARAXAAQARAAANgKQANgLABgPIAeAAQgBAQgKAOQgKAPgRAJQgQAIgUAAQgkAAgXgZg");
	this.shape_103.setTransform(-237.95,226.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_104.setTransform(-252.275,226.125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_105.setTransform(-263.375,222.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhUB8IAAj3IBRAAQAoAAAVAQQAUARAAAhQAAASgKANQgKANgRAIQAUAFAMAPQAMAQAAAVQAAAigWATQgWAUgngBgAgzBhIA2AAQAWAAAOgLQANgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAUAAANgLQANgKAAgTQAAgVgMgJQgMgKgYABIgwAAg");
	this.shape_106.setTransform(-278.1,223.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgFBnQgLgMAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAABxQAAALAFAGQAEAFALABIAPgCIAAAZQgMADgMABQgVgBgKgNg");
	this.shape_107.setTransform(-287.975,161.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgkBYQgRgIgKgOQgKgOAAgQIAhAAQAAAPAMAKQAMAJASAAQATAAALgHQAKgIAAgLQAAgNgJgIQgKgHgXgFQgYgFgOgGQgPgHgGgKQgHgKAAgOQAAgXAUgPQASgQAdAAQAgAAATARQAUAPAAAaIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAIQgJAHgBANQABALAIAGQAKAFAXAFQAXAGAPAIQAOAFAIALQAGALAAAOQAAAZgTAPQgUAPggAAQgVAAgRgIg");
	this.shape_108.setTransform(-302.25,163.55);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Ag4BNQgQgRAAgiIAAh3IAgAAIAAB2QAAAqAiAAQAjAAAMgbIAAiFIAgAAIAAC4IgeAAIgBgTQgSAWgjAAQgeAAgPgRg");
	this.shape_109.setTransform(-320.9,163.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag8BGQgXgbAAgqIAAgBQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAbAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgTAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_110.setTransform(-340.475,163.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_111.setTransform(-355.425,163.375);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag3BHQgWgZAAgsIAAgFQAAgaAKgWQAKgVASgLQATgMAYAAQAgAAAUATQAVATABAdIgeAAQgBgSgNgLQgMgMgSAAQgXAAgNASQgNARAAAgIAAAFQAAAgANASQANARAXAAQARAAANgKQANgLABgPIAeAAQgBAQgKAPQgKAOgRAIQgRAJgTAAQgkAAgXgZg");
	this.shape_112.setTransform(-371.25,163.55);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag5BqQgUgZAAgrIAAgCQAAgqAUgaQAUgaAhAAQAfAAATAXIAAhhIAgAAIAAEGIgdAAIgCgUQgTAXggAAQghAAgUgbgAgggNQgNARAAAjQAAAgANARQANASAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_113.setTransform(-390.925,159.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag6BRQgRgQAAgYQAAgcAWgQQAWgPAnAAIAeAAIAAgPQAAgQgKgLQgJgKgTABQgRAAgLAIQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgHQARgIATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQgBQAOAAANgIQANgHAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_114.setTransform(-409.925,163.55);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("Ag2BIQgXgZgBgqIAAgFQAAgbALgWQAKgVAUgNQASgMAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQAAAbAQASQAQAQAWAAQARAAALgGQAMgIAIgLIAUAPQgXAkgvAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgCQAAgZgMgNQgMgNgUAAQgSAAgNAOg");
	this.shape_115.setTransform(-428.45,163.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_116.setTransform(-442.875,163.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhTB9IAAj5IBRAAQAnAAAVARQAUARAAAhQAAASgKANQgJANgSAHQAVAGALAPQAMAQAAAVQgBAigVAUQgWASgoABgAgzBhIA1AAQAXAAANgLQAOgMAAgVQAAgtgxAAIg2AAgAgzgRIAyAAQAVAAANgLQAMgKAAgTQAAgVgMgJQgMgKgXAAIgxAAg");
	this.shape_117.setTransform(-460.2,160.35);

	this.bco = new lib.LavenderEOL();
	this.bco.name = "bco";
	this.bco.setTransform(-254.75,161.2);
	new cjs.ButtonHelper(this.bco, 0, 1, 2, false, new lib.LavenderEOL(), 3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("Ag4CBIgLgCIAAgZIAIAAQAQAAAJgGQAJgHAGgRIAHgTIhCi2IAjAAIAtCKIAriKIAiAAIhLDVQgQAugmAAg");
	this.shape_118.setTransform(-316.925,68.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Ag2BHQgYgZABgpIAAgFQAAgbAKgVQAKgWATgMQATgNAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQABAcAPAQQAPARAXAAQAQAAAMgHQAMgGAJgMIATAPQgYAkguAAQgkAAgYgZgAgdg3QgNAOgDAZIBcAAIAAgDQgBgYgNgMQgLgOgUAAQgSAAgNAOg");
	this.shape_119.setTransform(-334.25,64.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_120.setTransform(-347.95,60.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_121.setTransform(-356.45,60.625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_122.setTransform(-370.275,64.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgOB8Ihbj3IAjAAIBGDMIBHjMIAkAAIhdD3g");
	this.shape_123.setTransform(-390.85,61.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_124.setTransform(-420.275,64.325);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_125.setTransform(-439.925,64.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Ag3BHQgWgZAAgsIAAgEQAAgbAKgWQAKgUATgMQASgMAZAAQAeAAAVATQAUASACAeIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNARQgNASAAAhIAAAFQAAAfANASQANARAYAAQARAAAMgKQANgKABgQIAeAAQgBAQgKAOQgKAPgQAJQgSAIgSAAQglAAgXgZg");
	this.shape_126.setTransform(-458.85,64.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_127.setTransform(-472.425,61.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_128.setTransform(-480.95,60.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_129.setTransform(-489.425,61.15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgrB2QgWgKgMgRQgMgRAAgWIAhAAQAAAXAQANQARANAbAAQAaAAAOgLQANgKAAgTQAAgSgMgKQgNgKghgKQgqgMgTgQQgTgSAAgaQgBgeAYgTQAYgTAkAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgOgNQgOgNgbAAQgXAAgOALQgOAKAAATQAAAQAOAKQAMALAfAIQAeAJASAKQARAKAJAOQAIAOAAATQABAegYATQgYASgnAAQgZAAgWgKg");
	this.shape_130.setTransform(-504.05,61.325);

	this.sil = new lib.LavenderEOL();
	this.sil.name = "sil";
	this.sil.setTransform(-277.7,66.05);
	new cjs.ButtonHelper(this.sil, 0, 1, 2, false, new lib.LavenderEOL(), 3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglAxQgQgRAAgdIAAgDQAAgSAHgPQAIgPANgIQAMgJAPAAQAYAAAOAQQAOARAAAeIAAAIIhVAAQAAATALALQAKAMAPAAQAMAAAIgFQAIgEAGgIIANAKQgQAZggAAQgZAAgQgRgAgTglQgJAJgCARIA+AAIAAgBQgBgRgIgJQgIgJgNAAQgNAAgIAKg");
	this.shape_131.setTransform(-30.925,73.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgKBaIAAizIAVAAIAACzg");
	this.shape_132.setTransform(-40.275,70.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgZA8QgLgFgHgKQgGgKgBgLIAXAAQAAALAIAHQAIAGAMAAQANAAAHgFQAIgFgBgIQAAgJgGgFQgGgFgQgDQgRgEgJgEQgKgFgFgHQgEgGAAgKQAAgPANgLQANgLAUAAQAVAAAOALQANALAAASIgWAAQAAgJgHgHQgHgGgMAAQgLAAgHAFQgGAFgBAJQAAAHAHAEQAGAEAQAEQAQAEAJAFQALAEAEAHQAFAHABAKQAAARgOAKQgOALgWAAQgOAAgMgGg");
	this.shape_133.setTransform(-49.45,73.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_134.setTransform(-58.875,71.275);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AglAxQgQgRAAgdIAAgDQAAgSAHgPQAIgPANgIQAMgJAPAAQAYAAAOAQQAOARAAAeIAAAIIhVAAQAAATALALQAKAMAPAAQAMAAAIgFQAIgEAGgIIANAKQgQAZggAAQgZAAgQgRgAgTglQgJAJgCARIA+AAIAAgBQgBgRgIgJQgIgJgNAAQgNAAgIAKg");
	this.shape_135.setTransform(-74.275,73.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AglAxQgQgRAAgdIAAgDQAAgSAHgPQAIgPANgIQAMgJAPAAQAYAAAOAQQAOARAAAeIAAAIIhVAAQAAATALALQAKAMAPAAQAMAAAIgFQAIgEAGgIIANAKQgQAZggAAQgZAAgQgRgAgTglQgJAJgCARIA+AAIAAgBQgBgRgIgJQgIgJgNAAQgNAAgIAKg");
	this.shape_136.setTransform(-86.925,73.475);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgKBaIAAizIAVAAIAACzg");
	this.shape_137.setTransform(-96.275,70.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBBipIATAAIBBCpgAgcAWIA5AAIgdhPg");
	this.shape_138.setTransform(-107,71.275);

	this.ali = new lib.LavenderInterchange();
	this.ali.name = "ali";
	this.ali.setTransform(-155.35,105.15);
	new cjs.ButtonHelper(this.ali, 0, 1, 2, false, new lib.LavenderInterchange(), 3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("Ag3BHQgWgaAAgrIAAgEQAAgcAKgUQAKgWATgLQASgMAZAAQAeAAAVATQAVASABAeIgeAAQgBgSgNgLQgMgMgRAAQgYAAgNARQgNASAAAgIAAAGQAAAfANASQANARAYAAQARAAAMgKQANgKABgQIAeAAQgBAQgKAOQgKAPgQAIQgRAJgTAAQglAAgXgZg");
	this.shape_139.setTransform(-231.95,23.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_140.setTransform(-245.525,20.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgOB9Ihbj4IAjAAIBGDMIBHjMIAjAAIhcD4g");
	this.shape_141.setTransform(-260.9,20.45);

	this.vic = new lib.RedEOL();
	this.vic.name = "vic";
	this.vic.setTransform(-194.45,23.9);
	new cjs.ButtonHelper(this.vic, 0, 1, 2, false, new lib.RedEOL(), 3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_142.setTransform(-377.525,-120.675);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("Ag2BIQgYgZAAgqIAAgFQAAgbALgWQALgWATgMQASgMAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAIgLIAUAPQgYAkguAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgDQgBgXgLgOQgMgNgUAAQgSAAgNAOg");
	this.shape_143.setTransform(-393.45,-120.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgLBdIhDi5IAhAAIAuCNIAtiNIAhAAIhDC5g");
	this.shape_144.setTransform(-411.425,-120.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgWQAKgVATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_145.setTransform(-429.825,-120.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgFBnQgLgMAAgYIAAhxIghAAIAAgZIAhAAIAAgsIAfAAIAAAsIAjAAIAAAZIgjAAIAABxQAAALAFAGQAEAFALABIAPgCIAAAZQgMADgMABQgVgBgKgNg");
	this.shape_146.setTransform(-446.075,-122.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgkBYQgRgIgKgOQgJgOgBgQIAhAAQAAAPAMAKQAMAJATAAQARAAALgHQALgHAAgNQAAgNgKgHQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgOQAAgXATgPQATgQAeAAQAfAAATARQAUAPAAAaIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAEQAYAGAPAHQAOAHAIAKQAGALABAOQgBAZgTAPQgUAPgfAAQgWAAgRgIg");
	this.shape_147.setTransform(-460.35,-120.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("Ag2BIQgYgZABgqIAAgFQAAgbAKgWQALgWASgMQATgMAVAAQAlAAATAYQAVAXgBAtIAAAMIh8AAQAAAbAQASQAPAQAXAAQAQAAAMgGQAMgIAJgLIATAPQgXAkgvAAQgkAAgYgYgAgdg3QgNAOgDAZIBcAAIAAgDQgBgXgNgOQgLgNgUAAQgSAAgNAOg");
	this.shape_148.setTransform(-478.35,-120.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AA4B9Igzi1IgEgTIgDATIg1C1IgeAAIg8j5IAgAAIAoCqIAFAhIAHgdIAxiuIAaAAIAxCuIAGAeIAGgiIAmiqIAhAAIg8D5g");
	this.shape_149.setTransform(-503.175,-123.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("Ag5BrQgUgbAAgqIAAgDQAAgpAUgaQAUgaAhAAQAfAAATAWIAAhgIAgAAIAAEFIgdAAIgCgUQgTAYggAAQghAAgUgagAgggNQgNARAAAjQAAAgANASQANARAVAAQAfAAANgbIAAhUQgOgagdAAQgWAAgNASg");
	this.shape_150.setTransform(-287.475,-72.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_151.setTransform(-306.525,-68.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_152.setTransform(-325.775,-68.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_153.setTransform(-339.5,-72.575);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgkBYQgRgIgJgOQgLgOABgRIAfAAQABARAMAJQAMAJASAAQATAAAKgHQALgIAAgMQAAgNgJgGQgKgIgXgFQgYgFgOgGQgPgHgGgKQgHgKAAgNQAAgYAUgPQASgQAdAAQAgAAAUAQQATARAAAZIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAHQgKAIAAAMQAAAMAJAFQAKAGAXAGQAXAFAPAHQAPAHAGAKQAIAKgBAPQABAZgUAPQgUAPggAAQgVAAgRgIg");
	this.shape_154.setTransform(-352.85,-68.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgPB8IAAj3IAfAAIAAD3g");
	this.shape_155.setTransform(-366.525,-71.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgmB6QgUgJgKgOIAQgTQAVAZAeAAQAVAAAOgNQANgNgBgYIAAgQQgSAWghAAQggAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAgAAATAYIACgUIAdAAIAACzQAAAkgVAVQgWAVgjAAQgTAAgTgJgAghhVQgNASABAjQgBAgANARQAOARAVAAQAfAAANgbIAAhTQgOgbgeAAQgVAAgOASg");
	this.shape_156.setTransform(-390.1,-65.225);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_157.setTransform(-409.175,-68.875);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_158.setTransform(-428.825,-68.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AhLB8IAAj3IAiAAIAADcIB0AAIAAAbg");
	this.shape_159.setTransform(-447.2,-71.9);

	this.wst = new lib.awwitsacutelittleheart();
	this.wst.name = "wst";
	this.wst.setTransform(-337.4,-118,0.7864,0.7864);
	new cjs.ButtonHelper(this.wst, 0, 1, 1);

	this.lng = new lib.BrownLine();
	this.lng.name = "lng";
	this.lng.setTransform(-243.15,-69.35);
	new cjs.ButtonHelper(this.lng, 0, 1, 2, false, new lib.BrownLine(), 3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgzBxQgXgOgMgbQgNgbAAgjIAAgRQAAgkAMgbQANgcAXgOQAWgPAdAAQAeAAAXAPQAWAOANAbQAMAcAAAkIAAAPQAAAkgMAcQgNAbgWAOQgXAPgeAAQgcAAgXgPgAgwhLQgSAYAAAqIAAARQAAArASAYQASAZAeAAQAgAAARgXQASgYAAgrIAAgRQAAgsgRgYQgSgYggAAQgeAAgSAYg");
	this.shape_160.setTransform(-289.175,-191.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AhMB9IAAj4ICZAAIAAAbIh4AAIAABVIBnAAIAAAZIhnAAIAABvg");
	this.shape_161.setTransform(-309.95,-191.95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AhBBoQgYgWAAgnIAAioIAhAAIAACnQgBAbAQAPQAOAPAbAAQAbAAAPgPQAPgOAAgbIAAioIAhAAIAACoQAAAjgWAXQgWAWgmADIgIAAQgoAAgZgWg");
	this.shape_162.setTransform(-331.85,-191.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("ABbB9IAAhhIADhoIhSDJIgYAAIhRjJIADBoIAABhIghAAIAAj4IArAAIBQDJIBRjJIArAAIAAD4g");
	this.shape_163.setTransform(-358.525,-191.95);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AA3B9Ig2hlIg5AAIAABlIghAAIAAj4IBSAAQApgBAXAUQAWATABAkQAAAYgNARQgMARgXAIIA6BpIAAADgAg4gCIAyAAQAXAAAPgNQAOgMAAgWQAAgWgNgNQgOgMgZAAIgyAAg");
	this.shape_164.setTransform(-383.45,-191.95);

	this.rmufo = new lib.BlueEOL();
	this.rmufo.name = "rmufo";
	this.rmufo.setTransform(-250.2,-190.5);
	new cjs.ButtonHelper(this.rmufo, 0, 1, 2, false, new lib.BlueEOL(), 3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAAMAFAFQAEAGALgBIAPgCIAAAaQgMADgMAAQgVAAgKgNg");
	this.shape_165.setTransform(97.375,-190.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("Ag3BHQgWgaAAgrIAAgEQAAgcAKgUQAKgWASgLQATgMAYAAQAgAAAUATQAVASABAeIgeAAQgBgSgNgLQgMgMgSAAQgXAAgNARQgNASAAAgIAAAGQAAAfANASQANARAXAAQARAAANgKQANgKABgQIAeAAQgBAQgKAOQgKAPgRAIQgRAJgTAAQgkAAgXgZg");
	this.shape_166.setTransform(83.25,-188.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_167.setTransform(69.675,-192.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_168.setTransform(60.425,-188.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAAMAFAFQAEAGALgBIAPgCIAAAaQgMADgMAAQgVAAgKgNg");
	this.shape_169.setTransform(47.275,-190.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgkBYQgRgIgKgOQgKgOAAgRIAhAAQAAAQAMAKQAMAJASAAQATAAALgHQAKgIAAgMQAAgNgJgGQgKgIgXgEQgYgGgOgGQgPgHgGgKQgHgKAAgNQAAgYAUgPQASgQAdAAQAgAAAUAQQATARAAAZIggAAQAAgNgLgJQgLgKgRAAQgQAAgKAHQgJAIgBANQABALAIAFQAKAGAXAGQAXAFAPAHQAOAHAIAKQAGAKAAAPQAAAZgTAPQgUAPggAAQgVAAgRgIg");
	this.shape_170.setTransform(33,-188.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgFAAgIQAAgHAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_171.setTransform(19.825,-192.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AhZB9IAAj4IBGAAQAfAAAaAOQAZAPANAaQANAaABAjIAAAPQAAAjgOAaQgNAbgZAOQgaAOggABgAg5BiIAjAAQAlAAAWgYQAUgXABgsIAAgOQgBgqgTgXQgUgYgkAAIgnAAg");
	this.shape_172.setTransform(4.5,-191.95);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_173.setTransform(-20.3,-192.625);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgRgKgJQgJgLgTAAQgRAAgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOAAANgJQANgHAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_174.setTransform(-34.125,-188.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgmB6QgUgJgJgOIAPgTQAVAZAdAAQAXAAAMgNQANgNAAgYIAAgQQgTAWgfAAQghAAgUgaQgUgaAAgsQAAgrAUgaQAUgaAhAAQAhAAATAYIABgUIAdAAIAACzQAAAkgVAVQgVAVgkAAQgUAAgSgJgAgghVQgNASgBAjQABAgANARQANARAWAAQAdAAAOgbIAAhTQgOgbgdAAQgWAAgNASg");
	this.shape_175.setTransform(-53.75,-185.275);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("Ag2BHQgYgZAAgpIAAgFQAAgbALgVQAKgXATgMQATgMAVAAQAlAAATAYQAVAYgBAsIAAAMIh8AAQABAcAPAQQAPARAXAAQAQAAAMgHQAMgGAIgMIAUAPQgYAkguAAQgkAAgYgZgAgdg3QgNAOgDAZIBcAAIAAgDQgCgYgMgNQgLgNgUAAQgSAAgNAOg");
	this.shape_176.setTransform(-72.25,-188.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AhLB9IAAj4IAiAAIAADdIB1AAIAAAbg");
	this.shape_177.setTransform(-90.1,-191.95);

	this.ld = new lib.BlueEOL();
	this.ld.name = "ld";
	this.ld.setTransform(-122.2,-190.5);
	new cjs.ButtonHelper(this.ld, 0, 1, 2, false, new lib.BlueEOL(), 3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("ABMB9IgYhCIhnAAIgYBCIghAAIBfj4IAbAAIBfD4gAgpAgIBTAAIgqhzg");
	this.shape_178.setTransform(493.275,-223.45);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_179.setTransform(470.675,-223.425);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AA4B9Igzi1IgEgTIgDATIg1C1IgeAAIg8j4IAgAAIAoCpIAFAhIAHgeIAxisIAaAAIAxCsIAGAfIAGgiIAmipIAhAAIg8D4g");
	this.shape_180.setTransform(443.675,-223.45);

	this.wca = new lib.MagentaLine();
	this.wca.name = "wca";
	this.wca.setTransform(392.9,-220.9);
	new cjs.ButtonHelper(this.wca, 0, 1, 2, false, new lib.MagentaLine(), 3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_181.setTransform(373.725,-133.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_182.setTransform(365.05,-131.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_183.setTransform(355.95,-131.425);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_184.setTransform(347.7,-132.625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_185.setTransform(338.375,-131.425);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_186.setTransform(326.625,-131.325);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAaAAAPAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAKgIACgTIAVAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_187.setTransform(313.7,-133.325);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgiBRIgIgCIAAgQIAGABQAJAAAGgEQAGgEADgLIAFgMIgqhyIAWAAIAcBXIAbhXIAVAAIgvCFQgJAdgYAAg");
	this.shape_188.setTransform(404.4,-157.35);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_189.setTransform(395.25,-161.025);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_190.setTransform(389.325,-161.825);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRANgIQAPgJARAAQAZAAAQAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAJgIACgTIAVAAQgCAYgQAOQgQANgZAAQgbAAgRgTg");
	this.shape_191.setTransform(379.65,-161.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_192.setTransform(361.225,-159.725);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_193.setTransform(352.625,-162.15);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_194.setTransform(343.95,-159.725);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAaBSIAAhNQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABAoIAABNg");
	this.shape_195.setTransform(331.975,-162.15);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAjBOIgghxIgDgMIgBAMIgiBxIgSAAIgmibIAUAAIAZBqIAEAVIAEgTIAehsIARAAIAfBsIADATIAEgVIAYhqIAVAAIgmCbg");
	this.shape_196.setTransform(316.25,-161.725);

	this.wc = new lib.GreenLine();
	this.wc.name = "wc";
	this.wc.setTransform(273.2,-151.4);
	new cjs.ButtonHelper(this.wc, 0, 1, 2, false, new lib.GreenLine(), 3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_197.setTransform(177.85,2.825);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("Ag6BRQgRgQAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgRgKgKQgJgKgTAAQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABUQAAAZAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAOAKAJQAKAJAQAAQAOgBANgHQANgIAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_198.setTransform(164.025,6.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_199.setTransform(149.575,6.525);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAAKAFAGQAEAFALAAIAPgBIAAAZQgMADgMAAQgVABgKgNg");
	this.shape_200.setTransform(136.425,4.65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_201.setTransform(121.625,6.525);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("Ag2BIQgYgaAAgpIAAgFQAAgbALgWQALgVATgMQASgNAVAAQAkAAAUAYQAVAYAAAsIAAAMIh9AAQABAbAPASQAPAQAXAAQAQAAAMgGQAMgIAIgLIAUAPQgYAkguAAQglAAgXgYgAgdg3QgNAOgDAZIBbAAIAAgCQgBgYgLgNQgMgOgUAAQgSAAgNAOg");
	this.shape_202.setTransform(102.9,6.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_203.setTransform(82.275,3.525);

	this.cnt = new lib.BlueLine();
	this.cnt.name = "cnt";
	this.cnt.setTransform(31.55,1.35);
	new cjs.ButtonHelper(this.cnt, 0, 1, 2, false, new lib.BlueLine(), 3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#9E8EDE").ss(8.1,2,1).p("AHQAAIufAA");
	this.shape_204.setTransform(-228.475,109.35);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#8300FF").ss(8.1,0,1).p("AKMkOIkaAAQhWAAhwAAQkpAAnmAAIAAJG");
	this.shape_205.setTransform(3.0518,141.3372);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFA500").ss(8.1,0,1).p("AkjknIAAk5QAAABnKgBAAnDdQgBACABGCQAAABE9gBQATAAAUAAQCyAACxAA");
	this.shape_206.setTransform(284.5741,-148.9179);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#8300BF").ss(8.1,0,1).p("AGNDkIrwAAIAAnw");
	this.shape_207.setTransform(-105.35,157.125);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#492C00").ss(8.1,0,1).p("At0kwIAAkbIrUAAA1XGMIGHAAIAAjCAZJJMIx3AAIAApgIw1AA");
	this.shape_208.setTransform(-154.625,-64.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#9E8EDE").ss(8.1,0,1).p("AU5rDIAAMdI1JAAAlqijIAAiiIv3AAAlzFLIAAFQIsLAA");
	this.shape_209.setTransform(-125.925,97.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FF0000").ss(8.1,0,1).p("AQ8qhIAANVIAAJKALorVI9LAA");
	this.shape_210.setTransform(-68.3,96.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FF00FF").ss(8.1,0,1).p("AP6rcIAADiIUAAAIAAIII/XAAIAAFJIAAKOMgpEAAAAiyogIAAnEIOuAA");
	this.shape_211.setTransform(291.15,-122.275);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#00FF00").ss(8.1,0,1).p("AEymnIAArIMAiRAAAIAAk+EAjAgXfMgkJAAAMgl5AAAIAAFoAgZBnIAANYIAAGTIqyAAIAAC3");
	this.shape_212.setTransform(22.925,18.325);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#0099FF").ss(8.1,0,1).p("ATYP6IAAw9IAAibI2AAAIAAkkAiosSIAAjnAkSqLIvtAA");
	this.shape_213.setTransform(-108.425,-125.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.cnt},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.wc},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.wca},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.ld},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.rmufo},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.lng},{t:this.wst},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.vic},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.ali},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.sil},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.bco},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.blo},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.bbt},{t:this.shc},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.wcc},{t:this.wcr},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.uwgc},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.ack},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.sky},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NetworkMap, new cjs.Rectangle(-520.8,-256.1,1045.8,502.40000000000003), null);


(lib.LegendClip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this.instance_1 = new lib.Tween4();
	this.instance_1.setTransform(-240.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-240.4},29,cjs.Ease.get(1)).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.get(1)).wait(2).to({x:-239.6245},0).wait(1).to({x:-237.3955},0).wait(1).to({x:-233.8498},0).wait(1).to({x:-229.1123},0).wait(1).to({x:-223.2987},0).wait(1).to({x:-216.5165},0).wait(1).to({x:-208.8663},0).wait(1).to({x:-200.4433},0).wait(1).to({x:-191.3382},0).wait(1).to({x:-181.638},0).wait(1).to({x:-171.4269},0).wait(1).to({x:-160.787},0).wait(1).to({x:-149.7993},0).wait(1).to({x:-138.544},0).wait(1).to({x:-127.1019},0).wait(1).to({x:-115.5542},0).wait(1).to({x:-103.9844},0).wait(1).to({x:-92.4782},0).wait(1).to({x:-81.125},0).wait(1).to({x:-70.019},0).wait(1).to({x:-59.2601},0).wait(1).to({x:-48.9556},0).wait(1).to({x:-39.2221},0).wait(1).to({x:-30.1875},0).wait(1).to({x:-21.9935},0).wait(1).to({x:-14.7994},0).wait(1).to({x:-8.7862},0).wait(1).to({x:-4.1621},0).wait(1).to({x:-1.1706},0).wait(1).to({x:-0.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.8,-102.3,515.3,204.7);


(lib.InformationWindow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Layer 1
	this.close = new lib.Symbol1();
	this.close.name = "close";
	this.close.setTransform(448.15,-242.4);
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape.setTransform(317.025,174.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_1.setTransform(305.725,174.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_2.setTransform(293.175,172.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_3.setTransform(308.575,89.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_4.setTransform(294.425,87.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_5.setTransform(308.575,60.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_6.setTransform(294.425,58.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_7.setTransform(317.025,32.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_8.setTransform(305.725,32.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_9.setTransform(293.175,30.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_10.setTransform(308.575,4.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_11.setTransform(294.425,2.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_12.setTransform(308.575,-24.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_13.setTransform(294.425,-26.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_14.setTransform(317.025,-52.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_15.setTransform(305.725,-52.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBOIAAg6Ig2hhIAXAAIAoBNIAphNIAXAAIg2BhIAAA6g");
	this.shape_16.setTransform(293.175,-54.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_17.setTransform(308.575,-81.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_18.setTransform(294.425,-83.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_19.setTransform(197.075,172.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_20.setTransform(185.475,174.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_21.setTransform(173.075,172.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_22.setTransform(164,174.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_23.setTransform(153.425,174.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_24.setTransform(141.6,174.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_25.setTransform(130.025,174.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_26.setTransform(118.025,172.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_27.setTransform(101.15,173.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_28.setTransform(91.625,174.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_29.setTransform(77.475,172.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_30.setTransform(118.225,87.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gUIAEAAIAACbg");
	this.shape_31.setTransform(104.55,87.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_32.setTransform(97.025,89.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gUIAEAAIAACbg");
	this.shape_33.setTransform(86.85,87.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_34.setTransform(75.825,87.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_35.setTransform(118.225,58.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_36.setTransform(105.875,58.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_37.setTransform(97.025,60.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgTIA3gVIAEAAIAACdg");
	this.shape_38.setTransform(86.85,58.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_39.setTransform(75.825,58.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_40.setTransform(118.225,30.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_41.setTransform(105.975,30.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_42.setTransform(97.025,32.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gVIAEAAIAACcg");
	this.shape_43.setTransform(86.85,30.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_44.setTransform(75.825,30.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_45.setTransform(118.625,2.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_46.setTransform(106.275,2.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(97.025,4.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAKBOIAAiDIgnAPIAAgTIA3gVIAEAAIAACcg");
	this.shape_48.setTransform(86.85,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_49.setTransform(75.825,2.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_50.setTransform(118.225,-26.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_51.setTransform(105.875,-26.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_52.setTransform(97.025,-24.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_53.setTransform(88.275,-26.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_54.setTransform(75.825,-26.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_55.setTransform(118.225,-54.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_56.setTransform(106.275,-54.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_57.setTransform(97.025,-52.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_58.setTransform(88.175,-54.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_59.setTransform(75.825,-54.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_60.setTransform(118.225,-83.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_61.setTransform(105.65,-83.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgIA4QgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgFAAgDgDgAgIgmQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_62.setTransform(97.025,-81.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_63.setTransform(86.85,-83.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_64.setTransform(75.825,-83.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_65.setTransform(-232.275,174.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_66.setTransform(-240.875,172);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_67.setTransform(-249.275,174.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_68.setTransform(-257.9,172.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_69.setTransform(-272.025,174.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_70.setTransform(-283.625,174.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_71.setTransform(-292.225,172);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_72.setTransform(-302.075,172.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_73.setTransform(-300.175,145.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_74.setTransform(-306.225,145.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_75.setTransform(-300.175,116.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_76.setTransform(-306.225,116.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_77.setTransform(-137.85,87.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_78.setTransform(-144.25,89.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_79.setTransform(-154.825,89.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgwBSIAAigIASAAIABAMQAMgPAVAAQAVAAAMAQQAMAQAAAcIAAACQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA5gAgcgwIAAA3QAJAQASAAQAOAAAIgLQAJgMAAgVQAAgUgJgLQgIgMgOAAQgSAAgJAQg");
	this.shape_80.setTransform(-167.05,91.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_81.setTransform(-176.6,89.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_82.setTransform(-183.575,87.125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_83.setTransform(-193.425,87.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgjBRIgHgCIAAgQIAFABQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgvCFQgKAdgYAAg");
	this.shape_84.setTransform(-211.25,91.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_85.setTransform(-220.4,87.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_86.setTransform(-226.325,87.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJASAAQAYAAAPAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgCAYgQAOQgPANgaAAQgbAAgRgTg");
	this.shape_87.setTransform(-236,87.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_88.setTransform(-254.425,89.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_89.setTransform(-263.025,86.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_90.setTransform(-271.7,89.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAijIAUAAIAAA/QANgRAVAAQAkAAABApIAABMg");
	this.shape_91.setTransform(-283.675,86.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIACAVIAFgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_92.setTransform(-299.4,87.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_93.setTransform(-184.85,59.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_94.setTransform(-193.65,60.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_95.setTransform(-202.225,58.725);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_96.setTransform(-208.05,60.725);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_97.setTransform(-216.3,59.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_98.setTransform(-225.275,60.825);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_99.setTransform(-233.575,58.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ag4BOIAAibIAtAAQATAAAQAJQAPAJAJARQAIAQABAWIAAAJQAAAWgJARQgJAQgPAJQgQAJgUAAgAgjA9IAWAAQAXAAANgOQANgPAAgcIAAgIQAAgbgMgOQgNgPgWAAIgYAAg");
	this.shape_100.setTransform(-243.225,58.825);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_101.setTransform(-258.825,58.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_102.setTransform(-267.5,60.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgNgQQgMgQAAgcQAAgbAMgQQANgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_103.setTransform(-279.85,63.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_104.setTransform(-291.475,60.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AguBOIAAibIAUAAIAACKIBJAAIAAARg");
	this.shape_105.setTransform(-302.7,58.825);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_106.setTransform(-154.575,32.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBXIAWhXIAUAAIgiBzg");
	this.shape_107.setTransform(-168.975,32.45);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_108.setTransform(-183.475,32.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgJBOIAAiKIgyAAIAAgRIB3AAIAAARIgyAAIAACKg");
	this.shape_109.setTransform(-196.325,30.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_110.setTransform(-212.3,31.125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_111.setTransform(-221.55,32.425);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_112.setTransform(-233.775,32.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_113.setTransform(-246.625,30.425);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAikIAUAAIAAA/QANgRAVAAQAkAAABAoIAABOg");
	this.shape_114.setTransform(-265.225,30);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_115.setTransform(-276.85,32.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_116.setTransform(-285.9,32.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_117.setTransform(-292.875,30.325);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_118.setTransform(-302.125,30.425);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_119.setTransform(-187.375,4.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_120.setTransform(-198.675,4.025);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgNgQQgMgQAAgcQAAgbAMgQQANgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_121.setTransform(-211,6.225);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVAAgMgRgAgUgIQgIAKAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_122.setTransform(-223.425,1.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_123.setTransform(-235.625,4.025);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AguBOIAAibIAVAAIAACKIBIAAIAAARg");
	this.shape_124.setTransform(-247.2,2.025);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABSIgUAAIAAikIAUAAIAAA/QANgQAVAAQAkAAABApIAABMg");
	this.shape_125.setTransform(-265.225,1.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_126.setTransform(-276.85,4.025);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPARAAQAGAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_127.setTransform(-285.9,3.925);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_128.setTransform(-292.875,1.925);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag0BOIAAibIAzAAQAYAAANAKQANALAAAVQAAAKgGAJQgGAIgLAFQANADAHAKQAHAJAAAOQAAAVgNAMQgOAMgZAAgAgfA9IAhAAQAOAAAIgHQAJgIAAgNQAAgcgfAAIghAAgAgfgKIAfAAQAMAAAIgHQAIgHAAgMQAAgNgHgFQgIgGgOAAIgeAAg");
	this.shape_129.setTransform(-302.125,2.025);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgcBmQARgNAKgbQAJgbABggIAAgDQgBgWgFgTQgDgUgIgPQgJgQgLgJIAFgLQAOAHAMATQAMASAHAWQAGAXABAXQgBAYgGAXQgGAVgNATQgMASgOAIg");
	this.shape_130.setTransform(-161.9,-24.85);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_131.setTransform(-171.225,-24.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_132.setTransform(-183.575,-24.375);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_133.setTransform(-192.525,-26.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_134.setTransform(-199.15,-25.675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_135.setTransform(-208.4,-24.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgWAAIAAgPIAWAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgFgIg");
	this.shape_136.setTransform(-218.3,-25.675);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbBKQgOgGgHgLQgIgKAAgOIAVAAQAAAOALAIQAKAJARAAQAQAAAJgHQAIgHAAgLQAAgMgIgGQgIgGgUgGQgbgIgMgKQgMgLAAgRQAAgSAPgMQAPgMAWAAQARAAAMAGQANAGAHALQAHALAAANIgVAAQAAgOgJgIQgJgIgRAAQgOAAgIAGQgJAHAAAMQAAAKAIAGQAIAHATAFQATAGALAFQALAHAGAJQAFAJAAAMQAAATgPALQgPALgYAAQgQAAgOgGg");
	this.shape_137.setTransform(-228.075,-26.375);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_138.setTransform(-240.275,-24.375);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAikIAUAAIAAA/QANgRAVAAQAkAAABAoIAABOg");
	this.shape_139.setTransform(-252.225,-26.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_140.setTransform(-262.25,-25.675);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgCBXQgZglAAgyQAAgYAGgWQAHgXAMgRQAMgTAOgHIAEAMQgPAMgKAZQgKAZAAAeIgBAJQAAAqAPAeQAJASAMALIgEALQgOgIgMgSg");
	this.shape_141.setTransform(-268.725,-24.85);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAOAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQAAAKgHAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_142.setTransform(-284,-24.375);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_143.setTransform(-292.575,-26.475);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgIBOIg6ibIAWAAIAsCAIAsiAIAXAAIg6Cbg");
	this.shape_144.setTransform(-302.25,-26.375);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgjBRIgHgCIAAgPIAFAAQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBWIAbhWIAWAAIgvCFQgKAdgYABg");
	this.shape_145.setTransform(-211.25,-50.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_146.setTransform(-220.4,-54.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_147.setTransform(-226.325,-54.875);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJASAAQAYAAAPAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgCAYgQAOQgPANgaAAQgbAAgRgTg");
	this.shape_148.setTransform(-236,-54.775);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_149.setTransform(-254.425,-52.775);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgJBSIAAikIATAAIAACkg");
	this.shape_150.setTransform(-263.025,-55.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_151.setTransform(-271.7,-52.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAaBSIAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABSIgUAAIAAikIAUAAIAAA/QANgQAVAAQAkAAABApIAABMg");
	this.shape_152.setTransform(-283.675,-55.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIACAVIAFgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_153.setTransform(-299.4,-54.775);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_154.setTransform(-202.175,-83.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_155.setTransform(-214.175,-81.275);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAHAFAJAAQAJAAAIgFQAJgFADgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_156.setTransform(-226.25,-81.175);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_157.setTransform(-234.875,-83.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_158.setTransform(-243.275,-81.175);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgKBOIAAibIAVAAIAACbg");
	this.shape_159.setTransform(-251.9,-83.175);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQASAAQAOAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_160.setTransform(-266.75,-78.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_161.setTransform(-278.775,-81.275);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_162.setTransform(-291.125,-81.175);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AguBOIAAibIAUAAIAACKIBJAAIAAARg");
	this.shape_163.setTransform(-302.7,-83.175);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgkBAQgMgRAAghIAAgZQAAgjAMgRQALgQAZAAQAZAAAMAQQAMAQAAAiIAAAZQAAAigMARQgMARgZAAQgYAAgMgQgAgVgzQgHALgBAYIAAAfQAAAZAIAMQAHAMAOAAQAPAAAHgLQAHgMAAgYIAAggQAAgZgHgLQgHgMgPAAQgOAAgHAMg");
	this.shape_164.setTransform(-409.925,172.425);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA4gWIADAAIAACdg");
	this.shape_165.setTransform(-423.6,172.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaBPIAAgRIAEAAQAYAAANgMQANgNABgaQgGAHgIAEQgJAFgJAAQgOAAgKgHQgKgGgGgMQgFgMAAgOQAAgQAGgMQAGgNALgHQALgGAOAAQAXAAANARQANARAAAeIAAAGQAAAtgSAVQgSAVgjAAgAgVg0QgHAKAAARQAAAQAHAJQAIALANAAQAJAAAIgHQAJgFAEgJIAAgIQAAgTgJgNQgIgMgNAAQgNAAgIAKg");
	this.shape_166.setTransform(-416.325,143.925);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgjBEQgOgMAAgUQAAgNAHgKQAHgKAMgEQgKgFgGgKQgGgJAAgLQAAgUANgMQAMgLAUAAQAVAAAMALQANAMAAAUQAAALgGAKQgGAJgLAFQAMAEAIAKQAHAKAAANQAAAUgOAMQgOAMgWAAQgWAAgNgMgAgVAOQgIAIAAAOQAAANAIAIQAIAHANAAQAOAAAIgHQAIgIAAgNQAAgOgIgIQgJgIgNAAQgNAAgIAIgAgSg4QgHAIAAAMQAAAMAHAHQAHAIALAAQAMAAAHgIQAHgHAAgMQAAgMgHgHQgIgIgLAAQgLAAgHAHg");
	this.shape_167.setTransform(-416.125,115.625);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AggBOIBAiLIhUAAIAAgQIBpAAIAAALIhACQg");
	this.shape_168.setTransform(-416.175,87.225);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgiA+QgPgRAAgbIAAgIQABgqASgXQASgXAkAAIAEAAIAAARIgEAAQgYAAgMANQgOAOgCAYQANgOATAAQAVAAAMAOQAMANAAAXQAAAYgMAPQgOAOgWAAQgVAAgOgRgAgQgCQgJAFgDAKIAAAHQAAATAJAMQAIAMAMAAQANAAAIgKQAIgKAAgQQAAgQgIgKQgIgJgNAAQgJAAgIAGg");
	this.shape_169.setTransform(-415.95,58.925);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AghBEQgNgMgCgUIATAAQABAOAIAGQAIAHAMAAQANAAAIgJQAIgKAAgQQAAgQgIgKQgJgIgNAAQgNAAgHAGIgGADIgQgDIAIhOIBPAAIAAASIg+AAIgFArQAMgHAOAAQAVAAANAOQAMANAAAYQAAAZgNAOQgNANgXAAQgUAAgNgLg");
	this.shape_170.setTransform(-415.725,30.525);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAPBOIAAgkIhGAAIAAgMIBFhrIAVAAIAABnIAVAAIAAAQIgVAAIAAAkgAANguIguBIIAwAAIAAhMg");
	this.shape_171.setTransform(-416.1,2.025);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_172.setTransform(-416.35,-26.375);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgxBPIAAgOIA1g8QAMgNAFgIQAFgJAAgJQAAgMgIgIQgHgIgMAAQgOAAgJAJQgIAIAAAPIgUAAQAAgWAOgNQAOgNAXAAQAVAAANALQANAMAAATQAAAXgeAfIgpAtIBOAAIAAAQg");
	this.shape_173.setTransform(-416.025,-54.875);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_174.setTransform(-417.45,-83.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgoBMQgPgTAAgeIAAgCQAAgdAPgSQAOgTAXAAQAXAAANAQIAAhFIAXAAIAAC7IgVAAIgBgPQgOARgXAAQgXAAgOgTgAgXgJQgJAMAAAZQAAAXAJAMQAJANAQAAQAVAAAKgTIAAg8QgKgTgVAAQgQAAgJANg");
	this.shape_175.setTransform(443.275,-115.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgnAzQgQgSAAgeIAAgDQAAgTAHgPQAIgQAOgJQANgIAOgBQAaABAOAQQAPARAAAgIAAAJIhZAAQABATALAMQALAMAPAAQANAAAIgFQAIgFAGgIIAOALQgQAZgiAAQgZAAgSgRgAgVgnQgIAKgDASIBCAAIAAgCQgCgRgIgKQgIgJgPAAQgMAAgKAKg");
	this.shape_176.setTransform(430.05,-113.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAYAAIAAARIgYAAIAABRQAAAIADAEQAEAEAHAAIALgBIAAASQgJACgJAAQgPAAgGgJg");
	this.shape_177.setTransform(418.85,-114.575);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgfBDIAAiDIAWAAIABAPQAJgRAVAAQAGAAAEABIAAAVIgLAAQgWAAgHATIAABcg");
	this.shape_178.setTransform(411.6,-113.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_179.setTransform(399.575,-113.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("Ag3BdIAAi2IAVAAIABAOQAOgRAXAAQAYAAAOASQAOASAAAgIAAACQAAAdgOATQgOASgXAAQgXAAgOgPIAABAgAggg2IAAA+QAKASAVAAQAPAAAKgNQAJgNAAgYQAAgXgJgNQgKgNgPAAQgVAAgKATg");
	this.shape_180.setTransform(385.675,-110.675);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag3BdIAAi2IAVAAIABAOQAOgRAXAAQAYAAAOASQAOASAAAgIAAACQAAAdgOATQgOASgXAAQgXAAgOgPIAABAgAggg2IAAA+QAKASAVAAQAPAAAKgNQAJgNAAgYQAAgXgJgNQgKgNgPAAQgVAAgKATg");
	this.shape_181.setTransform(371.625,-110.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgoA3QgLgMAAgYIAAhVIAWAAIAABUQAAAeAZAAQAZAAAJgTIAAhfIAWAAIAACDIgWAAIAAgNQgNAPgYAAQgWAAgLgMg");
	this.shape_182.setTransform(357.4,-112.975);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgeBUQgRgHgIgMQgJgMAAgQIAYAAQAAAQAMAKQALAJAUAAQASAAAKgIQAKgHAAgNQAAgNgJgHQgKgIgXgGQgegJgOgMQgNgMAAgTQAAgVARgOQAQgNAaAAQASAAAPAHQAOAHAIAMQAIANAAAOIgXAAQAAgQgLgJQgKgJgTAAQgQAAgKAHQgJAIgBAOQAAALAKAHQAJAIAVAGQAWAGANAHQAMAHAHAKQAFAKAAAOQAAAVgQANQgSANgbAAQgSAAgPgHg");
	this.shape_183.setTransform(343.15,-115.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAfBCIgfgxIgdAxIgbAAIAthCIgrhBIAaAAIAcAwIAdgwIAaAAIgrBBIAtBCg");
	this.shape_184.setTransform(323.275,-113.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("Ag4BZIAAixIBwAAIAAATIhYAAIAAA5IBMAAIAAATIhMAAIAAA/IBZAAIAAATg");
	this.shape_185.setTransform(310.6,-115.375);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AA2BZIgRgvIhJAAIgRAvIgYAAIBEixIATAAIBECxgAgdAXIA7AAIgehSg");
	this.shape_186.setTransform(294.775,-115.375);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgfBzQATgOALgeQALgfAAglIAAgDQAAgagGgWQgEgVgKgSQgJgRgMgKIAFgOQAQAJANAVQAPAUAHAaQAHAZAAAcQAAAbgHAZQgHAZgOAVQgOAVgQAJg");
	this.shape_187.setTransform(209.125,-113.65);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgaA/QgLgGgIgKQgHgKAAgLIAXAAQABAKAJAIQAIAGAMAAQANAAAJgFQAHgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQANgKAVgBQAWAAAOAMQAOALABATIgYAAQAAgJgHgIQgIgGgMAAQgLAAgIAGQgHAFAAAIQABAJAGAEQAGAEARAEQAQADALAGQALAEAEAHQAGAIAAAKQgBASgOALQgOALgXgBQgOABgNgGg");
	this.shape_188.setTransform(198.95,-113.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgZA/QgNgGgGgKQgIgKABgLIAWAAQABAKAIAIQAJAGANAAQANAAAHgFQAIgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQAOgKAUgBQAXAAAOAMQANALAAATIgWAAQgBgJgHgIQgIgGgMAAQgMAAgGAGQgIAFABAIQAAAJAGAEQAHAEAPAEQARADALAGQALAEAFAHQAEAIABAKQAAASgPALQgNALgXgBQgPABgMgGg");
	this.shape_189.setTransform(186.05,-113.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgKBAQgDgEAAgGQAAgFADgEQAEgFAGAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEADgGAAQgGAAgEgDgAgKgrQgDgEAAgFQAAgHADgDQAEgFAGAAQAHAAADAFQAEADAAAHQAAAFgEAEQgDAEgHgBQgGABgEgEg");
	this.shape_190.setTransform(176.65,-113.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ABGBDIAAhWQAAgOgGgHQgHgHgPAAQgNAAgIAHQgJAIAAANIAABWIgXAAIAAhVQAAgdgcAAQgWAAgIATIAABfIgXAAIAAiDIAWAAIABAPQAOgRAYAAQAdAAAIAVQAHgKAKgFQALgGAOAAQAsAAAAAuIAABXg");
	this.shape_191.setTransform(162.65,-113.225);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("ABGBDIAAhWQAAgOgHgHQgGgHgPAAQgMAAgJAHQgIAIgBANIAABWIgXAAIAAhVQAAgdgbAAQgXAAgIATIAABfIgXAAIAAiDIAWAAIABAPQAOgRAZAAQAbAAAJAVQAHgKAKgFQALgGAPAAQArAAABAuIAABXg");
	this.shape_192.setTransform(140.75,-113.225);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgCBjQgdgqAAg5QAAgbAHgZQAIgaAOgVQAOgUAQgJIAEAPQgRAOgMAcQgKAbgBAkIAAAJQAAAvAQAjQAKAUAOAMIgEAOQgQgJgOgVg");
	this.shape_193.setTransform(126.075,-113.65);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AA2BZIgRgvIhJAAIgRAvIgYAAIBEixIATAAIBECxgAgdAXIA7AAIgehSg");
	this.shape_194.setTransform(106.925,-115.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgLBZIAAieIg5AAIAAgTICJAAIAAATIg5AAIAACeg");
	this.shape_195.setTransform(91.325,-115.375);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ag3BZIAAixIBuAAIAAATIhXAAIAAA5IBMAAIAAATIhMAAIAAA/IBYAAIAAATg");
	this.shape_196.setTransform(77.35,-115.375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAdBDIAAhWQABgOgHgHQgGgHgOAAQgKAAgJAGQgHAGgFAJIAABdIgXAAIAAiDIAWAAIAAARQAPgTAXAAQAqAAABAvIAABWg");
	this.shape_197.setTransform(-189.75,-113.225);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_198.setTransform(-203.775,-113.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKBaIAAiDIAVAAIAACDgAgJhDQgEgDAAgGQAAgFAEgEQADgEAGAAQAHAAADAEQAEAEgBAFQABAGgEADQgDADgHAAQgGAAgDgDg");
	this.shape_199.setTransform(-213.9,-115.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAYAAIAAARIgYAAIAABRQgBAIAEAEQAEAEAHAAIALgBIAAASQgJACgIAAQgQAAgGgJg");
	this.shape_200.setTransform(-221.4,-114.575);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgpA5QgMgLAAgRQAAgVAPgJQAQgMAbAAIAWAAIAAgLQAAgLgHgIQgHgHgNAAQgMABgIAGQgJAGABAJIgXAAQAAgKAHgKQAHgJAMgFQAMgFAOgBQAXAAAMAMQANAMAAATIAAA8QABATAFAKIAAACIgZAAQgCgEAAgKQgQAQgVAAQgTAAgNgLgAgfAaQAAALAHAGQAHAGALAAQAKAAAJgFQAKgGAEgJIAAgbIgRAAQgpAAAAAYg");
	this.shape_201.setTransform(-231.9,-113.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAeBDIAAhWQgBgOgGgHQgHgHgNAAQgKAAgIAGQgIAGgGAJIAABdIgWAAIAAiDIAVAAIABARQAPgTAYAAQAqAAAAAvIAABWg");
	this.shape_202.setTransform(-245.6,-113.225);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgLBaIAAiDIAWAAIAACDgAgJhDQgDgDgBgGQABgFADgEQAEgEAFAAQAHAAADAEQADAEAAAFQAAAGgDADQgDADgHAAQgFAAgEgDg");
	this.shape_203.setTransform(-255.5,-115.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAVAAIAAAgIAZAAIAAARIgZAAIAABRQAAAIAEAEQAEAEAHAAIALgBIAAASQgJACgJAAQgOAAgHgJg");
	this.shape_204.setTransform(-263,-114.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgaA/QgMgGgGgKQgIgKAAgLIAXAAQABAKAJAIQAIAGAMAAQAOAAAHgFQAIgGAAgIQAAgJgHgFQgHgGgQgDQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgMQAOgKAUgBQAWAAAOAMQAPALAAATIgYAAQAAgJgHgIQgIgGgMAAQgMAAgGAGQgIAFAAAIQABAJAGAEQAHAEAPAEQASADAKAGQALAEAEAHQAGAIAAAKQgBASgOALQgNALgYgBQgOABgNgGg");
	this.shape_205.setTransform(-273.2,-113.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgnAzQgQgSAAgeIAAgDQAAgTAHgPQAIgQAOgJQANgIAPgBQAaABANAQQAPARAAAgIAAAJIhYAAQAAATALAMQALAMAPAAQAMAAAJgFQAIgFAGgIIAOALQgQAZgiAAQgZAAgSgRgAgVgnQgIAKgDASIBBAAIAAgCQgBgRgIgKQgIgJgOAAQgNAAgKAKg");
	this.shape_206.setTransform(-286.1,-113.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ag/BZIAAixIAyAAQAWAAASAKQASALAKASQAJATAAAZIAAAKQAAAZgJATQgKATgSAKQgSALgXAAgAgoBGIAZAAQAaAAAPgRQAPgRAAgfIAAgKQAAgegOgRQgOgRgZAAIgcAAg");
	this.shape_207.setTransform(-300.775,-115.375);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgEADgEQAEgFAGAAQAHAAADAFQAEAEAAAEQAAAGgEAEQgDADgHAAQgGAAgEgDg");
	this.shape_208.setTransform(-367.05,-107.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgqAyQgRgTAAgeIAAgBQAAgUAIgPQAHgQAOgIQANgJARAAQAbAAAQATQARATAAAeIAAABQAAATgHAQQgIAPgNAJQgOAJgSgBQgaAAgQgSgAgagjQgKANAAAXQAAAXAKANQAKANAQAAQARAAAKgNQALgOAAgXQAAgWgLgNQgKgOgRAAQgQAAgKAOg");
	this.shape_209.setTransform(-377.325,-113.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAtBZIhZiIIAACIIgXAAIAAixIAXAAIBZCJIAAiJIAXAAIAACxg");
	this.shape_210.setTransform(-393.375,-115.375);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAZAAIAAARIgZAAIAABRQAAAIADAEQADAEAJAAIAKgBIAAASQgJACgIAAQgQAAgGgJg");
	this.shape_211.setTransform(-412.9,-114.575);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgpA5QgNgLAAgRQAAgVAQgJQAPgMAcAAIAWAAIAAgLQAAgLgHgIQgHgHgNAAQgMABgIAGQgIAGAAAJIgXAAQAAgKAHgKQAHgJAMgFQAMgFANgBQAYAAAMAMQANAMABATIAAA8QAAATAEAKIAAACIgYAAQgCgEgBgKQgPAQgVAAQgTAAgNgLgAgfAaQAAALAHAGQAHAGALAAQAKAAAKgFQAJgGAEgJIAAgbIgSAAQgoAAAAAYg");
	this.shape_212.setTransform(-423.4,-113.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_213.setTransform(-433.225,-115.875);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("Ag/BZIAAixIBAAAQAeAAAQAPQARAPAAAYQAAAagQANQgQAOgfAAIgoAAIAABGgAgnAAIAoAAQAUAAAKgIQAJgJABgQQgBgQgJgKQgLgJgRgBIgqAAg");
	this.shape_214.setTransform(-443.55,-115.375);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgLgOAAgRIAgAAQABARAMAJQAMAJATAAQARAAALgHQALgIAAgMQAAgMgKgIQgJgGgXgFQgYgGgPgGQgNgHgHgKQgHgKAAgNQAAgYATgPQAUgQAdAAQAfAAATARQAUAQAAAZIggAAQAAgNgKgJQgMgKgQAAQgRAAgJAIQgKAHAAANQAAALAJAGQAJAGAWAFQAYAFAPAHQAOAHAHAKQAIAKAAAPQAAAZgUAPQgUAPgfAAQgWAAgRgIg");
	this.shape_215.setTransform(-222.65,-159.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ABiBeIAAh5QAAgUgJgJQgJgKgWAAQgRAAgMAKQgMALgCASIAAB5IgeAAIAAh4QAAgogoAAQgfAAgLAaIAACGIggAAIAAi4IAeAAIABAVQAVgYAiAAQAnAAANAeQAJgOAPgIQAPgIATAAQA+AAAABAIAAB7g");
	this.shape_216.setTransform(-246.95,-159.925);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_217.setTransform(-267.275,-159.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("Ag8BGQgXgaAAgrIAAgCQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAbQAXAaAAAqIAAACQAAAbgKAVQgLAWgTAMQgTAMgZAAQglAAgXgagAglgyQgOATAAAhQAAAfAOASQAOATAXAAQAYAAAOgTQAPgSAAgiQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_218.setTransform(-284.125,-159.75);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAaQgIgCgJAAQgPAAgJAJQgIAIAAASIAAATIAnAAIAAAYIgnAAIAACgg");
	this.shape_219.setTransform(-299.575,-163.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgFBnQgLgMAAgYIAAhyIghAAIAAgYIAhAAIAAgsIAfAAIAAAsIAjAAIAAAYIgjAAIAAByQAAALAFAGQAEAGALAAIAPgDIAAAaQgMAEgMAAQgVAAgKgOg");
	this.shape_220.setTransform(-312.475,-161.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgPQAWgQAnAAIAeAAIAAgOQAAgQgKgKQgJgKgTAAQgRgBgLAJQgMAJAAAMIgfAAQAAgOAKgNQAJgNARgHQARgIATAAQAgAAASAQQASAQABAcIAABUQAAAaAGAPIAAADIghAAQgCgGgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAOAKAJQAKAIAQAAQAOABANgJQANgHAGgNIAAglIgYAAQg6AAAAAig");
	this.shape_221.setTransform(-327.225,-159.75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgPCDIAAkFIAfAAIAAEFg");
	this.shape_222.setTransform(-340.95,-163.625);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AhZB9IAAj5IBbAAQApABAXAUQAYAVgBAjQABAkgXATQgXATgqAAIg6AAIAABigAg4AAIA6AAQAbAAAOgLQANgMAAgYQAAgXgNgMQgOgOgZgBIg8AAg");
	this.shape_223.setTransform(-355.45,-162.95);

	this.instance = new lib.baselinetrain24pxsvg("synched",0);
	this.instance.setTransform(-408.75,-162.25,3.1579,3.1579,0,0,0,12.1,11.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAzB3IAAiZQABgagMgLQgLgMgYgBQgTAAgOALQgPAKgHARIAAClIgpAAIAAjoIAmAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_224.setTransform(31.95,-235.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AhLBYQgeghAAg2IAAgCQAAgiAOgcQANgbAYgPQAYgPAeAAQAvAAAeAhQAdAhAAA2IAAADQAAAigNAbQgNAagYAQQgYAPggAAQguAAgdghgAgvg/QgSAXAAArQAAAmASAYQASAXAdAAQAfAAARgYQASgXAAgqQAAgmgSgYQgSgYgeAAQgdAAgSAYg");
	this.shape_225.setTransform(7.225,-235.475);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgQh2QgHgHAAgKQAAgKAHgGQAFgHALABQALgBAHAHQAFAGAAAKQAAAKgFAHQgHAGgLAAQgLAAgFgGg");
	this.shape_226.setTransform(-10.6,-239.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_227.setTransform(-23.825,-238.05);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgXAAQgWAAgOAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAWgJQAUgKAZAAQAoAAAXAVQAXAUABAjIAABqQgBAgAJATIAAADIgqAAQgEgHgCgRQgbAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQAMALAUAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhJAAABArg");
	this.shape_228.setTransform(-42.35,-235.475);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_229.setTransform(-62.125,-238.05);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("Ag2CUQgcgMgPgWQgQgVAAgbIAqAAQAAAcAVAQQAVARAiAAQAgAAASgOQARgNAAgXQAAgXgQgMQgQgNgpgMQg1gPgYgWQgZgWAAghQAAglAegYQAdgYAvAAQAgAAAZANQAZAMAOAWQAOAWAAAaIgpAAQAAgcgSgRQgSgQghAAQgeAAgRANQgRAOAAAYQAAATAQANQAQANAnALQAmALAXANQAVANALARQALASAAAYQAAAmgeAXQgeAXgxAAQgfAAgcgNg");
	this.shape_230.setTransform(-81.675,-239.475);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_231.setTransform(-111,-240.35);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQANgRAUgJQAWgKAYAAQAoAAAXAVQAXAUAAAjIAABqQAAAgAJATIAAADIgqAAQgDgHgCgRQgcAdgmAAQgiAAgWgUgAg4AuQAAATANAKQAMALAUAAQASAAAQgKQASgJAHgQIAAgwIggAAQhHAAgBArg");
	this.shape_232.setTransform(-128.35,-235.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("Ag3B3IAAjoIAnAAIAAAbQATggAkAAQALAAAGAEIAAAlQgJgCgKAAQgmAAgOAhIAAClg");
	this.shape_233.setTransform(-146.575,-235.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgGCCQgOgQAAgdIAAiPIgqAAIAAggIAqAAIAAg4IAnAAIAAA4IArAAIAAAgIgrAAIAACPQAAAOAGAGQAFAIAOgBQAHAAAMgCIAAAgQgPAEgPABQgbAAgMgRg");
	this.shape_234.setTransform(-163.025,-238.05);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgPAKgHARIAAClIgpAAIAAjoIAmAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_235.setTransform(-181.7,-235.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AhEBaQgdgggBg0IAAgGQAAgiAOgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAaAeAAA4IAAAPIidAAQABAjAUAVQASAVAdAAQAVAAAPgIQAPgJALgOIAYATQgeAtg6AAQguAAgegfgAgkhFQgQARgEAgIBzAAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_236.setTransform(-205.25,-235.475);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AhWB5QghgoAAhDIAAgdQgBgrARghQAPghAcgSQAdgSAlAAQAxAAAfAcQAdAcAGAxIgqAAQgFgmgTgQQgSgRgfAAQgnAAgWAdQgXAdAAA2IAAAeQAAAzAWAeQAUAeAmAAQAiAAASgQQATgPAGgnIAqAAQgHAygeAbQgfAbgzAAQg3AAghgog");
	this.shape_237.setTransform(-231.15,-239.475);

	this.instance_1 = new lib.AirCSLogo("synched",0);
	this.instance_1.setTransform(-391.45,-240.9,0.4257,0.4257,0,0,0,0.1,0.1);

	this.instance_2 = new lib.WindowRect();
	this.instance_2.shadow = new cjs.Shadow("#000000",5,5,28);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVAAgMgRgAgUgIQgIAKAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_238.setTransform(173.075,1.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAPBOIAAgkIhHAAIAAgMIBGhrIAVAAIAABnIAWAAIAAAQIgWAAIAAAkgAANguIgtBIIAvAAIAAhMg");
	this.shape_239.setTransform(118.25,-54.775);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAOAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQAAAKgHAJQgGAJgLAFQgKAFgNAAQgWAAgOgPg");
	this.shape_240.setTransform(-110.2,4.025);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_241.setTransform(-119.25,3.925);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AA9A7IAAhLQABgNgGgGQgGgGgNAAQgMAAgGAGQgIAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgGAQIAABUIgUAAIAAhzIASAAIABANQAMgPAXAAQAYAAAHATQAGgJAKgFQAJgFAMAAQAnAAABAoIAABNg");
	this.shape_242.setTransform(-144.8,3.925);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AA9A7IAAhLQAAgNgFgGQgGgGgOAAQgLAAgHAGQgHAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgHAQIAABUIgUAAIAAhzIATAAIABANQAMgPAWAAQAYAAAJATQAFgJAJgFQAKgFANAAQAmAAAAAoIAABNg");
	this.shape_243.setTransform(-164.1,3.925);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJARAAQAZAAAPAOQAQAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAIgIADgTIAVAAQgCAYgQAOQgPANgaAAQgbAAgQgTg");
	this.shape_244.setTransform(-193.3,2.025);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgjBRIgHgCIAAgPIAFAAQALAAAFgEQAGgEAEgLIAEgMIgphxIAVAAIAcBVIAbhVIAWAAIgvCEQgKAegYAAg");
	this.shape_245.setTransform(-211.25,6.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgJBSIAAikIATAAIAACkg");
	this.shape_246.setTransform(-263.025,1.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAZAAAQAOQAOAOADAYIgUAAQgDgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAJgIAEgTIAUAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_247.setTransform(-282.45,-26.375);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_248.setTransform(-202.175,-55.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgJBSIAAikIATAAIAACkg");
	this.shape_249.setTransform(-234.875,-55.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_250.setTransform(-250.6,-81.175);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJASAAQAZAAAOAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAIgIAEgTIAUAAQgDAYgPAOQgPANgaAAQgbAAgQgTg");
	this.shape_251.setTransform(-301.95,-83.175);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgXAAQgVAAgPAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAVgJQAWgKAYAAQAoAAAXAVQAXAUABAjIAABqQAAAgAIATIAAADIgqAAQgDgHgDgRQgbAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhJAAABArg");
	this.shape_252.setTransform(89.15,-235.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AA0B3IAAiZQAAgagLgLQgMgMgYgBQgSAAgPALQgPAKgHARIAAClIgpAAIAAjoIAmAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_253.setTransform(35.8,-235.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AhEBaQgdggAAg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAuAAAZAeQAZAeAAA4IAAAPIidAAQABAjATAVQAUAVAcAAQAVAAAPgIQAOgJAMgOIAXATQgdAtg6AAQguAAgegfgAglhFQgPARgFAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_254.setTransform(12.25,-235.475);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AhWB5QgigoAAhDIAAgdQAAgrAQghQAPghAdgSQAdgSAkAAQAyAAAeAcQAfAcAEAxIgpAAQgGgmgSgQQgRgRghAAQgmAAgWAdQgXAdAAA2IAAAeQAAAzAVAeQAWAeAlAAQAiAAATgQQASgPAGgnIApAAQgFAygfAbQgfAbgzAAQg3AAghgog");
	this.shape_255.setTransform(-13.65,-239.475);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AhGCiIgPgCIAAghIALABQAUAAAMgIQALgIAHgWIAJgXIhTjlIArAAIA5CtIA3itIAqAAIhdELQgVA6gvAAg");
	this.shape_256.setTransform(-49.575,-230.775);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQAMgBAFAHQAGAGABAKQgBAKgGAHQgFAGgMAAQgLAAgGgGg");
	this.shape_257.setTransform(-79.6,-239.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AhWB5QgigoABhDIAAgdQAAgrAPghQAPghAdgSQAdgSAlAAQAxAAAeAcQAfAcAEAxIgpAAQgGgmgSgQQgRgRggAAQgnAAgWAdQgXAdAAA2IAAAeQAAAzAWAeQAUAeAmAAQAiAAASgQQATgPAGgnIApAAQgFAygfAbQgfAbgzAAQg3AAghgog");
	this.shape_258.setTransform(-99.05,-239.475);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_259.setTransform(-153.15,-240.35);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgXAAQgVAAgPAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAVgJQAWgKAYAAQAoAAAXAVQAXAUABAjIAABqQAAAgAIATIAAADIgqAAQgDgHgDgRQgbAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhJAAABArg");
	this.shape_260.setTransform(-170.5,-235.475);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AA0ClIAAiaQAAgYgMgMQgLgMgYAAQgTAAgOALQgOAKgJAQIAAClIgnAAIAAlJIAnAAIAAB+QAbghApAAQBKAAAABSIAACag");
	this.shape_261.setTransform(-194.55,-240.35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("ABHCdIhBjkIgFgXIgEAXIhDDkIglAAIhMk5IApAAIAyDWIAGApIAIglIA+jaIAjAAIA8DaIAIAmIAHgqIAxjWIApAAIhME5g");
	this.shape_262.setTransform(-226.05,-239.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgrA9QgQgUAAgiIAAgOQAAgVAHgRQAJgRAOgIQAOgJARAAQAaAAAPAOQAPAOACAYIgVAAQgCgTgJgIQgJgIgRAAQgSAAgLAOQgLAPAAAbIAAAOQAAAZAKAPQALAQASAAQARAAAJgIQAKgIACgTIAVAAQgDAYgPAOQgPANgaAAQgbAAgRgTg");
	this.shape_263.setTransform(-40,233.175);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAjBOIgghxIgCgMIgCAMIghBxIgTAAIgmibIAVAAIAZBqIADAVIAEgTIAfhsIAQAAIAeBsIAFATIADgVIAYhqIAVAAIgmCbg");
	this.shape_264.setTransform(-56.95,233.175);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAOAAQAUAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgMAAQgOAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAOAAQALAAAIgGQAIgHABgJIATAAQAAAKgHAJQgGAJgLAFQgKAFgNAAQgWAAgOgPg");
	this.shape_265.setTransform(-140.25,235.175);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQAMgHAPAAQATAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQALAAAHgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_266.setTransform(-200.15,235.175);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAJgPATAAQAFAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_267.setTransform(-244.9,235.075);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUgBQgVABgMgRgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_268.setTransform(-261.025,232.85);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_269.setTransform(-278.4,235.175);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_270.setTransform(-374.575,232.75);

	this.instance_3 = new lib.baselinelocal_airport24pxsvg("synched",0);
	this.instance_3.setTransform(-434.1,228,2.7895,2.7895,0,0,0,11.6,12);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_271.setTransform(-170.425,-81.275);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_272.setTransform(-277.275,-81.275);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAKBPIAAiEIgnAPIAAgSIA3gWIAEAAIAACdg");
	this.shape_273.setTransform(-417.45,-83.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AhhCjIAAlBIAkAAIACAaQAYgeArAAQApAAAZAgQAYAfAAA4IAAAEQAAA0gYAhQgYAggqAAQgpAAgYgbIAABwgAg5hgIAABuQARAgAlAAQAcAAARgXQAQgXAAgrQAAgogQgXQgRgWgcAAQgkAAgSAgg");
	this.shape_274.setTransform(38.875,-231.225);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("Ag3B3IAAjoIAnAAIAAAbQATggAkAAQALAAAGAEIAAAlQgJgCgKAAQgmAAgOAhIAAClg");
	this.shape_275.setTransform(19.775,-235.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgQh2QgHgHABgKQgBgKAHgGQAFgHALABQALgBAGAHQAHAGgBAKQABAKgHAHQgGAGgLAAQgLAAgFgGg");
	this.shape_276.setTransform(5.85,-239.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("ABgCdIgfhSIiBAAIgeBSIgqAAIB3k5IAjAAIB3E5gAg0ApIBpAAIg1iRg");
	this.shape_277.setTransform(-13.9,-239.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_278.setTransform(197.075,-26.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_279.setTransform(173.075,-26.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACkIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_280.setTransform(-224.775,-26.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_281.setTransform(-248.85,-24.375);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgJBTIAAikIATAAIAACkg");
	this.shape_282.setTransform(-257.475,-26.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAZBTIgog2IgMAMIAAAqIgUAAIAAikIAUAAIAABjIAKgOIAkglIAYAAIgsAwIAxBEg");
	this.shape_283.setTransform(-264.975,-26.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAaAWABQAVgBAIgQIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_284.setTransform(-288.875,-24.25);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgfBHQgPgJgIgRQgHgQgBgXIAAgKQAAgWAIgSQAIgRAPgJQAOgJARAAQATAAAOAJQAPAJAHARQAIARAAAXIAAAJQAAAXgIARQgHARgPAJQgOAJgTAAQgRAAgOgJgAgegvQgLAPAAAbIAAAKQAAAbALAQQALAPATAAQAUAAALgPQALgOAAgbIAAgLQABgcgMgPQgLgPgUAAQgSAAgMAPg");
	this.shape_285.setTransform(-242.55,-54.775);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgwBOIAAibIBhAAIAAARIhMAAIAAA1IBBAAIAAAQIhBAAIAABFg");
	this.shape_286.setTransform(-255.6,-54.775);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAABPQgZAAgPgNQgPgOgBgZIAAhpIAVAAIAABpQAAARAJAJQAJAKARAAQARAAAKgKQAJgJAAgRIAAhpIAVAAIAABpQgBAWgNAOQgOAOgYACg");
	this.shape_287.setTransform(-269.325,-54.675);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AA5BOIAAg9IAChAIgzB9IgPAAIg0h9IADBAIAAA9IgVAAIAAibIAbAAIAyB+IAzh+IAbAAIAACbg");
	this.shape_288.setTransform(-286.1,-54.775);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_289.setTransform(-301.775,-54.775);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AhFBZQgcggAAg3IAAgFQAAgiAMgbQANgaAXgPQAYgPAeAAQAnAAAaAYQAaAXACAmIgmAAQgBgXgQgOQgPgPgXAAQgdAAgQAWQgRAWAAApIAAAHQAAAoAQAVQARAWAeAAQAVAAAQgNQAQgNABgTIAmAAQgBAUgNASQgMASgWALQgVALgXAAQgvAAgcggg");
	this.shape_290.setTransform(-14.575,-235.475);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgQh2QgHgHAAgKQAAgKAHgGQAFgHALABQALgBAHAHQAFAGAAAKQAAAKgFAHQgHAGgLAAQgLAAgFgGg");
	this.shape_291.setTransform(-31.65,-239.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AguBvQgVgKgMgSQgMgSAAgUIAnAAQABAUAQAMQAOALAYAAQAWAAAOgJQAOgJAAgPQAAgRgMgIQgNgJgdgHQgegGgSgIQgRgJgJgNQgIgMAAgRQAAgdAYgUQAYgUAlAAQAnAAAZAVQAYAUAAAgIgoAAQAAgQgNgMQgOgMgVAAQgVAAgMAKQgNAJAAAPQAAAPAMAHQALAHAdAHQAeAHASAJQATAIAJANQAIANAAATQAAAfgYATQgZATgoAAQgbAAgWgKg");
	this.shape_292.setTransform(-77.725,-235.475);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AhwCdIAAk5IBYAAQAoABAgARQAeATASAhQARAiAAAqIAAATQAAAtgRAhQgRAhgfASQghASgpABgAhHB7IArAAQAvAAAbgeQAageAAg3IAAgRQAAg1gYgeQgagdgtAAIgwAAg");
	this.shape_293.setTransform(-113.6,-239.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgXAAQgWAAgOAKQgPALAAAPIgnAAQAAgRAMgQQAMgRAWgJQAVgKAYAAQAoAAAXAVQAXAUABAjIAABqQgBAgAJATIAAADIgqAAQgEgHgCgRQgbAdglAAQgjAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAAQgKQASgJAHgQIAAgwIgfAAQhJAAABArg");
	this.shape_294.setTransform(-162.15,-235.475);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgxCaQgYgLgMgTIAUgYQAaAgAlAAQAcAAAQgQQAQgRAAgdIAAgUQgYAbgoAAQgpAAgZghQgZghAAg3QAAg3AZggQAZggAqAAQApAAAYAeIACgaIAkAAIAADiQAAAtgaAaQgbAagtAAQgZAAgYgKgAgphrQgQAXAAAsQAAAnAQAWQAQAWAcAAQAmAAARgiIAAhpQgSghglAAQgcAAgQAWg");
	this.shape_295.setTransform(-186.925,-231.125);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AheCdIAAk5IAqAAIAAEXICTAAIAAAig");
	this.shape_296.setTransform(-232.625,-239.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AhACPQgdgTgQghQgPgigBgsIAAgWQAAgtAQgjQAPgiAdgSQAdgTAkAAQAlAAAdASQAdASAPAjQAQAiAAAuIAAATQAAAugQAiQgPAigdATQgcASgmAAQgkAAgcgSgAg9hfQgWAegBA1IAAAWQAAA2AXAfQAWAfAnAAQAoAAAWgdQAWgeABg2IAAgWQAAg4gXgeQgWgdgoAAQgmAAgXAdg");
	this.shape_297.setTransform(-112.275,-239.475);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AhgCdIAAk5IDBAAIAAAjIiYAAIAABrICDAAIAAAgIiDAAIAACLg");
	this.shape_298.setTransform(-138.375,-239.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AhRCDQgfgcAAgwIAAjVIApAAIAADTQAAAiASATQATATAiAAQAjAAASgTQATgTAAgiIAAjTIApAAIAADUQAAAsgbAdQgcAcgvADIgLABQgzAAgegcg");
	this.shape_299.setTransform(-165.925,-239.275);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AByCdIAAh7IAEiCIhnD9IgeAAIhnj8IAFCBIAAB7IgqAAIAAk5IA1AAIBmD/IBmj/IA2AAIAAE5g");
	this.shape_300.setTransform(-199.45,-239.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("ABGCdIhFh/IhIAAIAAB/IgqAAIAAk5IBoAAQA0AAAcAZQAdAYAAAuQAAAdgQAVQgQAVgcALIBKCFIAAADgAhHgDIA/AAQAeAAATgQQASgPAAgbQAAgdgRgQQgSgPggAAIg/AAg");
	this.shape_301.setTransform(-230.8,-239.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAGAAADAEQADADAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_302.setTransform(205.375,239.925);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_303.setTransform(161.5,235.175);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAQQAMAPAAAdIAAABQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQANAAAJgMQAJgKAAgWQAAgTgJgMQgJgMgNAAQgSABgJAQg");
	this.shape_304.setTransform(144.25,237.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQASAAQAOAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgNgQQgMgQAAgcQAAgbAMgQQANgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_305.setTransform(126,237.375);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AA+A7IAAhLQAAgNgGgGQgGgGgNAAQgMAAgGAGQgIAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgGAQIAABUIgUAAIAAhzIASAAIABANQAMgPAXAAQAXAAAIATQAGgJAJgFQAKgFAMAAQAnAAABAoIAABNg");
	this.shape_306.setTransform(92.9,235.075);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_307.setTransform(65.15,235.175);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgQBUIAAhkIgSAAIAAgPIASAAIAAgMQAAgTAKgKQAKgLARAAQAIAAAGACIgBAQIgKgBQgLAAgEAGQgGAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_308.setTransform(32.8,232.625);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAGAAADAEQADADAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_309.setTransform(-88.025,239.925);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_310.setTransform(-143.95,233.875);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAQQAMAPAAAdIAAABQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQANAAAJgMQAJgKAAgWQAAgTgJgMQgJgMgNAAQgSABgJAQg");
	this.shape_311.setTransform(-309.35,237.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_312.setTransform(-318.9,235.075);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAIAAAIgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_313.setTransform(-334.55,235.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJASAAQAZAAAOAOQAPAOADAYIgUAAQgDgTgJgIQgJgIgQAAQgTAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAJgIQAKgIADgTIAUAAQgDAYgPAOQgQANgZAAQgbAAgQgTg");
	this.shape_314.setTransform(-367.3,233.175);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_315.setTransform(-93.75,6.225);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_316.setTransform(-121.15,2.725);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_317.setTransform(-127.55,3.925);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_318.setTransform(-137.85,4.025);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAjBOIg2hIIgTATIAAA1IgVAAIAAibIAVAAIAABNIBEhNIAZAAIg9BFIBCBWg");
	this.shape_319.setTransform(-149.8,2.025);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgcBHQgPgJgIgQQgIgRAAgVIAAgNQAAgjAQgUQARgTAdAAQAYAAAPAMQAPANADAXIgUAAQgGgfgfAAQgUAAgLAOQgKAPAAAbIAAAMQAAAaAMAQQAMAQATAAQAMAAAIgDQAJgDAGgGIAAgjIgkAAIAAgRIA4AAIAAA6QgIALgOAGQgOAFgTAAQgSAAgPgJg");
	this.shape_320.setTransform(-183.875,2.025);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_321.setTransform(-199.8,3.925);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAcA6IgchXIgbBXIgQAAIgihzIAUAAIAXBWIAbhWIAPAAIAcBYIAWhYIAUAAIgiBzg");
	this.shape_322.setTransform(-243.175,4.05);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_323.setTransform(-254.55,3.925);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_324.setTransform(-288.925,3.925);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_325.setTransform(-220.5,-24.475);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgGA6IgqhzIAUAAIAcBYIAdhYIAVAAIgqBzg");
	this.shape_326.setTransform(-241.75,-24.35);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_327.setTransform(-170.425,-81.275);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgBgJQgPAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_328.setTransform(-207.6,-81.175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_329.setTransform(-217.5,-82.475);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_330.setTransform(-250.6,-81.175);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgbA7IAAhzIATAAIAAANQAKgPARAAQAGAAADABIAAATIgKgBQgSAAgHARIAABRg");
	this.shape_331.setTransform(-259.7,-81.275);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_332.setTransform(-267.95,-82.475);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_333.setTransform(-277.275,-81.275);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgjBEQgOgLABgUIATAAQAAAMAIAIQAJAHAMAAQAPAAAHgHQAIgIAAgOQAAgOgIgHQgJgHgPAAIgPAAIAAgQIAPAAQANAAAJgHQAHgHAAgMQAAgcgbAAQgMAAgIAHQgHAIAAAMIgUAAQAAgTAOgMQANgMAUAAQAWAAANALQANAMAAAVQAAAKgHAKQgHAJgLAFQAMADAIAKQAGAJABAOQAAAVgOAMQgOAMgWAAQgVAAgOgMg");
	this.shape_334.setTransform(-416.35,-26.375);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AhICGQgZghAAg1IAAgDQAAg1AZggQAaghApAAQAoAAAYAcIAAh5IAnAAIAAFJIglAAIgCgZQgXAdgqAAQgoAAgaghgAgpgRQgQAWAAAsQAAAoAQAWQAQAWAcAAQAmAAASgiIAAhpQgSghglAAQgdAAgQAWg");
	this.shape_335.setTransform(-31.6,-240.125);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgOAKgJARIAAClIgnAAIAAjoIAlAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_336.setTransform(-55.6,-235.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgUCdIAAk5IApAAIAAE5g");
	this.shape_337.setTransform(-131.05,-239.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AA0B3IAAiZQgBgagKgLQgMgMgYgBQgSAAgPALQgPAKgIARIAAClIgoAAIAAjoIAmAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_338.setTransform(-184.8,-235.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgIAJQgDgEAAgEQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_339.setTransform(438.4031,182.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgFA8QgSAAgNgKQgMgLABgRIATAAQAAAKAHAGQAGAGALAAQAJAAAIgEQAIgFABgIQABgMgPgFIgTgGQgZgIAAgUQABgQAOgJQANgKARAAQASAAAKAKQALAKAAAQIgTAAQAAgJgFgFQgHgFgJgBQgJAAgHAFQgHAFgBAIQgBAKAOAFIAIACQAUAFAIAIQAJAIgBAMQgBALgGAIQgHAIgKAFQgKADgJAAIgDAAg");
	this.shape_340.setTransform(430.9001,177.4278);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgXBSIAcijIATAAIgbCjg");
	this.shape_341.setTransform(423.15,175);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgXBPIAUhzIATAAIgTBzgAADg6QgCgDAAgFQAAgGACgDQAEgDAFAAQAFgBADAEQAEADgBAFQABAFgEADQgDADgFABQgFAAgEgDg");
	this.shape_342.setTransform(417.8,175.3219);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_343.setTransform(408.73,177.4258);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgSBBQgGgJACgOIALhHIgUAAIADgPIAVAAIAEgcIASAAIgEAcIAVAAIgDAPIgVAAIgLBIIAAAFQABAIAHAAIAJgBIgBAQQgHACgGAAQgMAAgGgIg");
	this.shape_344.setTransform(400.05,176.125);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_345.setTransform(390.5232,177.4269);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgUBTQgQAAgKgMQgJgMgBgVIABgPQACgSAHgNQAIgOALgHQALgIAOABQASAAALAOIALg9IATAAIgcCkIgSAAIACgMQgNAPgTAAIgBgBgAgTgMQgIAHgFAMQgFANAAAOQAAAPAGAJQAGAIALABQAQAAANgRIAJg1QgGgQgRAAIgBAAQgKAAgJAHg");
	this.shape_346.setTransform(379.1417,175.1008);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_347.setTransform(361.5732,177.4269);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_348.setTransform(352.525,177.3242);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_349.setTransform(342.1848,177.4251);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_350.setTransform(326.2284,177.3242);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_351.setTransform(308.675,177.3242);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_352.setTransform(298.3348,177.4251);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_353.setTransform(289.975,174.875);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("Ag4BSIAcigIASAAIgDANQAOgQAUABQAQAAAKAMQAJAMABAVIgBANIAAADQgCARgIAOQgHAOgLAHQgLAHgNAAQgUgBgKgNIgKA4gAgOgvIgKA2QAHAQARAAQAOABAJgMQALgMADgVIAAgJQABgQgHgJQgFgIgMAAIAAgBQgQAAgMARg");
	this.shape_354.setTransform(272.55,179.5492);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_355.setTransform(261.08,177.4258);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_356.setTransform(245.6784,177.3242);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgXBSIAbijIAUAAIgcCjg");
	this.shape_357.setTransform(229,175);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgWBPIAThzIATAAIgTBzgAAEg6QgDgDAAgFQAAgGADgDQADgDAFAAQAFgBADAEQADADAAAFQAAAFgDADQgDADgFABQgFAAgDgDg");
	this.shape_358.setTransform(223.65,175.3219);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_359.setTransform(214.58,177.4258);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_360.setTransform(205.825,177.3242);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("Ag6BQIACgRIAFABQAJAAAHgEQAGgFAGgKIAHgNIgVhxIAVAAIANBWIAohWIAWAAIhECHQgPAcgWAAIgMgCg");
	this.shape_361.setTransform(196.45,179.825);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AARBSIgdg1IgPAOIgHAnIgUAAIAdijIATAAIgRBhIAMgMIAoglIAaAAIg2AxIAlBCg");
	this.shape_362.setTransform(186.425,175);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgJBQQgOAAgNgGQgMgGgGgLQgHgLABgNIAUAAQgBAOAJAIQAJAIAPABQAPAAAKgHQAKgHABgMQADgRgUgIIgSgHIgGgDQgggNACgaQACgNAHgKQAIgKANgFQANgGAOABQAOAAALAGQALAGAGALQAGALgBANIgUAAQABgOgIgIQgHgIgOAAQgOgBgKAHQgKAIgBAMQgCAQAWAIIAPAGIAIADQAeANgCAcQgCANgHAKQgIAJgNAFQgNAFgMAAIgDAAg");
	this.shape_363.setTransform(174.4453,175.425);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_364.setTransform(156.23,177.4258);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_365.setTransform(139.0848,177.4251);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgSBBQgFgJABgOIALhHIgUAAIADgPIAUAAIAGgcIARAAIgFAcIAWAAIgDAPIgVAAIgLBIIAAAFQABAIAHAAIAKgBIgCAQQgHACgGAAQgMAAgGgIg");
	this.shape_366.setTransform(129.85,176.125);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_367.setTransform(117.275,177.3242);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_368.setTransform(107.5732,177.4269);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_369.setTransform(99.475,174.875);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_370.setTransform(88.6732,177.4269);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAcBOIgWg/IgjAAIgLA/IgVAAIAcibIAuAAQAYAAANAMQANANgCAVQgBAPgKALQgJAKgQAGIAYBCIAAABgAgagBIAcAAQAQAAAKgIQALgIACgOQABgNgHgIQgGgIgPAAIgeAAg");
	this.shape_371.setTransform(76.4133,175.425);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgwBSIAAigIASAAIABANQAMgQAVABQAVgBAMARQAMAPAAAdIAAABQAAAagMAQQgMAQgVAAQgUAAgMgNIAAA4gAgcgvIAAA2QAJAQASAAQAOAAAIgMQAJgKAAgWQAAgUgJgLQgIgLgOAAQgSgBgJARg");
	this.shape_372.setTransform(195.65,151.15);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgvBOIAAibIAWAAIAACKIBJAAIAAARg");
	this.shape_373.setTransform(158.85,147.025);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_374.setTransform(111.75,149.025);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_375.setTransform(117.65,120.625);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgjBRIgHgCIAAgQIAGABQAKAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgwCGQgJAcgYAAg");
	this.shape_376.setTransform(99.05,123);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AAZBSIgog2IgMANIAAApIgUAAIAAijIAUAAIAABjIAKgOIAkglIAYAAIgsAwIAxBDg");
	this.shape_377.setTransform(89.025,118.2);

	this.instance_4 = new lib.SkyrailLogo("synched",0);
	this.instance_4.setTransform(119.25,71.3,0.5595,0.5595,0,0,0,0.1,0.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAFABQALAAAFgEQAGgEADgLIAFgMIgphyIAVAAIAcBXIAbhXIAWAAIgvCGQgKAcgYAAg");
	this.shape_378.setTransform(-64.45,255.65);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_379.setTransform(-137.05,253.275);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AA5BOIAAg9IAChAIgzB9IgPAAIg0h9IADBAIAAA9IgVAAIAAibIAbAAIAyB+IAzh+IAbAAIAACbg");
	this.shape_380.setTransform(-169.55,251.275);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgPBUIAAhkIgTAAIAAgPIATAAIAAgMQgBgTALgKQAJgLARAAQAIAAAGACIgBAQIgLgBQgKAAgEAGQgGAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_381.setTransform(-224.45,250.725);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQAMgPAVgBQAVABAMAPQAMAQAAAdIAAABQAAAagMAQQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQANAAAJgLQAIgLAAgWQAAgTgIgMQgJgMgNAAQgSABgJAQg");
	this.shape_382.setTransform(-279.15,255.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgJBTIAAikIATAAIAACkg");
	this.shape_383.setTransform(-362.325,250.85);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_384.setTransform(-185.325,202.475);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_385.setTransform(-204.975,202.65);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_386.setTransform(-219.175,199.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVAAgKgMg");
	this.shape_387.setTransform(-229.725,200.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgdAWgOQAWgQAngBIAeAAIAAgOQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAZAGAPIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_388.setTransform(-244.475,202.65);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("ABiBeIAAh5QAAgUgJgJQgJgKgVAAQgSAAgMAKQgMALgCASIAAB5IgeAAIAAh4QAAgogoAAQgeAAgMAaIAACGIgfAAIAAi4IAdAAIABAVQAUgYAjAAQAnAAAMAeQAKgOAPgIQAPgIAUAAQA8AAACBAIAAB7g");
	this.shape_389.setTransform(-269.3,202.475);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAgBQAAgbALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAghQAAgegPgTQgOgTgYAAQgXAAgOATg");
	this.shape_390.setTransform(-306.475,202.65);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgdAQgRQAPgQAdAAQALAAALADIgCAaQgIgDgJAAQgPAAgJAKQgIAJAAAQIAAAUIAnAAIAAAYIgnAAIAACgg");
	this.shape_391.setTransform(-321.925,198.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_392.setTransform(-338.175,202.475);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgPB8IAAj3IAfAAIAAD3g");
	this.shape_393.setTransform(-352.575,199.45);

	this.instance_5 = new lib.baselineinfo24pxsvg("synched",0);
	this.instance_5.setTransform(-400.55,200.7,2.405,2.405,0,0,0,11.9,12);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgIAJQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEADQADAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgDg");
	this.shape_394.setTransform(21.8531,147.15);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgFA8QgTAAgLgKQgNgLABgRIAUAAQAAAKAFAGQAHAGAKAAQAKAAAIgEQAHgFACgIQABgMgOgFIgTgGQgagIABgUQAAgQAOgJQANgKARAAQASAAAKAKQAMAKgBAQIgTAAQAAgJgFgFQgHgFgJgBQgJAAgHAFQgHAFgBAIQgCAKAOAFIAJACQAUAFAJAIQAIAIgBAMQAAALgHAIQgGAIgLAFQgKADgJAAIgDAAg");
	this.shape_395.setTransform(14.3501,142.3778);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgXBTIAbilIAUAAIgcClg");
	this.shape_396.setTransform(6.6,139.95);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgWBPIAThzIATAAIgTBzgAAEg6QgDgDgBgFQABgGADgDQADgDAFAAQAFgBADAEQADADAAAFQAAAFgDADQgDADgFABQgFAAgDgDg");
	this.shape_397.setTransform(1.25,140.2719);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_398.setTransform(-7.82,142.3758);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgSBBQgFgJABgOIAMhHIgVAAIADgPIAUAAIAGgcIASAAIgGAcIAWAAIgDAPIgVAAIgLBIIAAAFQABAIAHAAIAKgBIgCAQQgHACgGAAQgMAAgGgIg");
	this.shape_399.setTransform(-16.5,141.075);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_400.setTransform(-26.0268,142.3769);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgUBTQgQAAgKgMQgJgMgBgVIABgPQACgSAHgNQAIgOALgHQALgIAOABQASAAALAOIALg9IATAAIgcCkIgSAAIACgMQgNAPgTAAIgBgBgAgTgMQgIAHgFAMQgFANAAAOQAAAPAGAJQAGAIALABQAQAAANgRIAJg1QgGgQgRAAIgBAAQgKAAgJAHg");
	this.shape_401.setTransform(-37.4083,140.0508);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_402.setTransform(-54.9768,142.3769);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_403.setTransform(-64.025,142.2742);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_404.setTransform(-74.3652,142.3751);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_405.setTransform(-90.3216,142.2742);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_406.setTransform(-107.875,142.2742);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_407.setTransform(-118.2152,142.3751);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_408.setTransform(-126.575,139.825);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("Ag4BSIAcigIARAAIgCANQAOgQAUABQARAAAJAMQAJAMABAVIAAANIgBADQgCARgHAOQgIAOgLAHQgLAHgNAAQgTgBgLgNIgLA4gAgOgvIgJA2QAGAQARAAQANABAKgMQALgMADgVIABgJQgBgQgGgJQgFgIgMAAIAAgBQgQAAgMARg");
	this.shape_409.setTransform(-144,144.4992);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_410.setTransform(-155.47,142.3758);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AA1A7IANhLIAAgLQgCgOgRAAQgLgBgIAHQgJAHgCALIgOBMIgSAAIANhLQABgMgFgHQgFgGgKAAQgTgBgKARIgPBUIgUAAIAVhzIASAAIgDANQAPgQAVABQALAAAHAFQAHAFADAJQAQgUAXABQARAAAIAMQAJALgDATIgMBLg");
	this.shape_411.setTransform(-170.8716,142.2742);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAcBOIgWg/IgjAAIgLA/IgVAAIAcibIAuAAQAYAAANAMQANANgCAVQgBAPgKALQgJAKgQAGIAYBCIAAABgAgagBIAcAAQAQAAAKgIQALgIACgOQABgNgHgIQgGgIgPAAIgeAAg");
	this.shape_412.setTransform(-191.6367,140.375);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgjBOIAYiKIgwAAIADgRIB0AAIgDARIgwAAIgYCKg");
	this.shape_413.setTransform(-203.425,140.375);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AADBDIgPABQgOAAgMgHQgLgHgGgNQgGgNgBgRQAAgNADgSQAEgTAIgPQAJgPAMgKQARgNAVABQAPAAALAHQALAHAHANQAGAOAAAQQABAJgBAJIgCAJQgGAuggATIAXAXIgOAMgAgOhCQgLAIgHARQgHAQgCAZIgBAGQAAAMADALQAEALAHAFQAHAGALAAQASABAOgPQANgPAFgbQACgNAAgLQABgVgIgMQgIgLgQgBIgBAAQgNAAgLAIg");
	this.shape_414.setTransform(-218.5448,141.5991);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgJBQQgOAAgNgGQgMgGgGgLQgHgLABgNIAUAAQgBAOAJAIQAJAIAPABQAPAAAKgHQAKgHABgMQADgRgUgIIgSgHIgGgDQgggNACgaQACgNAHgKQAIgKANgFQANgGAOABQAOAAALAGQALAGAGALQAGALgBANIgUAAQABgOgIgIQgHgIgOAAQgOgBgKAHQgKAIgBAMQgCAQAWAIIAPAGIAIADQAeANgCAcQgCANgHAKQgIAJgNAFQgNAFgMAAIgDAAg");
	this.shape_415.setTransform(-232.2047,140.375);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgOA8QgPAAgKgJQgJgKABgOQABgTAPgJQAPgKAXAAIAVAAIABgJQABgLgFgGQgFgGgKAAQgKAAgHAFQgIAFgBAIIgUAAQABgKAHgIQAHgIALgEQAKgEAMAAQASAAAKALQAKAKgCASIgJA4IgBAJQAAAGACAFIgBACIgTAAIgBgGIAAgGQgPAOgRAAIgBAAgAgQAIQgKAFgCALQgBAIAFAGQAFAFAJAAQAKAAAHgEQAIgFAGgIIAEgYIgOAAQgSAAgJAGg");
	this.shape_416.setTransform(-250.42,142.3758);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgHA8QgOAAgLgIQgKgHgFgOQgFgNACgQQABgRAIgOQAIgPANgIQANgIAPABQAOAAALAIQAKAIAFANQAFAOgCAQIAAABQgCARgIAOQgIAOgNAHQgMAHgNAAIgCAAgAgSgfQgKAMgDATIAAACQgBAHABAHQABANAHAHQAGAIALAAQAJABAIgFQAIgGAGgKQAFgKACgNIAAgPQgBgNgHgIQgGgHgLgBIgCAAQgNAAgKAMg");
	this.shape_417.setTransform(-267.5652,142.3751);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgRBBQgHgJACgOIAMhHIgVAAIADgPIAUAAIAGgcIASAAIgGAcIAWAAIgDAPIgVAAIgLBIIAAAFQAAAIAIAAIAKgBIgCAQQgHACgGAAQgMAAgFgIg");
	this.shape_418.setTransform(-276.8,141.075);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgkA7IAUhzIASAAIgCANQALgQARABIAJABIgCATIgJgBQgTAAgKARIgOBRg");
	this.shape_419.setTransform(-289.375,142.2742);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_420.setTransform(-299.0768,142.3769);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgmBUIAShkIgSAAIACgPIASAAIACgOQADgSALgKQAKgKARAAQAGAAAIACIgCAQIgKgBQgLAAgGAGQgGAHgCAKIgBAMIAYAAIgDAPIgXAAIgSBkg");
	this.shape_421.setTransform(-307.175,139.825);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgDA8QgWAAgMgQQgMgPACgYIAAgFQACgQAIgPQAJgOAMgHQAMgHANAAQASAAAKAMQALALAAAUIAAAOIgBAIIhLAAQgCAQAHALQAHALAOAAQARABAOgQIALAJQgHALgLAGQgLAFgMAAIgCAAgAgMgjQgJAJgFARIA3AAIABgCQACgOgGgJQgHgJgLAAIgBAAQgKAAgJAIg");
	this.shape_422.setTransform(-317.9768,142.3769);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAcBOIgWg/IgjAAIgLA/IgVAAIAcibIAuAAQAYAAANAMQANANgCAVQgBAPgKALQgJAKgQAGIAYBCIAAABgAgagBIAcAAQAQAAAKgIQALgIACgOQABgNgHgIQgGgIgPAAIgeAAg");
	this.shape_423.setTransform(-330.2367,140.375);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgiBRIgIgCIAAgQIAFABQAKAAAGgEQAGgEADgLIAFgMIgqhyIAWAAIAcBXIAbhXIAVAAIguCFQgKAdgYAAg");
	this.shape_424.setTransform(-89.9,116.35);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgqA9QgRgUAAgiIAAgOQAAgVAIgRQAHgRAOgIQAPgJASAAQAZAAAOAOQAPAOADAYIgVAAQgCgTgJgIQgJgIgQAAQgTAAgLAOQgMAPAAAbIAAAOQAAAZALAPQALAQASAAQARAAAKgIQAIgIADgTIAVAAQgCAYgQAOQgPANgaAAQgbAAgQgTg");
	this.shape_425.setTransform(-114.65,111.975);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_426.setTransform(-141.675,111.55);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAjBOIgghxIgDgMIgBAMIgiBxIgSAAIgmibIAUAAIAZBqIADAVIAFgTIAehsIARAAIAfBsIADATIAEgVIAYhqIAVAAIgmCbg");
	this.shape_427.setTransform(-178.05,111.975);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgaANgQQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIAKAAAXQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_428.setTransform(-211.175,111.65);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHADADQACAEAHAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_429.setTransform(-269.55,112.675);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_430.setTransform(-322.475,111.875);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_431.setTransform(-217.375,83.475);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgCgDgCgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_432.setTransform(-249.55,85.575);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_433.setTransform(-258.65,85.475);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgJBOIAAiKIgyAAIAAgRIB3AAIAAARIgyAAIAACKg");
	this.shape_434.setTransform(-269.525,83.575);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUAAQgVAAgMgRgAgUgHQgIAJAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_435.setTransform(-288.025,83.25);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_436.setTransform(-296.625,83.475);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgjAwQgKgLAAgUIAAhLIAUAAIAABKQAAAaAWAAQAVAAAIgQIAAhUIAUAAIAABzIgTAAIAAgLQgMANgWAAQgSAAgKgLg");
	this.shape_437.setTransform(-305.425,85.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AAeBRIAAg2QgMAMgUAAQgVAAgMgQQgNgQAAgaIAAgCQAAgbANgQQANgRAUABQAUgBAMAOIABgLIASAAIAACfgAgUg1QgIAMAAAWQAAATAIALQAJAMANAAQASAAAKgQIAAg4QgKgPgRAAQgOAAgJALg");
	this.shape_438.setTransform(-318.05,87.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgbBKQgOgGgHgLQgIgKAAgOIAVAAQAAAOALAIQAKAJARAAQAQAAAJgHQAIgHAAgLQAAgMgIgGQgIgGgUgGQgbgIgMgKQgMgLAAgRQAAgSAPgMQAPgMAWAAQARAAAMAGQANAGAHALQAHALAAANIgVAAQAAgOgJgIQgJgIgRAAQgOAAgIAGQgJAHAAAMQAAAKAIAGQAIAHATAFQATAGALAFQALAHAGAJQAFAJAAAMQAAATgPALQgPALgYAAQgQAAgOgGg");
	this.shape_439.setTransform(-330.475,83.575);

	this.instance_6 = new lib.SQTRSquitterLogo("synched",0);
	this.instance_6.setTransform(-388.8,117.25,0.6423,0.6423,0,0,0,-0.1,0);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_440.setTransform(26.525,34.075);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_441.setTransform(-33.325,34.075);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_442.setTransform(-42.025,33.75);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAPgUAAQgVAAgMgRgAgUgHQgIAJAAAWQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_443.setTransform(-91.825,33.85);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgHA6IgphzIAUAAIAcBYIAdhYIAVAAIgqBzg");
	this.shape_444.setTransform(-114.7,36.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_445.setTransform(-174.125,36.175);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAIgPATAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_446.setTransform(-217.25,36.075);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDAAgJQgOAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_447.setTransform(-227.55,36.175);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_448.setTransform(-244.675,36.175);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_449.setTransform(-276.725,34.075);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgMgQQgNgQAAgcQAAgbANgQQAMgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_450.setTransform(-296.6,38.375);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgJBPIAAhzIATAAIAABzgAgIg7QgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_451.setTransform(-317.375,34.075);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_452.setTransform(-357.175,33.75);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgQBUIAAhkIgSAAIAAgPIASAAIAAgMQAAgTAKgKQAKgLARAAQAIAAAGACIgBAQIgLgBQgJAAgFAGQgGAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_453.setTransform(-375.9,33.625);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_454.setTransform(-391.175,36.175);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAGgEAHIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_455.setTransform(-403.125,33.75);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgJBOIAAiKIgyAAIAAgRIB3AAIAAARIgyAAIAACKg");
	this.shape_456.setTransform(-415.775,34.175);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AApBeIAAh5QAAgUgJgKQgJgJgTAAQgOAAgMAIQgMAIgGANIAACDIggAAIAAi4IAeAAIABAYQAVgbAhAAQA7AAABBCIAAB5g");
	this.shape_457.setTransform(-91.975,-13.625);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_458.setTransform(-111.625,-13.45);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgPB+IAAi4IAfAAIAAC4gAgNheQgFgGAAgHQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_459.setTransform(-125.825,-16.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVABgKgNg");
	this.shape_460.setTransform(-136.375,-15.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("Ag6BQQgRgPAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAYAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgQgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_461.setTransform(-151.125,-13.45);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhyIghAAIAAgYIAhAAIAAgtIAfAAIAAAtIAjAAIAAAYIgjAAIAABzQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVABgKgNg");
	this.shape_462.setTransform(-166.875,-15.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgrB2QgWgKgMgRQgMgRAAgWIAgAAQAAAXARANQARANAbAAQAaAAAOgLQAOgKgBgTQABgSgNgKQgNgKghgKQgqgMgTgQQgTgSAAgaQAAgeAXgTQAYgTAkAAQAaAAAUAKQAUAKALARQALASAAAUIghAAQAAgWgOgNQgOgNgbAAQgXAAgNALQgPAKAAATQAAAQAOAKQAMALAfAIQAeAJASAKQASAKAIAOQAJAOAAATQAAAegYATQgXASgoAAQgZAAgWgKg");
	this.shape_463.setTransform(-182.4,-16.625);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_464.setTransform(-206.425,-13.625);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("Ag2BHQgXgZgBgpIAAgFQAAgbALgVQAKgWAUgMQASgNAVAAQAkAAAUAYQAVAXAAAtIAAAMIh9AAQAAAcAQAQQAQARAWAAQARAAALgHQAMgHAIgLIAUAPQgXAkgvAAQglAAgXgZgAgdg3QgNAOgDAZIBbAAIAAgCQAAgYgMgNQgMgOgUAAQgSAAgNAOg");
	this.shape_465.setTransform(-222.35,-13.45);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgLBcIhDi3IAhAAIAuCNIAtiNIAhAAIhDC3g");
	this.shape_466.setTransform(-240.325,-13.45);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_467.setTransform(-258.725,-13.45);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgkBYQgRgIgJgOQgKgOAAgRIAfAAQABARAMAJQAMAJASAAQATAAAKgHQALgHAAgMQAAgOgKgGQgJgHgXgGQgYgFgPgGQgOgHgGgKQgHgKAAgOQAAgWAUgQQATgQAcAAQAgAAAUAQQATAQAAAaIggAAQAAgNgLgKQgLgJgRAAQgQAAgKAHQgKAIABAMQgBAMAKAFQAJAHAXAEQAXAGAPAIQAPAGAGAKQAIAKgBAPQABAZgUAPQgUAPggAAQgVAAgRgIg");
	this.shape_468.setTransform(-277.8,-13.45);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgkBYQgRgIgKgOQgKgOAAgRIAhAAQAAARAMAJQAMAJATAAQARAAAMgHQAKgHAAgMQAAgOgJgGQgKgHgXgGQgYgFgOgGQgOgHgHgKQgHgKAAgOQAAgWATgQQATgQAdAAQAgAAATAQQAUAQAAAaIggAAQAAgNgKgKQgMgJgRAAQgQAAgKAHQgJAIgBAMQABAMAIAFQAKAHAWAEQAYAGAPAIQAOAGAIAKQAGAKAAAPQAAAZgTAPQgUAPgfAAQgWAAgRgIg");
	this.shape_469.setTransform(-295.85,-13.45);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgWQAKgVATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_470.setTransform(-314.775,-13.45);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_471.setTransform(-329.725,-13.625);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AhEBgQgbggAAg1IAAgWQAAgjANgaQAMgbAXgOQAWgOAdAAQAoAAAYAWQAYAWAEAnIghAAQgFgegOgNQgOgNgaAAQgeAAgSAXQgSAXAAArIAAAXQAAApARAYQARAYAdAAQAcAAAOgMQAPgNAFgfIAhAAQgFAogYAVQgZAWgpAAQgrAAgaggg");
	this.shape_472.setTransform(-347.775,-16.625);

	this.instance_7 = new lib.awwitsacutelittleheart();
	this.instance_7.setTransform(-404.3,-12.5,0.9091,0.9091);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_473.setTransform(-214.175,-81.275);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgJBTIAAilIATAAIAAClg");
	this.shape_474.setTransform(-234.875,-83.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgWA3QgLgEgGgJQgGgJAAgLIAUAAQAAAKAIAGQAHAGAMAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgGgFgOgDQgPgDgJgEQgJgEgEgGQgEgGAAgJQAAgOAMgKQAMgKASAAQAUAAAMAKQAMAKAAAQIgUAAQAAgIgHgGQgHgGgKAAQgKAAgGAFQgGAFAAAHQAAAHAFAEQAGAEAOADQAPADAJAFQAJAEAFAGQAEAHAAAJQAAAQgMAJQgNAJgTAAQgNAAgLgFg");
	this.shape_475.setTransform(-243.275,-81.175);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_476.setTransform(-278.775,-81.275);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgsBeIAAi4IAfAAIAAAWQAPgZAdAAQAJAAAFACIAAAeIgQgBQgeAAgLAaIAACCg");
	this.shape_477.setTransform(-267.275,-159.925);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AhEBaQgdgggBg0IAAgGQAAgiAOgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAZAeAAA4IAAAPIicAAQABAjAUAVQASAVAdAAQAVAAAPgIQAOgJALgOIAZATQgdAtg7AAQguAAgegfgAgkhFQgQARgEAgIBzAAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_478.setTransform(-88.15,-235.475);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgNB0IhVjnIAoAAIA7CxIA5ixIApAAIhUDng");
	this.shape_479.setTransform(-110.7,-235.475);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AhEBaQgdggAAg0IAAgGQAAgiANgbQANgcAYgPQAXgQAbAAQAuAAAZAeQAZAegBA4IAAAPIicAAQABAjATAVQAUAVAcAAQAVAAAPgIQAPgJAKgOIAYATQgdAtg6AAQguAAgegfgAglhFQgQARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_480.setTransform(-194.85,-235.475);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#006DFF").s().p("AgxAtIAAhZIBjAAIAABZg");
	this.shape_481.setTransform(-419.2,72.55);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_482.setTransform(-153.825,34.75);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_483.setTransform(-178.575,34.75);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgYBNQgMgGgGgJIAKgMQANAQATAAQANAAAIgIQAIgJAAgOIAAgKQgMANgUAAQgUAAgMgQQgNgQAAgcQAAgbANgQQAMgQAUAAQAVAAAMAPIABgNIASAAIAABwQAAAXgNANQgOANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMAOAAQASAAAJgSIAAg0QgJgQgSAAQgOAAgIALg");
	this.shape_484.setTransform(-191.05,39.375);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAbAWAAQAVAAAIgRIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_485.setTransform(-203.125,37.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_486.setTransform(-235.175,34.75);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAilIAUAAIAAA/QANgQAVAAQAkAAABAoIAABOg");
	this.shape_487.setTransform(-403.125,34.75);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("ABiBeIAAh5QAAgUgJgJQgJgKgWAAQgRAAgMAKQgLALgDASIAAB5IgeAAIAAh4QAAgognAAQggAAgLAaIAACGIggAAIAAi4IAeAAIABAVQAVgYAiAAQAnAAANAeQAJgOAPgIQAPgIATAAQA+AAAABAIAAB7g");
	this.shape_488.setTransform(-279.25,-13.625);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgaCFIAAigIgdAAIAAgYIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAZQgIgCgJAAQgPAAgJAKQgIAIAAARIAAAUIAnAAIAAAYIgnAAIAACgg");
	this.shape_489.setTransform(-331.875,-17.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("Ag4DLQAigZAUg2QASg1ABhBIAAgHQAAgsgJgnQgJgngRgfQgRgfgVgQIAJgZQAcAPAZAmQAaAkAMAtQANArAAAyQAAAwgNAsQgNAsgZAlQgZAmgcAPg");
	this.shape_490.setTransform(49.1,-236.45);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AA0B3IAAiZQAAgagMgLQgLgMgYgBQgTAAgOALQgOAKgJARIAAClIgnAAIAAjoIAlAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_491.setTransform(30.45,-235.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQANgRAUgJQAWgKAYAAQAoAAAXAVQAXAUAAAjIAABqQABAgAIATIAAADIgqAAQgDgHgCgRQgcAdgmAAQgiAAgWgUgAg4AuQAAATANAKQANALATAAQASAAARgKQARgJAHgQIAAgwIggAAQhHAAgBArg");
	this.shape_492.setTransform(-43.85,-235.475);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AhEBaQgeggAAg0IAAgGQAAgiAOgbQANgcAYgPQAXgQAbAAQAuAAAZAeQAYAeAAA4IAAAPIicAAQABAjATAVQAUAVAcAAQAVAAAPgIQAPgJAKgOIAYATQgdAtg6AAQguAAgegfgAglhFQgQARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_493.setTransform(-107.65,-235.475);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AAzClIAAiaQABgYgLgMQgMgMgYAAQgSAAgPALQgPAKgHAQIAAClIgpAAIAAlJIApAAIAAB+QAaghApAAQBKAAAABSIAACag");
	this.shape_494.setTransform(-131.6,-240.35);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgFCuQgzhKAAhkQAAgwANgtQANgtAagkQAZglAcgPIAIAaQggAYgUAxQgTAygCA9IAAARQAABUAdA8QATAlAZAVIgIAYQgdgQgZglg");
	this.shape_495.setTransform(-164.625,-236.45);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQAMgBAFAHQAGAGABAKQgBAKgGAHQgFAGgMAAQgLAAgGgGg");
	this.shape_496.setTransform(-212.35,-239.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgRCdIh0k5IAtAAIBYECIBZkCIAtAAIh0E5g");
	this.shape_497.setTransform(-231.725,-239.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AhEBaQgeggABg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAaAeAAA4IAAAPIidAAQABAjAUAVQASAVAdAAQAVAAAPgIQAPgJALgOIAXATQgcAtg7AAQguAAgegfgAgkhFQgRARgEAgIB0AAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgQASg");
	this.shape_498.setTransform(-24.45,-235.475);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AhHCGQgaghAAg1IAAgDQAAg1AaggQAZghAoAAQApAAAXAcIAAh5IAoAAIAAFJIgkAAIgDgZQgXAdgqAAQgoAAgZghgAgpgRQgRAWAAAsQAAAoARAWQARAWAbAAQAmAAARgiIAAhpQgRghgmAAQgcAAgQAWg");
	this.shape_499.setTransform(-73.95,-240.125);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AAzClIAAiaQABgYgLgMQgMgMgYAAQgSAAgPALQgPAKgHAQIAAClIgpAAIAAlJIApAAIAAB+QAaghApAAQBKAAABBSIAACag");
	this.shape_500.setTransform(-157.6,-240.35);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgUCfIAAjoIAoAAIAADogAgRh2QgFgHAAgKQAAgKAFgGQAGgHALABQAMgBAFAHQAHAGgBAKQABAKgHAHQgFAGgMAAQgLAAgGgGg");
	this.shape_501.setTransform(-212.95,-239.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AhpCdIAAk5IBmAAQAyABAaAUQAZAWAAApQAAAWgMARQgNAQgVAKQAZAHAPATQAOAUAAAcQAAApgbAYQgbAZgyAAgAhAB7IBDAAQAdAAAQgPQARgPAAgaQAAg5g9AAIhEAAgAhAgWIA+AAQAaAAARgOQAQgNAAgXQAAgagPgMQgPgLgeAAIg9AAg");
	this.shape_502.setTransform(-231.475,-239.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAQQAMAPAAAdIAAABQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQAOAAAIgMQAJgKgBgWQABgTgJgMQgIgMgOAAQgSABgJAQg");
	this.shape_503.setTransform(-316.65,237.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_504.setTransform(-93.65,111.925);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgWAAIAAgPIAWAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgFgIg");
	this.shape_505.setTransform(-103.55,110.625);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgdBEIgBANIgSAAIAAijIAUAAIAAA9QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAcgMAQQgMAQgVAAQgVgBgMgPgAgcgBIAAAyQAJASATAAQANAAAIgMQAIgKAAgWQAAgVgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_506.setTransform(-112.725,109.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_507.setTransform(-166.3,110.625);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AAbA6IgbgrIgaArIgXAAIAng6Igmg5IAXAAIAZAqIAagqIAXAAIgmA5IAnA6g");
	this.shape_508.setTransform(-180.375,111.95);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_509.setTransform(-299.65,110.625);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgjAxQgKgLAAgWIAAhKIAUAAIAABKQAAAbAWgBQAVABAIgSIAAhTIAUAAIAABzIgTAAIAAgLQgMANgWAAQgSAAgKgKg");
	this.shape_510.setTransform(-309.025,112.05);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgdBEIgBANIgSAAIAAijIAUAAIAAA9QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAcgMAQQgMAQgVAAQgVgBgMgPgAgcgBIAAAyQAJASATAAQANAAAIgMQAIgKAAgWQAAgVgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_511.setTransform(-320.975,109.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgOAUQAKgOAAgOIAAgSIATAAIAAAPQAAALgFAKQgGALgGAGg");
	this.shape_512.setTransform(414.85,89.725);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_513.setTransform(409.1,82.225);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgdBEIgBAOIgSAAIAAilIAUAAIAAA+QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAbgMAQQgMAQgVAAQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgLQAIgLAAgXQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_514.setTransform(375.425,81.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_515.setTransform(357.55,83.525);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGAAAHIgUAAQgBgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgKgJgAgbAXQAAAKAGAFQAGAFAKAAQAJAAAIgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_516.setTransform(317.9,83.525);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_517.setTransform(290.45,82.225);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgiBRIgIgBIAAgRIAFABQAKAAAGgEQAGgEADgLIAFgMIgqhxIAWAAIAcBWIAbhWIAVAAIguCFQgKAcgYAAg");
	this.shape_518.setTransform(196.75,85.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgPBUIAAhkIgTAAIAAgPIATAAIAAgMQAAgTAKgKQAIgLATAAQAGAAAHACIgBAQIgLgBQgJAAgGAGQgFAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_519.setTransform(182.6,80.975);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAGAAADAEQADADAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_520.setTransform(164.025,88.275);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_521.setTransform(127.25,82.225);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_522.setTransform(45.225,81.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAGABQAKAAAFgEQAGgEAEgLIAEgMIgqhxIAWAAIAcBWIAbhWIAVAAIgvCFQgJAcgYAAg");
	this.shape_523.setTransform(9.4,85.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgdBEIgBAOIgSAAIAAilIAUAAIAAA+QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAbgMAQQgMAQgVAAQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgLQAIgLAAgXQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_524.setTransform(-13.325,81.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQAEAEAGAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_525.setTransform(-59.2,82.225);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgjAzQgMgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgHAGgBAHIgTAAQAAgIAGgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgBgDgBgJQgPAOgSAAQgRAAgKgJgAgbAXQAAAKAHAFQAGAFAJAAQAIAAAJgFQAIgFAEgHIAAgYIgPAAQgkAAAAAVg");
	this.shape_526.setTransform(-68.45,83.525);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgCQAAgZANgRQAMgQAVAAQATAAAMAOIAAg9IAUAAIAAClIgSAAIgBgNQgMAOgUAAQgVAAgMgQgAgUgHQgIAKAAAVQAAAVAIALQAIALAOAAQASAAAJgRIAAg1QgJgQgSAAQgOAAgIAMg");
	this.shape_527.setTransform(-128.525,81.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_528.setTransform(-172.65,82.225);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_529.setTransform(-209.9,82.225);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_530.setTransform(-219.15,83.525);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_531.setTransform(-231.375,83.525);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgdBEIgBAOIgSAAIAAilIAUAAIAAA+QAMgPAUAAQAVAAAMAQQAMAQAAAbIAAABQAAAbgMAQQgMAQgVAAQgVAAgMgPgAgcgBIAAAxQAJATATAAQANAAAIgLQAIgLAAgXQAAgUgIgKQgHgLgOAAQgUAAgIASg");
	this.shape_532.setTransform(-243.575,81.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgGgGgMAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIAKgEQALgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgUAAQgDgDgBgJQgOAOgRAAQgSAAgLgJgAgbAXQAAAKAGAFQAHAFAKAAQAIAAAIgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_533.setTransform(-261.45,83.525);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAbAWAAQAVAAAIgRIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_534.setTransform(-303.375,83.65);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AAeBRIAAg3QgMANgUAAQgVAAgMgQQgNgQAAgaIAAgCQAAgcANgPQANgQAUgBQAUABAMAOIABgMIASAAIAACfgAgUg1QgIAMAAAWQAAATAIALQAJAMANAAQASAAAKgQIAAg3QgKgQgRAAQgOAAgJALg");
	this.shape_535.setTransform(-316,85.65);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgjAwQgKgKAAgVIAAhLIAUAAIAABKQAAAbAWAAQAVAAAIgRIAAhUIAUAAIAABzIgTAAIAAgMQgMAOgWAAQgSAAgKgLg");
	this.shape_536.setTransform(-390.575,83.65);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_537.setTransform(-402.875,83.525);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgFBoQgLgNAAgYIAAhxIghAAIAAgZIAhAAIAAgtIAfAAIAAAtIAjAAIAAAZIgjAAIAAByQAAALAFAFQAEAGALgBIAPgCIAAAaQgMAEgMgBQgVABgKgNg");
	this.shape_538.setTransform(-239.675,30.85);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("Ag6BRQgRgQAAgYQAAgcAWgPQAWgRAnABIAeAAIAAgPQAAgQgKgLQgJgJgTgBQgRAAgLAJQgMAIAAANIgfAAQAAgOAKgNQAJgNARgIQARgHATAAQAgAAASAQQASAQABAcIAABVQAAAYAGAQIAAACIghAAQgCgFgCgOQgWAXgeAAQgbAAgSgPgAgsAlQAAAPAKAIQAKAJAQAAQAOgBANgHQANgIAGgMIAAgmIgYAAQg6AAAAAig");
	this.shape_539.setTransform(-254.425,32.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgaCFIAAifIgdAAIAAgZIAdAAIAAgTQAAgeAQgQQAPgQAdAAQALAAALADIgCAZQgIgCgJAAQgPAAgJAKQgIAIAAARIAAAUIAnAAIAAAZIgnAAIAACfg");
	this.shape_540.setTransform(-331.875,28.85);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_541.setTransform(308.575,-24.375);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_542.setTransform(308.575,-52.775);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_543.setTransform(153.425,-24.375);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_544.setTransform(130.025,-24.375);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_545.setTransform(91.625,-24.375);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_546.setTransform(185.475,-52.775);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_547.setTransform(173.075,-55.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_548.setTransform(153.425,-52.775);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_549.setTransform(130.025,-52.775);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_550.setTransform(101.15,-54.075);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_551.setTransform(91.625,-52.775);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgiBRIgIgBIAAgRIAGABQAJAAAGgEQAGgEADgLIAFgMIgqhyIAWAAIAcBXIAbhXIAVAAIgvCGQgJAcgYAAg");
	this.shape_552.setTransform(-234.7,-22);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgCBBQgIgIABgPIAAhHIgVAAIAAgPIAVAAIAAgcIASAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHADADQAEAEAHAAIAJgCIAAAQQgIACgHAAQgOAAgFgIg");
	this.shape_553.setTransform(-243.85,-25.675);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_554.setTransform(-258,-24.375);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_555.setTransform(-267.85,-25.675);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgPBUIAAhkIgTAAIAAgPIATAAIAAgMQAAgTAKgKQAIgLATAAQAGAAAHACIgBAQIgLgBQgJAAgGAGQgFAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_556.setTransform(-274.6,-26.925);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_557.setTransform(-232.275,-52.775);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_558.setTransform(-257.9,-54.775);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_559.setTransform(-272.025,-52.775);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_560.setTransform(-283.625,-52.775);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AglAsQgPgQAAgcIAAAAQAAgRAHgOQAGgNAMgIQAMgHAPAAQAYAAAOAQQAPARAAAaIAAABQAAARgHAOQgGANgMAIQgMAHgQAAQgXAAgOgQgAgXgfQgJAMAAAUQAAAUAJALQAJAMAOAAQAPAAAJgMQAJgMAAgUQAAgTgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_561.setTransform(-182.775,-81.175);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgDBBQgGgIAAgPIAAhHIgWAAIAAgPIAWAAIAAgcIATAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHACADQADAEAHAAIAJgCIAAAQQgHACgHAAQgOAAgGgIg");
	this.shape_562.setTransform(-217.5,-82.475);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgCBBQgIgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQAAAHAEADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgFgIg");
	this.shape_563.setTransform(-267.95,-82.475);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AAaA7IAAhMQAAgMgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABSIgUAAIAAhzIATAAIABAPQANgRAVAAQAkAAABApIAABMg");
	this.shape_564.setTransform(-277.275,-81.275);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AghAtQgPgQAAgaIAAgDQAAgRAGgNQAHgOAMgHQAMgIANAAQAWAAANAPQAMAPAAAcIAAAHIhNAAQAAARAKALQAJAKAOAAQALAAAHgEQAHgEAGgIIAMAKQgPAWgdAAQgXAAgOgPgAgSgiQgIAJgCAQIA5AAIAAgCQAAgPgIgIQgHgJgMAAQgLAAgJAJg");
	this.shape_565.setTransform(-289.025,-81.175);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AAzB3IAAiZQAAgagLgLQgLgMgYgBQgTAAgOALQgOAKgIARIAAClIgoAAIAAjoIAlAAIACAdQAaghAqgBQBKAAABBUIAACZg");
	this.shape_566.setTransform(63.65,-235.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AA4B0Ig4ivIg3CvIggAAIhEjnIAoAAIAuCtIA2itIAfAAIA3CwIAtiwIAoAAIhEDng");
	this.shape_567.setTransform(34.925,-235.475);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgTCdIAAkWIhlAAIAAgjIDxAAIAAAjIhlAAIAAEWg");
	this.shape_568.setTransform(-19.75,-239.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AhLBYQgeghAAg2IAAgCQAAgiAOgcQANgbAYgPQAYgPAeAAQAvAAAeAhQAdAhAAA2IAAADQAAAigNAbQgNAagYAQQgYAPggAAQguAAgdghgAgvg/QgSAXAAArQAAAmASAYQASAXAdAAQAfAAARgYQASgXAAgqQAAgmgSgYQgSgYgeAAQgdAAgSAYg");
	this.shape_569.setTransform(-94.675,-235.475);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AhpCdIAAk5IBmAAQAyABAaAUQAZAWAAApQAAAWgMARQgNAQgVAKQAZAHAPATQAOAUAAAcQAAApgbAYQgbAZgyAAgAhAB7IBDAAQAdAAAQgPQARgPAAgaQAAg5g9AAIhEAAgAhAgWIA+AAQAaAAARgOQAQgNAAgXQAAgagPgMQgPgLgeAAIg9AAg");
	this.shape_570.setTransform(-231.475,-239.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_571.setTransform(-234.55,235.175);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAQQAMAPAAAdIAAABQAAAZgMARQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQAOAAAIgMQAJgKAAgWQAAgTgJgMQgIgMgOAAQgSABgJAQg");
	this.shape_572.setTransform(-325,237.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_573.setTransform(-350.2,235.175);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIALAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_574.setTransform(197.075,30.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgjBDQgNgQAAgbIAAgCQAAgaANgPQAMgRAVAAQATAAAMAOIAAg8IAUAAIAACjIgSAAIgBgMQgMAOgUAAQgVAAgMgQgAgUgIQgIALAAAWQAAATAIALQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_575.setTransform(173.075,30.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_576.setTransform(164,3.925);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_577.setTransform(164,-24.475);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_578.setTransform(118.025,-26.375);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_579.setTransform(77.475,-26.375);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_580.setTransform(164,-52.875);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_581.setTransform(141.6,-52.775);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_582.setTransform(118.025,-54.775);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_583.setTransform(101.15,-54.075);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_584.setTransform(77.475,-54.775);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgbA7IAAhzIAUAAIAAANQAJgPASAAQAFAAADABIAAATIgJgBQgTAAgHARIAABRg");
	this.shape_585.setTransform(164,-81.275);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAPAAQAUAAANAMQANALABATIgTAAQgBgLgIgHQgHgIgMAAQgNAAgJALQgIALAAAVIAAACQAAAUAIALQAJALANAAQALAAAIgGQAIgHABgJIATAAQgBAKgGAJQgGAJgLAFQgLAFgMAAQgWAAgOgPg");
	this.shape_586.setTransform(141.6,-81.175);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AAjBOIgig/IgkAAIAAA/IgVAAIAAibIA0AAQAaAAAOAMQAOAMAAAXQAAAPgIAKQgIAKgOAGIAlBCIAAABgAgjgBIAgAAQAOAAAJgIQAJgIAAgNQAAgPgIgHQgJgIgPAAIggAAg");
	this.shape_587.setTransform(118.025,-83.175);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgDBBQgHgIAAgPIAAhHIgUAAIAAgPIAUAAIAAgcIATAAIAAAcIAWAAIAAAPIgWAAIAABIQABAHADADQACAEAIAAIAJgCIAAAQQgIACgIAAQgNAAgGgIg");
	this.shape_588.setTransform(101.15,-82.475);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AAnBOIhNh3IAAB3IgVAAIAAibIAVAAIBOB4IAAh4IAUAAIAACbg");
	this.shape_589.setTransform(77.475,-83.175);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAFABQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgvCFQgKAdgYAAg");
	this.shape_590.setTransform(-245.45,34.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAGABQAKAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgwCFQgJAdgYAAg");
	this.shape_591.setTransform(-279.85,34.8);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AAZBTIgog3IgMANIAAAqIgUAAIAAikIAUAAIAABjIAKgOIAkglIAYAAIgsAwIAxBEg");
	this.shape_592.setTransform(-289.875,30);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgDBBQgGgIgBgPIAAhHIgVAAIAAgPIAVAAIAAgcIAUAAIAAAcIAVAAIAAAPIgVAAIAABIQAAAHADADQACAEAHAAIAJgCIAAAQQgHACgIAAQgNAAgGgIg");
	this.shape_593.setTransform(-193.95,-54.075);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAHgOALgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQgBAKgGAJQgHAJgKAFQgKAFgMAAQgXAAgOgPg");
	this.shape_594.setTransform(-246.25,-52.775);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgjBDQgNgRAAgaIAAgBQAAgbANgQQAMgQAVAAQATAAAMAOIAAg9IAUAAIAACkIgSAAIgBgMQgMAPgUAAQgVgBgMgQgAgUgIQgIAKAAAWQAAAVAIAKQAIAMAOAAQASAAAJgRIAAg0QgJgRgSAAQgOAAgIALg");
	this.shape_595.setTransform(-258.625,-55.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGABAHIgVAAQAAgIAHgJQAGgIALgEQAKgFAMAAQAUAAALAKQALAKABASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAGAFQAGAFALAAQAHAAAJgFQAIgFAEgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_596.setTransform(-270.55,-52.775);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgiBRIgIgBIAAgRIAGABQAJAAAGgEQAGgEADgLIAFgMIgqhxIAWAAIAcBWIAbhWIAVAAIgvCFQgJAcgYAAg");
	this.shape_597.setTransform(-185.1,-78.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgIBOIg6ibIAXAAIArCAIAtiAIAWAAIg6Cbg");
	this.shape_598.setTransform(-231.55,-83.175);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgiAtQgOgQAAgcIAAgCQAAgRAGgNQAGgOAMgHQALgHAQAAQATAAANAMQANALABATIgTAAQgBgLgHgHQgIgIgLAAQgPAAgIALQgIALAAAVIAAACQAAAUAIALQAIALAPAAQAKAAAIgGQAIgHABgJIATAAQAAAKgHAJQgHAJgKAFQgLAFgLAAQgXAAgOgPg");
	this.shape_599.setTransform(-274.25,-81.175);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgbBKQgOgGgHgLQgIgKAAgOIAVAAQAAAOALAIQAKAJARAAQAQAAAJgHQAIgHAAgLQAAgMgIgGQgIgGgUgGQgbgIgMgKQgMgLAAgRQAAgSAPgMQAPgMAWAAQARAAAMAGQANAGAHALQAHALAAANIgVAAQAAgOgJgIQgJgIgRAAQgOAAgIAGQgJAHAAAMQAAAKAIAGQAIAHATAFQATAGALAFQALAHAGAJQAFAJAAAMQAAATgPALQgPALgYAAQgQAAgOgGg");
	this.shape_600.setTransform(-302.725,-83.175);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgTCdIAAk5IAnAAIAAE5g");
	this.shape_601.setTransform(-142.95,-239.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AhEBaQgeggABg0IAAgGQAAgiANgbQANgcAYgPQAYgQAaAAQAtAAAaAeQAZAeAAA4IAAAPIidAAQABAjATAVQAUAVAcAAQAVAAAPgIQAOgJAMgOIAXATQgdAtg6AAQguAAgegfgAgkhFQgRARgEAgIB0AAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgQASg");
	this.shape_602.setTransform(-171.25,-235.475);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("ABfCdIgdhSIiDAAIgdBSIgrAAIB4k5IAjAAIB4E5gAg0ApIBpAAIg1iRg");
	this.shape_603.setTransform(-231.4,-239.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgQBUIAAhkIgSAAIAAgPIASAAIAAgMQABgTAJgKQAKgLARAAQAIAAAGACIgBAQIgKgBQgLAAgFAGQgFAGAAAKIAAANIAZAAIAAAPIgZAAIAABkg");
	this.shape_604.setTransform(-234.4,91.425);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgwBRIAAifIASAAIABANQANgPAUgBQAVABAMAPQAMAQAAAdIAAABQAAAagMAQQgMAQgVAAQgUAAgMgOIAAA4gAgcgvIAAA2QAJAQASAAQANAAAJgLQAJgLAAgWQAAgTgJgMQgJgMgNAAQgSABgJAQg");
	this.shape_605.setTransform(-289.1,96.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_606.setTransform(-214.925,43.35);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("Ag8BGQgXgbAAgrIAAAAQAAgcALgVQAKgWATgMQATgMAYAAQAlAAAYAaQAXAaAAArIAAACQAAAbgKAWQgLAVgTAMQgTAMgZAAQglAAgXgagAglgyQgOASAAAiQAAAfAOATQAOASAXAAQAYAAAOgSQAPgUAAggQAAgfgPgTQgOgTgYAAQgXAAgOATg");
	this.shape_607.setTransform(-316.425,43.35);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AhHBhQgTgWgBgqIAAiXIAoAAIAACVQAAA1ArAAQAtABAPgjIAAioIAoAAIAADoIgmAAIgBgXQgXAbgsABQglgBgUgVg");
	this.shape_608.setTransform(-56.375,-235.25);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AhICGQgZghAAg1IAAgDQAAg1AZggQAZghApAAQAoAAAZAcIAAh5IAnAAIAAFJIgkAAIgCgZQgYAdgqAAQgoAAgaghgAgpgRQgQAWAAAsQAAAoAQAWQARAWAbAAQAmAAASgiIAAhpQgTghglAAQgcAAgQAWg");
	this.shape_609.setTransform(-144.4,-240.125);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AA0B3IAAiZQgBgagKgLQgMgMgYgBQgSAAgPALQgOAKgJARIAAClIgnAAIAAjoIAlAAIABAdQAbghAqgBQBKAAAABUIAACZg");
	this.shape_610.setTransform(-127.3,-235.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgTClIAAlJIAnAAIAAFJg");
	this.shape_611.setTransform(-203.6,-240.35);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgTCfIAAjoIAmAAIAADogAgRh2QgFgHgBgKQABgKAFgGQAGgHALABQALgBAHAHQAFAGABAKQgBAKgFAHQgHAGgLAAQgLAAgGgGg");
	this.shape_612.setTransform(-214.25,-239.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgUCfIAAjoIAnAAIAADogAgRh2QgFgHAAgKQAAgKAFgGQAGgHALABQAMgBAFAHQAHAGAAAKQAAAKgHAHQgFAGgMAAQgLAAgGgGg");
	this.shape_613.setTransform(-126.65,-239.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AghCnIAAjIIgkAAIAAgfIAkAAIAAgYQAAglAUgVQATgUAlAAQAOAAANADIgCAgQgKgCgLAAQgUAAgKAMQgLALAAAVIAAAZIAyAAIAAAfIgyAAIAADIg");
	this.shape_614.setTransform(-176.375,-240.575);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AA0ClIAAiaQAAgYgMgMQgLgMgYAAQgSAAgPALQgOAKgJAQIAAClIgnAAIAAlJIAnAAIAAB+QAbghApAAQBKAAAABSIAACag");
	this.shape_615.setTransform(-207.5,-240.35);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAFABQALAAAFgEQAGgEAEgLIAEgMIgphyIAVAAIAcBXIAbhXIAWAAIgvCGQgKAcgYAAg");
	this.shape_616.setTransform(-91.1,96.35);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AAaBTIAAhOQAAgLgGgGQgGgGgLAAQgJAAgHAFQgIAFgEAIIAABTIgUAAIAAikIAUAAIAAA/QANgRAVAAQAkAAABAoIAABOg");
	this.shape_617.setTransform(-403.125,91.55);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgjBRIgHgBIAAgRIAFABQALAAAFgEQAGgEAEgLIAEgMIgphxIAVAAIAcBWIAbhWIAWAAIgvCFQgKAcgYAAg");
	this.shape_618.setTransform(-211.25,-78.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQAMgRAWgJQAUgKAZAAQAoAAAXAVQAXAUAAAjIAABqQAAAgAJATIAAADIgqAAQgDgHgDgRQgbAdglAAQgjAAgWgUgAg4AuQAAATANAKQAMALAUAAQASAAAQgKQARgJAIgQIAAgwIggAAQhIAAAAArg");
	this.shape_619.setTransform(186.4,-235.475);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AhEBaQgdgggBg0IAAgGQAAgiAOgbQANgcAYgPQAYgQAaAAQAtAAAZAeQAZAeAAA4IAAAPIicAAQABAjAUAVQATAVAcAAQAVAAAPgIQAOgJALgOIAZATQgdAtg7AAQguAAgegfgAglhFQgPARgEAgIBzAAIAAgDQgCgfgOgQQgPgRgZAAQgXAAgRASg");
	this.shape_620.setTransform(114.45,-235.475);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AB7B3IAAiZQAAgZgLgMQgMgNgaAAQgXAAgOAOQgPANgCAWIAACaIgoAAIAAiYQAAgygxgBQgnABgOAhIAACpIgoAAIAAjoIAmAAIABAaQAZgfArAAQAyAAAQAmQALgQATgLQATgLAZAAQBMAAACBRIAACcg");
	this.shape_621.setTransform(83.35,-235.7);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AB7B3IAAiZQAAgZgLgMQgMgNgbAAQgWAAgPAOQgOANgDAWIAACaIgmAAIAAiYQAAgygygBQgnABgOAhIAACpIgoAAIAAjoIAlAAIABAaQAagfArAAQAyAAAQAmQAMgQASgLQATgLAZAAQBNAAABBRIAACcg");
	this.shape_622.setTransform(44.8,-235.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgVAAgOAKQgPALAAAPIgoAAQAAgRANgQQANgRAUgJQAWgKAYAAQAoAAAXAVQAXAUABAjIAABqQAAAgAIATIAAADIgqAAQgEgHgBgRQgcAdgmAAQgiAAgWgUgAg3AuQAAATAMAKQANALATAAQASAAARgKQAQgJAIgQIAAgwIgfAAQhIAAAAArg");
	this.shape_623.setTransform(164.85,-235.475);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AhEBaQgeggAAg0IAAgGQAAgiAOgbQANgcAYgPQAXgQAbAAQAuAAAZAeQAYAeAAA4IAAAPIicAAQABAjATAVQAUAVAcAAQAVAAAPgIQAPgJAKgOIAYATQgdAtg6AAQguAAgegfgAglhFQgQARgDAgIBzAAIAAgDQgCgfgPgQQgOgRgZAAQgXAAgRASg");
	this.shape_624.setTransform(92.15,-235.475);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AhHCGQgaghAAg1IAAgDQAAg1AaggQAZghAoAAQApAAAXAcIAAh5IAoAAIAAFJIgkAAIgDgZQgXAdgqAAQgoAAgZghgAgpgRQgRAWAAAsQAAAoARAWQARAWAbAAQAmAAARgiIAAhpQgRghgmAAQgbAAgRAWg");
	this.shape_625.setTransform(67.35,-240.125);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("ABFCdIhDh/IhJAAIAAB/IgqAAIAAk5IBoAAQA0AAAdAZQAcAYAAAuQAAAdgQAVQgPAVgdALIBJCFIAAADgAhHgDIBAAAQAdAAASgQQATgPgBgbQABgdgSgQQgRgPggAAIg/AAg");
	this.shape_626.setTransform(-13.3,-239.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AA9A7IAAhLQABgNgGgGQgGgGgOAAQgKAAgIAGQgHAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgTAAgHAQIAABUIgVAAIAAhzIATAAIABANQANgPAVAAQAYAAAIATQAGgJAKgFQAJgFAMAAQAmAAABAoIAABNg");
	this.shape_627.setTransform(-259.3,93.875);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgYBNQgMgGgHgJIALgMQANAQASAAQAOAAAIgIQAIgJAAgOIAAgKQgMANgTAAQgVAAgNgQQgMgQAAgcQAAgbAMgQQANgQAVAAQAUAAAMAPIABgNIASAAIAABwQAAAXgOANQgNANgWAAQgMAAgMgFgAgUg1QgIALAAAWQAAAUAIAKQAIAMANAAQATAAAJgSIAAg0QgJgQgTAAQgNAAgIALg");
	this.shape_628.setTransform(-287.3,96.175);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AA+A7IAAhLQgBgNgFgGQgGgGgOAAQgKAAgIAGQgHAHgBALIAABMIgTAAIAAhLQAAgZgZAAQgUAAgHAQIAABUIgUAAIAAhzIATAAIABANQAMgPAWAAQAZAAAIATQAFgJAJgFQAKgFANAAQAmAAAAAoIAABNg");
	this.shape_629.setTransform(-325.75,93.875);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgTCfIAAjoIAnAAIAADogAgQh2QgHgHAAgKQAAgKAHgGQAFgHALABQALgBAHAHQAFAGAAAKQAAAKgFAHQgHAGgLAAQgLAAgFgGg");
	this.shape_630.setTransform(143.85,-239.7);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAcgSQAbgVAxAAIAnAAIAAgSQAAgVgNgMQgMgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQANgRAUgJQAVgKAZAAQAoAAAXAVQAXAUAAAjIAABqQAAAgAJATIAAADIgqAAQgDgHgCgRQgcAdglAAQgjAAgWgUgAg4AuQAAATANAKQAMALAUAAQASAAAQgKQARgJAIgQIAAgwIggAAQhHAAgBArg");
	this.shape_631.setTransform(97.2,-235.475);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("ABGCdIhtiSIgnAoIAABqIgpAAIAAk5IApAAIAACbICKibIAyAAIh6CLICECug");
	this.shape_632.setTransform(73.275,-239.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("Ag0AQIAAgfIBoAAIAAAfg");
	this.shape_633.setTransform(51.55,-237.125);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("Ag5CPQgegSgQghQgQgigBgrIAAgaQAAhHAignQAggnA7AAQAxAAAeAZQAeAZAHAuIgqAAQgLg+g/AAQgoAAgVAdQgWAdAAA3IAAAZQAAA1AYAfQAYAfAoAAQAXAAASgFQARgFALgNIAAhGIhIAAIAAgiIByAAIAABzQgQAXgdALQgcAMgmAAQglAAgegSg");
	this.shape_634.setTransform(5.125,-239.475);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AhJBlQgWgTAAgeQAAglAbgSQAcgVAxAAIAnAAIAAgSQAAgVgMgMQgNgMgYAAQgUAAgPAKQgOALAAAPIgpAAQAAgRANgQQAMgRAWgJQAUgKAZAAQAoAAAXAVQAXAUAAAjIAABqQAAAgAJATIAAADIgqAAQgDgHgDgRQgbAdglAAQgjAAgWgUgAg4AuQAAATANAKQAMALAUAAQASAAAQgKQARgJAIgQIAAgwIggAAQhIAAAAArg");
	this.shape_635.setTransform(-84.95,-235.475);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("Ag3B3IAAjoIAnAAIAAAbQATggAkAAQALAAAGAEIAAAlQgJgCgKAAQgmAAgOAhIAAClg");
	this.shape_636.setTransform(-136.225,-235.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("Ag4BOIAAibIAtAAQATAAAQAJQAPAJAJARQAIAQABAWIAAAJQAAAWgJARQgJAQgPAJQgQAJgUAAgAgjA9IAWAAQAXAAANgOQANgPAAgcIAAgIQAAgbgMgOQgNgPgWAAIgYAAg");
	this.shape_637.setTransform(-243.225,-83.175);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgkAzQgLgKAAgPQAAgSAOgJQAOgKAYAAIATAAIAAgJQAAgLgGgGQgHgGgLAAQgKAAgHAFQgIAGAAAHIgUAAQABgIAGgJQAGgIALgEQAKgFAMAAQAUAAALAKQAMAKAAASIAAA0QAAAQAEAKIAAABIgVAAQgCgDgBgJQgNAOgTAAQgRAAgLgJgAgbAXQAAAKAHAFQAFAFALAAQAHAAAJgFQAJgFADgHIAAgYIgQAAQgjAAAAAVg");
	this.shape_638.setTransform(-267.5,-81.175);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AhICGQgZghAAg1IAAgDQAAg1AZggQAaghApAAQAoAAAYAcIAAh5IAnAAIAAFJIglAAIgBgZQgYAdgqAAQgoAAgaghgAgpgRQgQAWAAAsQAAAoAQAWQAQAWAcAAQAmAAASgiIAAhpQgTghgkAAQgcAAgRAWg");
	this.shape_639.setTransform(-76.7,-240.125);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AAyClIhQhsIgaAaIAABSIgnAAIAAlJIAnAAIAADHIAWgaIBHhMIAxAAIhaBgIBkCIg");
	this.shape_640.setTransform(-157.15,-240.35);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AAkBOIg3hIIgTATIAAA1IgVAAIAAibIAVAAIAABNIBEhNIAZAAIg8BFIBBBWg");
	this.shape_641.setTransform(-372.95,233.175);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AAwBOIgPgpIhBAAIgOApIgWAAIA8ibIARAAIA8CbgAgaAUIA1AAIgbhIg");
	this.shape_642.setTransform(-302.075,-83.175);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AhGCiIgPgCIAAghIALABQAUAAAMgIQALgIAHgWIAJgXIhTjlIArAAIA5CtIA3itIAqAAIhdELQgVA6gvAAg");
	this.shape_643.setTransform(-186.975,-230.775);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AAxClIhQhsIgZAaIAABSIgnAAIAAlJIAnAAIAADHIAWgaIBHhMIAwAAIhZBgIBkCIg");
	this.shape_644.setTransform(-207,-240.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_237},{t:this.shape_236,p:{x:-205.25}},{t:this.shape_235,p:{x:-181.7}},{t:this.shape_234,p:{x:-163.025}},{t:this.shape_233,p:{x:-146.575}},{t:this.shape_232,p:{x:-128.35}},{t:this.shape_231,p:{x:-111}},{t:this.shape_230,p:{x:-81.675}},{t:this.shape_229,p:{x:-62.125}},{t:this.shape_228},{t:this.shape_227,p:{x:-23.825}},{t:this.shape_226,p:{x:-10.6}},{t:this.shape_225,p:{x:7.225}},{t:this.shape_224},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_173},{t:this.shape_172,p:{x:-416.35,y:-26.375}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167,p:{x:-416.125,y:115.625}},{t:this.shape_166,p:{x:-416.325,y:143.925}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162,p:{x:-291.125,y:-81.175}},{t:this.shape_161,p:{x:-278.775,y:-81.275}},{t:this.shape_160,p:{y:-78.975}},{t:this.shape_159,p:{y:-83.175,x:-251.9}},{t:this.shape_158,p:{x:-243.275,y:-81.175}},{t:this.shape_157,p:{x:-234.875,y:-83.6}},{t:this.shape_156},{t:this.shape_155,p:{x:-214.175,y:-81.275}},{t:this.shape_154,p:{x:-202.175,y:-83.5}},{t:this.shape_153,p:{y:-54.775}},{t:this.shape_152,p:{x:-283.675,y:-55.2}},{t:this.shape_151,p:{x:-271.7,y:-52.775}},{t:this.shape_150,p:{x:-263.025,y:-55.2}},{t:this.shape_149,p:{x:-254.425,y:-52.775}},{t:this.shape_148,p:{y:-54.775}},{t:this.shape_147,p:{x:-226.325,y:-54.875}},{t:this.shape_146,p:{x:-220.4,y:-54.075}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:-292.575,y:-26.475}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:-262.25,y:-25.675}},{t:this.shape_139,p:{x:-252.225,y:-26.8}},{t:this.shape_138,p:{x:-240.275,y:-24.375}},{t:this.shape_137,p:{x:-228.075,y:-26.375}},{t:this.shape_136,p:{x:-218.3,y:-25.675}},{t:this.shape_135,p:{x:-208.4,y:-24.375}},{t:this.shape_134,p:{x:-199.15,y:-25.675}},{t:this.shape_133,p:{x:-192.525,y:-26.475}},{t:this.shape_132,p:{x:-183.575,y:-24.375}},{t:this.shape_131,p:{x:-171.225,y:-24.475}},{t:this.shape_130},{t:this.shape_129,p:{y:2.025}},{t:this.shape_128,p:{x:-292.875,y:1.925}},{t:this.shape_127,p:{x:-285.9,y:3.925}},{t:this.shape_126},{t:this.shape_125,p:{x:-265.225,y:1.6}},{t:this.shape_124,p:{x:-247.2,y:2.025}},{t:this.shape_123,p:{x:-235.625,y:4.025}},{t:this.shape_122,p:{x:-223.425}},{t:this.shape_121},{t:this.shape_120,p:{x:-198.675,y:4.025}},{t:this.shape_119,p:{x:-187.375,y:4.025}},{t:this.shape_118,p:{x:-302.125,y:30.425}},{t:this.shape_117,p:{x:-292.875,y:30.325}},{t:this.shape_116,p:{y:32.325}},{t:this.shape_115,p:{y:32.425}},{t:this.shape_114,p:{x:-265.225,y:30}},{t:this.shape_113,p:{x:-246.625,y:30.425}},{t:this.shape_112,p:{x:-233.775,y:32.425}},{t:this.shape_111,p:{x:-221.55,y:32.425}},{t:this.shape_110,p:{x:-212.3,y:31.125}},{t:this.shape_109,p:{x:-196.325,y:30.425}},{t:this.shape_108,p:{x:-183.475,y:32.425}},{t:this.shape_107,p:{x:-168.975,y:32.45}},{t:this.shape_106,p:{x:-154.575,y:32.325}},{t:this.shape_105,p:{y:58.825,x:-302.7}},{t:this.shape_104,p:{x:-291.475,y:60.825}},{t:this.shape_103,p:{y:63.025}},{t:this.shape_102,p:{x:-267.5,y:60.825}},{t:this.shape_101,p:{x:-258.825,y:58.4}},{t:this.shape_100,p:{y:58.825,x:-243.225}},{t:this.shape_99,p:{x:-233.575,y:58.725}},{t:this.shape_98,p:{x:-225.275,y:60.825}},{t:this.shape_97,p:{x:-216.3,y:59.525}},{t:this.shape_96,p:{y:60.725,x:-208.05}},{t:this.shape_95,p:{x:-202.225,y:58.725}},{t:this.shape_94,p:{x:-193.65,y:60.825}},{t:this.shape_93,p:{x:-184.85,y:59.525}},{t:this.shape_92,p:{y:87.225,x:-299.4}},{t:this.shape_91,p:{x:-283.675,y:86.8}},{t:this.shape_90,p:{y:89.225,x:-271.7}},{t:this.shape_89,p:{x:-263.025,y:86.8}},{t:this.shape_88,p:{y:89.225,x:-254.425}},{t:this.shape_87,p:{y:87.225,x:-236}},{t:this.shape_86,p:{y:87.125,x:-226.325}},{t:this.shape_85,p:{y:87.925,x:-220.4}},{t:this.shape_84},{t:this.shape_83,p:{x:-193.425,y:87.225}},{t:this.shape_82,p:{x:-183.575,y:87.125}},{t:this.shape_81,p:{x:-176.6,y:89.125}},{t:this.shape_80},{t:this.shape_79,p:{x:-154.825,y:89.225}},{t:this.shape_78,p:{x:-144.25,y:89.125}},{t:this.shape_77,p:{x:-137.85,y:87.925}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-300.175,y:145.2}},{t:this.shape_72,p:{x:-302.075,y:172.425}},{t:this.shape_71,p:{x:-292.225,y:172}},{t:this.shape_70,p:{x:-283.625,y:174.425}},{t:this.shape_69,p:{x:-272.025,y:174.425}},{t:this.shape_68,p:{x:-257.9,y:172.425}},{t:this.shape_67,p:{x:-249.275,y:174.425}},{t:this.shape_66,p:{x:-240.875,y:172}},{t:this.shape_65,p:{x:-232.275,y:174.425}},{t:this.shape_64},{t:this.shape_63,p:{x:86.85,y:-83.2}},{t:this.shape_62},{t:this.shape_61,p:{y:-83.175,x:105.65}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:88.275,y:-26.475}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:86.85}},{t:this.shape_47,p:{y:4.025}},{t:this.shape_46},{t:this.shape_45,p:{x:118.625,y:2.125}},{t:this.shape_44,p:{y:30.425}},{t:this.shape_43},{t:this.shape_42,p:{y:32.425}},{t:this.shape_41,p:{x:105.975,y:30.325}},{t:this.shape_40,p:{x:118.225,y:30.425}},{t:this.shape_39,p:{x:75.825,y:58.825}},{t:this.shape_38},{t:this.shape_37,p:{y:60.825}},{t:this.shape_36,p:{x:105.875,y:58.825}},{t:this.shape_35,p:{x:118.225,y:58.825}},{t:this.shape_34,p:{y:87.225,x:75.825}},{t:this.shape_33},{t:this.shape_32,p:{y:89.225,x:97.025}},{t:this.shape_31,p:{x:104.55,y:87.2}},{t:this.shape_30,p:{x:118.225,y:87.225}},{t:this.shape_29,p:{y:172.425}},{t:this.shape_28,p:{x:91.625,y:174.425}},{t:this.shape_27,p:{y:173.125,x:101.15}},{t:this.shape_26,p:{y:172.425}},{t:this.shape_25,p:{x:130.025,y:174.425}},{t:this.shape_24,p:{y:174.425,x:141.6}},{t:this.shape_23,p:{x:153.425,y:174.425}},{t:this.shape_22,p:{y:174.325,x:164}},{t:this.shape_21},{t:this.shape_20,p:{x:185.475,y:174.425}},{t:this.shape_19},{t:this.shape_18,p:{x:294.425,y:-83.175}},{t:this.shape_17,p:{x:308.575,y:-81.175}},{t:this.shape_16},{t:this.shape_15,p:{x:305.725,y:-52.775}},{t:this.shape_14,p:{x:317.025,y:-52.775}},{t:this.shape_13,p:{x:294.425,y:-26.375}},{t:this.shape_12,p:{x:308.575,y:-24.375}},{t:this.shape_11,p:{y:2.025,x:294.425}},{t:this.shape_10,p:{y:4.025,x:308.575}},{t:this.shape_9,p:{y:30.425}},{t:this.shape_8,p:{x:305.725,y:32.425}},{t:this.shape_7,p:{x:317.025,y:32.425}},{t:this.shape_6,p:{y:58.825,x:294.425}},{t:this.shape_5,p:{y:60.825,x:308.575}},{t:this.shape_4,p:{y:87.225}},{t:this.shape_3,p:{y:89.225,x:308.575}},{t:this.shape_2,p:{y:172.425,x:293.175}},{t:this.shape_1,p:{y:174.425,x:305.725}},{t:this.shape,p:{y:174.425,x:317.025}},{t:this.close}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259,p:{x:-153.15}},{t:this.shape_236,p:{x:-135.95}},{t:this.shape_258},{t:this.shape_257,p:{x:-79.6}},{t:this.shape_229,p:{x:-67.775}},{t:this.shape_256,p:{x:-49.575}},{t:this.shape_255},{t:this.shape_254,p:{x:12.25}},{t:this.shape_253},{t:this.shape_227,p:{x:54.475}},{t:this.shape_233,p:{x:70.925}},{t:this.shape_252,p:{x:89.15}},{t:this.shape_231,p:{x:106.5}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_41,p:{x:-416.025,y:-54.875}},{t:this.shape_172,p:{x:-416.35,y:-26.375}},{t:this.shape_171},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_65,p:{x:-289.025,y:-81.175}},{t:this.shape_161,p:{x:-277.275,y:-81.275}},{t:this.shape_97,p:{x:-267.95,y:-82.475}},{t:this.shape_81,p:{x:-259.7,y:-81.275}},{t:this.shape_250,p:{x:-250.6,y:-81.175}},{t:this.shape_66,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_77,p:{x:-217.5,y:-82.475}},{t:this.shape_111,p:{x:-207.6,y:-81.175}},{t:this.shape_93,p:{x:-198.35,y:-82.475}},{t:this.shape_95,p:{x:-191.725,y:-83.275}},{t:this.shape_79,p:{x:-182.775,y:-81.175}},{t:this.shape_155,p:{x:-170.425,y:-81.275}},{t:this.shape_105,p:{y:-54.775,x:-302.7}},{t:this.shape_28,p:{x:-291.125,y:-52.775}},{t:this.shape_131,p:{x:-278.775,y:-52.875}},{t:this.shape_160,p:{y:-50.575}},{t:this.shape_159,p:{y:-54.775,x:-251.9}},{t:this.shape_7,p:{x:-243.275,y:-52.775}},{t:this.shape_249},{t:this.shape_151,p:{x:-226.25,y:-52.775}},{t:this.shape_106,p:{x:-214.175,y:-52.875}},{t:this.shape_248,p:{x:-202.175}},{t:this.shape_153,p:{y:-26.375}},{t:this.shape_247},{t:this.shape_72,p:{x:-268.275,y:-26.375}},{t:this.shape_92,p:{y:2.025,x:-299.4}},{t:this.shape_125,p:{x:-283.675,y:1.6}},{t:this.shape_90,p:{y:4.025,x:-271.7}},{t:this.shape_246,p:{x:-263.025,y:1.6}},{t:this.shape_25,p:{x:-254.425,y:4.025}},{t:this.shape_87,p:{y:2.025,x:-236}},{t:this.shape_86,p:{y:1.925,x:-226.325}},{t:this.shape_85,p:{y:2.725,x:-220.4}},{t:this.shape_245},{t:this.shape_244,p:{y:2.025}},{t:this.shape_23,p:{x:-180.025,y:4.025}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_20,p:{x:-129.225,y:4.025}},{t:this.shape_241,p:{x:-119.25,y:3.925}},{t:this.shape_240},{t:this.shape_82,p:{x:-101.975,y:1.925}},{t:this.shape_102,p:{x:-93.35,y:4.025}},{t:this.shape_150,p:{x:-84.675,y:1.6}},{t:this.shape_40,p:{x:75.825,y:-83.175}},{t:this.shape_39,p:{x:88.175,y:-83.175}},{t:this.shape_42,p:{y:-81.175}},{t:this.shape_45,p:{x:106.275,y:-83.075}},{t:this.shape_36,p:{x:118.225,y:-83.175}},{t:this.shape_35,p:{x:75.825,y:-54.775}},{t:this.shape_31,p:{x:86.85,y:-54.8}},{t:this.shape_37,p:{y:-52.775}},{t:this.shape_61,p:{y:-54.775,x:105.65}},{t:this.shape_239},{t:this.shape_34,p:{y:-26.375,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-26.375}},{t:this.shape_32,p:{y:-24.375,x:97.025}},{t:this.shape_63,p:{x:104.55,y:-26.4}},{t:this.shape_166,p:{x:118.025,y:-26.475}},{t:this.shape_13,p:{x:77.475,y:2.025}},{t:this.shape_17,p:{x:91.625,y:4.025}},{t:this.shape_27,p:{y:2.725,x:101.15}},{t:this.shape_26,p:{y:2.025}},{t:this.shape_15,p:{x:130.025,y:4.025}},{t:this.shape_24,p:{y:4.025,x:141.6}},{t:this.shape_12,p:{x:153.425,y:4.025}},{t:this.shape_22,p:{y:3.925,x:164}},{t:this.shape_238},{t:this.shape_8,p:{x:185.475,y:4.025}},{t:this.shape_122,p:{x:197.075}},{t:this.shape_2,p:{y:-83.175,x:293.175}},{t:this.shape_1,p:{y:-81.175,x:305.725}},{t:this.shape,p:{y:-81.175,x:317.025}},{t:this.shape_11,p:{y:-54.775,x:294.425}},{t:this.shape_10,p:{y:-52.775,x:308.575}},{t:this.shape_6,p:{y:-26.375,x:294.425}},{t:this.shape_5,p:{y:-24.375,x:308.575}},{t:this.shape_4,p:{y:2.025}},{t:this.shape_3,p:{y:4.025,x:308.575}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_262},{t:this.shape_261},{t:this.shape_252,p:{x:-170.5}},{t:this.shape_231,p:{x:-153.15}},{t:this.shape_236,p:{x:-135.95}},{t:this.shape_258},{t:this.shape_257,p:{x:-79.6}},{t:this.shape_229,p:{x:-67.775}},{t:this.shape_256,p:{x:-49.575}},{t:this.shape_277},{t:this.shape_276,p:{x:5.85}},{t:this.shape_275,p:{x:19.775}},{t:this.shape_274},{t:this.shape_225,p:{x:63.275}},{t:this.shape_233,p:{x:84.475}},{t:this.shape_227,p:{x:97.275}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_273},{t:this.shape_41,p:{x:-416.025,y:-54.875}},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_25,p:{x:-289.025,y:-81.175}},{t:this.shape_272,p:{x:-277.275,y:-81.275}},{t:this.shape_97,p:{x:-267.95,y:-82.475}},{t:this.shape_81,p:{x:-259.7,y:-81.275}},{t:this.shape_250,p:{x:-250.6,y:-81.175}},{t:this.shape_71,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_77,p:{x:-217.5,y:-82.475}},{t:this.shape_111,p:{x:-207.6,y:-81.175}},{t:this.shape_110,p:{x:-198.35,y:-82.475}},{t:this.shape_133,p:{x:-191.725,y:-83.275}},{t:this.shape_23,p:{x:-182.775,y:-81.175}},{t:this.shape_271,p:{x:-170.425,y:-81.275}},{t:this.shape_92,p:{y:-54.775,x:-299.4}},{t:this.shape_125,p:{x:-283.675,y:-55.2}},{t:this.shape_90,p:{y:-52.775,x:-271.7}},{t:this.shape_150,p:{x:-263.025,y:-55.2}},{t:this.shape_20,p:{x:-254.425,y:-52.775}},{t:this.shape_87,p:{y:-54.775,x:-236}},{t:this.shape_128,p:{x:-226.325,y:-54.875}},{t:this.shape_93,p:{x:-220.4,y:-54.075}},{t:this.shape_145},{t:this.shape_36,p:{x:75.825,y:-83.175}},{t:this.shape_174,p:{x:86.85}},{t:this.shape_37,p:{y:-81.175}},{t:this.shape_63,p:{x:104.55,y:-83.2}},{t:this.shape_35,p:{x:118.225,y:-83.175}},{t:this.shape_34,p:{y:-54.775,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-54.775}},{t:this.shape_32,p:{y:-52.775,x:97.025}},{t:this.shape_31,p:{x:104.55,y:-54.8}},{t:this.shape_166,p:{x:118.025,y:-54.875}},{t:this.shape_6,p:{y:-83.175,x:294.425}},{t:this.shape_17,p:{x:308.575,y:-81.175}},{t:this.shape_4,p:{y:-54.775}},{t:this.shape_12,p:{x:308.575,y:-52.775}},{t:this.close},{t:this.instance_3},{t:this.shape_109,p:{x:-387.225,y:233.175}},{t:this.shape_270,p:{x:-374.575,y:232.75}},{t:this.shape_117,p:{x:-365.875,y:233.075}},{t:this.shape_7,p:{x:-357.575,y:235.175}},{t:this.shape_66,p:{x:-343.725,y:232.75}},{t:this.shape_99,p:{x:-338.375,y:233.075}},{t:this.shape_161,p:{x:-329.625,y:235.075}},{t:this.shape_15,p:{x:-317.625,y:235.175}},{t:this.shape_95,p:{x:-303.825,y:233.075}},{t:this.shape,p:{y:235.175,x:-295.525}},{t:this.shape_269,p:{x:-278.4,y:235.175}},{t:this.shape_268},{t:this.shape_86,p:{y:233.075,x:-251.875}},{t:this.shape_267,p:{x:-244.9,y:235.075}},{t:this.shape_8,p:{x:-235.825,y:235.175}},{t:this.shape_24,p:{y:235.175,x:-224.25}},{t:this.shape_85,p:{y:233.875,x:-215.45}},{t:this.shape_266},{t:this.shape_10,p:{y:235.175,x:-188.325}},{t:this.shape_155,p:{x:-175.975,y:235.075}},{t:this.shape_131,p:{x:-163.825,y:235.075}},{t:this.shape_1,p:{y:235.175,x:-151.825}},{t:this.shape_265},{t:this.shape_136,p:{x:-131.45,y:233.875}},{t:this.shape_82,p:{x:-124.825,y:233.075}},{t:this.shape_5,p:{y:235.175,x:-115.875}},{t:this.shape_106,p:{x:-103.525,y:235.075}},{t:this.shape_27,p:{y:233.875,x:-88.75}},{t:this.shape_3,p:{y:235.175,x:-78.525}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_72,p:{x:-25.825,y:233.175}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_296,p:{x:-232.625}},{t:this.shape_236,p:{x:-210.2}},{t:this.shape_295,p:{x:-186.925}},{t:this.shape_294},{t:this.shape_231,p:{x:-144.8}},{t:this.shape_293},{t:this.shape_226,p:{x:-94.3}},{t:this.shape_292,p:{x:-77.725}},{t:this.shape_229,p:{x:-59.775}},{t:this.shape_233,p:{x:-43.325}},{t:this.shape_291},{t:this.shape_290,p:{x:-14.575}},{t:this.shape_227,p:{x:3.175}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_173},{t:this.shape_61,p:{y:-26.375,x:-416.35}},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_15,p:{x:-289.025,y:-81.175}},{t:this.shape_155,p:{x:-277.275,y:-81.275}},{t:this.shape_97,p:{x:-267.95,y:-82.475}},{t:this.shape_81,p:{x:-259.7,y:-81.275}},{t:this.shape_250,p:{x:-250.6,y:-81.175}},{t:this.shape_66,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_77,p:{x:-217.5,y:-82.475}},{t:this.shape_111,p:{x:-207.6,y:-81.175}},{t:this.shape_85,p:{y:-82.475,x:-198.35}},{t:this.shape_82,p:{x:-191.725,y:-83.275}},{t:this.shape_23,p:{x:-182.775,y:-81.175}},{t:this.shape_131,p:{x:-170.425,y:-81.275}},{t:this.shape_289,p:{x:-301.775,y:-54.775}},{t:this.shape_288,p:{x:-286.1,y:-54.775}},{t:this.shape_287,p:{x:-269.325,y:-54.675}},{t:this.shape_286},{t:this.shape_285},{t:this.shape_72,p:{x:-302.075,y:-26.375}},{t:this.shape_284},{t:this.shape_115,p:{y:-24.375}},{t:this.shape_283},{t:this.shape_282,p:{x:-257.475,y:-26.8}},{t:this.shape_281,p:{x:-248.85,y:-24.375}},{t:this.shape_106,p:{x:-236.775,y:-24.475}},{t:this.shape_280},{t:this.shape_39,p:{x:75.825,y:-83.175}},{t:this.shape_63,p:{x:86.85,y:-83.2}},{t:this.shape_37,p:{y:-81.175}},{t:this.shape_36,p:{x:105.875,y:-83.175}},{t:this.shape_35,p:{x:118.225,y:-83.175}},{t:this.shape_34,p:{y:-54.775,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-54.775}},{t:this.shape_32,p:{y:-52.775,x:97.025}},{t:this.shape_53,p:{x:105.975,y:-54.875}},{t:this.shape_41,p:{x:118.325,y:-54.875}},{t:this.shape_13,p:{x:77.475,y:-26.375}},{t:this.shape_17,p:{x:91.625,y:-24.375}},{t:this.shape_27,p:{y:-25.675,x:101.15}},{t:this.shape_26,p:{y:-26.375}},{t:this.shape_8,p:{x:130.025,y:-24.375}},{t:this.shape_24,p:{y:-24.375,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-24.375}},{t:this.shape_22,p:{y:-24.475,x:164}},{t:this.shape_279},{t:this.shape_1,p:{y:-24.375,x:185.475}},{t:this.shape_278},{t:this.shape_11,p:{y:-83.175,x:294.425}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.shape_6,p:{y:-54.775,x:294.425}},{t:this.shape_5,p:{y:-52.775,x:308.575}},{t:this.shape_4,p:{y:-26.375}},{t:this.shape_3,p:{y:-24.375,x:308.575}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{x:-165.925}},{t:this.shape_298},{t:this.shape_297},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_105,p:{y:-83.175,x:-302.7}},{t:this.shape_1,p:{y:-81.175,x:-291.475}},{t:this.shape_103,p:{y:-78.975}},{t:this.shape_102,p:{x:-267.5,y:-81.175}},{t:this.shape_66,p:{x:-258.825,y:-83.6}},{t:this.shape_100,p:{y:-83.175,x:-243.225}},{t:this.shape_86,p:{y:-83.275,x:-233.575}},{t:this.shape,p:{y:-81.175,x:-225.275}},{t:this.shape_97,p:{x:-216.3,y:-82.475}},{t:this.shape_96,p:{y:-81.275,x:-208.05}},{t:this.shape_82,p:{x:-202.225,y:-83.275}},{t:this.shape_24,p:{y:-81.175,x:-193.65}},{t:this.shape_85,p:{y:-82.475,x:-184.85}},{t:this.shape_34,p:{y:-83.175,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-83.175}},{t:this.shape_32,p:{y:-81.175,x:97.025}},{t:this.shape_53,p:{x:105.975,y:-83.275}},{t:this.shape_41,p:{x:118.325,y:-83.275}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_3,p:{y:-81.175,x:308.575}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_296,p:{x:-232.625}},{t:this.shape_225,p:{x:-209.525}},{t:this.shape_338,p:{x:-184.8}},{t:this.shape_295,p:{x:-160.775}},{t:this.shape_337},{t:this.shape_292,p:{x:-113.825}},{t:this.shape_231,p:{x:-97.05}},{t:this.shape_232,p:{x:-79.75}},{t:this.shape_336,p:{x:-55.6}},{t:this.shape_335},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_53,p:{x:-416.025,y:-54.875}},{t:this.shape_334},{t:this.shape_171},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_104,p:{x:-289.025,y:-81.175}},{t:this.shape_333,p:{x:-277.275,y:-81.275}},{t:this.shape_332,p:{x:-267.95,y:-82.475}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_71,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_329,p:{x:-217.5,y:-82.475}},{t:this.shape_328,p:{x:-207.6,y:-81.175}},{t:this.shape_93,p:{x:-198.35,y:-82.475}},{t:this.shape_147,p:{x:-191.725,y:-83.275}},{t:this.shape_123,p:{x:-182.775,y:-81.175}},{t:this.shape_327,p:{x:-170.425,y:-81.275}},{t:this.shape_153,p:{y:-54.775}},{t:this.shape_125,p:{x:-283.675,y:-55.2}},{t:this.shape_90,p:{y:-52.775,x:-271.7}},{t:this.shape_150,p:{x:-263.025,y:-55.2}},{t:this.shape_88,p:{y:-52.775,x:-254.425}},{t:this.shape_87,p:{y:-54.775,x:-236}},{t:this.shape_143,p:{x:-226.325,y:-54.875}},{t:this.shape_85,p:{y:-54.075,x:-220.4}},{t:this.shape_145},{t:this.shape_92,p:{y:-26.375,x:-299.4}},{t:this.shape_70,p:{x:-283.825,y:-24.375}},{t:this.shape_98,p:{x:-272.525,y:-24.375}},{t:this.shape_97,p:{x:-263.55,y:-25.675}},{t:this.shape_112,p:{x:-253.325,y:-24.375}},{t:this.shape_326},{t:this.shape_69,p:{x:-230.475,y:-24.375}},{t:this.shape_325,p:{x:-220.5,y:-24.475}},{t:this.shape_287,p:{x:-302.075,y:2.125}},{t:this.shape_324,p:{x:-288.925,y:3.925}},{t:this.shape_122,p:{x:-276.925}},{t:this.shape_65,p:{x:-264.525,y:4.025}},{t:this.shape_323,p:{x:-254.55,y:3.925}},{t:this.shape_322,p:{x:-243.175,y:4.05}},{t:this.shape_269,p:{x:-228.9,y:4.025}},{t:this.shape_136,p:{x:-219.65,y:2.725}},{t:this.shape_25,p:{x:-209.775,y:4.025}},{t:this.shape_321,p:{x:-199.8,y:3.925}},{t:this.shape_320},{t:this.shape_108,p:{x:-169.925,y:4.025}},{t:this.shape_73,p:{x:-160.625,y:3.2}},{t:this.shape_319},{t:this.shape_318,p:{x:-137.85,y:4.025}},{t:this.shape_317,p:{x:-127.55,y:3.925}},{t:this.shape_316,p:{x:-121.15,y:2.725}},{t:this.shape_133,p:{x:-114.525,y:1.925}},{t:this.shape_272,p:{x:-105.775,y:3.925}},{t:this.shape_315,p:{x:-93.75,y:6.225}},{t:this.shape_44,p:{y:-83.175}},{t:this.shape_41,p:{x:88.275,y:-83.275}},{t:this.shape_47,p:{y:-81.175}},{t:this.shape_40,p:{x:105.875,y:-83.175}},{t:this.shape_63,p:{x:116.9,y:-83.2}},{t:this.shape_39,p:{x:75.825,y:-54.775}},{t:this.shape_31,p:{x:86.85,y:-54.8}},{t:this.shape_42,p:{y:-52.775}},{t:this.shape_172,p:{x:105.65,y:-54.775}},{t:this.shape_239},{t:this.shape_36,p:{x:75.825,y:-26.375}},{t:this.shape_35,p:{x:88.175,y:-26.375}},{t:this.shape_37,p:{y:-24.375}},{t:this.shape_61,p:{y:-26.375,x:105.65}},{t:this.shape_167,p:{x:118.225,y:-26.375}},{t:this.shape_34,p:{y:2.025,x:75.825}},{t:this.shape_30,p:{x:88.175,y:2.025}},{t:this.shape_32,p:{y:4.025,x:97.025}},{t:this.shape_48,p:{x:104.55}},{t:this.shape_45,p:{x:118.625,y:2.125}},{t:this.shape_13,p:{x:294.425,y:-83.175}},{t:this.shape_79,p:{x:308.575,y:-81.175}},{t:this.shape_11,p:{y:-54.775,x:294.425}},{t:this.shape_28,p:{x:308.575,y:-52.775}},{t:this.shape_6,p:{y:-26.375,x:294.425}},{t:this.shape_23,p:{x:308.575,y:-24.375}},{t:this.shape_4,p:{y:2.025}},{t:this.shape_17,p:{x:308.575,y:4.025}},{t:this.close},{t:this.instance_3},{t:this.shape_288,p:{x:-384.2,y:233.175}},{t:this.shape_314,p:{x:-367.3,y:233.175}},{t:this.shape_72,p:{x:-353.125,y:233.175}},{t:this.shape_313},{t:this.shape_128,p:{x:-325.875,y:233.075}},{t:this.shape_312,p:{x:-318.9,y:235.075}},{t:this.shape_311},{t:this.shape_12,p:{x:-297.125,y:235.175}},{t:this.shape_241,p:{x:-286.55,y:235.075}},{t:this.shape_134,p:{x:-280.15,y:233.875}},{t:this.shape_117,p:{x:-268.075,y:233.075}},{t:this.shape_67,p:{x:-259.775,y:235.175}},{t:this.shape_271,p:{x:-242.525,y:235.075}},{t:this.shape_20,p:{x:-230.525,y:235.175}},{t:this.shape_102,p:{x:-218.9,y:235.175}},{t:this.shape_22,p:{y:235.075,x:-208.6}},{t:this.shape_27,p:{y:233.875,x:-196.75}},{t:this.shape_270,p:{x:-186.725,y:232.75}},{t:this.shape_99,p:{x:-178.025,y:233.075}},{t:this.shape_14,p:{x:-169.725,y:235.175}},{t:this.shape_7,p:{x:-152.925,y:235.175}},{t:this.shape_310,p:{x:-143.95,y:233.875}},{t:this.shape_250,p:{x:-134.05,y:235.175}},{t:this.shape_77,p:{x:-124.8,y:233.875}},{t:this.shape_95,p:{x:-118.175,y:233.075}},{t:this.shape_10,p:{y:235.175,x:-109.225}},{t:this.shape_161,p:{x:-96.875,y:235.075}},{t:this.shape_309,p:{x:-88.025,y:239.925}},{t:this.shape_113,p:{x:-72.475,y:233.175}},{t:this.shape_15,p:{x:-59.975,y:235.175}},{t:this.shape_111,p:{x:-42.9,y:235.175}},{t:this.shape_107,p:{x:-28.675,y:235.2}},{t:this.shape_281,p:{x:-14.4,y:235.175}},{t:this.shape_81,p:{x:-4.1,y:235.075}},{t:this.shape_8,p:{x:4.975,y:235.175}},{t:this.shape_5,p:{y:235.175,x:22.375}},{t:this.shape_308},{t:this.shape_86,p:{y:233.075,x:44.425}},{t:this.shape_155,p:{x:53.175,y:235.075}},{t:this.shape_307,p:{x:65.15,y:235.175}},{t:this.shape_3,p:{y:235.175,x:76.975}},{t:this.shape_306},{t:this.shape_82,p:{x:105.225,y:233.075}},{t:this.shape_131,p:{x:113.975,y:235.075}},{t:this.shape_305,p:{x:126,y:237.375}},{t:this.shape_304,p:{x:144.25}},{t:this.shape_66,p:{x:152.875,y:232.75}},{t:this.shape_303},{t:this.shape_106,p:{x:173.575,y:235.075}},{t:this.shape_1,p:{y:235.175,x:185.575}},{t:this.shape,p:{y:235.175,x:196.875}},{t:this.shape_302,p:{x:205.375,y:239.925}}]},1).to({state:[{t:this.shape_481},{t:this.instance_2},{t:this.instance_1},{t:this.shape_262},{t:this.shape_480},{t:this.shape_292,p:{x:-172.175}},{t:this.shape_227,p:{x:-154.225}},{t:this.shape_225,p:{x:-133.875}},{t:this.shape_479},{t:this.shape_478,p:{x:-88.15}},{t:this.shape_233,p:{x:-68.125}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_477},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_105,p:{y:-83.175,x:-302.7}},{t:this.shape_123,p:{x:-291.125,y:-81.175}},{t:this.shape_476,p:{x:-278.775}},{t:this.shape_160,p:{y:-78.975}},{t:this.shape_159,p:{y:-83.175,x:-251.9}},{t:this.shape_475},{t:this.shape_474},{t:this.shape_90,p:{y:-81.175,x:-226.25}},{t:this.shape_473,p:{x:-214.175,y:-81.275}},{t:this.shape_154,p:{x:-202.175,y:-83.5}},{t:this.shape_34,p:{y:-83.175,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-83.175}},{t:this.shape_37,p:{y:-81.175}},{t:this.shape_61,p:{y:-83.175,x:105.65}},{t:this.shape_167,p:{x:118.225,y:-83.175}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_112,p:{x:308.575,y:-81.175}},{t:this.close},{t:this.instance_7},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467,p:{x:-258.725,y:-13.45}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464,p:{x:-206.425,y:-13.625}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461,p:{x:-151.125}},{t:this.shape_460,p:{x:-136.375}},{t:this.shape_459},{t:this.shape_458,p:{x:-111.625,y:-13.45}},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454,p:{x:-391.175,y:36.175}},{t:this.shape_453},{t:this.shape_108,p:{x:-366.125,y:36.175}},{t:this.shape_452},{t:this.shape_157,p:{x:-351.825,y:33.75}},{t:this.shape_79,p:{x:-342.875,y:36.175}},{t:this.shape_107,p:{x:-328.375,y:36.2}},{t:this.shape_451,p:{x:-317.375,y:34.075}},{t:this.shape_333,p:{x:-308.625,y:36.075}},{t:this.shape_450},{t:this.shape_101,p:{x:-282.075,y:33.75}},{t:this.shape_449,p:{x:-276.725,y:34.075}},{t:this.shape_327,p:{x:-267.975,y:36.075}},{t:this.shape_149,p:{x:-255.975,y:36.175}},{t:this.shape_448,p:{x:-244.675,y:36.175}},{t:this.shape_447,p:{x:-227.55,y:36.175}},{t:this.shape_446},{t:this.shape_138,p:{x:-208.175,y:36.175}},{t:this.shape_269,p:{x:-191.1,y:36.175}},{t:this.shape_71,p:{x:-182.425,y:33.75}},{t:this.shape_445,p:{x:-174.125,y:36.175}},{t:this.shape_28,p:{x:-162.125,y:36.175}},{t:this.shape_158,p:{x:-144.775,y:36.175}},{t:this.shape_120,p:{x:-133.125,y:36.175}},{t:this.shape_312,p:{x:-123.15,y:36.075}},{t:this.shape_444,p:{x:-114.7,y:36.2}},{t:this.shape_104,p:{x:-103.425,y:36.175}},{t:this.shape_443},{t:this.shape_328,p:{x:-73.95,y:36.175}},{t:this.shape_110,p:{x:-64.7,y:34.875}},{t:this.shape_332,p:{x:-52.05,y:34.875}},{t:this.shape_442},{t:this.shape_441,p:{x:-33.325,y:34.075}},{t:this.shape_119,p:{x:-25.025,y:36.175}},{t:this.shape_98,p:{x:-8.225,y:36.175}},{t:this.shape_77,p:{x:0.75,y:34.875}},{t:this.shape_318,p:{x:10.65,y:36.175}},{t:this.shape_93,p:{x:19.9,y:34.875}},{t:this.shape_440,p:{x:26.525,y:34.075}},{t:this.shape_23,p:{x:35.475,y:36.175}},{t:this.shape_324,p:{x:47.825,y:36.075}},{t:this.shape_32,p:{y:36.175,x:56.575}},{t:this.instance_6},{t:this.shape_439,p:{x:-330.475,y:83.575}},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436,p:{x:-296.625,y:83.475}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_272,p:{x:-237.475,y:85.475}},{t:this.shape_67,p:{x:-225.775,y:85.575}},{t:this.shape_431,p:{x:-217.375,y:83.475}},{t:this.shape_310,p:{x:-211.45,y:84.275}},{t:this.shape_124,p:{x:-330.45,y:111.975}},{t:this.shape_430,p:{x:-322.475,y:111.875}},{t:this.shape_271,p:{x:-313.725,y:113.875}},{t:this.shape_88,p:{y:113.975,x:-301.725}},{t:this.shape_31,p:{x:-285.75,y:111.95}},{t:this.shape_429,p:{x:-269.55,y:112.675}},{t:this.shape_17,p:{x:-259.325,y:113.975}},{t:this.shape_322,p:{x:-244.825,y:114}},{t:this.shape_111,p:{x:-230.55,y:113.975}},{t:this.shape_81,p:{x:-220.25,y:113.875}},{t:this.shape_428},{t:this.shape_14,p:{x:-199.075,y:113.975}},{t:this.shape_427},{t:this.shape_91,p:{x:-162.325,y:111.55}},{t:this.shape_135,p:{x:-150.35,y:113.975}},{t:this.shape_426},{t:this.shape_70,p:{x:-133.075,y:113.975}},{t:this.shape_425},{t:this.shape_147,p:{x:-104.975,y:111.875}},{t:this.shape_136,p:{x:-99.05,y:112.675}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.instance_5,p:{x:-400.55,y:200.7}},{t:this.shape_393,p:{x:-352.575,y:199.45}},{t:this.shape_392,p:{x:-338.175,y:202.475}},{t:this.shape_391,p:{x:-321.925,y:198.6}},{t:this.shape_390},{t:this.shape_217,p:{x:-289.625,y:202.475}},{t:this.shape_389},{t:this.shape_388,p:{x:-244.475,y:202.65}},{t:this.shape_387,p:{x:-229.725,y:200.6}},{t:this.shape_386,p:{x:-219.175,y:199.3}},{t:this.shape_385},{t:this.shape_384,p:{x:-185.325,y:202.475}},{t:this.shape_109,p:{x:-405.825,y:251.275}},{t:this.shape_139,p:{x:-393.175,y:250.85}},{t:this.shape_143,p:{x:-384.475,y:251.175}},{t:this.shape_7,p:{x:-376.175,y:253.275}},{t:this.shape_383,p:{x:-362.325,y:250.85}},{t:this.shape_133,p:{x:-356.975,y:251.175}},{t:this.shape_161,p:{x:-348.225,y:253.175}},{t:this.shape_69,p:{x:-336.225,y:253.275}},{t:this.shape_128,p:{x:-322.425,y:251.175}},{t:this.shape,p:{y:253.275,x:-314.125}},{t:this.shape_281,p:{x:-297,y:253.275}},{t:this.shape_382},{t:this.shape_250,p:{x:-267.25,y:253.275}},{t:this.shape_325,p:{x:-256.95,y:253.175}},{t:this.shape_85,p:{y:251.975,x:-250.55}},{t:this.shape_12,p:{x:-234.875,y:253.275}},{t:this.shape_381},{t:this.shape_97,p:{x:-212.25,y:251.975}},{t:this.shape_114,p:{x:-202.225,y:250.85}},{t:this.shape_65,p:{x:-190.275,y:253.275}},{t:this.shape_380},{t:this.shape_25,p:{x:-154.025,y:253.275}},{t:this.shape_282,p:{x:-145.675,y:250.85}},{t:this.shape_379},{t:this.shape_155,p:{x:-124.975,y:253.175}},{t:this.shape_117,p:{x:-116.225,y:251.175}},{t:this.shape_20,p:{x:-107.625,y:253.275}},{t:this.shape_314,p:{x:-89.2,y:251.275}},{t:this.shape_99,p:{x:-79.525,y:251.175}},{t:this.shape_134,p:{x:-73.6,y:251.975}},{t:this.shape_378},{t:this.shape_321,p:{x:-49.5,y:253.175}},{t:this.shape_15,p:{x:-40.425,y:253.275}},{t:this.shape_305,p:{x:-28.8,y:255.475}},{t:this.shape_95,p:{x:-19.725,y:251.175}},{t:this.shape_10,p:{y:253.275,x:-10.775}},{t:this.shape_131,p:{x:1.575,y:253.175}},{t:this.shape_302,p:{x:10.425,y:258.025}},{t:this.instance_4},{t:this.shape_137,p:{x:76.175,y:118.625}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_241,p:{x:108.55,y:120.525}},{t:this.shape_375},{t:this.shape_86,p:{y:118.525,x:126.325}},{t:this.shape_89,p:{x:131.675,y:118.2}},{t:this.shape_288,p:{x:79.25,y:147.025}},{t:this.shape_8,p:{x:94.775,y:149.025}},{t:this.shape_66,p:{x:103.125,y:146.6}},{t:this.shape_374},{t:this.shape_106,p:{x:123.825,y:148.925}},{t:this.shape_82,p:{x:132.575,y:146.925}},{t:this.shape_1,p:{y:149.025,x:141.175}},{t:this.shape_373,p:{x:158.85,y:147.025}},{t:this.shape_5,p:{y:149.025,x:170.425}},{t:this.shape_3,p:{y:149.025,x:182.975}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_497,p:{x:-231.725}},{t:this.shape_496},{t:this.shape_290,p:{x:-195.275}},{t:this.shape_495},{t:this.shape_234,p:{x:-151.575}},{t:this.shape_494},{t:this.shape_493,p:{x:-107.65}},{t:this.shape_230,p:{x:-83.175}},{t:this.shape_229,p:{x:-63.625}},{t:this.shape_492,p:{x:-43.85}},{t:this.shape_227,p:{x:-25.325}},{t:this.shape_257,p:{x:-12.1}},{t:this.shape_225,p:{x:5.725}},{t:this.shape_491},{t:this.shape_490},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_25,p:{x:-289.025,y:-81.175}},{t:this.shape_161,p:{x:-277.275,y:-81.275}},{t:this.shape_97,p:{x:-267.95,y:-82.475}},{t:this.shape_312,p:{x:-259.7,y:-81.275}},{t:this.shape_250,p:{x:-250.6,y:-81.175}},{t:this.shape_66,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_77,p:{x:-217.5,y:-82.475}},{t:this.shape_111,p:{x:-207.6,y:-81.175}},{t:this.shape_93,p:{x:-198.35,y:-82.475}},{t:this.shape_95,p:{x:-191.725,y:-83.275}},{t:this.shape_17,p:{x:-182.775,y:-81.175}},{t:this.shape_155,p:{x:-170.425,y:-81.275}},{t:this.shape_35,p:{x:75.825,y:-83.175}},{t:this.shape_41,p:{x:88.275,y:-83.275}},{t:this.shape_32,p:{y:-81.175,x:97.025}},{t:this.shape_34,p:{y:-83.175,x:105.875}},{t:this.shape_30,p:{x:118.225,y:-83.175}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_12,p:{x:308.575,y:-81.175}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:-15.4}},{t:this.shape_393,p:{x:-362.525,y:-16.65}},{t:this.shape_392,p:{x:-348.125,y:-13.625}},{t:this.shape_489},{t:this.shape_467,p:{x:-316.425,y:-13.45}},{t:this.shape_217,p:{x:-299.575,y:-13.625}},{t:this.shape_488,p:{y:-13.625}},{t:this.shape_461,p:{x:-254.425}},{t:this.shape_460,p:{x:-239.675}},{t:this.shape_386,p:{x:-229.125,y:-16.8}},{t:this.shape_458,p:{x:-214.925,y:-13.45}},{t:this.shape_384,p:{x:-195.275,y:-13.625}},{t:this.shape_109,p:{x:-415.775,y:35.175}},{t:this.shape_487},{t:this.shape_86,p:{y:35.075,x:-394.425}},{t:this.shape_14,p:{x:-386.125,y:37.175}},{t:this.shape_7,p:{x:-369.325,y:37.175}},{t:this.shape_85,p:{y:35.875,x:-360.35}},{t:this.shape_90,p:{y:37.175,x:-350.45}},{t:this.shape_27,p:{y:35.875,x:-341.2}},{t:this.shape_82,p:{x:-334.575,y:35.075}},{t:this.shape_10,p:{y:37.175,x:-325.625}},{t:this.shape_131,p:{x:-313.275,y:37.075}},{t:this.shape_315,p:{x:-295.8,y:39.375}},{t:this.shape_5,p:{y:37.175,x:-283.125}},{t:this.shape_20,p:{x:-270.925,y:37.175}},{t:this.shape,p:{y:37.175,x:-259.625}},{t:this.shape_310,p:{x:-245.2,y:35.875}},{t:this.shape_486,p:{x:-235.175,y:34.75}},{t:this.shape_81,p:{x:-224.85,y:37.075}},{t:this.shape_3,p:{y:37.175,x:-215.425}},{t:this.shape_485,p:{x:-203.125,y:37.3}},{t:this.shape_484},{t:this.shape_483,p:{x:-178.575,y:34.75}},{t:this.shape_136,p:{x:-163.85,y:35.875}},{t:this.shape_482,p:{x:-153.825,y:34.75}},{t:this.shape_15,p:{x:-141.875,y:37.175}},{t:this.shape_106,p:{x:-124.675,y:37.075}},{t:this.shape_8,p:{x:-112.675,y:37.175}},{t:this.shape_134,p:{x:-103.75,y:35.875}},{t:this.shape_270,p:{x:-93.725,y:34.75}},{t:this.shape_1,p:{y:37.175,x:-81.775}},{t:this.shape_22,p:{y:37.075,x:-71.8}},{t:this.shape_302,p:{x:-65.875,y:41.925}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_502,p:{x:-231.475}},{t:this.shape_501,p:{x:-212.95}},{t:this.shape_233,p:{x:-199.025}},{t:this.shape_290,p:{x:-180.975}},{t:this.shape_500},{t:this.shape_296,p:{x:-121.475}},{t:this.shape_225,p:{x:-98.375}},{t:this.shape_499,p:{x:-73.95}},{t:this.shape_295,p:{x:-49.125}},{t:this.shape_498,p:{x:-24.45}},{t:this.shape_292,p:{x:-1.775}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_1,p:{y:-81.175,x:-289.025}},{t:this.shape_131,p:{x:-277.275,y:-81.275}},{t:this.shape_97,p:{x:-267.95,y:-82.475}},{t:this.shape_81,p:{x:-259.7,y:-81.275}},{t:this.shape_250,p:{x:-250.6,y:-81.175}},{t:this.shape_66,p:{x:-241.925,y:-83.6}},{t:this.shape_137,p:{x:-227.275,y:-83.175}},{t:this.shape_77,p:{x:-217.5,y:-82.475}},{t:this.shape_111,p:{x:-207.6,y:-81.175}},{t:this.shape_85,p:{y:-82.475,x:-198.35}},{t:this.shape_82,p:{x:-191.725,y:-83.275}},{t:this.shape_5,p:{y:-81.175,x:-182.775}},{t:this.shape_106,p:{x:-170.425,y:-81.275}},{t:this.shape_34,p:{y:-83.175,x:75.825}},{t:this.shape_63,p:{x:86.85,y:-83.2}},{t:this.shape_32,p:{y:-81.175,x:97.025}},{t:this.shape_45,p:{x:106.275,y:-83.075}},{t:this.shape_30,p:{x:118.225,y:-83.175}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_3,p:{y:-81.175,x:308.575}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_570},{t:this.shape_501,p:{x:-212.95}},{t:this.shape_233,p:{x:-199.025}},{t:this.shape_290,p:{x:-180.975}},{t:this.shape_500},{t:this.shape_502,p:{x:-120.325}},{t:this.shape_569},{t:this.shape_252,p:{x:-70.15}},{t:this.shape_227,p:{x:-51.625}},{t:this.shape_568},{t:this.shape_225,p:{x:5.875}},{t:this.shape_567,p:{x:34.925}},{t:this.shape_566},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_53,p:{x:-416.025,y:-54.875}},{t:this.shape_61,p:{y:-26.375,x:-416.35}},{t:this.shape_251,p:{y:-83.175}},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_323,p:{x:-259.7,y:-81.275}},{t:this.shape_330},{t:this.shape_101,p:{x:-241.925,y:-83.6}},{t:this.shape_439,p:{x:-227.275,y:-83.175}},{t:this.shape_562},{t:this.shape_318,p:{x:-207.6,y:-81.175}},{t:this.shape_146,p:{x:-198.35,y:-82.475}},{t:this.shape_451,p:{x:-191.725,y:-83.275}},{t:this.shape_561},{t:this.shape_476,p:{x:-170.425}},{t:this.shape_72,p:{x:-302.075,y:-54.775}},{t:this.shape_246,p:{x:-292.225,y:-55.2}},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558,p:{y:-54.775}},{t:this.shape_448,p:{x:-249.275,y:-52.775}},{t:this.shape_150,p:{x:-240.875,y:-55.2}},{t:this.shape_557},{t:this.shape_137,p:{x:-302.725,y:-26.375}},{t:this.shape_114,p:{x:-290.125,y:-26.8}},{t:this.shape_449,p:{x:-281.425,y:-26.475}},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554,p:{x:-258}},{t:this.shape_441,p:{x:-249.775,y:-26.475}},{t:this.shape_553},{t:this.shape_552},{t:this.shape_34,p:{y:-83.175,x:75.825}},{t:this.shape_63,p:{x:86.85,y:-83.2}},{t:this.shape_32,p:{y:-81.175,x:97.025}},{t:this.shape_41,p:{x:105.975,y:-83.275}},{t:this.shape_30,p:{x:118.225,y:-83.175}},{t:this.shape_13,p:{x:77.475,y:-54.775}},{t:this.shape_551,p:{x:91.625,y:-52.775}},{t:this.shape_550,p:{y:-54.075}},{t:this.shape_289,p:{x:118.025,y:-54.775}},{t:this.shape_549},{t:this.shape_94,p:{x:141.6,y:-52.775}},{t:this.shape_548,p:{x:153.425}},{t:this.shape_78,p:{x:164,y:-52.875}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_248,p:{x:197.075}},{t:this.shape_11,p:{y:-26.375,x:77.475}},{t:this.shape_545,p:{x:91.625}},{t:this.shape_316,p:{x:101.15,y:-25.675}},{t:this.shape_26,p:{y:-26.375}},{t:this.shape_544,p:{x:130.025,y:-24.375}},{t:this.shape_24,p:{y:-24.375,x:141.6}},{t:this.shape_543,p:{x:153.425,y:-24.375}},{t:this.shape_22,p:{y:-24.475,x:164}},{t:this.shape_279},{t:this.shape_454,p:{x:185.475,y:-24.375}},{t:this.shape_278},{t:this.shape_9,p:{y:-83.175}},{t:this.shape_149,p:{x:305.725,y:-81.175}},{t:this.shape_445,p:{x:317.025,y:-81.175}},{t:this.shape_6,p:{y:-54.775,x:294.425}},{t:this.shape_542,p:{x:308.575,y:-52.775}},{t:this.shape_4,p:{y:-26.375}},{t:this.shape_541,p:{x:308.575,y:-24.375}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:30.95}},{t:this.shape_393,p:{x:-362.525,y:29.7}},{t:this.shape_392,p:{x:-348.125,y:32.725}},{t:this.shape_540},{t:this.shape_467,p:{x:-316.425,y:32.9}},{t:this.shape_217,p:{x:-299.575,y:32.725}},{t:this.shape_488,p:{y:32.725}},{t:this.shape_539},{t:this.shape_538},{t:this.shape_386,p:{x:-229.125,y:29.55}},{t:this.shape_458,p:{x:-214.925,y:32.9}},{t:this.shape_384,p:{x:-195.275,y:32.725}},{t:this.shape_2,p:{y:81.525,x:-415.775}},{t:this.shape_537,p:{x:-402.875,y:83.525}},{t:this.shape_536},{t:this.shape_107,p:{x:-370.775,y:83.55}},{t:this.shape_440,p:{x:-359.775,y:81.425}},{t:this.shape_71,p:{x:-354.425,y:81.1}},{t:this.shape_66,p:{x:-349.075,y:81.1}},{t:this.shape_317,p:{x:-336.65,y:83.425}},{t:this.shape_138,p:{x:-327.575,y:83.525}},{t:this.shape_535},{t:this.shape_534},{t:this.shape_436,p:{x:-294.575,y:81.425}},{t:this.shape_312,p:{x:-287.6,y:83.425}},{t:this.shape_120,p:{x:-278.525,y:83.525}},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531,p:{x:-231.375,y:83.525}},{t:this.shape_530},{t:this.shape_529},{t:this.shape_111,p:{x:-194.55,y:83.525}},{t:this.shape_140,p:{x:-185.3,y:82.225}},{t:this.shape_528},{t:this.shape_486,p:{x:-162.625,y:81.1}},{t:this.shape_431,p:{x:-153.925,y:81.425}},{t:this.shape_158,p:{x:-145.625,y:83.525}},{t:this.shape_527},{t:this.shape_104,p:{x:-116.125,y:83.525}},{t:this.shape_119,p:{x:-104.825,y:83.525}},{t:this.shape_429,p:{x:-95.85,y:82.225}},{t:this.shape_430,p:{x:-89.225,y:81.425}},{t:this.shape_473,p:{x:-80.475,y:83.425}},{t:this.shape_526},{t:this.shape_525},{t:this.shape_147,p:{x:-52.575,y:81.425}},{t:this.shape_162,p:{x:-43.625,y:83.525}},{t:this.shape_333,p:{x:-31.275,y:83.425}},{t:this.shape_524},{t:this.shape_88,p:{y:83.525,x:-1.475}},{t:this.shape_523},{t:this.shape_132,p:{x:20.875,y:83.525}},{t:this.shape_327,p:{x:33.225,y:83.425}},{t:this.shape_522,p:{x:45.225,y:81.2}},{t:this.shape_110,p:{x:60.4,y:82.225}},{t:this.shape_483,p:{x:70.425,y:81.1}},{t:this.shape_70,p:{x:82.375,y:83.525}},{t:this.shape_98,p:{x:99.125,y:83.525}},{t:this.shape_93,p:{x:108.1,y:82.225}},{t:this.shape_90,p:{y:83.525,x:118}},{t:this.shape_521},{t:this.shape_143,p:{x:133.875,y:81.425}},{t:this.shape_123,p:{x:142.825,y:83.525}},{t:this.shape_324,p:{x:155.175,y:83.425}},{t:this.shape_520},{t:this.shape_68,p:{x:175.45,y:81.525}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_112,p:{x:208.225,y:83.525}},{t:this.shape_485,p:{x:220.525,y:83.65}},{t:this.shape_154,p:{x:238.025,y:81.2}},{t:this.shape_108,p:{x:250.775,y:83.525}},{t:this.shape_272,p:{x:268.575,y:83.425}},{t:this.shape_79,p:{x:280.925,y:83.525}},{t:this.shape_517},{t:this.shape_482,p:{x:305.925,y:81.1}},{t:this.shape_516},{t:this.shape_444,p:{x:329.2,y:83.55}},{t:this.shape_69,p:{x:340.475,y:83.525}},{t:this.shape_515,p:{x:357.55,y:83.525}},{t:this.shape_514},{t:this.shape_28,p:{x:387.625,y:83.525}},{t:this.shape_102,p:{x:399.85,y:83.525}},{t:this.shape_513},{t:this.shape_512},{t:this.shape_329,p:{x:-419.1,y:110.625}},{t:this.shape_152,p:{x:-409.075,y:109.5}},{t:this.shape_65,p:{x:-397.125,y:111.925}},{t:this.shape_96,p:{y:111.825,x:-387.15}},{t:this.shape_25,p:{x:-378.075,y:111.925}},{t:this.shape_133,p:{x:-364.275,y:109.825}},{t:this.shape_67,p:{x:-355.975,y:111.925}},{t:this.shape_281,p:{x:-338.85,y:111.925}},{t:this.shape_511},{t:this.shape_510,p:{x:-309.025,y:112.05}},{t:this.shape_509},{t:this.shape_310,p:{x:-292.45,y:110.625}},{t:this.shape_23,p:{x:-282.225,y:111.925}},{t:this.shape_271,p:{x:-269.875,y:111.825}},{t:this.shape_250,p:{x:-252.4,y:111.925}},{t:this.shape_77,p:{x:-243.15,y:110.625}},{t:this.shape_27,p:{y:110.625,x:-230.5}},{t:this.shape_125,p:{x:-220.475,y:109.5}},{t:this.shape_20,p:{x:-208.525,y:111.925}},{t:this.shape_15,p:{x:-191.475,y:111.925}},{t:this.shape_508},{t:this.shape_128,p:{x:-172.225,y:109.825}},{t:this.shape_507},{t:this.shape_332,p:{x:-153.65,y:110.625}},{t:this.shape_17,p:{x:-143.425,y:111.925}},{t:this.shape_12,p:{x:-125.425,y:111.925}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_117,p:{x:-84.975,y:109.825}},{t:this.shape_161,p:{x:-76.225,y:111.825}},{t:this.shape_10,p:{y:111.925,x:-58.425}},{t:this.shape_155,p:{x:-46.075,y:111.825}},{t:this.shape_8,p:{x:-34.075,y:111.925}},{t:this.shape_309,p:{x:-25.625,y:116.675}},{t:this.instance_3},{t:this.shape_118,p:{x:-386.675,y:233.175}},{t:this.shape_113,p:{x:-372.975,y:233.175}},{t:this.shape_109,p:{x:-359.825,y:233.175}},{t:this.shape_447,p:{x:-341.85,y:235.175}},{t:this.shape_99,p:{x:-333.175,y:233.075}},{t:this.shape_81,p:{x:-326.2,y:235.075}},{t:this.shape_503},{t:this.shape_5,p:{y:235.175,x:-304.425}},{t:this.shape_321,p:{x:-293.85,y:235.075}},{t:this.shape_85,p:{y:233.875,x:-287.45}},{t:this.shape_95,p:{x:-275.375,y:233.075}},{t:this.shape_14,p:{x:-267.075,y:235.175}},{t:this.shape_131,p:{x:-249.825,y:235.075}},{t:this.shape_1,p:{y:235.175,x:-237.825}},{t:this.shape_269,p:{x:-226.2,y:235.175}},{t:this.shape_241,p:{x:-215.9,y:235.075}},{t:this.shape_97,p:{x:-204.05,y:233.875}},{t:this.shape_270,p:{x:-194.025,y:232.75}},{t:this.shape_86,p:{y:233.075,x:-185.325}},{t:this.shape_7,p:{x:-177.025,y:235.175}},{t:this.shape,p:{y:235.175,x:-160.225}},{t:this.shape_136,p:{x:-151.25,y:233.875}},{t:this.shape_135,p:{x:-141.35,y:235.175}},{t:this.shape_134,p:{x:-132.1,y:233.875}},{t:this.shape_82,p:{x:-125.475,y:233.075}},{t:this.shape_3,p:{y:235.175,x:-116.525}},{t:this.shape_106,p:{x:-104.175,y:235.075}},{t:this.shape_302,p:{x:-95.325,y:239.925}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_603},{t:this.shape_259,p:{x:-211.7}},{t:this.shape_493,p:{x:-194.5}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_292,p:{x:-125.725}},{t:this.shape_231,p:{x:-108.95}},{t:this.shape_478,p:{x:-91.75}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_41,p:{x:-416.025,y:-54.875}},{t:this.shape_61,p:{y:-26.375,x:-416.35}},{t:this.shape_171},{t:this.shape_45,p:{x:-415.725,y:30.525}},{t:this.shape_600},{t:this.shape_147,p:{x:-293.525,y:-83.275}},{t:this.shape_101,p:{x:-288.175,y:-83.6}},{t:this.shape_143,p:{x:-282.825,y:-83.275}},{t:this.shape_599},{t:this.shape_551,p:{x:-262.425,y:-81.175}},{t:this.shape_272,p:{x:-250.075,y:-81.275}},{t:this.shape_598},{t:this.shape_90,p:{y:-81.175,x:-218.6}},{t:this.shape_71,p:{x:-209.925,y:-83.6}},{t:this.shape_66,p:{x:-204.575,y:-83.6}},{t:this.shape_544,p:{x:-195.975,y:-81.175}},{t:this.shape_597},{t:this.shape_129,p:{y:-54.775}},{t:this.shape_267,p:{x:-291.25,y:-52.875}},{t:this.shape_454,p:{x:-282.175,y:-52.775}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_127,p:{x:-236.4,y:-52.875}},{t:this.shape_548,p:{x:-226.975}},{t:this.shape_510,p:{x:-214.675,y:-52.65}},{t:this.shape_98,p:{x:-202.925,y:-52.775}},{t:this.shape_593},{t:this.shape_251,p:{y:-26.375}},{t:this.shape_149,p:{x:-289.025,y:-24.375}},{t:this.shape_271,p:{x:-277.275,y:-24.475}},{t:this.shape_332,p:{x:-267.95,y:-25.675}},{t:this.shape_312,p:{x:-259.7,y:-24.475}},{t:this.shape_250,p:{x:-250.6,y:-24.375}},{t:this.shape_282,p:{x:-241.925,y:-26.8}},{t:this.shape_439,p:{x:-227.275,y:-26.375}},{t:this.shape_329,p:{x:-217.5,y:-25.675}},{t:this.shape_318,p:{x:-207.6,y:-24.375}},{t:this.shape_110,p:{x:-198.35,y:-25.675}},{t:this.shape_133,p:{x:-191.725,y:-26.475}},{t:this.shape_545,p:{x:-182.775}},{t:this.shape_161,p:{x:-170.425,y:-24.475}},{t:this.shape_118,p:{x:-302.125,y:2.025}},{t:this.shape_128,p:{x:-292.875,y:1.925}},{t:this.shape_116,p:{y:3.925}},{t:this.shape_115,p:{y:4.025}},{t:this.shape_125,p:{x:-265.225,y:1.6}},{t:this.shape_113,p:{x:-246.625,y:2.025}},{t:this.shape_543,p:{x:-233.775,y:4.025}},{t:this.shape_111,p:{x:-221.55,y:4.025}},{t:this.shape_93,p:{x:-212.3,y:2.725}},{t:this.shape_109,p:{x:-196.325,y:2.025}},{t:this.shape_542,p:{x:-183.475,y:4.025}},{t:this.shape_322,p:{x:-168.975,y:4.05}},{t:this.shape_155,p:{x:-154.575,y:3.925}},{t:this.shape_137,p:{x:-302.725,y:30.425}},{t:this.shape_592},{t:this.shape_591},{t:this.shape_307,p:{x:-268.75,y:32.425}},{t:this.shape_117,p:{x:-260.525,y:30.325}},{t:this.shape_85,p:{y:31.125,x:-254.6}},{t:this.shape_590},{t:this.shape_589},{t:this.shape_541,p:{x:91.625,y:-81.175}},{t:this.shape_588},{t:this.shape_587},{t:this.shape_138,p:{x:130.025,y:-81.175}},{t:this.shape_586},{t:this.shape_537,p:{x:153.425,y:-81.175}},{t:this.shape_585},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_120,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_584},{t:this.shape_531,p:{x:91.625,y:-52.775}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_104,p:{x:130.025,y:-52.775}},{t:this.shape_581},{t:this.shape_162,p:{x:153.425,y:-52.775}},{t:this.shape_580},{t:this.shape_547},{t:this.shape_88,p:{y:-52.775,x:185.475}},{t:this.shape_248,p:{x:197.075}},{t:this.shape_579},{t:this.shape_132,p:{x:91.625,y:-24.375}},{t:this.shape_550,p:{y:-25.675}},{t:this.shape_578},{t:this.shape_70,p:{x:130.025,y:-24.375}},{t:this.shape_554,p:{x:141.6}},{t:this.shape_123,p:{x:153.425,y:-24.375}},{t:this.shape_577},{t:this.shape_279},{t:this.shape_69,p:{x:185.475,y:-24.375}},{t:this.shape_278},{t:this.shape_29,p:{y:2.025}},{t:this.shape_112,p:{x:91.625,y:4.025}},{t:this.shape_316,p:{x:101.15,y:2.725}},{t:this.shape_289,p:{x:118.025,y:2.025}},{t:this.shape_65,p:{x:130.025,y:4.025}},{t:this.shape_94,p:{x:141.6,y:4.025}},{t:this.shape_108,p:{x:153.425,y:4.025}},{t:this.shape_576},{t:this.shape_238},{t:this.shape_25,p:{x:185.475,y:4.025}},{t:this.shape_122,p:{x:197.075}},{t:this.shape_18,p:{x:77.475,y:30.425}},{t:this.shape_79,p:{x:91.625,y:32.425}},{t:this.shape_27,p:{y:31.125,x:101.15}},{t:this.shape_26,p:{y:30.425}},{t:this.shape_20,p:{x:130.025,y:32.425}},{t:this.shape_24,p:{y:32.425,x:141.6}},{t:this.shape_28,p:{x:153.425,y:32.425}},{t:this.shape_78,p:{x:164,y:32.325}},{t:this.shape_575},{t:this.shape_15,p:{x:185.475,y:32.425}},{t:this.shape_574},{t:this.shape_13,p:{x:294.425,y:-83.175}},{t:this.shape_23,p:{x:308.575,y:-81.175}},{t:this.shape_11,p:{y:-54.775,x:294.425}},{t:this.shape_17,p:{x:308.575,y:-52.775}},{t:this.shape_2,p:{y:-26.375,x:293.175}},{t:this.shape_8,p:{x:305.725,y:-24.375}},{t:this.shape_67,p:{x:317.025,y:-24.375}},{t:this.shape_6,p:{y:2.025,x:294.425}},{t:this.shape_12,p:{x:308.575,y:4.025}},{t:this.shape_4,p:{y:30.425}},{t:this.shape_10,p:{y:32.425,x:308.575}},{t:this.close},{t:this.instance_3},{t:this.shape_72,p:{x:-386.625,y:233.175}},{t:this.shape_105,p:{y:233.175,x:-372.9}},{t:this.shape_159,p:{y:233.175,x:-364.6}},{t:this.shape_573,p:{x:-350.2}},{t:this.shape_99,p:{x:-341.525,y:233.075}},{t:this.shape_81,p:{x:-334.55,y:235.075}},{t:this.shape_572,p:{x:-325}},{t:this.shape_5,p:{y:235.175,x:-312.775}},{t:this.shape_22,p:{y:235.075,x:-302.2}},{t:this.shape_77,p:{x:-295.8,y:233.875}},{t:this.shape_95,p:{x:-283.725,y:233.075}},{t:this.shape_14,p:{x:-275.425,y:235.175}},{t:this.shape_131,p:{x:-258.175,y:235.075}},{t:this.shape_1,p:{y:235.175,x:-246.175}},{t:this.shape_571,p:{x:-234.55}},{t:this.shape_96,p:{y:235.075,x:-224.25}},{t:this.shape_429,p:{x:-212.4,y:233.875}},{t:this.shape_270,p:{x:-202.375,y:232.75}},{t:this.shape_86,p:{y:233.075,x:-193.675}},{t:this.shape_7,p:{x:-185.375,y:235.175}},{t:this.shape,p:{y:235.175,x:-168.575}},{t:this.shape_97,p:{x:-159.6,y:233.875}},{t:this.shape_269,p:{x:-149.7,y:235.175}},{t:this.shape_136,p:{x:-140.45,y:233.875}},{t:this.shape_82,p:{x:-133.825,y:233.075}},{t:this.shape_3,p:{y:235.175,x:-124.875}},{t:this.shape_106,p:{x:-112.525,y:235.075}},{t:this.shape_302,p:{x:-103.675,y:239.925}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_502,p:{x:-231.475}},{t:this.shape_275,p:{x:-209.725}},{t:this.shape_254,p:{x:-191.6}},{t:this.shape_252,p:{x:-168.25}},{t:this.shape_609},{t:this.shape_290,p:{x:-119.675}},{t:this.shape_233,p:{x:-99.825}},{t:this.shape_225,p:{x:-81.025}},{t:this.shape_608,p:{x:-56.375}},{t:this.shape_292,p:{x:-32.925}},{t:this.shape_227,p:{x:-14.975}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_83,p:{x:-302.075,y:-83.175}},{t:this.shape_71,p:{x:-292.225,y:-83.6}},{t:this.shape_70,p:{x:-283.625,y:-81.175}},{t:this.shape_69,p:{x:-272.025,y:-81.175}},{t:this.shape_558,p:{y:-83.175}},{t:this.shape_14,p:{x:-249.275,y:-81.175}},{t:this.shape_66,p:{x:-240.875,y:-83.6}},{t:this.shape_65,p:{x:-232.275,y:-81.175}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_17,p:{x:91.625,y:-81.175}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_25,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-81.175}},{t:this.shape_22,p:{y:-81.275,x:164}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_20,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_139,p:{x:-403.125,y:91.55}},{t:this.shape_99,p:{x:-394.425,y:91.875}},{t:this.shape_7,p:{x:-386.125,y:93.975}},{t:this.shape_282,p:{x:-372.275,y:91.55}},{t:this.shape_95,p:{x:-366.925,y:91.875}},{t:this.shape_131,p:{x:-358.175,y:93.875}},{t:this.shape_15,p:{x:-346.175,y:93.975}},{t:this.shape_86,p:{y:91.875,x:-332.375}},{t:this.shape,p:{y:93.975,x:-324.075}},{t:this.shape_135,p:{x:-306.95,y:93.975}},{t:this.shape_605},{t:this.shape_281,p:{x:-277.2,y:93.975}},{t:this.shape_81,p:{x:-266.9,y:93.875}},{t:this.shape_310,p:{x:-260.5,y:92.675}},{t:this.shape_5,p:{y:93.975,x:-244.825}},{t:this.shape_604},{t:this.shape_85,p:{y:92.675,x:-222.2}},{t:this.shape_114,p:{x:-212.175,y:91.55}},{t:this.shape_8,p:{x:-200.225,y:93.975}},{t:this.shape_72,p:{x:-181.925,y:91.975}},{t:this.shape_373,p:{x:-168.2,y:91.975}},{t:this.shape_68,p:{x:-159.9,y:91.975}},{t:this.shape_241,p:{x:-147.15,y:93.875}},{t:this.shape_1,p:{y:93.975,x:-138.075}},{t:this.shape_305,p:{x:-126.45,y:96.175}},{t:this.shape_82,p:{x:-117.375,y:91.875}},{t:this.shape_3,p:{y:93.975,x:-108.425}},{t:this.shape_106,p:{x:-96.075,y:93.875}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_230,p:{x:-232.675}},{t:this.shape_612,p:{x:-214.25}},{t:this.shape_611},{t:this.shape_226,p:{x:-192.85}},{t:this.shape_290,p:{x:-175.775}},{t:this.shape_225,p:{x:-152.025}},{t:this.shape_610,p:{x:-127.3}},{t:this.shape_497,p:{x:-90.225}},{t:this.shape_252,p:{x:-64.3}},{t:this.shape_259,p:{x:-46.95}},{t:this.shape_231,p:{x:-36.25}},{t:this.shape_498,p:{x:-19.05}},{t:this.shape_256,p:{x:2.725}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_83,p:{x:-302.075,y:-83.175}},{t:this.shape_71,p:{x:-292.225,y:-83.6}},{t:this.shape_70,p:{x:-283.625,y:-81.175}},{t:this.shape_69,p:{x:-272.025,y:-81.175}},{t:this.shape_558,p:{y:-83.175}},{t:this.shape_14,p:{x:-249.275,y:-81.175}},{t:this.shape_66,p:{x:-240.875,y:-83.6}},{t:this.shape_65,p:{x:-232.275,y:-81.175}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_17,p:{x:91.625,y:-81.175}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_25,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-81.175}},{t:this.shape_22,p:{y:-81.275,x:164}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_20,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_139,p:{x:-403.125,y:91.55}},{t:this.shape_99,p:{x:-394.425,y:91.875}},{t:this.shape_7,p:{x:-386.125,y:93.975}},{t:this.shape_282,p:{x:-372.275,y:91.55}},{t:this.shape_95,p:{x:-366.925,y:91.875}},{t:this.shape_131,p:{x:-358.175,y:93.875}},{t:this.shape_15,p:{x:-346.175,y:93.975}},{t:this.shape_86,p:{y:91.875,x:-332.375}},{t:this.shape,p:{y:93.975,x:-324.075}},{t:this.shape_135,p:{x:-306.95,y:93.975}},{t:this.shape_605},{t:this.shape_281,p:{x:-277.2,y:93.975}},{t:this.shape_81,p:{x:-266.9,y:93.875}},{t:this.shape_310,p:{x:-260.5,y:92.675}},{t:this.shape_5,p:{y:93.975,x:-244.825}},{t:this.shape_604},{t:this.shape_85,p:{y:92.675,x:-222.2}},{t:this.shape_114,p:{x:-212.175,y:91.55}},{t:this.shape_8,p:{x:-200.225,y:93.975}},{t:this.shape_72,p:{x:-181.925,y:91.975}},{t:this.shape_373,p:{x:-168.2,y:91.975}},{t:this.shape_68,p:{x:-159.9,y:91.975}},{t:this.shape_241,p:{x:-147.15,y:93.875}},{t:this.shape_1,p:{y:93.975,x:-138.075}},{t:this.shape_305,p:{x:-126.45,y:96.175}},{t:this.shape_82,p:{x:-117.375,y:91.875}},{t:this.shape_3,p:{y:93.975,x:-108.425}},{t:this.shape_106,p:{x:-96.075,y:93.875}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_230,p:{x:-232.675}},{t:this.shape_615},{t:this.shape_501,p:{x:-190}},{t:this.shape_614},{t:this.shape_229,p:{x:-162.875}},{t:this.shape_290,p:{x:-143.275}},{t:this.shape_613,p:{x:-126.65}},{t:this.shape_227,p:{x:-114.825}},{t:this.shape_256,p:{x:-96.625}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_118,p:{x:-302.125,y:-83.175}},{t:this.shape_82,p:{x:-292.875,y:-83.275}},{t:this.shape_96,p:{y:-81.275,x:-285.9}},{t:this.shape_115,p:{y:-81.175}},{t:this.shape_270,p:{x:-265.225,y:-83.6}},{t:this.shape_113,p:{x:-246.625,y:-83.175}},{t:this.shape_17,p:{x:-233.775,y:-81.175}},{t:this.shape_111,p:{x:-221.55,y:-81.175}},{t:this.shape_85,p:{y:-82.475,x:-212.3}},{t:this.shape_109,p:{x:-196.325,y:-83.175}},{t:this.shape_12,p:{x:-183.475,y:-81.175}},{t:this.shape_107,p:{x:-168.975,y:-81.15}},{t:this.shape_106,p:{x:-154.575,y:-81.275}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_10,p:{y:-81.175,x:91.625}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_8,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_5,p:{y:-81.175,x:153.425}},{t:this.shape_22,p:{y:-81.275,x:164}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_1,p:{y:-81.175,x:185.475}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_3,p:{y:-81.175,x:308.575}},{t:this.close}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_262},{t:this.shape_261},{t:this.shape_252,p:{x:-170.5}},{t:this.shape_259,p:{x:-153.15}},{t:this.shape_236,p:{x:-135.95}},{t:this.shape_258},{t:this.shape_257,p:{x:-79.6}},{t:this.shape_227,p:{x:-67.775}},{t:this.shape_256,p:{x:-49.575}},{t:this.shape_255},{t:this.shape_225,p:{x:12.925}},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_233,p:{x:134.475}},{t:this.shape_290,p:{x:152.525}},{t:this.shape_612,p:{x:169.15}},{t:this.shape_619},{t:this.shape_231,p:{x:203.75}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_153,p:{y:-83.175}},{t:this.shape_270,p:{x:-283.675,y:-83.6}},{t:this.shape_151,p:{x:-271.7,y:-81.175}},{t:this.shape_71,p:{x:-263.025,y:-83.6}},{t:this.shape_70,p:{x:-254.425,y:-81.175}},{t:this.shape_148,p:{y:-83.175}},{t:this.shape_128,p:{x:-226.325,y:-83.275}},{t:this.shape_110,p:{x:-220.4,y:-82.475}},{t:this.shape_618},{t:this.shape_244,p:{y:-83.175}},{t:this.shape_69,p:{x:-180.375,y:-81.175}},{t:this.shape_155,p:{x:-168.625,y:-81.275}},{t:this.shape_429,p:{x:-159.3,y:-82.475}},{t:this.shape_312,p:{x:-151.05,y:-81.275}},{t:this.shape_102,p:{x:-141.95,y:-81.175}},{t:this.shape_66,p:{x:-133.275,y:-83.6}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_17,p:{x:91.625,y:-81.175}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_65,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-81.175}},{t:this.shape_22,p:{y:-81.275,x:164}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_25,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_617},{t:this.shape_117,p:{x:-394.425,y:91.875}},{t:this.shape_7,p:{x:-386.125,y:93.975}},{t:this.shape_383,p:{x:-372.275,y:91.55}},{t:this.shape_99,p:{x:-366.925,y:91.875}},{t:this.shape_131,p:{x:-358.175,y:93.875}},{t:this.shape_20,p:{x:-346.175,y:93.975}},{t:this.shape_95,p:{x:-332.375,y:91.875}},{t:this.shape,p:{y:93.975,x:-324.075}},{t:this.shape_135,p:{x:-306.95,y:93.975}},{t:this.shape_605},{t:this.shape_281,p:{x:-277.2,y:93.975}},{t:this.shape_81,p:{x:-266.9,y:93.875}},{t:this.shape_310,p:{x:-260.5,y:92.675}},{t:this.shape_5,p:{y:93.975,x:-244.825}},{t:this.shape_604},{t:this.shape_93,p:{x:-222.2,y:92.675}},{t:this.shape_139,p:{x:-212.175,y:91.55}},{t:this.shape_15,p:{x:-200.225,y:93.975}},{t:this.shape_92,p:{y:91.975,x:-179.25}},{t:this.shape_114,p:{x:-163.525,y:91.55}},{t:this.shape_90,p:{y:93.975,x:-151.55}},{t:this.shape_282,p:{x:-142.875,y:91.55}},{t:this.shape_8,p:{x:-134.275,y:93.975}},{t:this.shape_87,p:{y:91.975,x:-115.85}},{t:this.shape_86,p:{y:91.875,x:-106.175}},{t:this.shape_85,p:{y:92.675,x:-100.25}},{t:this.shape_616},{t:this.shape_267,p:{x:-76.15,y:93.875}},{t:this.shape_1,p:{y:93.975,x:-67.075}},{t:this.shape_305,p:{x:-55.45,y:96.175}},{t:this.shape_82,p:{x:-46.375,y:91.875}},{t:this.shape_3,p:{y:93.975,x:-37.425}},{t:this.shape_106,p:{x:-25.075,y:93.875}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_262},{t:this.shape_261},{t:this.shape_252,p:{x:-170.5}},{t:this.shape_259,p:{x:-153.15}},{t:this.shape_236,p:{x:-135.95}},{t:this.shape_258},{t:this.shape_257,p:{x:-79.6}},{t:this.shape_229,p:{x:-67.775}},{t:this.shape_256,p:{x:-49.575}},{t:this.shape_626},{t:this.shape_493,p:{x:10.7}},{t:this.shape_292,p:{x:33.375}},{t:this.shape_613,p:{x:50.2}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_610,p:{x:115.7}},{t:this.shape_227,p:{x:134.375}},{t:this.shape_276,p:{x:147.6}},{t:this.shape_623},{t:this.shape_231,p:{x:182.2}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_153,p:{y:-83.175}},{t:this.shape_270,p:{x:-283.675,y:-83.6}},{t:this.shape_151,p:{x:-271.7,y:-81.175}},{t:this.shape_71,p:{x:-263.025,y:-83.6}},{t:this.shape_70,p:{x:-254.425,y:-81.175}},{t:this.shape_148,p:{y:-83.175}},{t:this.shape_128,p:{x:-226.325,y:-83.275}},{t:this.shape_110,p:{x:-220.4,y:-82.475}},{t:this.shape_618},{t:this.shape_244,p:{y:-83.175}},{t:this.shape_69,p:{x:-180.375,y:-81.175}},{t:this.shape_155,p:{x:-168.625,y:-81.275}},{t:this.shape_429,p:{x:-159.3,y:-82.475}},{t:this.shape_312,p:{x:-151.05,y:-81.275}},{t:this.shape_102,p:{x:-141.95,y:-81.175}},{t:this.shape_66,p:{x:-133.275,y:-83.6}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_17,p:{x:91.625,y:-81.175}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_65,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-81.175}},{t:this.shape_22,p:{y:-81.275,x:164}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_25,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_617},{t:this.shape_117,p:{x:-394.425,y:91.875}},{t:this.shape_7,p:{x:-386.125,y:93.975}},{t:this.shape_383,p:{x:-372.275,y:91.55}},{t:this.shape_99,p:{x:-366.925,y:91.875}},{t:this.shape_131,p:{x:-358.175,y:93.875}},{t:this.shape_20,p:{x:-346.175,y:93.975}},{t:this.shape_95,p:{x:-332.375,y:91.875}},{t:this.shape,p:{y:93.975,x:-324.075}},{t:this.shape_135,p:{x:-306.95,y:93.975}},{t:this.shape_605},{t:this.shape_281,p:{x:-277.2,y:93.975}},{t:this.shape_81,p:{x:-266.9,y:93.875}},{t:this.shape_310,p:{x:-260.5,y:92.675}},{t:this.shape_5,p:{y:93.975,x:-244.825}},{t:this.shape_604},{t:this.shape_93,p:{x:-222.2,y:92.675}},{t:this.shape_139,p:{x:-212.175,y:91.55}},{t:this.shape_15,p:{x:-200.225,y:93.975}},{t:this.shape_92,p:{y:91.975,x:-179.25}},{t:this.shape_114,p:{x:-163.525,y:91.55}},{t:this.shape_90,p:{y:93.975,x:-151.55}},{t:this.shape_282,p:{x:-142.875,y:91.55}},{t:this.shape_8,p:{x:-134.275,y:93.975}},{t:this.shape_87,p:{y:91.975,x:-115.85}},{t:this.shape_86,p:{y:91.875,x:-106.175}},{t:this.shape_85,p:{y:92.675,x:-100.25}},{t:this.shape_616},{t:this.shape_267,p:{x:-76.15,y:93.875}},{t:this.shape_1,p:{y:93.975,x:-67.075}},{t:this.shape_305,p:{x:-55.45,y:96.175}},{t:this.shape_82,p:{x:-46.375,y:91.875}},{t:this.shape_3,p:{y:93.975,x:-37.425}},{t:this.shape_106,p:{x:-25.075,y:93.875}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_299,p:{x:-231.425}},{t:this.shape_338,p:{x:-205.05}},{t:this.shape_499,p:{x:-181.05}},{t:this.shape_493,p:{x:-156.25}},{t:this.shape_636},{t:this.shape_567,p:{x:-113.475}},{t:this.shape_635},{t:this.shape_229,p:{x:-66.425}},{t:this.shape_478,p:{x:-46.75}},{t:this.shape_275,p:{x:-26.725}},{t:this.shape_634},{t:this.shape_225,p:{x:32.925}},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_233,p:{x:117.825}},{t:this.shape_227,p:{x:130.625}},{t:this.shape_630},{t:this.shape_336,p:{x:161.3}},{t:this.shape_295,p:{x:185.325}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-417.45}},{t:this.shape_105,p:{y:-83.175,x:-302.7}},{t:this.shape_10,p:{y:-81.175,x:-291.125}},{t:this.shape_161,p:{x:-278.775,y:-81.275}},{t:this.shape_160,p:{y:-78.975}},{t:this.shape_159,p:{y:-83.175,x:-251.9}},{t:this.shape_67,p:{x:-243.275,y:-81.175}},{t:this.shape_66,p:{x:-234.875,y:-83.6}},{t:this.shape_151,p:{x:-226.25,y:-81.175}},{t:this.shape_155,p:{x:-214.175,y:-81.275}},{t:this.shape_154,p:{x:-202.175,y:-83.5}},{t:this.shape_34,p:{y:-83.175,x:75.825}},{t:this.shape_30,p:{x:88.175,y:-83.175}},{t:this.shape_32,p:{y:-81.175,x:97.025}},{t:this.shape_63,p:{x:104.55,y:-83.2}},{t:this.shape_45,p:{x:118.625,y:-83.075}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_5,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_114,p:{x:-403.125,y:91.55}},{t:this.shape_117,p:{x:-394.425,y:91.875}},{t:this.shape_14,p:{x:-386.125,y:93.975}},{t:this.shape_99,p:{x:-372.275,y:91.875}},{t:this.shape_7,p:{x:-363.975,y:93.975}},{t:this.shape_90,p:{y:93.975,x:-346.85}},{t:this.shape_629},{t:this.shape_95,p:{x:-313.425,y:91.875}},{t:this.shape_131,p:{x:-304.675,y:93.875}},{t:this.shape_86,p:{y:91.875,x:-295.925}},{t:this.shape_628},{t:this.shape_281,p:{x:-274.95,y:93.975}},{t:this.shape_627},{t:this.shape_1,p:{y:93.975,x:-243.725}},{t:this.shape,p:{y:93.975,x:-226.975}},{t:this.shape_97,p:{x:-218,y:92.675}},{t:this.shape_102,p:{x:-208.1,y:93.975}},{t:this.shape_310,p:{x:-198.85,y:92.675}},{t:this.shape_82,p:{x:-192.225,y:91.875}},{t:this.shape_3,p:{y:93.975,x:-183.275}},{t:this.shape_106,p:{x:-170.925,y:93.875}},{t:this.shape_302,p:{x:-162.075,y:98.725}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_603},{t:this.shape_608,p:{x:-204.975}},{t:this.shape_290,p:{x:-181.025}},{t:this.shape_640},{t:this.shape_231,p:{x:-142.15}},{t:this.shape_492,p:{x:-124.85}},{t:this.shape_235,p:{x:-100.7}},{t:this.shape_639},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_163},{t:this.shape_20,p:{x:-291.475,y:-81.175}},{t:this.shape_103,p:{y:-78.975}},{t:this.shape_638},{t:this.shape_66,p:{x:-258.825,y:-83.6}},{t:this.shape_637},{t:this.shape_128,p:{x:-233.575,y:-83.275}},{t:this.shape_67,p:{x:-225.275,y:-81.175}},{t:this.shape_97,p:{x:-216.3,y:-82.475}},{t:this.shape_96,p:{y:-81.275,x:-208.05}},{t:this.shape_117,p:{x:-202.225,y:-83.275}},{t:this.shape_94,p:{x:-193.65,y:-81.175}},{t:this.shape_85,p:{y:-82.475,x:-184.85}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_17,p:{x:91.625,y:-81.175}},{t:this.shape_316,p:{x:101.15,y:-82.475}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_15,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_12,p:{x:153.425,y:-81.175}},{t:this.shape_78,p:{x:164,y:-81.275}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_8,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_10,p:{y:-81.175,x:308.575}},{t:this.close},{t:this.instance_3},{t:this.shape_72,p:{x:-386.625,y:233.175}},{t:this.shape_105,p:{y:233.175,x:-372.9}},{t:this.shape_100,p:{y:233.175,x:-360.125}},{t:this.shape_515,p:{x:-341.75,y:235.175}},{t:this.shape_99,p:{x:-333.075,y:233.075}},{t:this.shape_81,p:{x:-326.1,y:235.075}},{t:this.shape_304,p:{x:-316.55}},{t:this.shape_5,p:{y:235.175,x:-304.325}},{t:this.shape_241,p:{x:-293.75,y:235.075}},{t:this.shape_134,p:{x:-287.35,y:233.875}},{t:this.shape_95,p:{x:-275.275,y:233.075}},{t:this.shape_14,p:{x:-266.975,y:235.175}},{t:this.shape_131,p:{x:-249.725,y:235.075}},{t:this.shape_1,p:{y:235.175,x:-237.725}},{t:this.shape_102,p:{x:-226.1,y:235.175}},{t:this.shape_22,p:{y:235.075,x:-215.8}},{t:this.shape_27,p:{y:233.875,x:-203.95}},{t:this.shape_270,p:{x:-193.925,y:232.75}},{t:this.shape_86,p:{y:233.075,x:-185.225}},{t:this.shape_7,p:{x:-176.925,y:235.175}},{t:this.shape,p:{y:235.175,x:-160.125}},{t:this.shape_310,p:{x:-151.15,y:233.875}},{t:this.shape_250,p:{x:-141.25,y:235.175}},{t:this.shape_77,p:{x:-132,y:233.875}},{t:this.shape_82,p:{x:-125.375,y:233.075}},{t:this.shape_3,p:{y:235.175,x:-116.425}},{t:this.shape_106,p:{x:-104.075,y:235.075}},{t:this.shape_302,p:{x:-95.225,y:239.925}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_230,p:{x:-232.675}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_290,p:{x:-164.775}},{t:this.shape_501,p:{x:-148.15}},{t:this.shape_227,p:{x:-136.325}},{t:this.shape_256,p:{x:-118.125}},{t:this.instance},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_464,p:{x:-267.275,y:-159.925}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_63,p:{x:-417.45,y:-83.2}},{t:this.shape_642},{t:this.shape_71,p:{x:-292.225,y:-83.6}},{t:this.shape_88,p:{y:-81.175,x:-283.625}},{t:this.shape_70,p:{x:-272.025,y:-81.175}},{t:this.shape_558,p:{y:-83.175}},{t:this.shape_119,p:{x:-249.275,y:-81.175}},{t:this.shape_66,p:{x:-240.875,y:-83.6}},{t:this.shape_69,p:{x:-232.275,y:-81.175}},{t:this.shape_6,p:{y:-83.175,x:77.475}},{t:this.shape_28,p:{x:91.625,y:-81.175}},{t:this.shape_27,p:{y:-82.475,x:101.15}},{t:this.shape_26,p:{y:-83.175}},{t:this.shape_65,p:{x:130.025,y:-81.175}},{t:this.shape_24,p:{y:-81.175,x:141.6}},{t:this.shape_23,p:{x:153.425,y:-81.175}},{t:this.shape_78,p:{x:164,y:-81.275}},{t:this.shape_522,p:{x:173.075,y:-83.5}},{t:this.shape_25,p:{x:185.475,y:-81.175}},{t:this.shape_154,p:{x:197.075,y:-83.5}},{t:this.shape_4,p:{y:-83.175}},{t:this.shape_17,p:{x:308.575,y:-81.175}},{t:this.close},{t:this.instance_5,p:{x:-410.5,y:41.4}},{t:this.shape_393,p:{x:-362.525,y:40.15}},{t:this.shape_392,p:{x:-348.125,y:43.175}},{t:this.shape_391,p:{x:-331.875,y:39.3}},{t:this.shape_607},{t:this.shape_217,p:{x:-299.575,y:43.175}},{t:this.shape_488,p:{y:43.175}},{t:this.shape_388,p:{x:-254.425,y:43.35}},{t:this.shape_387,p:{x:-239.675,y:41.3}},{t:this.shape_386,p:{x:-229.125,y:40}},{t:this.shape_606},{t:this.shape_384,p:{x:-195.275,y:43.175}},{t:this.shape_109,p:{x:-415.775,y:91.975}},{t:this.shape_139,p:{x:-403.125,y:91.55}},{t:this.shape_143,p:{x:-394.425,y:91.875}},{t:this.shape_98,p:{x:-386.125,y:93.975}},{t:this.shape_282,p:{x:-372.275,y:91.55}},{t:this.shape_133,p:{x:-366.925,y:91.875}},{t:this.shape_161,p:{x:-358.175,y:93.875}},{t:this.shape_20,p:{x:-346.175,y:93.975}},{t:this.shape_128,p:{x:-332.375,y:91.875}},{t:this.shape_67,p:{x:-324.075,y:93.975}},{t:this.shape_135,p:{x:-306.95,y:93.975}},{t:this.shape_605},{t:this.shape_281,p:{x:-277.2,y:93.975}},{t:this.shape_312,p:{x:-266.9,y:93.875}},{t:this.shape_310,p:{x:-260.5,y:92.675}},{t:this.shape_12,p:{x:-244.825,y:93.975}},{t:this.shape_604},{t:this.shape_85,p:{y:92.675,x:-222.2}},{t:this.shape_114,p:{x:-212.175,y:91.55}},{t:this.shape_15,p:{x:-200.225,y:93.975}},{t:this.shape_83,p:{x:-181.925,y:91.975}},{t:this.shape_373,p:{x:-168.2,y:91.975}},{t:this.shape_68,p:{x:-159.9,y:91.975}},{t:this.shape_241,p:{x:-147.15,y:93.875}},{t:this.shape_8,p:{x:-138.075,y:93.975}},{t:this.shape_305,p:{x:-126.45,y:96.175}},{t:this.shape_117,p:{x:-117.375,y:91.875}},{t:this.shape_10,p:{y:93.975,x:-108.425}},{t:this.shape_155,p:{x:-96.075,y:93.875}},{t:this.instance_3},{t:this.shape_137,p:{x:-387.275,y:233.175}},{t:this.shape_641},{t:this.shape_72,p:{x:-359.775,y:233.175}},{t:this.shape_573,p:{x:-341.2}},{t:this.shape_99,p:{x:-332.525,y:233.075}},{t:this.shape_81,p:{x:-325.55,y:235.075}},{t:this.shape_572,p:{x:-316}},{t:this.shape_5,p:{y:235.175,x:-303.775}},{t:this.shape_22,p:{y:235.075,x:-293.2}},{t:this.shape_77,p:{x:-286.8,y:233.875}},{t:this.shape_95,p:{x:-274.725,y:233.075}},{t:this.shape_14,p:{x:-266.425,y:235.175}},{t:this.shape_131,p:{x:-249.175,y:235.075}},{t:this.shape_1,p:{y:235.175,x:-237.175}},{t:this.shape_571,p:{x:-225.55}},{t:this.shape_96,p:{y:235.075,x:-215.25}},{t:this.shape_429,p:{x:-203.4,y:233.875}},{t:this.shape_270,p:{x:-193.375,y:232.75}},{t:this.shape_86,p:{y:233.075,x:-184.675}},{t:this.shape_7,p:{x:-176.375,y:235.175}},{t:this.shape,p:{y:235.175,x:-159.575}},{t:this.shape_97,p:{x:-150.6,y:233.875}},{t:this.shape_269,p:{x:-140.7,y:235.175}},{t:this.shape_136,p:{x:-131.45,y:233.875}},{t:this.shape_82,p:{x:-124.825,y:233.075}},{t:this.shape_3,p:{y:235.175,x:-115.875}},{t:this.shape_106,p:{x:-103.525,y:235.075}},{t:this.shape_302,p:{x:-94.675,y:239.925}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505.4,-305.2,1022,622);


(lib.AirCSNetworkMapLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.AirCSLogo("synched",0);
	this.instance.setTransform(-1.35,-16.25,0.3781,0.3781,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-38.5,142.5,44.5);


// stage content:
(lib.AirCSInteractive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,15,32];
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
		//Shiftcity
		var shc = this.map.shc;
		//Whale City Co.
		var wcc = this.map.wcc;
		//Whale City Res
		var wcr = this.map.wcr;
		//Underwater Go-Karting
		var uwgc = this.map.uwgc;
		//Auckland
		var ack = this.map.ack;
		//Skycity
		var sky = this.map.sky;
		
		cent.on("click",function(evt){
			//Changes the frame of the information window.
			inf.gotoAndStop(0);
			//Plays animation.
			root.gotoAndPlay(2);
		});
		
		wc.on("click",function(evt){
			inf.gotoAndStop(1);
			root.gotoAndPlay(2);
		});
		
		wca.on("click",function(evt){
			inf.gotoAndStop(2);
			root.gotoAndPlay(2);
		});
		
		ld.on("click",function(evt){
			inf.gotoAndStop(3);
			root.gotoAndPlay(2);
		});
		
		rmufo.on("click",function(evt){
			inf.gotoAndStop(4);
			root.gotoAndPlay(2);
		});
		
		lng.on("click",function(evt){
			inf.gotoAndStop(5);
			root.gotoAndPlay(2);
		});
		
		wst.on("click",function(evt){
			inf.gotoAndStop(6);
			root.gotoAndPlay(2);
		});
		
		vic.on("click",function(evt){
			inf.gotoAndStop(7);
			root.gotoAndPlay(2);
		});
		
		blo.on("click",function(evt){
			inf.gotoAndStop(8);
			root.gotoAndPlay(2);
		});
		
		bbt.on("click",function(evt){
			inf.gotoAndStop(9);
			root.gotoAndPlay(2);
		});
		
		ali.on("click",function(evt){
			inf.gotoAndStop(10);
			root.gotoAndPlay(2);
		});
		bco.on("click",function(evt){
			inf.gotoAndStop(11);
			root.gotoAndPlay(2);
		});
		
		sil.on("click",function(evt){
			inf.gotoAndStop(12);
			root.gotoAndPlay(2);
		});
		
		shc.on("click",function(evt){
			inf.gotoAndStop(13);
			root.gotoAndPlay(2);
		});
		
		wcc.on("click",function(evt) {
			inf.gotoAndStop(14);
			root.gotoAndPlay(2);
		});
		
		wcr.on("click",function(evt){
			inf.gotoAndStop(15);
			root.gotoAndPlay(2);
		});
		
		uwgc.on("click",function(evt){
			inf.gotoAndStop(16);
			root.gotoAndPlay(2);
		});
		ack.on("click",function(evt){
			inf.gotoAndStop(17);
			root.gotoAndPlay(2);
		});
		
		sky.on("click",function(evt){
			inf.gotoAndStop(18);
			root.gotoAndPlay(2);
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
			root.gotoAndPlay(17);
		});
	}
	this.frame_32 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(17).call(this.frame_32).wait(1));

	// Information Boxes
	this.inwin = new lib.InformationWindow();
	this.inwin.name = "inwin";
	this.inwin.setTransform(644.95,356.2,0.6546,0.6546,0,0,0,0.6,0.8);
	this.inwin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.inwin).to({regX:0,regY:0,scaleX:1,scaleY:1,x:644.65,y:355.85,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regX:0.1,scaleX:0.6546,scaleY:0.6545,y:355.8,alpha:0},16,cjs.Ease.get(-1)).wait(1));

	// Hotbar
	this.legend = new lib.LegendClip();
	this.legend.name = "legend";
	this.legend.setTransform(1432.5,565.9,1.4869,1.4869);

	this.instance = new lib.AirCSNetworkMapLogo();
	this.instance.setTransform(98,59.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Accent("synched",0);
	this.instance_1.setTransform(641.55,55.8,1.0027,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.legend}]}).wait(33));

	// Netmap
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHA1IAAhZIgbAKIAAgMIAngPIABAAIAABqg");
	this.shape.setTransform(136.1,708.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA2IAAgJIAkgqQAIgIADgGQADgGAAgGQAAgIgFgGQgFgFgHAAQgKAAgGAGQgFAFAAALIgOAAQAAgPAKgJQAJgJAQAAQAOAAAIAHQAJAJAAANQAAAPgUAVIgcAfIA1AAIAAALg");
	this.shape_1.setTransform(128.675,708.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYArQgJgLAAgWIAAgRQABgYAHgLQAIgMARAAQARAAAJALQAHALABAXIAAARQgBAYgHALQgJAMgRAAQgQAAgIgMgAgOgjQgFAIAAAQIAAAVQAAARAFAIQAFAJAJAAQAKAAAFgIQAFgIAAgRIAAgVQAAgRgEgIQgGgIgKAAQgKAAgEAIg");
	this.shape_2.setTransform(120.2,708.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA2IAAgJIAkgqQAIgIADgGQADgGAAgGQAAgIgFgGQgFgFgHAAQgKAAgGAGQgFAFAAALIgOAAQAAgPAKgJQAJgJAQAAQAOAAAIAHQAJAJAAANQAAAPgUAVIgcAfIA1AAIAAALg");
	this.shape_3.setTransform(111.875,708.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAOQAHgKAAgJIAAgNIAMAAIAAALQAAAHgDAHQgEAHgEAEg");
	this.shape_4.setTransform(102.175,714.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKA1IAAgZIgvAAIAAgHIAuhJIAPAAIAABFIAOAAIAAALIgOAAIAAAZgAAJgfIgfAwIAgAAIAAgzg");
	this.shape_5.setTransform(96.8,708.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAGQgBgCgBgEQABgCABgDQACgCAEAAQAEAAADACQACADAAACQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_6.setTransform(86.8,713.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIANAAIAAAJQAGgKAMAAIAGABIAAAMIgHAAQgMAAgFALIAAA3g");
	this.shape_7.setTransform(82.75,710.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA3IAAhsIAMAAIABAJQAIgKAOAAQAOAAAIAKQAIALAAATIAAABQAAASgIALQgIAKgOABQgOgBgIgIIAAAlgAgTghIAAAlQAGAMANAAQAIgBAGgHQAGgIAAgPQAAgNgGgHQgGgIgIAAQgNAAgGAKg");
	this.shape_8.setTransform(75.775,711.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhA1IgLgcIgsAAIgKAcIgOAAIAphpIALAAIApBpgAgRAOIAjAAIgSgxg");
	this.shape_9.setTransform(66.55,708.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAtQgIgKAAgTIAAgBQAAgRAIgLQAJgLANAAQAOAAAIAJIAAgpIANAAIAABvIgMAAIgBgIQgIAKgOAAQgNAAgJgMgAgNgFQgGAGAAAQQAAANAGAIQAFAHAJAAQANAAAGgLIAAgjQgGgMgNAAQgJAAgFAIg");
	this.shape_10.setTransform(53.55,708.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAeQgKgKAAgSIAAgCQABgLAEgKQAEgIAJgGQAHgFAJAAQAPAAAJAKQAJAKgBATIAAAFIg0AAQAAAMAGAGQAHAIAJAAQAIAAAEgDQAGgDADgFIAIAHQgJAPgVAAQgOAAgLgLgAgMgXQgGAGAAALIAmAAIAAgBQAAgLgGgGQgEgFgJAAQgHAAgGAGg");
	this.shape_11.setTransform(45.65,710.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAtQgEgGAAgKIAAgxIgPAAIAAgKIAPAAIAAgTIAMAAIAAATIAPAAIAAAKIgPAAIAAAxQAAAFACACQACACAFABIAHgBIAAAKIgLACQgJAAgEgFg");
	this.shape_12.setTransform(38.975,709.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAjQgIgIAAgJQAAgNAKgFQAJgIAQABIANAAIAAgHQAAgHgEgEQgEgFgIAAQgHAAgFAFQgFADAAAFIgNAAQAAgGAEgFQAEgGAIgDQAHgDAHAAQAOAAAIAHQAIAGAAANIAAAjQAAALADAGIAAABIgPAAIgBgIQgKAKgMAAQgMAAgHgGgAgSAPQAAAHAEAEQAEADAHAAQAFAAAGgDQAGgDACgFIAAgRIgKAAQgYAAAAAOg");
	this.shape_13.setTransform(32.675,710.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAtQgJgKABgTIAAgBQgBgRAJgLQAJgLANAAQANAAAJAJIAAgpIANAAIAABvIgMAAIgBgIQgIAKgOAAQgNAAgJgMgAgNgFQgGAGAAAQQAAANAGAIQAFAHAJAAQANAAAGgLIAAgjQgGgMgNAAQgJAAgFAIg");
	this.shape_14.setTransform(24.2,708.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggA3IAAhsIAMAAIABAJQAIgKAOAAQAOAAAIAKQAIALAAATIAAABQAAASgIALQgIAKgOABQgOgBgIgIIAAAlgAgTghIAAAlQAGAMANAAQAIgBAGgHQAGgIAAgPQAAgNgGgHQgGgIgIAAQgNAAgGAKg");
	this.shape_15.setTransform(16.125,711.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA2QgRAAgKgKQgKgJAAgRIAAhHIANAAIAABHQAAALAGAHQAHAGALABQALgBAHgGQAGgHABgLIAAhHIANAAIAABHQABAPgKAKQgKAJgPACg");
	this.shape_16.setTransform(6.9,709);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYArQgIgLgBgWIAAgRQAAgYAJgLQAHgMARAAQASAAAIALQAHALAAAXIAAARQAAAYgHALQgIAMgSAAQgQAAgIgMgAgOgjQgFAIAAAQIAAAVQAAARAFAIQAFAJAJAAQAKAAAFgIQAFgIAAgRIAAgVQAAgRgFgIQgEgIgLAAQgKAAgEAIg");
	this.shape_17.setTransform(132.05,688.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgCADgDQABgCAEAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgEAAgBgCg");
	this.shape_18.setTransform(125.8,693.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHA2IAAhaIgbAKIAAgMIAngPIACAAIAABrg");
	this.shape_19.setTransform(118.8,688.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgCACgDQACgCAEAAQAEAAADACQABADAAACQAAAEgBACQgDACgEAAQgEAAgCgCg");
	this.shape_20.setTransform(113.45,693.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHA2IAAhaIgaAKIAAgMIAlgPIADAAIAABrg");
	this.shape_21.setTransform(106.45,688.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAGQgBgCAAgEQAAgCABgDQADgCADAAQAEAAACACQADADAAACQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_22.setTransform(97.4,693.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAoIgdhPIAOAAIATA8IAUg8IAOAAIgdBPg");
	this.shape_23.setTransform(91.875,690.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggA4IAAhtIAMAAIABAJQAIgLAOAAQAOAAAIALQAIALAAATIAAABQAAARgIALQgIAMgOAAQgOgBgIgIIAAAmgAgTggIAAAkQAGALANAAQAIAAAGgIQAGgHAAgOQAAgOgGgHQgGgIgIAAQgNAAgGALg");
	this.shape_24.setTransform(80.525,691.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAiQgIgGAAgLQAAgMAKgGQAJgGAQAAIANAAIAAgHQAAgHgEgEQgEgEgIgBQgHAAgFAFQgFADAAAFIgNAAQAAgFAEgGQAEgGAIgDQAHgDAHAAQAOAAAIAHQAIAGAAANIAAAjQAAALADAHIAAABIgPAAIgBgJQgKAKgMAAQgMAAgHgHgAgSAPQAAAHAEADQAEAEAHAAQAFAAAGgDQAGgDACgGIAAgQIgKAAQgYAAAAAOg");
	this.shape_25.setTransform(72.075,690.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnA1IAAgpIACgsIgjBVIgKAAIgjhVIABAsIAAApIgOAAIAAhpIASAAIAiBWIAjhWIASAAIAABpg");
	this.shape_26.setTransform(61.45,688.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAuQgIgIgCgNIANAAQABAIAFAFQAGAFAIAAQAJAAAGgHQAEgGAAgMQABgKgGgHQgGgFgIAAQgJAAgGAEIgDACIgLgCIAFg1IA2AAIAAAMIgqAAIgDAeQAHgFAJAAQAPAAAJAJQAIAJABAQQgBARgIAKQgKAJgPAAQgNAAgKgIg");
	this.shape_27.setTransform(47.3,689);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAOAAIAABeIAxAAIAAALg");
	this.shape_28.setTransform(39.225,688.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAnA1IAAgpIABgsIgjBVIgKAAIgjhVIACAsIAAApIgOAAIAAhpIASAAIAiBWIAjhWIASAAIAABpg");
	this.shape_29.setTransform(28.2,688.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA1IAAheIgiAAIAAgLIBRAAIAAALIgiAAIAABeg");
	this.shape_30.setTransform(17.175,688.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAaA1IAAgxIg0AAIAAAxIgOAAIAAhpIAOAAIAAAtIA0AAIAAgtIAPAAIAABpg");
	this.shape_31.setTransform(7.35,688.925);

	this.map = new lib.NetworkMap();
	this.map.name = "map";
	this.map.setTransform(642,435.85,1,1,0,0,0,2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.map},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(33));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,997,360);
// library properties:
lib.properties = {
	id: '9FCEF03B86AE7447B2D3C7F38CB19AAF',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9FCEF03B86AE7447B2D3C7F38CB19AAF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;