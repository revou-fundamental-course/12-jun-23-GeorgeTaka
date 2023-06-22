function konversi() {
    let suhu = document.getElementById("suhu").value;
    let satuan = document.getElementById("satuan").value;
    let hasil;
  
    if (satuan == "celsius") {
      hasil = suhu * 1.8 + 32;
    } else {
      hasil = (suhu - 32) / 1.8;
    }
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  document.getElementById("konversi").addEventListener("click", konversi);
  