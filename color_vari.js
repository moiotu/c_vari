$.ajaxSetup({ cache: false });
function getUrlVars(){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++ ){hash = hashes[i].split('=');vars.push(hash[0]);vars[hash[0]] = hash[1];}
	return vars;
}
function getReferrerVars(){


	var ref2 =  document.referrer;

//	var ref =  "https://kutsu.com/item/"+"413000350"+".html";
//	var ref =  "https://kutsu.com/item/"+"240947280"+".html";
//	var ref =  "https://kutsu.com/item/"+"433026930"+".html";
	var ref =  "https://kutsu.com/item/"+"610007200"+".html";


//	alert(ref2);

	var ary_tmp = ref.split("/");
	var filename_part = ary_tmp[ary_tmp.length-1];
	ary_tmp = filename_part.split(".");
	return ary_tmp[0];

}

function getpid(){

  let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
 
  // getメソッドにて取得
  pid = params.get('pid');

  return pid;

}


$(function(){
//	var pid = getReferrerVars();
	var pid = getpid();
	
	if( pid === null || pid === "" || pid === undefined){
		$("#color_vari").html("");
	}else{
		if($("#color_vari").size() > 0){
				var str_get_part = "pid=" + pid + "&shopid=0&enc=euc-jp"; 
				
				$.jsonp({
//			    url: "https://photo.chiyodagrp.co.jp/color_vari/color_v_get.php?"+str_get_part,
//			    url: "http://dev-chiyoda.le-sys.net/admin/real/zaiko/color_vari/color_v_get.php?"+str_get_part,
			    url: "https://photo.chiyodagrp.co.jp/color_vari/color_v_ebi_get.php?"+str_get_part,

			    cache: false,
			    success: function(json) {
					var _html = json.cvari;
					_html = _html.replace('demo-service.ebisumart.com/', 'dev-service.ebisumart.com/');
				
			       $("#color_vari").html(_html);
// smoothDivScrool Call
/*
			      $(function() {
		          $("#makeMeScrollable2").smoothDivScroll({ autoScroll:"onstart", autoScrollDirection:"backandforth", autoScrollStep:1, autoScrollInterval:15, startAtElementId:"startAtMe", visibleHotSpots:"always"});
		        });
*/
			    },
			    error: function() {
			       $("#color_vari").html("<!--span>error01</span-->");
			    },
			    complete: function(json) {
			  	}
				});		
		}
	}
});
