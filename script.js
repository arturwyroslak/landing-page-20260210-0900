// Minimal interaction: mobile nav toggle and form validation
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(menu.hasAttribute('hidden')){ menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden',''); }
    });
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      if(!name){ status.textContent = 'Proszę podać imię.'; return; }
      if(!email || !/^\S+@\S+\.\S+$/.test(email)){ status.textContent = 'Proszę podać poprawny email.'; return; }
      status.textContent = 'Dziękujemy! Formularz został wysłany (symulacja).';
      form.reset();
    });
  }
});
