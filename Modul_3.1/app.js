(function () {
  //Global constants
  const username = location.hash.slice(1), //Retrieves what is put after the # in the URL,
    printMessage = (text, who) => {
      const div = document.createElement("div");
      const date = new Date();
      div.classList.add("message", who);
      if (who === "me")
        div.innerHTML = `${date.getHours()}:${date.getMinutes()}<div><xmp>${text}</xmp></div>`;
      if (who === "them")
        div.innerHTML = `<div><xmp>${text}</xmp></div>${date.getHours()}:${date.getMinutes()}`;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    },
    printMyMessage = (e) => {
      if (!dataConnection) return;
      if (newMessage.value === "") return;
      if (e.keyCode === 13 || e.type == "click") {
        dataConnection.send(`${username}: <xmp>${newMessage.value}</xmp>`);
        printMessage(`${username}: ${newMessage.value}`, "me");
        newMessage.value = "";
      }
      newMessage.focus();
    },
    theirVideoContainer = document.querySelector(".video-container.them"),
    videoOfThemEl = document.querySelector(".video-container.them video"),
    videoOfMeEl = document.querySelector(".video-container.me video"),
    sendButtonEl = document.querySelector(".send-new-message-button"),
    listPeersButton = document.querySelector(".list-all-peers-button"),
    newMessage = document.querySelector(".new-message"),
    messagesEl = document.querySelector(".messages"),
    startVideoButton = theirVideoContainer.querySelector(".start"),
    stopVideoButton = theirVideoContainer.querySelector(".stop"),
    peersEl = document.querySelector(".peers");

  //global variables
  let dataConnection = null,
    mediaConnection = null;

  //Starts the Camera and displays the stream
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then((stream) => {
      videoOfMeEl.srcObject = stream;
      videoOfMeEl.muted = true;
    });

  //Creates a new peer object
  let peer = new Peer(`${username}`, {
    host: "glajan.com",
    port: 8443,
    path: "/myapp",
    secure: true,
    config: {
      iceServers: [
        { urls: ["stun:eu-turn7.xirsys.com"] },
        {
          username:
            "1FOoA8xKVaXLjpEXov-qcWt37kFZol89r0FA_7Uu_bX89psvi8IjK3tmEPAHf8EeAAAAAF9NXWZnbGFqYW4=",
          credential: "83d7389e-ebc8-11ea-a8ee-0242ac140004",
          urls: [
            "turn:eu-turn7.xirsys.com:80?transport=udp",
            "turn:eu-turn7.xirsys.com:3478?transport=udp",
            "turn:eu-turn7.xirsys.com:80?transport=tcp",
            "turn:eu-turn7.xirsys.com:3478?transport=tcp",
            "turns:eu-turn7.xirsys.com:443?transport=tcp",
            "turns:eu-turn7.xirsys.com:5349?transport=tcp",
          ],
        },
      ],
    },
  });

  //Displays the userID on screen
  peer.on("open", (id) => {
    const myPeerIdEl = document.querySelector(".my-peer-id");
    myPeerIdEl.innerText = id;
  });

  //Displays errors in the log
  peer.on("error", (errorMessage) => {
    console.error(errorMessage);
  });

  //On incoming connection
  peer.on("connection", (connection) => {
    dataConnection && dataConnection.close();
    messagesEl.innerHTML = "";
    dataConnection = connection;
    const event = new CustomEvent("peer-changed", {
      detail: connection.peer,
    });
    document.dispatchEvent(event);
  });

  //Event listner for incoming video call.
  peer.on("call", (incomingCall) => {
    mediaConnection && mediaConnection.close();
    //Change state on start/stop button
    stopVideoButton.classList.add("active");
    startVideoButton.classList.remove("active");
    //Anwser incoming call
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((myStream) => {
        incomingCall.answer(myStream);
        mediaConnection = incomingCall;
        mediaConnection.on("stream", (theirStream) => {
          videoOfThemEl.muted = true;
          videoOfThemEl.srcObject = theirStream;
        });
      });
  });

  //Updates the list of online users when the Refresh list button is pressed
  listPeersButton.addEventListener("click", () => {
    peer.listAllPeers((peers) => {
      const listItems = peers
        .filter((peerId) => peerId !== peer._id)
        .map((peer) => {
          return `<li><button class="connect-button peerId-${peer}">${peer}</button></li>`;
        })
        .join("");
      const ul = "<ul>" + listItems + "</ul>";
      peersEl.innerHTML = ul;
    });
  });

  //Event listner for click peer button.
  peersEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("connect-button")) return;
    //Get peerId from button element
    let theirPeerId = event.target.innerText;
    //Close existing connection
    dataConnection && dataConnection.close();
    //Clears chat history
    messagesEl.innerHTML = "";
    //Connect to peer.
    dataConnection = peer.connect(theirPeerId);
    //recieves incomming messages
    dataConnection.on("open", () => {
      const event = new CustomEvent("peer-changed", {
        detail: theirPeerId,
      });
      document.dispatchEvent(event);
    });
  });

  //Listen for custom event 'peer-changed'
  document.addEventListener("peer-changed", (event) => {
    //Remove any pre-existing 'connected' classes from buttons
    document.querySelectorAll(".connect-button.connected").forEach((e) => {
      e.classList.remove("connected");
    });
    //Get clicked button
    const connectButtonEl = document.querySelector(`.peerId-${event.detail}`);
    theirVideoContainer.querySelector(
      ".name"
    ).innerText = `${event.detail} is connected`;
    //Add class 'connected' to clicked button
    connectButtonEl && connectButtonEl.classList.add("connected");
    newMessage.focus();
    dataConnection.on("data", (data) => {
      printMessage(data, "them");
    });
    theirVideoContainer.classList.add("connected");
    startVideoButton.classList.add("active");
    stopVideoButton.classList.remove("active");
  });

  //event lisnter for click "send"
  sendButtonEl.addEventListener("click", printMyMessage);
  newMessage.addEventListener("keyup", printMyMessage);

  //Event listner for click 'Start video chat'
  startVideoButton.addEventListener("click", () => {
    stopVideoButton.classList.add("active");
    startVideoButton.classList.remove("active");
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((myStream) => {
        mediaConnection && mediaConnection.close();
        const theirPeerId = dataConnection.peer;
        mediaConnection = peer.call(theirPeerId, myStream);
        mediaConnection.on("stream", (theirStream) => {
          videoOfThemEl.muted = false;
          videoOfThemEl.srcObject = theirStream;
        });
      });
  });
  stopVideoButton.addEventListener("click", () => {
    startVideoButton.classList.add("active");
    stopVideoButton.classList.remove("active");
    mediaConnection && mediaConnection.close();
  });
})();
