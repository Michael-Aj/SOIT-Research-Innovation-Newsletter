(function () {
  const shareTitle = "SOIT Research + Innovation Newsletter | Issue 01 | September 2026";
  const shareText = "Read the STADIO School of Information Technology Research + Innovation Newsletter.";
  const url = window.location.href;

  document.querySelectorAll('[data-share="native"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (navigator.share) {
        try { await navigator.share({ title: shareTitle, text: shareText, url }); } catch (_) {}
      } else {
        await navigator.clipboard.writeText(url);
        const original = btn.textContent;
        btn.textContent = 'Link copied';
        setTimeout(() => btn.textContent = original, 1600);
      }
    });
  });

  document.querySelectorAll('[data-share="linkedin"]').forEach(link => {
    link.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
  });

  document.querySelectorAll('[data-share="email"]').forEach(link => {
    link.href = 'mailto:?subject=' + encodeURIComponent(shareTitle) + '&body=' + encodeURIComponent(shareText + '\n\n' + url);
  });

  document.querySelectorAll('[data-share="whatsapp"]').forEach(link => {
    link.href = 'https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + url);
  });
})();
