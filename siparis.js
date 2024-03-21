/**
 * 
 */
/**
 * 
 */
const bilgiIletisi="Siparisleriniz burada görüntülenir";
const tesekkurIfadesi = "Teşekkkür ederiz";
const sabitSiparisAdedi=10;
const adetSabit= "ADET";
const onSabit = "ON";
const meyve_1="elma";
const meyve_2="armut";
const sebze_1="domates";
const sebze_2="patates";


function sayfaYukle()
{
	document.getElementById("p-1").innerHTML=bilgiIletisi;
}

function adetSiparis()
{
	var urun=document.getElementById("input-1").value;
	var siparisAdedi;
	var geciciDizgi= tesekkurIfadesi;
	var donguDenetim ;
	var adetSiparisBasildi=false;
	var siparisOnayla = true;

	
	switch (arguments[0])
	{
		case adetSabit:
		 siparisAdedi = document.getElementById("input-2").value;
		 adetSiparisBasildi=true;
		 break;
		case onSabit:
			siparisAdedi=sabitSiparisAdedi;
			break;
		default:
		alert("Hatalı siparis adedi girişi");
			
	}
	
     switch(urun)
     {
		case meyve_1:
		case meyve_2:
			alert("meyve stoklarımız yeterlidir, teşekkür ederiz.")
		break;
		case sebze_1:
		case sebze_2:
			alert("sebzelerimiz kendi bahçelerimizden, teşekkür ederiz.")
		break;
		default:
			if(siparisAdedi>99)
			{
				alert("Stoklarımızda, " + siparisAdedi + " adet " + urun + " bulunmamaktadır, üzgünüz.");
				spsiparisOnayla=false;
				geciciDizgi="siparişiniz onaylanmadı, özür dileriz."
				
			}
			else
			alert("stoklarımızda " + siparisAdedi + adet + "urun mevcuttur, teşekkür ederiz.");
	 }
	 if(siparisOnayla)
	 {
		
		if(siparisAdedi < 1)
		siparisAdedi=1;
	
		for (donguDenetim=0 ; donguDenetim<siparisAdedi; donguDenetim ++)
		geciciDizgi += ", "+ urun;
	}
		document.getElementById("p-1").innerHTML=geciciDizgi;	
}


function temizle()
{
	document.getElementById("input-1").value="";
	document.getElementById("input-2").value="";
	document.getElementById("p-1").innerHTML=bilgiIletisi;

}