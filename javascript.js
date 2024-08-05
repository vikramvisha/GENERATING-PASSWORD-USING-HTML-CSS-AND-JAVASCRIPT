
function generate() {
    let length = document.getElementById('pas').value;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let pass = "";
    for (let i = 0, n = chars.length; i < length; ++i) {
        pass += chars.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('genpass').value = pass;
}