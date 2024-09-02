function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(600).then(() => { window.location.href = "/blog"; });