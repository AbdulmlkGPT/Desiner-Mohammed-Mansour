
const title = document.querySelector(".cont h2");
const title_p=document.querySelector(".cont p");
const elements=document.querySelectorAll(".direct", "direct p", "direct h2", "direct h3");
const cards_p=document.querySelectorAll(".card .ctext p");
const items = document.querySelectorAll(".item");
const info_conected = document.querySelector(".info-conected");







const content_items_ar=[
  '<h3>ملخص</h3><p>مصمم جرافيك محترف ومطور واجهات أمامية ، لدي أكثر من 5 سنوات من الخبرة في تصميم الشعار وهويات الأعمال والعروض التقديمية وتصميم الواجهة الرقمية. وانا حاصل على دبلوم في التصميم الجرافيكي. خبرة في تطوير الواجهة الأمامية باستخدام HTML و CSS.</p>',
  '<h3>مهارات شخصية</h3> <ul class = "ulli" ><li>الإبداع والابتكار.</li><li>العمل الجماعي والتعاون.</li><li>التفكير النقدي وحل المشكلات.</li></ul>',
  null,
  '<h3>المهارات</h3><ul class = "ulli"><li>تصميم الشعارات والهويات التجارية.</li><li>تصميم العروض التقديمية والإعلانات.</li><li>تصميم الواجهات الرقمية والمواقع الإلكترونية.</li><li>إتقان برامج Adobe Creative Suite (Photoshop، Illustrator، InDesign).</li><li>تطوير الواجهة الأمامية باستخدام HTML و CSS.</li></ul>',
  
  '<h3>التعليم</h3><p>دبلوم في تصميم الجرافيك سمارت جول.</p>',
  '<h3>اللغات</h3><ul class = "ulli"><li>العربية</li><li > الانجليزية اساسيات</li></ul>',
  
];
const content_items_en=[];

const content_cards_ar=[
  "محترف لغة HTML.",
  "إتقن لغة CSS.",
  "محترف الفوتوشب"
];
const content_cards_en=[];




function language_ar(){
  
  elements.forEach(element =>{
    element.style="text-align:right; direction:rtl;";
    
  });
  
  if (!content_cards_en.length){
    for (var x=0;x<content_cards_ar.length;x++){
      content_cards_en.push(cards_p[x].innerHTML);
      cards_p[x].innerHTML=content_cards_ar[x];
    }
  }else{
    for (var x = 0; x < content_cards_ar.length; x++) {
      cards_p[x].innerHTML = content_cards_ar[x];
    }
  };
  
  

  document.querySelector(".lang").style="direction: ltr;"
  for (var x=0;x<content_items_ar.length;x++){
    content_items_en.push(items[x].innerHTML);
    if (content_items_ar[x]){
      items[x].innerHTML=content_items_ar[x];
    }
  };
  
  
  
  title.innerHTML="محمد منصور";
  title_p.innerHTML="مصمم جرافيك ومطور واجهات امامية";
  
  info_conected.querySelector("h3").innerHTML="معلومات التواصل";
  info_conected.querySelector("li").querySelector("h4").innerHTML="اليمن صنعاء";
  

  
};

function language_en(){
  
  elements.forEach(element =>{
    element.style="text-align:left; direction:ltr;";
    
  });

  for (var x=0;x<content_cards_en.length;x++){
    cards_p[x].innerHTML=content_cards_en[x];
  };
  
  

  document.querySelector(".lang").style="direction: ltr;"
  for (var x=0;x<content_items_ar.length;x++){
    if (content_items_ar[x]){
      items[x].innerHTML=content_items_en[x];
    }
  };
  
  
  
  title.innerHTML="Mohammed Mansour";
  title_p.innerHTML = "I'm a Graphic designer and frontend developer";
  
  info_conected.querySelector("h3").innerHTML="Contact Information";
  info_conected.querySelector("li").querySelector("h4").innerHTML="Yemen Sana'a";
  
  
};


const copy_gmail=document.querySelector(".Copy");

function openCopyGmail(){
  copy_gmail.style.display="flex";
};
function copyGmail(){
  // النص الذي تريد نسخه
  let gmail = "mohammedgpt5@gmail.com";
  
  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(gmail).then(function() {
          console.log("تم نسخ النص بنجاح: " + gmail);
      }, function(err) {
          console.error("فشل في نسخ النص: ", err);
      });
    }
  });
  copy_gmail.style.display="none";
};
