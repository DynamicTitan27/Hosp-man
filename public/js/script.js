const f=document.getElementById('appForm');
const st=document.getElementById('status');
const tb=document.getElementById('appTable');
const i={
  id:document.getElementById('patientId'),
  n:document.getElementById('patientName'),
  a:document.getElementById('patientAge'),
  d:document.getElementById('department'),
  dt:document.getElementById('appointmentDate')
};

const val=()=>{
  const idV=/^PID-\d{4}$/.test(i.id.value);
  const nV=/^[A-Za-z\s]{3,}$/.test(i.n.value);
  const aV=i.a.value>=1&&i.a.value<=120;
  const dV=i.d.value!=="";
  const td=new Date();
  td.setHours(0,0,0,0);
  const dtV=new Date(i.dt.value)>=td;
  
  if(idV&&nV&&aV&&dV&&dtV){
    st.textContent="Ready to Submit";
    st.style.color="green";
    return true;
  }
  st.textContent="Form is Incomplete";
  st.style.color="red";
  return false;
};

f.addEventListener('input',val);

f.onsubmit=async(e)=>{
  e.preventDefault();
  if(!val())return;
  await fetch('/book-appointment',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      patientId:i.id.value,
      patientName:i.n.value,
      patientAge:i.a.value,
      department:i.d.value,
      appointmentDate:i.dt.value
    })
  });
  f.reset();
  val();
  load();
};

const load=async()=>{
  const r=await fetch('/appointments');
  const d=await r.json();
  tb.innerHTML=d.map(x=>`<tr><td>${x.patientId}</td><td>${x.patientName}</td><td>${x.patientAge}</td><td>${x.department}</td><td>${new Date(x.appointmentDate).toISOString().split('T')[0]}</td></tr>`).join('');
};
load();
