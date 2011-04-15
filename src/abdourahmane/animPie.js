var animPie = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;

	var pieSizePercent = 55;
	var sliceBorderWidth = 1;
	var sliceBorderStyle = "#fff";
	var currentEcartSlice = -1;
	var currentEcartDistance = 0;
	var maxEcartDistance = 25;
	var ecartLabelFont = "bold 16px 'Trebuchet MS', Verdana, sans-serif";
	var ecartBorderWidth = 2;
	var ecartBorderStyle = "#333";
	var ecartShadowOffsetX = 5;
	var ecartShadowOffsetY = 5;
	var ecartShadowBlur = 5;
	var animationId = 0;
	var canvasWidth;
	var canvasHeight;
	var centreX;
	var centreY;
	var pieRadius;
	var pieStartAngle = -Math.PI / 2;
	var totalValue = 0;
	var value = 0;
	var canvas;
	if (typeof animPie.initialized == "undefined") {
		animPie.initialized = true;

		animPie.prototype.drawDiagram = function() {
			canvas = document.getElementById('test1');
			canvasWidth = this.canvas.width;
			canvasHeight = this.canvas.height;
			centreX = canvasWidth / 2;
			centreY = canvasHeight / 2;
			pieRadius = Math.min(canvasWidth, canvasHeight) / 2
					* (pieSizePercent / 100);

			function pushIn() {
				currentEcartSlice = -1;
				currentEcartDistance = 0;
				clearInterval(animationId);
			}
			var values = new Array();
			var parts = new Array();
			var total = this.data.getTotal();
			// alert(total);
			var currentPos = 0;
			
			var currentRow = -1;
		    var currentCell = 0;
			if (this.dir == 'row') { // Pourcentage de chaque ligne
				$.each(this.data.getRowLabels(), $.proxy(function(i, rowLabel) {
					var temp = 2 * Math.PI * this.data.getRowTotal(rowLabel)
							/ total;
					
					 
					totalValue += temp;
					temp = temp.toFixed(2);
					parts.push({value: temp, label: rowLabel});
					
					
					
					
				}, this));
			} else {
				$.each(this.data.getColumnLabels(), $.proxy(function(i,
						columnLabel) {
					var temp = 2 * Math.PI * this.data.getRowTotal(columnLabel)
							/ total;
					
				        //parts.push(columLabel);
				        //parts.push(temp);
					
					totalValue += temp;
					temp = temp.toFixed(2);
					parts.push({value: temp, label: columnLabel});
						
				}, this));
			}
			
			
			for ( var slice in parts) {
				parts[slice]['startArc'] = 2 * Math.PI * currentPos;
				parts[slice]['endArc'] = 2 * Math.PI
						* (currentPos + (parts[slice]['value'] / totalValue));
				currentPos += parts[slice]['value'] / totalValue;
				alert(currentPos);
			}
			
			/*
			$.each(parts, function(i, part) {
				parts[i]['startArc'] = 2 * Math.PI * currentPos;
				parts[i]['endArc'] = 2 * Math.PI
						* (currentPos + (parts[i]['value'] / totalValue));
				currentPos += parts[i]['value'] / totalValue;
			});
				*/
				
			function drawPie() {
				var context = canvas.getContext('2d');
				for ( var slice in parts) {
					if (slice != currentEcartSlice)
						drawSlice(context, slice);
				}

				if (currentEcartSlice != -1)
					drawSlice(context, currentEcartSlice);

			}
			function drawSlice(context, slice) {
				var colors = this.getColors();
				var startArc = pieStartAngle + parts[slice]['startArc'];
				var endArc = pieStartAngle + parts[slice]['endArc'];

				if (slice == currentEcartSlice) {
					var midAngle = (startArc + endArc) / 2;
					var actualEcartDistance = currentEcartDistance
							* easeOut(currentEcartDistance
									/ maxEcartDistance, .8);
					startX = centreX + Math.cos(midAngle)
							* actualEcartDistance;
					startY = centreY + Math.sin(midAngle)
							* actualEcartDistance;
					context.fillStyle = 'rgb(' + colours[slice].join(',') + ')';
					context.textAlign = "center";
					context.font = ecartLabelFont;
					context.shadowOffsetX = ecartShadowOffsetX;
					context.shadowOffsetY = ecartShadowOffsetY;
					context.shadowBlur = ecartShadowBlur;

				} else {
					startX = centreX;
					startY = centreY;
				}

				// Set up the gradient fill for the slice
				var sliceGradient = context.createLinearGradient(0, 0,
						canvasWidth * .75, canvasHeight * .75);
				sliceGradient.addColorStop(0, "#ddd");
				sliceGradient.addColorStop(1, 'rgb(' + colors[slice].join(',')
						+ ')');

				// Draw the slice
				context.beginPath();
				context.moveTo(startX, startY);
				context.arc(startX, startY, pieRadius, startArc, endArc,
						false);
				context.lineTo(startX, startY);
				context.closePath();
				context.fillStyle = sliceGradient;
				context.shadowColor = (slice == currentEcartSlice) ? "rgba( 0, 0, 0, .5 )"
						: "rgba( 0, 0, 0, 0 )";
				context.fill();
				context.shadowColor = "rgba( 0, 0, 0, 0 )";

				if (slice == currentEcartSlice) {
					context.lineWidth = ecartBorderWidth;
					context.strokeStyle = ecartBorderStyle;
				} else {
					context.lineWidth = sliceBorderWidth;
					context.strokeStyle = sliceBorderStyle;
				}

				context.stroke();
			}

			function easeOut(ratio, power) {
				return (Math.pow(1 - ratio, power) + 1);
			}

			function handlePieClick(clickEvent) {

				var mouseX = clickEvent.pageX - this.offsetLeft;
				var mouseY = clickEvent.pageY - this.offsetTop;

				var xFromCentre = mouseX - centreX;
				var yFromCentre = mouseY - centreY;
				var distanceFromCentre = Math.sqrt(Math.pow(Math
						.abs(xFromCentre), 2)
						+ Math.pow(Math.abs(yFromCentre), 2));

				if (distanceFromCentre <= pieRadius) {
					var clickAngle = Math.atan2(yFromCentre, xFromCentre)
							- pieStartAngle;
					if (clickAngle < 0)
						clickAngle = 2 * Math.PI + clickAngle;

					for ( var slice in parts) {
						if (clickAngle >= parts[slice]['startArc']
								&& clickAngle <= parts[slice]['endArc']) {
							toggleSlice(slice);
							return;
						}
					}
				}
				pushIn();
			}
			function toggleSlice(slice) {
				if (slice == currentEcartSlice) {
					pushIn();
				} else {
					startEcart(slice);

				}
			}

			function startEcart(slice) {
				if (currentEcartSlice == slice)
					return;
				currentEcartSlice = slice;
				currentEcartDistance = 0;
				clearInterval(0);
				animationId = setInterval(function() {
					animateEcart(slice);
				}, ecartFrameInterval);

			}

			function animateEcart(slice) {
				currentEcartDistance += ecartFrameStep;
				if (currentEcartDistance >= maxEcartDistance) {
					clearInterval(0);
					return;
				}
			}
			$('#test1').click(handlePieClick);

		};

	}
};

// Héritage: chainage des prototypes.
animPie.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver
										// mieux
animPie.prototype.constructor = animPie;
