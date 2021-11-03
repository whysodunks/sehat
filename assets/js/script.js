//HEADER STICKY
const body = document.body;
let scrollEnd = 0;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > scrollEnd && !body.classList.contains(scrollDown)) {
    // SCROLL DOWN
    body.classList.add(scrollDown);
    body.classList.remove(scrollUp);
  } else if (
    currentScroll < scrollEnd &&
    body.classList.contains(scrollDown)
  ) {
    // SCROLL UP
    body.classList.add(scrollUp);
    body.classList.remove(scrollDown);
  }
  scrollEnd = currentScroll;
});


// CATEGORY
function toggleCategory(id) {
  var vaksinasi = document.getElementById("vaksinasi");
  var oksigen = document.getElementById("oksigen");
  var rumah_sakit = document.getElementById("rumah_sakit");
  var ambulans = document.getElementById("ambulans");
  var f_vaksinasi = document.getElementById("vaksinasi_form");
  var f_oksigen = document.getElementById("oksigen_form");
  var f_rumah_sakit = document.getElementById("rumah_sakit_form");
  var f_ambulans = document.getElementById("ambulans_form");
  if (id == 'vaksinasi') {
    vaksinasi.classList.add("title");
    oksigen.classList.remove("title");
    rumah_sakit.classList.remove("title");
    ambulans.classList.remove("title");

    f_vaksinasi.classList.add("show");
    f_oksigen.classList.remove("show");
    f_rumah_sakit.classList.remove("show");
    f_ambulans.classList.remove("show");
  } else if (id == 'oksigen'){
    oksigen.classList.add("title");
    vaksinasi.classList.remove("title");
    rumah_sakit.classList.remove("title");
    ambulans.classList.remove("title");

    f_oksigen.classList.add("show");
    f_vaksinasi.classList.remove("show");
    f_rumah_sakit.classList.remove("show");
    f_ambulans.classList.remove("show");
  } else if (id == 'rumah_sakit'){
    rumah_sakit.classList.add("title");
    vaksinasi.classList.remove("title");
    oksigen.classList.remove("title");
    ambulans.classList.remove("title");

    f_rumah_sakit.classList.add("show");
    f_vaksinasi.classList.remove("show");
    f_oksigen.classList.remove("show");
    f_ambulans.classList.remove("show");
  } else if (id == 'ambulans'){
    ambulans.classList.add("title");
    vaksinasi.classList.remove("title");
    rumah_sakit.classList.remove("title");
    oksigen.classList.remove("title");

    f_ambulans.classList.add("show");
    f_vaksinasi.classList.remove("show");
    f_oksigen.classList.remove("show");
    f_rumah_sakit.classList.remove("show");
  }
}


// POP UP
function togglePopup(id) {
  var popup = document.getElementById("pop-up");
  if (id) {
    popup.classList.add('d-block')
  }else{
    popup.classList.remove('d-block')
  }
}

// CHAT
function toggleSendChat() {
  var chat = document.getElementById("your-chat");
    chat.classList.add('d-block')
}

// SHARE
function toggleShare(id) {
  var share = document.getElementById("share");
  if (id) {
    share.classList.add('d-block')
  }else{
    share.classList.remove('d-block')
  }
}

// LIKE
function toggleLike(id) {
  var like = document.getElementById("suka");
  var like_red = document.getElementById("suka-red");
  var like_b = document.getElementById("suka-b");
  var like_red_b = document.getElementById("suka-red-b");
  if (id) {
    like.classList.add('d-none')
    like_red.classList.add('d-inline-block')
    like_b.classList.add('d-none')
    like_red_b.classList.add('d-inline-block')
  }else{
    like.classList.add('d-inline-block')
    like_red.classList.add('d-none')
    like_b.classList.add('d-inline-block')
    like_red_b.classList.add('d-none')
  }
}

// BLOG
function toggleBlog(id) {
  var semua = document.getElementById("semua");
  var covid = document.getElementById("covid");
  var vaksin = document.getElementById("vaksin");
  var usia_lanjut = document.getElementById("usia_lanjut");
  var anak_anak = document.getElementById("anak_anak");
  var f_covid = document.getElementById("covid_form");
  var f_vaksin = document.getElementById("vaksin_form");
  var f_usia_lanjut = document.getElementById("usia_lanjut_form");
  var f_anak_anak = document.getElementById("anak_anak_form");
  if (id == 'covid') {
    covid.classList.add("blog-active");
    vaksin.classList.remove("blog-active");
    usia_lanjut.classList.remove("blog-active");
    anak_anak.classList.remove("blog-active");
    semua.classList.remove("blog-active");

    f_covid.classList.remove("d-none");
    f_vaksin.classList.add("d-none");
    f_usia_lanjut.classList.add("d-none");
    f_anak_anak.classList.add("d-none");
  } else if (id == 'vaksin'){
    vaksin.classList.add("blog-active");
    covid.classList.remove("blog-active");
    usia_lanjut.classList.remove("blog-active");
    anak_anak.classList.remove("blog-active");
    semua.classList.remove("blog-active");

    f_vaksin.classList.remove("d-none");
    f_covid.classList.add("d-none");
    f_usia_lanjut.classList.add("d-none");
    f_anak_anak.classList.add("d-none");
  } else if (id == 'usia_lanjut'){
    usia_lanjut.classList.add("blog-active");
    covid.classList.remove("blog-active");
    vaksin.classList.remove("blog-active");
    anak_anak.classList.remove("blog-active");
    semua.classList.remove("blog-active");

    f_usia_lanjut.classList.remove("d-none");
    f_covid.classList.add("d-none");
    f_vaksin.classList.add("d-none");
    f_anak_anak.classList.add("d-none");
  } else if (id == 'anak_anak'){
    anak_anak.classList.add("blog-active");
    covid.classList.remove("blog-active");
    usia_lanjut.classList.remove("blog-active");
    vaksin.classList.remove("blog-active");
    semua.classList.remove("blog-active");

    f_anak_anak.classList.remove("d-none");
    f_covid.classList.add("d-none");
    f_vaksin.classList.add("d-none");
    f_usia_lanjut.classList.add("d-none");
  } else if (id == 'semua'){
    semua.classList.add("blog-active");
    anak_anak.classList.remove("blog-active");
    covid.classList.remove("blog-active");
    usia_lanjut.classList.remove("blog-active");
    vaksin.classList.remove("blog-active");

    f_anak_anak.classList.remove("d-none");
    f_covid.classList.remove("d-none");
    f_vaksin.classList.remove("d-none");
    f_usia_lanjut.classList.remove("d-none");
  }
}


// PAGINATION BLOG
function showBlog(){
  let show = document.getElementById('blog-pagination') 
  let button = document.getElementById('blog-pagination-button') 
  show.classList.add("d-flex");
  button.classList.add("d-none");
}

// POP UP DONASI
function toggleDonasi(id) {
  var bayar = document.getElementById("pop-up-donasi");
  var success = document.getElementById("pop-up-donasi-success");
  if (id == 'donasi') {
    bayar.classList.add('d-block')
  }else if(id == 'donasi-success'){
    bayar.classList.remove('d-block')
    success.classList.add('d-block')
  }else{
    bayar.classList.remove('d-block')
    success.classList.remove('d-block')
  }
}

// CHAT LIVE
function toggleChatLive() {
  var chat_b = document.getElementById("chat-button-person");
  var chat_1 = document.getElementById("chat-isi-1");
  var chat_2 = document.getElementById("chat-isi-2");
  var empty = document.getElementById("chat-empty");
  var notif = document.getElementById("chat-notif");
    chat_b.classList.add('bg-chat-person')
    chat_1.classList.add('d-block')
    chat_2.classList.add('d-block')
    empty.classList.add('d-none')
    notif.classList.add('d-none')
}

// BLOG
function toggleUrgentCall(id) {
  var covid = document.getElementById("covid");
  var ambulans = document.getElementById("ambulans");
  var crash = document.getElementById("crash");
  var first_aid = document.getElementById("first_aid");
  if (id == 'covid') {
    covid.classList.add("urgent-active");
    ambulans.classList.remove("urgent-active");
    crash.classList.remove("urgent-active");
    first_aid.classList.remove("urgent-active");
  } else if (id == 'ambulans'){
    ambulans.classList.add("urgent-active");
    covid.classList.remove("urgent-active");
    crash.classList.remove("urgent-active");
    first_aid.classList.remove("urgent-active");
  } else if (id == 'crash'){
    crash.classList.add("urgent-active");
    covid.classList.remove("urgent-active");
    ambulans.classList.remove("urgent-active");
    first_aid.classList.remove("urgent-active");
  } else if (id == 'first_aid'){
    first_aid.classList.add("urgent-active");
    covid.classList.remove("urgent-active");
    crash.classList.remove("urgent-active");
    ambulans.classList.remove("urgent-active");
  }
}

function toggleUrgentCallSuccess(id) {
  var urgent_call = document.getElementById("urgent-call");
  var urgent_call_success = document.getElementById("urgent-call-success");
  var urgent_call_height = document.getElementById("urgent-call-height");
    urgent_call.classList.add("d-none");
    urgent_call_success.classList.add("d-block");
    urgent_call_height.classList.add("h-100vh");

} 

function toggleProfile(id) {
  var artikel = document.getElementById("artikel");
  var live_edukasi = document.getElementById("live_edukasi");
  var live_chat = document.getElementById("live_chat");
  var artikel_t = document.getElementById("artikel_t");
  var live_edukasi_t = document.getElementById("live_edukasi_t");
  var live_chat_t = document.getElementById("live_chat_t");
  if (id =='artikel') {
    artikel.classList.add('d-block');
    live_edukasi.classList.remove('d-block');
    live_chat.classList.remove('d-block');
    artikel_t.classList.add('blog-active');
    live_edukasi_t.classList.remove('blog-active');
    live_chat_t.classList.remove('blog-active');
  }else if (id == 'live_edukasi') {
    live_edukasi.classList.add('d-block');
    artikel.classList.remove('d-block');
    live_chat.classList.remove('d-block');
    live_edukasi_t.classList.add('blog-active');
    artikel_t.classList.remove('blog-active');
    live_chat_t.classList.remove('blog-active');
  }else if (id == 'live_chat') {
    live_chat.classList.add('d-block');
    artikel.classList.remove('d-block');
    live_edukasi.classList.remove('d-block');
    live_chat_t.classList.add('blog-active');
    artikel_t.classList.remove('blog-active');
    live_edukasi_t.classList.remove('blog-active');
  }
}


// SEARCH LAYANAN
function toggleLSearch(id){
  var search = document.getElementById("pop-up-search");
  if (id) {
    search.classList.add('d-block')
  }else{
    search.classList.remove('d-block')
  }
}

function toggleLCategory(id){
  var c1 = document.getElementById("layanan-category1");
  var c2 = document.getElementById("layanan-category2");
  var c3 = document.getElementById("layanan-category3");
  if (id=='layanan-category1') {
    c1.classList.add('layanan-category')
    c2.classList.remove('layanan-category')
    c3.classList.remove('layanan-category')
  }else if (id=='layanan-category2'){
    c1.classList.remove('layanan-category')
    c2.classList.add('layanan-category')
    c3.classList.remove('layanan-category')
  }else if (id=='layanan-category3'){
    c1.classList.remove('layanan-category')
    c2.classList.remove('layanan-category')
    c3.classList.add('layanan-category')
  }
}