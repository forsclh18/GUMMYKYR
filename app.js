// --- Data Produk ---
const products = [ // produk 1
  {id:1,title:'G-Klassic Tee',category:'T-Shirt',price:150000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/d3/19/22/d31922d55240edbadce5096548c28969.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 2
  {id:2,title:'G-Klassic Tee',category:'T-Shirt',price:160000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/46/c2/95/46c295e750d0dcd43e419e2c29b6be43.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 3
  {id:3,title:'G-Klassic Tee',category:'T-Shirt',price:200000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/3c/3c/45/3c3c45c0234f3341fc8bdc15c926be18.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 4
  {id:4,title:'G-Klassic Tee',category:'T-Shirt',price:155000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/0f/04/35/0f0435bf48d0acb16d98d2dd328df7f8.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 5
  {id:5,title:'G-Klassic Tee',category:'T-Shirt',price:250000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/f1/20/b9/f120b9f68421f0afb1627f0db6c1fc9b.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 6
  {id:6,title:'G-Klassic Tee',category:'T-Shirt',price:230000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/33/13/32/331332befc7c4af0880f07e4c3f21016.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 7
  {id:7,title:'G-Klassic Tee',category:'T-Shirt',price:350000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/e8/6f/d4/e86fd46d60523fabdb2438661f6133fe.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 8
  {id:8,title:'G-Klassic Tee',category:'T-Shirt',price:260000,oldPrice:199000,popular:true,created:'2025-08-01',badge:'New',img:'https://i.pinimg.com/736x/72/02/c2/7202c2821da164bbbcc6c19c4229276d.jpg',desc:'Kaos katun 24s, cutting relaxed, sablon plastisol GUMMYKYR.',gallery:['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

  
// yang ini buat hoodie
        // 👇

// produk 9
  {id:9,title:'Stencil Hoodie',category:'Hoodie',price:400000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/a3/f2/71/a3f2714ad96d9cdc8992e12222a5f904.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 10
  {id:10,title:'Stencil Hoodie',category:'Hoodie',price:450000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/bb/37/27/bb3727aed3cd2e94342cb29991725198.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 11
  {id:11,title:'Stencil Hoodie',category:'Hoodie',price:480000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/e1/e7/95/e1e795b136b2bf333c9d183b1bac9e5b.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 12
  {id:12,title:'Stencil Hoodie',category:'Hoodie',price:399000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/95/e9/4e/95e94e4a0c43c3dc982047cbb35fd47c.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 13
  {id:13,title:'Stencil Hoodie',category:'Hoodie',price:375000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/85/91/8a/85918a9318255b21c6c4ddf4b00dc2ab.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 14
  {id:14,title:'Stencil Hoodie',category:'Hoodie',price:300000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/f2/d2/85/f2d285af1af2a14277aee555f6095f86.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 15
  {id:15,title:'Stencil Hoodie',category:'Hoodie',price:350000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/36/07/11/360711cabc4e77c24a8a8a3b1670b659.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

// produk 16
  {id:16,title:'Stencil Hoodie',category:'Hoodie',price:330000,oldPrice:0,popular:true,created:'2025-07-20',badge:'Best',img:'https://i.pinimg.com/736x/58/45/4e/58454e0ce9d2f1cd943e000c0e25d095.jpg',desc:'Hoodie fleece 330gsm, saku kangaroo, print stencil graffiti.',gallery:['https://images.unsplash.com/photo-1520975693416-35a7f1f8d6b0?q=80&w=1200','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200']},

 ];

 // --- Product Detail Page ---
document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('pTitle');
  const categoryEl = document.getElementById('pCategory');
  const priceEl = document.getElementById('pPrice');
  const oldPriceEl = document.getElementById('pOldPrice');
  const mainImgEl = document.getElementById('mainImg');
  const thumbsEl = document.getElementById('thumbs');
  const sizesEl = document.getElementById('sizes');
  const tabContentEl = document.getElementById('tabContent');
  const addBtn = document.getElementById('addBtn');

  // Cek apakah ini halaman product
  if (titleEl && categoryEl && priceEl) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = state.products.find(p => p.id === id);

    if (!product) return;

    // Set data produk
    titleEl.textContent = product.title;
    categoryEl.textContent = product.category;
    priceEl.textContent = fmt(product.price);
    oldPriceEl.textContent = product.oldPrice > 0 ? fmt(product.oldPrice) : "";

    // Gambar utama + thumbnail
    mainImgEl.src = product.img;
    thumbsEl.innerHTML = '';
    product.gallery.forEach(src => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.className = "shadow-sm";
      thumb.onclick = () => { mainImgEl.src = src; };
      thumbsEl.appendChild(thumb);
    });

    // Ukuran (contoh S, M, L, XL)
    const sizes = ['S', 'M', 'L', 'XL'];
    sizesEl.innerHTML = '';
    sizes.forEach(size => {
      const btn = document.createElement('button');
      btn.className = "btn btn-outline-dark btn-sm";
      btn.textContent = size;
      btn.onclick = () => {
        sizesEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };
      sizesEl.appendChild(btn);
    });

    // Tabs
    function renderTab(tab) {
      if (tab === 'desc') tabContentEl.textContent = product.desc;
      if (tab === 'detail') tabContentEl.textContent = "Bahan berkualitas tinggi, nyaman dipakai sehari-hari.";
      if (tab === 'ship') tabContentEl.textContent = "Pengiriman 1-3 hari kerja via JNE / J&T.";
    }
    renderTab('desc');

    document.querySelectorAll('.tabBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tabBtn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTab(btn.dataset.tab);
      });
    });

    // Tombol tambah keranjang
    addBtn.onclick = () => addToCart(product, 1);
  }
});


// --- State ---
const state = {
  filtered: [...products],
  cart: JSON.parse(localStorage.getItem('gkr_cart') || '[]')
};



// --- Utils ---
const ID = id => document.getElementById(id);
const fmt = n => n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

function saveCart() {
  localStorage.setItem('gkr_cart', JSON.stringify(state.cart));
}
function updateCartCount() {
  const el = ID('cartCount');
  if (el) el.textContent = state.cart.reduce((s, i) => s + i.qty, 0);
}

// --- Cart ---
function addToCart(p, qty = 1, size = null) {
  const i = state.cart.findIndex(it => it.id === p.id && it.size === size);
  if (i > -1) state.cart[i].qty += qty;
  else state.cart.push({ id: p.id, title: p.title, price: p.price, img: p.img, qty, size });
  saveCart(); renderCart(); updateCartCount();
}
function setQty(id, qty) {
  const it = state.cart.find(i => i.id === id);
  if (!it) return;
  it.qty = Math.max(1, qty);
  saveCart(); renderCart(); updateCartCount();
}
function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart(); renderCart(); updateCartCount();
}
function calcSubtotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}
function renderCart() {
  const list = ID('cartList');
  if (!list) return;
  list.innerHTML = '';
  if (!state.cart.length) {
    list.innerHTML = '<div class="p-4 text-center text-muted">Keranjang kosong</div>';
  } else {
    state.cart.forEach(it => {
      const row = document.createElement('div');
      row.className = 'd-flex align-items-center mb-3';
      row.innerHTML = `
        <img src="${it.img}" class="rounded me-3" style="width:60px;height:60px;object-fit:cover;">
        <div class="flex-grow-1">
          <div class="fw-semibold">${it.title}</div>
          <div class="small text-muted">${fmt(it.price)}${it.size ? ` - ${it.size}` : ''}</div>
          <div class="input-group input-group-sm mt-1" style="max-height:500px;max-width:120px;">
            <button class="btn btn-outline-secondary">-</button>
            <input type="number" class="form-control text-center" value="${it.qty}">
            <button class="btn btn-outline-secondary">+</button>
          </div>
        </div>
        <button class="btn btn-sm btn-link text-danger ms-2">Hapus</button>
      `;
      const [minus, input, plus] = row.querySelectorAll('button, input');
      minus.onclick = () => setQty(it.id, it.qty - 1);
      plus.onclick = () => setQty(it.id, it.qty + 1);
      input.onchange = e => setQty(it.id, parseInt(e.target.value || '1', 10));
      row.querySelector('.text-danger').onclick = () => removeFromCart(it.id);
      list.appendChild(row);
    });
  }
  ID('cartSubtotal').textContent = fmt(calcSubtotal());
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartCount();

  if (ID('checkoutBtn')) {
    ID('checkoutBtn').onclick = () => alert('Checkout dummy 😄');
  }
});

// --- Index Page ---
document.addEventListener('DOMContentLoaded', () => {
  const grid = ID('grid');
  if (grid) {
    function renderGrid() {
      grid.innerHTML = '';
      state.filtered.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3 product-card';
        
        col.innerHTML = `
          <div class="card max-h-500 border-0 shadow-sm position-relative">
            <a href="product.html?id=${p.id}">
              <img src="${p.img}" class="card-img-top" alt="${p.title}">
            </a>
            <span class="badge bg-dark position-absolute top-0 start-0 m-2">${p.badge}</span>
            <div class="card-body">
              <h6 class="card-title fw-bold mb-1">${p.title}</h6>
              <p class="text-muted small mb-2">${p.category}</p>
              <div class="fw-bold mb-3">${fmt(p.price)}</div>
              <button class="btn btn-dark w-100 addBtn">Tambah ke Keranjang</button>
            </div>
          </div>
        `;
        
        col.querySelector('.addBtn').onclick = () => addToCart(p, 1);
        grid.appendChild(col);
      });
    }
    renderGrid();
  }
});

// --- Product Page ---
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'), 10);
  if (!id) return;
  const p = products.find(x => x.id === id);
  if (!p) return;

  if (ID('pTitle')) {
    ID('pTitle').textContent = p.title;
    ID('pCategory').textContent = p.category;
    ID('pPrice').textContent = fmt(p.price);
    ID('pOldPrice').textContent = p.oldPrice ? fmt(p.oldPrice) : '';
    ID('mainImg').src = p.img;

    const thumbs = ID('thumbs');
    if (thumbs) {
      p.gallery.forEach(url => {
        const im = document.createElement('img');
        im.src = url;
        im.className = 'img-thumbnail me-2';
        im.style.width = '64px';
        im.style.height = '64px';
        im.style.objectFit = 'cover';
        im.onclick = () => ID('mainImg').src = url;
        thumbs.appendChild(im);
      });
    }

    const sizes = ID('sizes');
    ['S','M','L','XL'].forEach(s => {
      const btn = document.createElement('button');
      btn.textContent = s;
      btn.className = 'btn btn-outline-dark me-2';
      btn.onclick = () => {
        document.querySelectorAll('#sizes button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        btn.dataset.sel = 1;
      };
      sizes.appendChild(btn);
    });

    const tabC = ID('tabContent');
    function showTab(tab) {
      if (tab === 'desc') tabC.textContent = p.desc;
      else if (tab === 'detail') tabC.textContent = 'Bahan katun premium, jahitan rapih, sablon awet.';
      else if (tab === 'ship') tabC.textContent = 'Pengiriman 1-3 hari kerja via JNE/SiCepat.';
    }
    showTab('desc');

    document.querySelectorAll('.tabBtn').forEach(b => b.onclick = () => {
      document.querySelectorAll('.tabBtn').forEach(x => x.classList.remove('fw-semibold', 'border-bottom', 'border-dark'));
      b.classList.add('fw-semibold', 'border-bottom', 'border-dark');
      showTab(b.dataset.tab);
    });

    const addBtn = ID('addBtn');
    addBtn.onclick = () => {
      const sel = document.querySelector('#sizes button.active');
      if (!sel) return alert('Pilih ukuran dulu');
      addToCart(p, 1, sel.textContent);
      alert('Ditambahkan ke keranjang!');
    };
  }
});
