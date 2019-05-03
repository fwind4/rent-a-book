if ($('#logged-in').val() === 'true') {
    var socket = io();
    var opts = { autoUpgrade: true, peerOpts: { numClients: 10 } };
    var p2p = new P2P(socket, opts);

    p2p.on("file", function (stream) {
        console.log(stream);

    });

    p2p.on("req-file", function (path) {
        $("#file").change(function (e) {
            ss.forceBase64 = true;
            var file = e.target.files[0]
            ss.forceBase64 = true;
            var file = window.open(path);
            var stream = ss.createStream();

            ss(socket).emit("file", stream, { size: file.size, name: file.name });
            var blobStream = ss.createBlobReadStream(file);
            var size = 0;
            blobStream.on("data", function (chunk) {
                size += chunk.length;
                console.log(Math.floor(size / file.size * 100) + "%");
            });
            blobStream.pipe(stream);
        });
    });
}

function getDoc(path) {
    ss(socket).emit("req-file", path);
}
