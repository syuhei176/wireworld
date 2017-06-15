export default class View {

	constructor(w, h) {
		this.w = w;
		this.h = h;
	}

	init(map) {
		this.map = map
		const snap = new Snap("#svg");
		let group = snap.g();
		this.gui_group = snap.g();
		let clicker = snap.rect(0, 0, 3000, 3000);
		this.cursor = snap.rect(0, 0, 30, 30);
		this.cursor.attr({
			stroke: '#fff',
			strokeWidth: 1,
			fill: 'none'
		})
		clicker.attr({
			'fill-opacity': 0
		});
		clicker.mousedown((e, x, y) => {
			this.changeState(x, y + window.scrollY);
		});
		clicker.mousemove((e, x, y) => {
			this.showCursor(x, y + window.scrollY)
		});
		/*
		clicker.drag(function(dx, dy, x, y) {
			addState(x, y);
		}, function(x, y) {
			addState(x, y);
		}, function(e) {
		});
		*/
		this.gui_group.append(clicker);
		group.attr({
		    fill: "#555",
		    //stroke: "#000",
		    //strokeWidth: 2
		});
		this.elems = [];
		for(var i=0;i < this.w;i++) {
			this.elems[i] = [];
			for(var j=0;j < this.h;j++) {
				this.elems[i][j] = {};
				this.elems[i][j].rect = snap.rect(i*30, j*30, 30, 30);
				//this.elems[i][j].text = snap.text(i*30, j*30+20, "");
				group.append(this.elems[i][j].rect);
				//group.append(this.elems[i][j].text);
			}
		}
	}

	changeState(x, y) {
		const cx = ((x/30)>>0);
		const cy = ((y/30)>>0);
		var s = this.map.get(cx, cy);
		s++;
		if(s >= 4) {
			s = 0;
		}
		this.map.set(cx, cy, s);
	}

	showCursor(x, y) {
		const cx = ((x/30)>>0);
		const cy = ((y/30)>>0);
		this.cursor.attr({
			x: cx * 30,
			y: cy * 30
		})

	}

	change(x, y, color) {
		this.elems[x][y].rect.attr({
			fill : color
		});
	}

	changeText(x, y, text) {
		if(!this.elems[x][y].text) {
			return;
		}
		this.elems[x][y].text.attr({
			text : text
		});
	}

}
