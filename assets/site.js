// Cascino Builders: the little bits of behaviour. No dependencies.
(function () {
  // Drawings ink themselves in the first time they scroll into view.
  var drawings = document.querySelectorAll('.drawing');
  if (drawings.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
        });
      }, { threshold: 0.3 });
      drawings.forEach(function (d) { io.observe(d); });
    } else {
      drawings.forEach(function (d) { d.classList.add('on'); });
    }
  }

  // "Copy address" buttons.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('span');
    var status = document.querySelector('.copy-status');
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        if (label) label.textContent = 'Copied';
        if (status) status.textContent = text + ' is on your clipboard.';
        setTimeout(function () { if (label) label.textContent = 'Copy address'; }, 2200);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () {
          if (status) status.textContent = 'Couldn’t copy. The address is ' + text + '.';
        });
      } else {
        var r = document.createRange(), el = document.querySelector('.email');
        if (el) { r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
        if (status) status.textContent = 'Selected. Press Ctrl+C or ⌘C to copy.';
      }
    });
  });
})();
