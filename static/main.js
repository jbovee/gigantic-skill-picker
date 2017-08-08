$(function() {
	loadUI();
});

//	On 2k monitor, ~42.5px = 1cm

function loadUI() {
	bar();
	skillShadow();
	healthMana();
	skills();
	skillUpgrades();
}

function bar() {
	var barH = 149;

	var svg = d3.select("#background-bar")
		.append("svg")
		.attr("width", "100%")
		.attr("height", barH)
		.attr("display", "block")

	svg.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", "100%")
		.attr("height", barH)
		.attr("fill", "#000")
		.attr("fill-opacity", .5);
}

function skillShadow() {
	var svg = d3.select("#skill-shadow")
		.append("svg")
		.attr("width", 593.57)
		.attr("height", 149)
		.attr("display", "block");

	svg.append("polygon")
		.attr("points", function() {
			return [[0,0].join(','),
					[593.57,0].join(','),
					[563.785,149].join(','),
					[29.785,149]];
		})
		.attr("fill", "#000")
		.attr("fill-opacity", 0.5);
}

function healthMana() {
	var svg = d3.select("#health-mana")
		.append("svg")
		.attr("height", 68.1)
		.attr("width", 893.5)
		.attr("display", "block");

	svg.append("polygon")
		.attr("points", function() {
			return [[0,21.3].join(','),
					[409.5,21.3].join(','),
					[406,0].join(','),
					[486.8,0].join(','),
					[484,21.3].join(','),
					[893.5,21.3].join(','),
					[885,68.1].join(','),
					[8.5,68.1].join(',')];
		})
		.attr("fill", "#000")
		.attr("fill-opacity", 0.7);
}

function skills() {
	var svg = d3.select("#skills")
		.append("svg")
		.attr("width", 965.9)
		.attr("height", 112.5)
		.attr("display", "block");

	var startH = 40.42,
		skillH = 72.3,
		angleW = 12.765;

	var skillColor = "#fff",
		skillOpacity = 1;

	//	Skill points
	svg.append("polygon")
		.attr("points", function() {
			return [[0,startH].join(','),
					[102.1,startH].join(','),
					[102.1+angleW,skillH+startH].join(','),
					[angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	LMB
	svg.append("polygon")
		.attr("points", function() {
			return [[140.4,startH].join(','),
					[229.77,startH].join(','),
					[229.77+angleW,skillH+startH].join(','),
					[140.4+angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	RMB
	svg.append("polygon")
		.attr("points", function() {
			return [[242.5,startH].join(','),
					[331.89,startH].join(','),
					[331.89+angleW,skillH+startH].join(','),
					[242.5+angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	Focus
	svg.append("polygon")
		.attr("points", function() {
			return [[348.9,0].join(','),
					[495.7,0].join(','),
					[474.425,startH+skillH].join(','),
					[370.175,startH+skillH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	Q
	svg.append("polygon")
		.attr("points", function() {
			return [[513.58,startH].join(','),
					[602.93,startH].join(','),
					[602.93-angleW,skillH+startH].join(','),
					[513.58-angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	E
	svg.append("polygon")
		.attr("points", function() {
			return [[615.7,startH].join(','),
					[705.05,startH].join(','),
					[705.05-angleW,skillH+startH].join(','),
					[615.7-angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);

	//	LVL
	svg.append("polygon")
		.attr("points", function() {
			return [[743.35,startH].join(','),
					[845.47,startH].join(','),
					[845.47-angleW,skillH+startH].join(','),
					[743.35-angleW,skillH+startH].join(',')];
		})
		.attr("fill", skillColor)
		.attr("fill-opacity", skillOpacity);
}

function skillUpgrades() {
	var h = 108.5,
		hh = h / 2;
		w = 690.9;

	/*
	var popup = d3.select("#ui svg").append("g")
		.attr("width", h + w)
		.attr("height", h)
		.attr("opacity", 0.8)
		.on("mouseover", function() {
			d3.select(this).transition()
				.duration(100)
				.attr("opacity", 1);
			d3.select(this).select(".rhomb").transition()
				.duration(100)
				.attr("fill", "#01bfa6");
			d3.select(this).select(".arrow").transition()
				.duration(100)
				.attr("fill", "#fff");
		})
		.on("mouseout", function() {
			d3.select(this).transition()
				.duration(100)
				.attr("opacity", 0.8);
			d3.select(this).select(".rhomb").transition()
				.duration(100)
				.attr("fill", "#010d0b")
			d3.select(this).select(".arrow").transition()
				.duration(100)
				.attr("fill", "#01bfa6");
		});
	*/

	var rightUpgradeBody = [[hh,0].join(','),
						[(w + hh),0].join(','),
						[(w + h),hh].join(','),
						[(w + hh),h].join(','),
						[hh,h].join(','),
						[h,hh].join(',')],
		rightUpgradeRhomb = [[hh,0].join(','),
						[h,hh].join(','),
						[hh,h].join(','),
						[0,hh].join(',')],
		rightUpgradeArrow = [[hh,hh-34].join(','),
						[hh+35,hh].join(','),
						[hh,hh+34].join(','),
						[hh,hh+15].join(','),
						[hh-25,hh+15].join(','),
						[hh-25,hh-15].join(','),
						[hh,hh-15].join(',')];

	var leftUpgradeBody = [[hh,0].join(','),
						[(w + hh),0].join(','),
						[w,hh].join(','),
						[(w + hh),h].join(','),
						[hh,h].join(','),
						[0,hh].join(',')],
		leftUpgradeRhomb = [[(w + hh),0].join(','),
						[(w + h),hh].join(','),
						[(w + hh),h].join(','),
						[w,hh].join(',')],
		leftUpgradeArrow = [[w+hh,hh-34].join(','),
						[w+hh-35,hh].join(','),
						[w+hh,hh+34].join(','),
						[w+hh,hh+15].join(','),
						[w+hh+25,hh+15].join(','),
						[w+hh+25,hh-15].join(','),
						[w+hh,hh-15].join(',')];

	function upgrade(selection,pointLeft) {
		console.log(pointLeft);
		//	Main popup body
		selection.append("polygon")
			.attr("points", function() {
				var body = (pointLeft) ? leftUpgradeBody : rightUpgradeBody;
				return body;
			})
			.attr("fill", "#010d0b")
			.attr("fill-opacity", 0.9)
			.attr("class", "text-area");

		//	Square around arrow
		selection.append("polygon")
			.attr("points", function() {
				var rhomb = (pointLeft) ? leftUpgradeRhomb : rightUpgradeRhomb;
				return rhomb;
			})
			.attr("fill", "#010d0b")
			.attr("class", "rhomb");

		//	Arrow
		selection.append("polygon")
			.attr("points", function() {
				var arrow = (pointLeft) ? leftUpgradeArrow : rightUpgradeArrow;
				return arrow;
			})
			.attr("fill", "#01bfa6")
			.attr("class", "arrow");
	}

	var upgradePositions = {
		"l" : {
			"x" : 75.927,
			"y" : 146.795,
			"pointLeft" : true
		},
		"r" : {
			"x" : 967.87,
			"y" : 146.795,
			"pointLeft" : false
		},
		"ll" : {
			"x" : 0,
			"y" : 0,
			"pointLeft" : true
		},
		"lr" : {
			"x" : 891.943,
			"y" : 0,
			"pointLeft" : false
		},
		"rl" : {
			"x" : 79.857,
			"y" : 0,
			"pointLeft" : true
		},
		"rr" : {
			"x" : 971.8,
			"y" : 0,
			"pointLeft" : false
		}
	}

	var svg = d3.select("#skill-upgrades")
		.append("svg")
		.attr("width", "100%")
		.attr("height", "100%")
		.attr("display", "block");

	d3.json("/heroes?name=pakko", function(error, data) {
		svg.selectAll("g.upgrade-tree")
			.data(data["skill-upgrades"])
			.enter().append("g")
			.attr("class", function(d) {
				return d[0].id + " upgrade-tree";
			})
			.selectAll("g.upgrade")
			.data(function(d) {return d;})
			.enter().append("g")
			.attr("width", h + w)
			.attr("height", h)
			.attr("transform", function(d) {
				return "translate(" + upgradePositions[d.position].x + " " + upgradePositions[d.position].y + ")";
			})
			.each(function(d) {
				console.log(d.position);
				upgrade(d3.select(this), upgradePositions[d.position].pointLeft);
			});
	});
}