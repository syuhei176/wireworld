import CellAutomaton from './cellautomaton'

const WireWorld = {
	EMPTY : 0,
	CONDUCTOR : 1,
	HEAD : 2,
	TAIL : 3
};

export const getWireWorld = (listeners) => {
	return new CellAutomaton(function() {
		return WireWorld.EMPTY;
	}, function(cells) {
		if(cells[4] == WireWorld.EMPTY) {
			return WireWorld.EMPTY;
		}else if(cells[4] == WireWorld.HEAD) {
			return WireWorld.TAIL;
		}else if(cells[4] == WireWorld.TAIL) {
			return WireWorld.CONDUCTOR;
		}else if(cells[4] == WireWorld.CONDUCTOR) {
			var m = 0;
			for(var i=0;i < cells.length;i++) {
				if(cells[i] == WireWorld.HEAD) {
					m++;
				}
			}
			if(m == 1 || m == 2) {
				return WireWorld.HEAD;
			}
			return WireWorld.EMPTY;
		}
	}, listeners);
}
