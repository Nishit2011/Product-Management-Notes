

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



