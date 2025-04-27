document.querySelectorAll('.btnDetail').forEach(item => {
	item.addEventListener('click', (e) => {
		const parent = e.target.parentNode.parentNode;

        const gambar = parent.querySelector('.card-img-top').src;
        const harga = parent.querySelector('.harga').innerHTML;
        const judul = parent.querySelector('.card-text').innerHTML;
        const deskripsi = parent.querySelector('.deskripsi').innerHTML;
		

		const tombolModal = document.querySelector('.btnModal');
		tombolModal.click();

		document.querySelector('.modalTitle').innerHTML = judul;
		const image = document.createElement('img');
		image.src = gambar;
		image.classList.add('w-100');
		document.querySelector('.modalImage').innerHTML = '';
		document.querySelector('.modalImage').appendChild(image);
		document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
		document.querySelector('.modalHarga').innerHTML = harga;

		const nohp = '62895423468693';
		const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=haloo, sayaa mau pesan produk ini ${gambar}`;

		document.querySelector('.btnBeli').href = pesan;
	});
	});
