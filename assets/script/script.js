function load_state(ref) {
    location.href = ref;
}

let tgl = true

function tgl_bar() {
    if (tgl) {
        let mb = document.getElementById("mb")
        mb.style.display = "flex"
        tgl = false
    } else {
        let mb = document.getElementById("mb")
        mb.style.display = "none"
        tgl = true
    }
}