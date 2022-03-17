function showSelectedTab(leftNav,leftNavChild,topNav,disp){
	$("ul.leftToc > li").eq(leftNav).addClass("parentSelBg");
	 
	$("ul.primaryNav > li").eq(topNav+1).addClass("active");
	$("ul.primaryNav-mob > li").eq(topNav+1).addClass("active");
	$("ul.primaryNav-mob > li ul.dropdown-menu li").eq(leftNav).addClass("active");
	//$("ul.primaryNav-mob > li ul.megamenu")+.eq(topNav-1)+."li").eq(topNav).addClass("active");
	if(leftNavChild != '-1')
	{
		//$("ul.leftToc > li").eq(leftNav).addClass("parentSelSub")
		$("ul.leftToc > li:eq(" + leftNav + ") ul li").eq(leftNavChild).addClass("sel")
		 
		//$("ul.leftToc > li").eq(leftNav).children("li").eq(leftNavChild).addClass("sel")	
	}
	if(disp == "open"){
		$("ul.leftToc > li").eq(leftNav).children("ul").show()
	}
}

function changeImg(id, classNm) {
        document.getElementById(id).className = classNm
}

var selectedMenu;


function tNavSel(tNav)
{ 
	document.getElementById(tNav).className="sel";
	selectedMenu = tNav;
	/*
	if((tNav == "strategy_and_innovation") || (tNav == "product_ideation"))
	{
		ExpandCollapseSubmenu(tNav,tNav + "_submenu")
		keywrd = document.URL.split("?");
		document.getElementById(keywrd[1]).className = "sel lastOne";
	}
	*/
}



function showSelectedTopNav(leftNav,leftNavChild,topBarNav,disp){
	$("ul.leftToc > li").eq(leftNav).addClass("parentSelBg")
	$("ul.global-nav > li").eq(topBarNav).addClass("active")
	if(leftNavChild != '-1')
	{
		$("ul.leftToc > li").eq(leftNav).addClass("parentSelSub")
		$("ul.leftToc > li:eq(" + leftNav + ") ul li").eq(leftNavChild).addClass("sel")
		 
		//$("ul.leftToc > li").eq(leftNav).children("li").eq(leftNavChild).addClass("sel")	
	}
	if(disp == "open"){
		$("ul.leftToc > li").eq(leftNav).children("ul").show()
	}
}

/*
function ExpandCollapse(parentId,childId)
{
	  document.getElementById(selectedMenu).className = "";
	  var c = document.getElementById(childId);
	  var p = document.getElementById(parentId);
	  var a = document.getElementById(parentId + "_link");
	 
       if(c.style.display == 'block')
	   {
		  c.style.display = 'none';
		}
       else if(c.style.display == 'none')
	   {
		   c.style.display = 'block';
		}
		p.className = 'parentSelBg';	
		a.className = 'selectedChild';
}

*/

/*

function ExpandCollapseSubmenu(parentId,childId)
{
	  document.getElementById(selectedMenu).className = "parentSelSub ";
	  var c = document.getElementById(childId);
	  var p = document.getElementById(parentId);
	  var a = document.getElementById(parentId + "_link");
	   if(c.style.display == 'block')
	   {
		  c.style.display = 'none';
		}
       else if(c.style.display == 'none')
	   {
		   c.style.display = 'block';
		}

		a.className = 'selectedChild noBullet';
}

*/

function popupwin(light, fade, cb)
{
	if(document.getElementById(light)!=null)
	{
		document.getElementById(light).style.display='block';
 if(light.substr(0,5) == "video")
	window.location.hash = "#" + light + "_video";
 document.body.style.overflow = 'hidden';
 var frame = document.getElementById(fade);

 var htmlheight = document.body.parentNode.scrollHeight;

 var myHeight = document.body.parentNode.clientHeight;

   if ( htmlheight < myHeight )
   {
    var frameheight = myHeight + "px";
    frame.style.height = frameheight;

   }
   else
   {
    var frameheight = htmlheight + "px";
    frame.style.height = frameheight;

   }

   	/*var top = window.pageYOffset || document.documentElement.scrollTop;
	var left = window.pageXOffset || document.documentElement.scrollLeft;

	document.getElementById(light).style.top = (top+70) + "px";*/

		document.getElementById(fade).style.display='block';
	if (cb && typeof cb === "function") {
		cb();
	}		
	}


}

function popupclose(light,fade, cb)
	{
		document.getElementById(light).style.display='none';
		document.getElementById(fade).style.display='none';
		document.body.style.overflow = 'auto';
		if (cb && typeof cb === "function") {
			cb();
		}
	}

function stopVideo(playerId, vidNm){
	document.getElementById(playerId).src = vidNm;
}	


$(document).ready(function(){
   function move_div()
	{
	   window_width = $(window).width();
	   
	   if(window_width <= 400)
	   {
		   //$('.whiteOverlay').css('left', 50);
		   //$('.whiteOverlay').css('height',463);
		   //$('#whitepapers').css('height',200);
		   
	   }
	   else{
	  	//window_height = $(window).height();
	  	obj_width = $('.whiteOverlay').width();
	  	//obj_height = $('.whiteOverlay').height();
	 	$('.whiteOverlay').css('left', (window_width/2) - (obj_width/2));
	   }
	}
	
	function move_div1()
	{
	   window_width = $(window).width();
	  //window_height = $(window).height();
	  obj_width = $('.whiteOverlay1').width();
	  //obj_height = $('.whiteOverlay').height();
	 $('.whiteOverlay1').css('left', (window_width/2) - (obj_width/2));
	}
	
	move_div();
	
	move_div1();
	
	$(window).resize(function(){
		  move_div();
		  move_div1();
		});
});


function showHideProjPlan_next(){
	document.getElementById('step_cont1').style.display = 'none';
	document.getElementById('step_cont2').style.display = 'block';
	document.getElementById('require').className = 'paticipant visited';
	document.getElementById('centerBar').className = 'paymentOptionBar w50p sel';
	document.getElementById('contact').className = 'paticipant active';
}

function showHideProjPlan_prev(){
	document.getElementById('step_cont1').style.display = 'block';
	document.getElementById('step_cont2').style.display = 'none';
	document.getElementById('require').className = 'paticipant active';
	document.getElementById('centerBar').className = 'paymentOptionBar w50p';
	document.getElementById('contact').className = 'paticipant';
}


function showHideOnsiteTrn_next(){
    document.getElementById('step_cont_onsite_1').style.display = 'none';
	document.getElementById('step_cont_onsite_2').style.display = 'block';
	document.getElementById('require_onsite').className = 'paticipant visited';
	document.getElementById('centerBar_onsite').className = 'paymentOptionBar w50p sel';
	document.getElementById('contact_onsite').className = 'paticipant active';
}

function showHideOnsiteTrn_prev(){
	document.getElementById('step_cont_onsite_1').style.display = 'block';
	document.getElementById('step_cont_onsite_2').style.display = 'none';
	document.getElementById('require_onsite').className = 'paticipant active';
	document.getElementById('centerBar_onsite').className = 'paymentOptionBar w50p';
	document.getElementById('contact_onsite').className = 'paticipant';
}

function showHideOrgcert_next(){
    document.getElementById('step_cont_org_1').style.display = 'none';
	document.getElementById('step_cont_org_2').style.display = 'block';
	document.getElementById('require_org').className = 'paticipant visited';
	document.getElementById('centerBar_org').className = 'paymentOptionBar w50p sel';
	document.getElementById('contact_org').className = 'paticipant active';
}

function showHideOrgcert_prev(){
	document.getElementById('step_cont_org_1').style.display = 'block';
	document.getElementById('step_cont_org_2').style.display = 'none';
	document.getElementById('require_org').className = 'paticipant active';
	document.getElementById('centerBar_org').className = 'paymentOptionBar w50p';
	document.getElementById('contact_org').className = 'paticipant';
}





/* Payment gateway functions */

function page_redirect_sa(){
	document.frmTransaction.method="post";
	document.frmTransaction.action="thankyou_sa.asp";	
	document.frmTransaction.submit();
}

function page_redirect1()
{
	document.frmTransaction.return_url.value="https://www.humanfactors.com/training/response_hfi.asp?DR={DR}&cid="+document.frmTransaction.cval.value+"&cid1="+document.frmTransaction.cval1.value +"&cid2="+document.frmTransaction.cval2.value+"&refno="+document.frmTransaction.reference_no.value+"&bitflag="+document.frmTransaction.bitrate.value+"&cyear="+document.frmTransaction.cyear.value+"&cid3="+document.frmTransaction.cval3.value+"&cidd="+document.frmTransaction.cval100.value+"&participants="+document.frmTransaction.participantsNo.value;	
	
	page_redirect3(document.frmTransaction.cval.value,document.frmTransaction.cval1.value,document.frmTransaction.cval2.value,document.frmTransaction.cyear.value,document.frmTransaction.cval3.value);
	return true;
}

function page_redirect2()
{
	page_redirect4(document.frmTransaction.cval.value,document.frmTransaction.cval1.value,document.frmTransaction.cval2.value,document.frmTransaction.cyear.value,document.frmTransaction.cval3.value);
	return true;
}

function page_redirect11()
{
	document.frmTransaction.return_url.value="https://www.humanfactors.com/training/response_hfi.asp?DR={DR}&cid="+document.frmTransaction.cval.value+"&cid1="+document.frmTransaction.cval1.value +"&cid2="+document.frmTransaction.cval2.value+"&refno="+document.frmTransaction.reference_no.value+"&bitflag="+document.frmTransaction.bitrate.value+"&cyear="+document.frmTransaction.cyear.value+"&cid3="+document.frmTransaction.cval3.value+"&cidd="+document.frmTransaction.cval100.value+"&participants="+document.frmTransaction.participantsNo.value+"&cuaExam="+document.frmTransaction.cuaExam.value+"&promotionCode="+document.frmTransaction.promotionCode.value;	
	
	page_redirect3(document.frmTransaction.cval.value,document.frmTransaction.cval1.value,document.frmTransaction.cval2.value,document.frmTransaction.cyear.value,document.frmTransaction.cval3.value);
	return true;
}


/* New Shopping cart */
function page_redirect5(sess)
{
	document.frmTransaction.return_url.value="https://www.humanfactors.com/training/response_hfi1.asp?DR={DR}&refno="+document.frmTransaction.reference_no.value+"&bitflag="+document.frmTransaction.bitrate.value+"&session_id=" + sess;	
	
	page_redirect3(document.frmTransaction.cval.value,document.frmTransaction.cval1.value,document.frmTransaction.cval2.value,document.frmTransaction.cyear.value,document.frmTransaction.cval3.value);
	return true;
}

function page_redirect6(sess)
{
	document.frmTransaction.ret_addr.value="https://www.humanfactors.com/training/response_hfi1.asp?DR={DR}&refno="+document.frmTransaction.reference_no.value+"&bitflag="+document.frmTransaction.bitrate.value+"&session_id=" + sess;	
	
	page_redirect4(document.frmTransaction.cval.value,document.frmTransaction.cval1.value,document.frmTransaction.cval2.value,document.frmTransaction.cyear.value,document.frmTransaction.cval3.value);
	return true;
}
/* New shopping cart ends here */

function page_redirect7()
{
	document.frmTransaction.return_url.value="https://www.humanfactors.com/training/response_hfi2.asp?DR={DR}&refno="+document.frmTransaction.reference_no.value+"&bitflag="+document.frmTransaction.bitrate.value;	
	
	page_redirect3(0,0,0,0,0);
	return true;
}

function page_redirect3(cval,cval1,cval2,cval3,cval4)
{
		document.frmTransaction.method="post";
		document.frmTransaction.action="https://secure.ebs.in/pg/ma/sale/pay/";	
		document.frmTransaction.submit();
}

function page_redirect4(cval,cval1,cval2,cval3,cval4)
{
		document.frmTransaction.method="post";
		document.frmTransaction.action="https://secure.itransact.com/cgi-bin/mas/split.cgi";	
		//document.frmTransaction.elements[5].value = document.frmTransaction.totpay.value;
		/*document.frmTransaction.action="https://secure.itransact.com/cgi-bin/mas/split.cgi?ret_mode=post&vendor_id=277zzrsu4Dw9x69NE9&home_page=http%3A%2F%2Fwww.humanfactors.com&ret_addr=http%3A%2F%2Fwww.humanfactors.com%2Fresponse_hfi_us.asp&1_desc=onsite+courseregistration&1_cost=1000&1_qty=1&lookup=xid&passback=CourseName&passback=Amount&passback=ContactFirstName&passback=ContactLastName&passback=ContactTitle&passback=ContactCompany&passback=ContactAddress&passback=ContactAddress2&passback=ContactCity&passback=ContactState&passback=ContactZip&passback=ContactCountry&passback=ContactPhone&passback=ContactEmail&passback=CourseDate&acceptcards=1&accepteft=0&acceptchecks=0&visaimage=1&mcimage=1&ameximage=1&discimage=0&dinerimage=0&showaddr=1&showcvv=1&lookup=first_name&lookup=last_name&lookup=address&lookup=city&lookup=s%20tate&amp;lookup=zip&lookup=country&lookup=phone&lookup=email&mername=Human+Factors+International&CourseName=UCA&CourseDate=13+Aug+2015&ContactCompany=Human+Factors+International&ContactFirstName=Michael&ContactLastName=Matzkin&Amount=1000"*/
		document.frmTransaction.submit();
}


function video_comment(selTab, selContr, unselTab, unselContr){
	document.getElementById(selTab).className = 'sel';
	document.getElementById(selContr).style.display = 'block';
	window.location.hash = selContr;
//	document.getElementById(selContr).focus();
	document.getElementById(unselTab).className = '';
	document.getElementById(unselContr).style.display = 'none';
}

function showExamFees(c)
{
	if(c == 1)
	{
		document.getElementById('withCUA').style.display = "block";
		document.getElementById('withoutCUA').style.display = "none";	
	}
	else
	{
		document.getElementById('withCUA').style.display = "none";
		document.getElementById('withoutCUA').style.display = "block";	
	}
}

function showExamFees1()
{
	if(document.getElementById("cuaExamYes") || document.getElementById("cuaExamNo"))
	{
		if(document.getElementById("cuaExamYes").checked == true){
			document.getElementById('withCUA').style.display = "block";
			document.getElementById('withoutCUA').style.display = "none";	
		}
		else if(document.getElementById("cuaExamNo").checked == true)
		{
			document.getElementById('withCUA').style.display = "none";
			document.getElementById('withoutCUA').style.display = "block";	
		}
	}
}

function setPdfVal(val){
	document.getElementById("pdfType").value = val;	
	setTimeout("popupwin('downloadPDF','fade')",3000)
}


/*$(function() {
    $('.navbar-toggler').on('click', function() {
        $('body').toggleClass('menu-open');
    })
})*/
if($('input[name="MySearchBox"]').val() != ''){
		popupclose('callPopup','fade');
		popupwin('callPopup2','fade');
}

/**
 * Show contact form when user requsest for downloading the whitepapers
 * @param {*} options
 */
function loadContactForm(options) {
	var formPathPrefix = (options && options.hasOwnProperty('formPathPrefix')) ? options['formPathPrefix'] : "";
	var containerId =  (options && options.hasOwnProperty('containerId')) ? options['containerId'] : "whitePaperRequestForm";
	var formId = (options && options.hasOwnProperty('formId')) ? options['formId'] : "contactUsForm";
	var paperTitle = (options && options.hasOwnProperty('paperTitle')) ? options['paperTitle'] : "";
	var downloadPath = (options && options.hasOwnProperty('downloadPath')) ? options['downloadPath'] : "";
	$('#' + containerId).load(formPathPrefix + '_contactForm.html', function() {
		$('#' + formId).find('input:hidden[name="white_paper"]').val(paperTitle);
		if (downloadPath) {
			$("#" + containerId).parent('div').find("#thankYouContainer a.button").attr('href', downloadPath);
		}
	});
}