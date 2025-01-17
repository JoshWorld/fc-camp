/*! app.js © yamoo9.net, 2016 */
'use strict';

// 모듈
// require('modernizr');
require('jquery');
require('angular');

// ------------------------------
// jQuery
// ------------------------------
jQuery.noConflict(true)(function($) {

	var $window               = $(window),
		$scrolled_fixed       = $('.scrolled-fixed'),
		scrolled_fixed_offset = $scrolled_fixed.offset(),
		scrolled_target_pos   = scrolled_fixed_offset.top - 30,
		scrolled_fixed_config = {
			'position': 'fixed',
			'top'     :  30,
			'left'    :  scrolled_fixed_offset.left,
			'width'   :  $scrolled_fixed.outerWidth(),
			'z-index' : 10000
		};

	$window.on('scroll', function() {
		if ( $window.scrollTop() > scrolled_target_pos ) {
			activeScrollFixed();
		} else {
			deactiveScrollFixed();
		}
	});

	function activeScrollFixed() {
		$scrolled_fixed
			.addClass('active-fixed')
			.removeClass('deactive-fixed')
			.css( scrolled_fixed_config );
	}

	function deactiveScrollFixed() {
		$scrolled_fixed
			.removeClass('active-fixed')
			.addClass('deactive-fixed')
			.removeAttr('style');
	}

});


// ------------------------------
// AngularJS
// ------------------------------
var RandomUserDataApp = angular.module('RandomUserDataApp', []);

// 컨트롤러
var LoofController = function($scope) {

	// 컨트롤러 내부에서 사용되는 this의 참조 값은 컨트롤러
	// 컨트롤러 스코프 내에 정의된 변수
	$scope.app_name = 'Random User Data - Sorting & Fitering App';
	$scope.users = [
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "taylor",
					"last": "flores"
				},
				"location": {
					"street": "2838 e pecan st",
					"city": "bundaberg",
					"state": "south australia",
					"zip": 21121
				},
				"email": "taylor.flores@example.com",
				"username": "brownladybug329",
				"password": "ib6ub9",
				"salt": "HJgMaoRY",
				"md5": "103a91e31877a85f7c1bba51b91d4da8",
				"sha1": "5939a53b00f81abaf87a4fe387567c912931caa6",
				"sha256": "a68501a97637b5b4c53660be104e342e32115bac4e61f7e1578500b003830581",
				"registered": 1254401046,
				"dob": 335935012,
				"phone": "01-0601-3756",
				"cell": "0402-238-664",
				"TFN": "709314160",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/36.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "cindy",
					"last": "peters"
				},
				"location": {
					"street": "1753 oak lawn ave",
					"city": "darwin",
					"state": "south australia",
					"zip": 16854
				},
				"email": "cindy.peters@example.com",
				"username": "purplelion235",
				"password": "mothers",
				"salt": "VMRr7xDR",
				"md5": "fd056510e5a4067000c7b37914db7ee9",
				"sha1": "ee15a5ddae5cc9f4e7ce68be4a3ae8b2e6a298e9",
				"sha256": "e9b064ffb8df8c4c5e62b22f0f0505a1b77a1272459967d93ad650d34f7ccc2c",
				"registered": 1401340118,
				"dob": 102037046,
				"phone": "08-1908-6125",
				"cell": "0498-569-598",
				"TFN": "283052410",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/27.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "arthur",
					"last": "hale"
				},
				"location": {
					"street": "5648 w belt line rd",
					"city": "tamworth",
					"state": "tasmania",
					"zip": 79524
				},
				"email": "arthur.hale@example.com",
				"username": "blackwolf865",
				"password": "options",
				"salt": "HQm5K1ZK",
				"md5": "0322c4747170e3d2bc1eb1e951906ecc",
				"sha1": "448fc7614ab2f6d667f00357226552cb8b2f82bb",
				"sha256": "3c81dbdb65aabdbf3edb7f68feec9812d14a51fffb3b7cde123201abe7f0dea9",
				"registered": 920790879,
				"dob": 1155539963,
				"phone": "05-2183-4656",
				"cell": "0480-581-937",
				"TFN": "975720863",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/2.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "robert",
					"last": "adams"
				},
				"location": {
					"street": "4504 hickory creek dr",
					"city": "tweed",
					"state": "south australia",
					"zip": 71832
				},
				"email": "robert.adams@example.com",
				"username": "orangelion127",
				"password": "famous",
				"salt": "T3d5Hpq1",
				"md5": "6ba10e80494d0ce4424e1c080463ce74",
				"sha1": "d577c404a03ec227737532b798477aa174b0710f",
				"sha256": "c41a1be54e7cd5a8413c6e0a226c4a7fed656ab521f5f93ab58c49d38555edf6",
				"registered": 1222798358,
				"dob": 450999960,
				"phone": "08-5605-6567",
				"cell": "0490-250-524",
				"TFN": "862869466",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/86.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "daisy",
					"last": "fernandez"
				},
				"location": {
					"street": "2242 blossom hill rd",
					"city": "launceston",
					"state": "victoria",
					"zip": 45205
				},
				"email": "daisy.fernandez@example.com",
				"username": "browndog115",
				"password": "1222",
				"salt": "kUiDgi4u",
				"md5": "6488e66f467b904d55e41f4ee11dd91a",
				"sha1": "30efc4f8c086cf8e6413f3345c4a1ec859ecd27d",
				"sha256": "7cf89cc5d78ff40c9754e370080925837b622000b6f21ae4d623cc2414af2b97",
				"registered": 1357003067,
				"dob": 1381211706,
				"phone": "06-8393-2718",
				"cell": "0441-887-489",
				"TFN": "038683760",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/96.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "duane",
					"last": "tucker"
				},
				"location": {
					"street": "2080 sunset st",
					"city": "maitland",
					"state": "northern territory",
					"zip": 34543
				},
				"email": "duane.tucker@example.com",
				"username": "silverrabbit829",
				"password": "barbara",
				"salt": "0HeErxvV",
				"md5": "d23cdd501dbfda6f5ef43c8a99d2b92c",
				"sha1": "1a386fa9aaf5e418f5bccdc13b65fa321a3dacae",
				"sha256": "3294e2e7f7404cc8aa1302df905032b4895806a91b8226288090eb60bd7046db",
				"registered": 1104101926,
				"dob": 178438771,
				"phone": "09-1967-8524",
				"cell": "0463-154-892",
				"TFN": "220668975",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/76.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "mae",
					"last": "smith"
				},
				"location": {
					"street": "1298 nowlin rd",
					"city": "sydney",
					"state": "australian capital territory",
					"zip": 36964
				},
				"email": "mae.smith@example.com",
				"username": "heavygoose747",
				"password": "tarheels",
				"salt": "AKVLOFxs",
				"md5": "48b0bf092e227d4dc533e757c8f175ae",
				"sha1": "ee09cfcbe29c57b3000225d3a65bcd564b5d8e10",
				"sha256": "153aa1b1b1f6463b8b47fb500d5800d42aaf5fac2c768eb5eab6506437dbca03",
				"registered": 1373247592,
				"dob": 326200919,
				"phone": "00-4888-2834",
				"cell": "0436-724-737",
				"TFN": "297760432",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/78.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "adam",
					"last": "webb"
				},
				"location": {
					"street": "3070 walnut hill ln",
					"city": "darwin",
					"state": "australian capital territory",
					"zip": 65576
				},
				"email": "adam.webb@example.com",
				"username": "beautifulkoala756",
				"password": "attila",
				"salt": "EF8CUOa6",
				"md5": "8caa6d26fe82a07b198077f3fccf4bd3",
				"sha1": "3d09ed8e3f4e75ca0e23a1edbbbcdfd857566ceb",
				"sha256": "8070b92a490628cc3e4a75d5c6d5612b812e94ec1b85a2ee7025f36f8617eb25",
				"registered": 993780411,
				"dob": 1299483125,
				"phone": "03-0061-2657",
				"cell": "0426-117-366",
				"TFN": "021380626",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/67.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "clyde",
					"last": "gutierrez"
				},
				"location": {
					"street": "9829 lakeshore rd",
					"city": "toowoomba",
					"state": "northern territory",
					"zip": 74759
				},
				"email": "clyde.gutierrez@example.com",
				"username": "orangekoala340",
				"password": "spliff",
				"salt": "kop447Ia",
				"md5": "f219a41348a7829fad80af5388d3d64c",
				"sha1": "df3bfd410af25752c77c2b825a561ea8d329106c",
				"sha256": "a0b00b5de9ae80e3899185c5ec1b505e96d934fe5f48e9de45e887c97444419a",
				"registered": 1127541219,
				"dob": 810465273,
				"phone": "04-8354-1688",
				"cell": "0461-815-130",
				"TFN": "979085418",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/57.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "suzanne",
					"last": "jennings"
				},
				"location": {
					"street": "6945 hickory creek dr",
					"city": "kalgoorlie",
					"state": "new south wales",
					"zip": 75415
				},
				"email": "suzanne.jennings@example.com",
				"username": "tinymeercat982",
				"password": "cygnus",
				"salt": "2BkBwL1O",
				"md5": "e4e0de37f7fb23d35a3c54f94bb78d97",
				"sha1": "ad6eca12f9fefd480fce477e0a1db793b4c368c0",
				"sha256": "ac8795b811037f4c8a0d4a2fd70eaaf25b0a4e80b486029ec84abc836b733ee1",
				"registered": 1016563899,
				"dob": 1365046091,
				"phone": "02-1546-4119",
				"cell": "0494-047-184",
				"TFN": "943448165",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/81.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "adam",
					"last": "campbell"
				},
				"location": {
					"street": "2823 wheeler ridge dr",
					"city": "albury",
					"state": "western australia",
					"zip": 67479
				},
				"email": "adam.campbell@example.com",
				"username": "yellowgoose311",
				"password": "wonder",
				"salt": "eADOWbyk",
				"md5": "0384f2cc126dfed9de86884f33f2166f",
				"sha1": "3c70e3f20aaf880d471c8c4ce9a0bd536cac2f7c",
				"sha256": "4aaab638deb6b9c54e72465971936f093f9be5be6c12b56410f9ae088d6f4cc9",
				"registered": 994544674,
				"dob": 1208965190,
				"phone": "01-9538-8065",
				"cell": "0466-772-236",
				"TFN": "248855641",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/59.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "darren",
					"last": "russell"
				},
				"location": {
					"street": "7497 w gray st",
					"city": "coffs harbour",
					"state": "south australia",
					"zip": 61917
				},
				"email": "darren.russell@example.com",
				"username": "organiccat763",
				"password": "desert",
				"salt": "8KgQM6PE",
				"md5": "cffcb290af6c5cea7fc40d12e1068c56",
				"sha1": "f0823caf042f5a5d5bae352398b3e913196bfcc3",
				"sha256": "1b4cacbdd12e1acbe6bff4a9705ca5ab5c23f0a9c0e3c00932f4df02d0585449",
				"registered": 1238461923,
				"dob": 1054961085,
				"phone": "08-9922-1235",
				"cell": "0449-679-203",
				"TFN": "962566361",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/22.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "penny",
					"last": "rose"
				},
				"location": {
					"street": "5085 samaritan dr",
					"city": "maitland",
					"state": "australian capital territory",
					"zip": 15431
				},
				"email": "penny.rose@example.com",
				"username": "browndog473",
				"password": "enter",
				"salt": "V77tVwff",
				"md5": "bc73a83f3e4e383b56227d02c452d025",
				"sha1": "440e53299241a8110dde245041076a78ec6f17a4",
				"sha256": "62d09f81e3690dd633d18da778b49d68d168acd0766f71a657bda14078dd14f0",
				"registered": 1436004575,
				"dob": 504856764,
				"phone": "05-9347-3517",
				"cell": "0401-447-551",
				"TFN": "771392849",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/73.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "lewis",
					"last": "turner"
				},
				"location": {
					"street": "8790 blossom hill rd",
					"city": "rockhampton",
					"state": "south australia",
					"zip": 56169
				},
				"email": "lewis.turner@example.com",
				"username": "crazymouse697",
				"password": "diego",
				"salt": "q8E4jk6o",
				"md5": "196b0b8d57fe00ea9085c530380cad9b",
				"sha1": "15c50af7f98a5bb11f695d2a84bb2b99199fdc40",
				"sha256": "455e07d4edf50529287fadccb72199e03a1430a548dd5494ff885a16f1d47462",
				"registered": 1361844881,
				"dob": 686750105,
				"phone": "09-5537-3818",
				"cell": "0487-582-970",
				"TFN": "208273172",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/26.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "edgar",
					"last": "shelton"
				},
				"location": {
					"street": "1003 adams st",
					"city": "kalgoorlie",
					"state": "victoria",
					"zip": 91839
				},
				"email": "edgar.shelton@example.com",
				"username": "purplebird883",
				"password": "charlene",
				"salt": "nbiFvC5t",
				"md5": "ce8ff7e37d1174c485e0954ebce79a01",
				"sha1": "600f7989074b17e8b80f06aef01968e84c08ea6a",
				"sha256": "92a78de70b59d9c5dfb9ff68e8b3f9cdd44063867ed97aebc1675ff66dfa5822",
				"registered": 1316537564,
				"dob": 157990756,
				"phone": "08-6754-8742",
				"cell": "0498-708-370",
				"TFN": "091708034",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/38.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "louella",
					"last": "carlson"
				},
				"location": {
					"street": "3500 elgin st",
					"city": "brisbane",
					"state": "western australia",
					"zip": 81945
				},
				"email": "louella.carlson@example.com",
				"username": "yellowbear899",
				"password": "pleasure",
				"salt": "ZViIWJwO",
				"md5": "f88938c9e3bb2b8d407cf47c52469962",
				"sha1": "04afd19cc0f2fb9e47b0e70823e0415cbf31344a",
				"sha256": "34f9c4b8992ef45be5f98186c02aaf0ea47dc3d361ac6c10a222b8dee0ddde38",
				"registered": 1128745194,
				"dob": 1161853038,
				"phone": "01-9050-6696",
				"cell": "0477-219-421",
				"TFN": "399812656",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/94.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "barry",
					"last": "howell"
				},
				"location": {
					"street": "3875 prospect rd",
					"city": "mildura",
					"state": "tasmania",
					"zip": 67292
				},
				"email": "barry.howell@example.com",
				"username": "lazyrabbit393",
				"password": "renee",
				"salt": "EnRwooGe",
				"md5": "14c357c6ef75e726563bd894d8636c5f",
				"sha1": "a038f9b05806e9aeb77d3aa9e6b8d7bdae316be2",
				"sha256": "598d6599e70d6109f8ce802c1f6b5580dc29015b3dbfd225523ccbfea427df39",
				"registered": 1072345010,
				"dob": 474576866,
				"phone": "09-6923-0249",
				"cell": "0464-065-601",
				"TFN": "508616555",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/52.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "beth",
					"last": "fernandez"
				},
				"location": {
					"street": "3803 pecan acres ln",
					"city": "sydney",
					"state": "victoria",
					"zip": 30754
				},
				"email": "beth.fernandez@example.com",
				"username": "bluemouse956",
				"password": "bauhaus",
				"salt": "D4hQZjSI",
				"md5": "164f3a35c0a145b5f1be210df9495bb0",
				"sha1": "f7a42f1d065db50c318f7cb4da167c9ca8607815",
				"sha256": "87a0bec8120312d04783d61bce5c9e4fbe8f341e532d4635fa050e71bf879492",
				"registered": 1146789459,
				"dob": 396493103,
				"phone": "02-1150-9129",
				"cell": "0456-658-712",
				"TFN": "120415461",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/22.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "hannah",
					"last": "silva"
				},
				"location": {
					"street": "2445 adams st",
					"city": "mackay",
					"state": "victoria",
					"zip": 32642
				},
				"email": "hannah.silva@example.com",
				"username": "tinymouse479",
				"password": "hard",
				"salt": "j2QE70J1",
				"md5": "781c87050d194574b1a5adb444b85cab",
				"sha1": "a416239203b6bc24bc70aa873e4ddfc102cc5e99",
				"sha256": "b2de2a247abceae56c4283c810617bf6dd2a59bd69eecc3ba8dd7f873fbc064e",
				"registered": 1047255420,
				"dob": 283532675,
				"phone": "07-9831-8271",
				"cell": "0404-707-521",
				"TFN": "005769625",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/2.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "sue",
					"last": "horton"
				},
				"location": {
					"street": "2323 dogwood ave",
					"city": "bowral",
					"state": "new south wales",
					"zip": 98549
				},
				"email": "sue.horton@example.com",
				"username": "blackcat422",
				"password": "toshiba",
				"salt": "FAYum7Dk",
				"md5": "28a2eedba0acb893eeb5c8424653e1ee",
				"sha1": "65f760e927198052247f241a68c130f993412926",
				"sha256": "eb64d442948e642c4b167f8350c831be91d5d461c48c5639b778322cca482357",
				"registered": 1133840041,
				"dob": 751813997,
				"phone": "07-6750-0346",
				"cell": "0414-290-808",
				"TFN": "267993004",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/92.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "todd",
					"last": "romero"
				},
				"location": {
					"street": "5357 lone wolf trail",
					"city": "hervey bay",
					"state": "new south wales",
					"zip": 79671
				},
				"email": "todd.romero@example.com",
				"username": "crazydog945",
				"password": "runner",
				"salt": "rDABDuyg",
				"md5": "512f968148f9bb7b98b53756e43b157c",
				"sha1": "f526e129436067e5c9ad5690c36be198207ff9a8",
				"sha256": "30cb47201a830e5b89aabae1cc6f963a9ded968ebd585f6730b70e0103737ad3",
				"registered": 1053368952,
				"dob": 1342116552,
				"phone": "07-2017-9565",
				"cell": "0445-123-045",
				"TFN": "273328376",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/10.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "heidi",
					"last": "holmes"
				},
				"location": {
					"street": "3743 karen dr",
					"city": "busselton",
					"state": "australian capital territory",
					"zip": 31367
				},
				"email": "heidi.holmes@example.com",
				"username": "silverpeacock662",
				"password": "post",
				"salt": "iKW8OXfM",
				"md5": "57764db6a7d8b79411e5f922bfcda0d5",
				"sha1": "0d5804696c9d0c76e1f5cc711e19c7c8cc34bbad",
				"sha256": "6933611714c2840fa3dc736b540c38e1ba7b33f7fc0b19263fbfc4ac2d600ede",
				"registered": 1027722209,
				"dob": 502863612,
				"phone": "01-3513-6118",
				"cell": "0436-177-327",
				"TFN": "301967839",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/73.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "lillie",
					"last": "stone"
				},
				"location": {
					"street": "2633 pockrus page rd",
					"city": "shepparton",
					"state": "south australia",
					"zip": 39679
				},
				"email": "lillie.stone@example.com",
				"username": "blackcat582",
				"password": "marc",
				"salt": "hFfUrlYF",
				"md5": "f444c9eb23de4fda362fa799a4bc735c",
				"sha1": "ae292a19b1ddf1643cb2b0c94c71f173ceb22db2",
				"sha256": "28fe66713ad31814c87f2ad77fffb14e8a9e3933e8bc402904a83283f58a8f15",
				"registered": 1147317780,
				"dob": 632955146,
				"phone": "02-6905-8884",
				"cell": "0419-887-643",
				"TFN": "706734913",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/32.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "andre",
					"last": "carroll"
				},
				"location": {
					"street": "7388 hamilton ave",
					"city": "hervey bay",
					"state": "victoria",
					"zip": 66078
				},
				"email": "andre.carroll@example.com",
				"username": "greenduck115",
				"password": "sahara",
				"salt": "t4s6zgmz",
				"md5": "34fc89cd0076b348b4884b7ba3770195",
				"sha1": "e6333edc2d7a7554774d5e231d92aa7949acff5d",
				"sha256": "1b640bcde90b7f8d393a9e386ef9619329ae38634c999848fbf2e8c869e87179",
				"registered": 1259541152,
				"dob": 531465003,
				"phone": "06-4212-7464",
				"cell": "0405-400-196",
				"TFN": "043411805",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/95.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "john",
					"last": "moreno"
				},
				"location": {
					"street": "6626 taylor st",
					"city": "dubbo",
					"state": "south australia",
					"zip": 92988
				},
				"email": "john.moreno@example.com",
				"username": "ticklishwolf441",
				"password": "ledzep",
				"salt": "qckamsME",
				"md5": "60e12546d24e181ebdf8c4ece71748ee",
				"sha1": "948641631548915029562a0fd4c9a0264650e87f",
				"sha256": "5d329501304e23dea4f96c454344034bbc26f9a7c9e3f2b5e08901541070b89e",
				"registered": 1082701568,
				"dob": 263681300,
				"phone": "06-3105-1344",
				"cell": "0497-538-511",
				"TFN": "457594818",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/24.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "brad",
					"last": "barrett"
				},
				"location": {
					"street": "7810 college st",
					"city": "albury",
					"state": "australian capital territory",
					"zip": 29044
				},
				"email": "brad.barrett@example.com",
				"username": "whitefish712",
				"password": "madman",
				"salt": "3fqy9tGF",
				"md5": "50e7557fdd2d5cf80854e59ca161200c",
				"sha1": "4e6fbd53acbb46fa22314145040c9dbed8a871c6",
				"sha256": "d45a43400342134787ef77224d7fdbd20749bf6eee231fcad6bb4565d55fa051",
				"registered": 1031855889,
				"dob": 858606622,
				"phone": "05-2829-6327",
				"cell": "0470-337-935",
				"TFN": "884921466",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/72.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "sally",
					"last": "knight"
				},
				"location": {
					"street": "2287 e north st",
					"city": "hervey bay",
					"state": "western australia",
					"zip": 39806
				},
				"email": "sally.knight@example.com",
				"username": "tinysnake287",
				"password": "buckley",
				"salt": "fDqN2YAK",
				"md5": "1d267fd4001aa005610e12ce882c1580",
				"sha1": "2e6c63d2ad7102426fb1b3431ec60f0fc85fb8ba",
				"sha256": "202c4606c9fef7daeb9e9df01ab69e7ca910fd8ecc141ad84f634f76099e9661",
				"registered": 1100794072,
				"dob": 63286636,
				"phone": "04-1683-7962",
				"cell": "0483-219-248",
				"TFN": "135224945",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/35.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "eugene",
					"last": "harvey"
				},
				"location": {
					"street": "8145 taylor st",
					"city": "sydney",
					"state": "australian capital territory",
					"zip": 39680
				},
				"email": "eugene.harvey@example.com",
				"username": "crazyfish279",
				"password": "kermit",
				"salt": "8nTeP5oK",
				"md5": "1691f6e5a325f4135e592b0593b45cd4",
				"sha1": "dfc57ac95e1ca374cec01f537cc591b4a51f680e",
				"sha256": "95edd6f014f6cd4eee75c607f8dc88e1a06b14a318ac7f629ed326415fa9df6f",
				"registered": 1236685144,
				"dob": 597682969,
				"phone": "02-4292-6896",
				"cell": "0481-931-535",
				"TFN": "872153444",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/52.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "ella",
					"last": "white"
				},
				"location": {
					"street": "1277 w campbell ave",
					"city": "port macquarie",
					"state": "northern territory",
					"zip": 60188
				},
				"email": "ella.white@example.com",
				"username": "blueladybug962",
				"password": "cowboy1",
				"salt": "dlmyOYuC",
				"md5": "1af077a0d024932b8a13a794b59bfe7f",
				"sha1": "3accce4e3d0e3c144d8edf02c79b267bcb1eb579",
				"sha256": "75dea64d00e8193fcefaaf2f4ad0100ae494c61a40f77e46870997157cde9026",
				"registered": 1198139408,
				"dob": 1173187196,
				"phone": "07-3569-8191",
				"cell": "0427-148-290",
				"TFN": "754342705",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/92.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "liam",
					"last": "owens"
				},
				"location": {
					"street": "4168 westheimer rd",
					"city": "orange",
					"state": "western australia",
					"zip": 14851
				},
				"email": "liam.owens@example.com",
				"username": "tinyrabbit133",
				"password": "berry",
				"salt": "20KcUA9C",
				"md5": "0bc5bd65ca45abf8d2c3870740320abe",
				"sha1": "644655fd83dd0cd10c4ecfc1060c1bcd68eaac80",
				"sha256": "5df18731ad76ef9b3f22e73d497b3db1f4f8d99d5dad389c96a87508c6a1a0e5",
				"registered": 1138479851,
				"dob": 895702204,
				"phone": "02-1083-9423",
				"cell": "0491-123-135",
				"TFN": "974893694",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/44.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "dylan",
					"last": "crawford"
				},
				"location": {
					"street": "4483 parker rd",
					"city": "shepparton",
					"state": "queensland",
					"zip": 93145
				},
				"email": "dylan.crawford@example.com",
				"username": "whiterabbit706",
				"password": "alberta",
				"salt": "lpMwRy5Z",
				"md5": "4601edcdeda3dd997f395331fc42da1a",
				"sha1": "a2e49699055ccf3b4efeab41613714eef3158f16",
				"sha256": "873fdff96a0ad24dd0659a2423c64d6c8c9d426cca78534082ac857fd2a273d3",
				"registered": 948587303,
				"dob": 1395049356,
				"phone": "04-6477-1064",
				"cell": "0451-395-348",
				"TFN": "420405519",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/26.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "carter",
					"last": "clark"
				},
				"location": {
					"street": "3442 marsh ln",
					"city": "hervey bay",
					"state": "south australia",
					"zip": 38974
				},
				"email": "carter.clark@example.com",
				"username": "brownleopard696",
				"password": "maxmax",
				"salt": "BW7pis6q",
				"md5": "de66f6535806fc150df055e01a41b8e6",
				"sha1": "9acba7b2dba79b7bc76523ef6309c7b89e6c5da5",
				"sha256": "3167f1c95ea79b58693de3e91a2f266c035de96340f14da084265c9f031b7ce0",
				"registered": 1005707653,
				"dob": 23706781,
				"phone": "03-0162-2145",
				"cell": "0403-866-434",
				"TFN": "445698896",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/68.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "guy",
					"last": "sims"
				},
				"location": {
					"street": "3048 elgin st",
					"city": "perth",
					"state": "western australia",
					"zip": 55383
				},
				"email": "guy.sims@example.com",
				"username": "browngoose911",
				"password": "2003",
				"salt": "C2khWiYQ",
				"md5": "22818b6652117b082dda31d5f771b690",
				"sha1": "13227a230e79befc49b8b39cfd9dd3e9be7746ce",
				"sha256": "ee61eec8bb44d11c3d81cae5286933d44d2bb999fc465750fd12e08d125f48f6",
				"registered": 1354199876,
				"dob": 6178569,
				"phone": "03-7579-8447",
				"cell": "0462-626-770",
				"TFN": "191513742",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/54.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "male",
				"name": {
					"title": "mr",
					"first": "julian",
					"last": "gray"
				},
				"location": {
					"street": "8829 avondale ave",
					"city": "perth",
					"state": "australian capital territory",
					"zip": 91667
				},
				"email": "julian.gray@example.com",
				"username": "whitegoose971",
				"password": "cricket",
				"salt": "GhhWhRXF",
				"md5": "e34b76c827a8bbe96b2e4186d61e29c6",
				"sha1": "977c491476a94cdb95c35699f5f9d15c8c5ad1a6",
				"sha256": "90cc6a26d2e1deb159f6301e5ea7e447704073af26aaa90b2d39ecc73c175a58",
				"registered": 1172267267,
				"dob": 900536023,
				"phone": "05-0208-0811",
				"cell": "0408-364-920",
				"TFN": "279296146",
				"picture": {
					"large": "https://randomuser.me/api/portraits/men/22.jpg",
					"medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "lisa",
					"last": "dixon"
				},
				"location": {
					"street": "2531 sunset st",
					"city": "cairns",
					"state": "western australia",
					"zip": 90152
				},
				"email": "lisa.dixon@example.com",
				"username": "tinydog727",
				"password": "3ip76k2",
				"salt": "PWrxDkcV",
				"md5": "1749423d051adac50a757b071af3aed2",
				"sha1": "ddadededfa48c4aded6fad042884e169b04b7812",
				"sha256": "cc5a9be50e07fd55aed45f20c1734acf74f990d221de501e896a88a36f9eba9b",
				"registered": 1162579775,
				"dob": 16460119,
				"phone": "04-7108-0263",
				"cell": "0453-893-268",
				"TFN": "944596593",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/71.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "terry",
					"last": "austin"
				},
				"location": {
					"street": "7511 paddock way",
					"city": "townsville",
					"state": "tasmania",
					"zip": 16206
				},
				"email": "terry.austin@example.com",
				"username": "purplewolf994",
				"password": "easton",
				"salt": "it6wrAPt",
				"md5": "fd0500206db86df2551b0bebdd8b0ed9",
				"sha1": "eadecfddd2d066c70d9f07559f2f3539b22856cb",
				"sha256": "0741cf75e3880f8d7817ede06622be0971870d761927cbb3c527a7cf28cd5093",
				"registered": 1382868399,
				"dob": 796451330,
				"phone": "01-4888-5423",
				"cell": "0474-225-611",
				"TFN": "148855830",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/20.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "camila",
					"last": "wilson"
				},
				"location": {
					"street": "5462 forest ln",
					"city": "mildura",
					"state": "victoria",
					"zip": 57851
				},
				"email": "camila.wilson@example.com",
				"username": "tinypeacock699",
				"password": "splinter",
				"salt": "PFb5satc",
				"md5": "5ca77b49a69cc77d862b4ac4b32b08b2",
				"sha1": "7085d583cf68e605ce939ce6d21603663dd80d2a",
				"sha256": "004b54d2893bdce6f1d77b530f942345fb93b60cc9d2856b8fbfabd891a33d12",
				"registered": 1262984728,
				"dob": 1186417959,
				"phone": "08-5833-9567",
				"cell": "0408-938-852",
				"TFN": "983794011",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/4.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "miss",
					"first": "eileen",
					"last": "robinson"
				},
				"location": {
					"street": "9664 w gray st",
					"city": "ballarat",
					"state": "australian capital territory",
					"zip": 49627
				},
				"email": "eileen.robinson@example.com",
				"username": "blueelephant156",
				"password": "yankees1",
				"salt": "GWgFRJMf",
				"md5": "fec9d4941cc814d4b858f7696a250236",
				"sha1": "d9f1af2c2b8e48ce10cfdcea646aded3828f25ab",
				"sha256": "e8bd03f0f39334721e16a4387595b8d80356ccac788a8a23833b98fa756b7d20",
				"registered": 1401336611,
				"dob": 1099066290,
				"phone": "00-8885-6211",
				"cell": "0454-042-241",
				"TFN": "912268858",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/45.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "ms",
					"first": "isabella",
					"last": "ray"
				},
				"location": {
					"street": "7576 central st",
					"city": "kalgoorlie",
					"state": "new south wales",
					"zip": 43463
				},
				"email": "isabella.ray@example.com",
				"username": "brownmeercat616",
				"password": "valencia",
				"salt": "01Bw1lMh",
				"md5": "e9f98cce6e6475c4e1745f9ed5c8f9d5",
				"sha1": "95fc82d501a0319833ad0a244dbd38e57071d356",
				"sha256": "f94dfcc2ced15aece9ab04ed447f5b29099cf061e357525813702cd24c97b19a",
				"registered": 1142257057,
				"dob": 387426313,
				"phone": "06-3958-0576",
				"cell": "0427-200-988",
				"TFN": "348357548",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/65.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
				}
			}
		},
		{
			"user": {
				"gender": "female",
				"name": {
					"title": "mrs",
					"first": "nina",
					"last": "howell"
				},
				"location": {
					"street": "1229 bollinger rd",
					"city": "kalgoorlie",
					"state": "victoria",
					"zip": 15007
				},
				"email": "nina.howell@example.com",
				"username": "whitegoose447",
				"password": "spiderma",
				"salt": "2Aaevl9i",
				"md5": "742e9f870541992051a6ddba7891d911",
				"sha1": "dfce0da194c715ae493ea5699f7ca98b4432dd78",
				"sha256": "16f0a73f4b7eb65dbab569308d6f757febc3e637cdc8cd8239cbae9463534d9b",
				"registered": 1191717477,
				"dob": 1244816541,
				"phone": "04-0218-5864",
				"cell": "0401-812-949",
				"TFN": "183323687",
				"picture": {
					"large": "https://randomuser.me/api/portraits/women/72.jpg",
					"medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
					"thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
				}
			}
		}
	];

	// 사용자가 선택한 사용자의 인덱스 정보를 담는 초기 변수
	// $scope.selected_index = null;
	$scope.selected_user = null;

	$scope.search = {};

	$scope.sort_option = 'user.username';




	// 컨트롤러 스코프 내에 함수 정의
	$scope.selectedUser = function( person ) {
		// $scope.selected_index = index;
		$scope.selected_user = person.user;
	};

};

RandomUserDataApp.controller('LoofController', LoofController);