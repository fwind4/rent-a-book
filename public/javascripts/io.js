if ($('#logged-in').val() === 'true') {
    var socket = io();
    var opts = { autoUpgrade: true, peerOpts: { numClients: 10 } };
    var p2p = new P2P(socket, opts);

    p2p.on("file", function (stream) {
        window.open((window.URL || window.webkitURL).createObjectURL(new Blob(stream)));
    });

    p2p.on("req-file", function (path) {
        
        $('#file-path').html(path);
        $('#transfer-modal').modal('show');
        $('#transfer-btn').on('click', function (e) {
            ss.forceBase64 = true;
            var input = document.getElementById('file-transfer');
            var file = input.files[0];
            var stream = ss.createStream();

            ss(socket).emit("file", stream, { size: file.size, name: file.name });
            var blobStream = ss.createBlobReadStream(file);
            var size = 0;
            blobStream.on("data", function (chunk) {
                size += chunk.length;
                $('#file-path').html(Math.floor(size / file.size * 100) + "%");
            });
            blobStream.pipe(stream);
        });
    });
}

function getDoc(path) {
    ss(socket).emit("req-file", path);
}
