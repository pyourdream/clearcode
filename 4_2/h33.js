var data;
var turn = 0;

function makeGameBoard() {
	document.write("<table cellspacing='0' bgcolor = 'green' bordercolor='black' border='1'  >");
	for (var i = 0; i < 8; i++) {
		document.write('<tr>');
		for (var j = 0; j < 8; j++) {
			document.write('<th width = "40" height = "40"><span id = "'+i+j+'" onclick = "operateCell('+i+','+j+')">1</span></th>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function boardStatus() {
	data = new Array(8);

	for (var i = 0; i < 8; i++) {
		data[i] = new Array(8);
	}
}

function initialize() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			data[i][j] = -1;
			document.getElementById(i + '' + j).style.color = 'green';
		}
	}

	data[3][3] = 0;
	data[3][4] = 1;
	data[4][3] = 1;
	data[4][4] = 0;

	document.getElementById('33').style.color = 'white';
	document.getElementById('34').style.color = 'black';
	document.getElementById('43').style.color = 'black';
	document.getElementById('44').style.color = 'white';

	document.getElementById('turn').innerHTML = 'white turn';
	
}


function operateCell(x,y) {
	var flag = 0;
	for (var i = -1; i <= 1; i++) {
		for (var j = -1; j <=1; j++) {
			if (checkCell(x,y,i,j)) {
				changeColor(x,y,i,j);
				flag = 1;
			}
		}
	}

	if (flag == 1) {
		checkEnd();
	}
}


function checkCell(x,y,dx,dy) {
	if (dx == 0 && dy == 0) {
		return false;
	}

	var found = 0;

	while (1) {
		x += dx;
		y += dy;

		if (x < 0 || 7 < x || y < 0 || 7 < y) {
			return false;
		}

		if (data[x][y] == -1) {
			return false;
		}

		if (data[x][y] == (turn ? 0: 1)) {
			found = 1;
			continue;
		}

		if (found == 1) {
			return true;
		}

		return false;
	}
}

function changeColor(x,y,X,Y) {
	var color;
	if (turn == 0) {
		color = 'white';
	} else {
		color = 'black';
	}

	do {
		data[x][y] = turn;
		document.getElementById(x + '' + y).style.color = color;
		x += X;
		y += Y;
	} while(data[x][y] != turn);

}


function checkEnd() {
	turn ? turn = 0: turn = 1;
	if (checkEmptyCell()) {
		changeTurn();
		return;
	}

	turn ? turn = 0: turn = 1;
	if (checkEmptyCell()) {
		changeTurn();
		return;
	} else {
		document.getElementById('test').innerHTML = 'fin';
		judge();
	}

}

function checkEmptyCell() {
	for (var i = 0; i < 8; i++){
		for (var j = 0; j < 8; j++){
			if (data[i][j] == -1) {
				for (var k = -1; k <= 1; k++) {
					for (var l = -1; l <= 1; l++) {
						if (checkCell(i, j, k, l)) {
							return true;
						}
					}
				}
			}
		}
	}

	return false;
}


function changeTurn() {
	if (turn == 0) {
		document.getElementById('turn').innerHTML = 'white turn';
	} else {
		document.getElementById('turn').innerHTML = 'black turn';
	}
}

function judge() {
	var white = 0;
	var black = 0;

	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (data[i][j] == 0) {
				white++;
			} else if (data[i][j] == 1) {
				black++;
			}
		}
	}

	if (white > black) {
		document.getElementById('turn').innerHTML = 'white win' + white;
	} else if (white == balck) {
		document.getElementById('turn').innerHTML = 'draw';
	} else {
		document.getElementById('turn').innerHTML = 'black win' + black;
	}

}