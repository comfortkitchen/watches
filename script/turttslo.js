let memoryHog = [];

function eatRAM() {
  // Allocate 10MB chunks repeatedly
  const chunkSize = 10 * 1024 * 1024; // 10MB
  const chunk = new ArrayBuffer(chunkSize);
  memoryHog.push(chunk);

  console.log(`Allocated ${memoryHog.length * 10}MB`);

  // Repeat every 500ms
  setTimeout(eatRAM, 500);
}

eatRAM();
for (let i = 0; i < 100000; i++) {
  const div = document.createElement('div');
  div.textContent = 'Freeze Test ' + i;
  document.body.appendChild(div);
}