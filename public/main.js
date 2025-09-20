document.getElementById('call-express').addEventListener('click', async ()=>{
  const res = await fetch('/api/hello');
  const j = await res.json();
  document.getElementById('api-result').textContent = `Express: ${j.msg}`;
});

document.getElementById('call-flask').addEventListener('click', async ()=>{
  const res = await fetch('http://localhost:5000/api/hello');
  const j = await res.json();
  document.getElementById('api-result').textContent = `Flask: ${j.msg}`;
});
