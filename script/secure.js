// This prevents users from using common shortcuts like "Print Screen" or right-clicking to inspect or save content.
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 's')) {
        alert('Screenshots are disabled!');
        e.preventDefault();
    }
});
// This blurs the content when the user switches to another application, discouraging screen captures.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        document.body.style.filter = 'blur(10px)';
    } else {
        document.body.style.filter = 'none';
    }
});
// Add a semi-transparent watermark over your content to make screenshots less useful.
// const watermark = document.createElement('div');
// watermark.style.position = 'fixed';
// watermark.style.top = '0';
// watermark.style.left = '0';
// watermark.style.width = '100%';
// watermark.style.height = '100%';
// watermark.style.pointerEvents = 'none';
// watermark.style.background = 'rgba(255, 255, 255, 0.5) url("images/komiko-logo.png") repeat';
// document.body.appendChild(watermark);