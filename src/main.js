import View from './view'
import {getWireWorld} from './wireworld'
import {diode} from './sample'

let map = localStorage.getItem('map')
if(!map) {
	localStorage.setItem('map', JSON.stringify(diode))
}

var view = new View(30, 30);
var wireworld = getWireWorld(function(x, y, state) {
	if(state == 0) {
		view.change(x, y, "#232323");
	}else if(state == 1) {
		view.change(x, y, "#ffff00");
	}else if(state == 2) {
		view.change(x, y, "#0000ff");
	}else if(state == 3) {
		view.change(x, y, "#ff0000");
	}
});
view.init(wireworld);
wireworld.refresh();
setInterval(function(){
	wireworld.step();
}, 500);