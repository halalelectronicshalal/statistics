// 1) Firebase Console → Project settings → Your apps → Web app → "firebaseConfig" ን እዚህ ይለጥፉ
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6SKNGi2XMT7-4n48ahrGhtllBygJydss",
  authDomain: "statistics-846f9.firebaseapp.com",
  projectId: "statistics-846f9",
  storageBucket: "statistics-846f9.firebasestorage.app",
  messagingSenderId: "552062240940",
  appId: "1:552062240940:web:862f2f7b47913c00a63709"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const SECTORS = ["ግብርና","ትምህርት","ጤና","ሆቴልና ቱሪዝም","ንግድና ሽያጭ","ግንባታ","አይቲና ቢሮ"];
export const TYPES = ["ሙሉ ጊዜ","ትርፍ ጊዜ","ኮንትራት","ልምምድ"];
export const PHONE = "0917794343", EMAIL = "winner.as177@gmail.com";
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const today = () => new Date().toISOString().slice(0,10);
export const fmt = d => { const [y,m,dd] = d.split("-"); return `${dd}/${m}/${y}`; };
export const isOpen = j => j.active && j.deadline >= today();
export function toast(m){document.querySelector(".toast")?.remove();const t=document.createElement("div");t.className="toast";t.setAttribute("role","status");t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
