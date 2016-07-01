

function updateLocationDetails(data){
	var now = new Date();

	$("#location_query").html(data.query);
	$("#location_country").html(data.country);
	$("#location_regionName").html(data.regionName);
	$("#location_city").html(data.city);
	$("#location_timezone").html(data.timezone);
	$("#location_lat").html(data.lat);
	$("#location_lon").html(data.lon);

	$("table").removeClass("empty");
	$(".help").click(function(e){
		var fieldName = $(e.currentTarget).closest('tr').find('.field_name').text();
		alert("This is your " + fieldName + " from ISP " + data.isp + " at " + now);
	});
}

function getMyLocation() {
	$.ajax({
		type : 'GET',
		url : 'http://ip-api.com/json/',
		success : function(response){
			updateLocationDetails(response);
			current=true;
			showPosition(response.lat,response.lon,null);
		}
	});
}

function resetLocationDetails() {
	updateLocationDetails({
		query: "0.0.0.0",
		country: "",
		regionName: "",
		city: "",
		timezone: "",
		lat: "",
		lon: ""
	});
	$("table").addClass("empty");
	if(current){
	gmarkers[position].setMap(null);
	}
}

function initializePage(){
	window.indexTemplate = $('#index').html();
	window.locationTemplate = $('#locationInfo').html();

	window.indexTemplate = Handlebars.compile(window.indexTemplate);
	window.locationTemplate = Handlebars.compile(window.locationTemplate);

	$("#mainContent").html(window.indexTemplate());
	$("#geoLocationContainer").html(window.locationTemplate({
		id: 0,
		query: "0.0.0.0",
		country: "",
		regionName: "",
		city: "",
		timezone: "",
		lat: "",
		lon: ""
	}));
	Marker=false;
	gmarkers=[];
}

function showPosition(lat,lon,url){
		latlon = new google.maps.LatLng(lat,lon);
		document.getElementById("mapholder").style.display="block";

		var myOptions = {
		center:latlon,zoom:10,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		};

		if(!Marker){
			googleMap=new google.maps.Map(document.getElementById("mapholder"), myOptions);
		}else{
			googleMap.setZoom(2);
		}
		if(current){
		var marker = new google.maps.Marker({position:latlon,map:googleMap,optimized: false,title:"You are here!"});
		position=gmarkers.length;
		gmarkers.push(marker);
		}
		if(!current){
		var marker = new google.maps.Marker({position:latlon,map:googleMap,optimized: false,title:url});
		gmarkers.push(marker);	
		}
		Marker=true;
	}

$(document).ready(function(){
	initializePage();
});
