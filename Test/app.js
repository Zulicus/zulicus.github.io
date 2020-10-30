(function () {
  //Global constants
  const username = location.hash.slice(1), //Retrieves what is put after the # in the URL
    listPeersButton = document.querySelector(".list-all-peers-button"),
    peersEl = document.querySelector(".peers");

  //Creates a new peer object
  let peer = new Peer(`${username}`, {
    host: "glajan.com",
    port: 8443,
    path: "/myapp",
    secure: true,
  });

  //Displays the userID on screen
  peer.on("open", (id) => {
    const myPeerIdEl = document.querySelector(".my-peer-id");
    myPeerIdEl.innerText = id;
  });
  peer.on("error", (errorMessage) => {
    console.error(errorMessage);
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
      //only listnes to clicks on buttons.
    if (!event.target.classList.contains("connect-button")) return;
    //Get peerId from button element
    let theirPeerId = event.target.innerText;

    //Connect to peer.
    const dataConnection = peer.connect(theirPeerId);
    dataConnection.on('open', ()=>{
        console.log('comlink online');
    })
  });
})();
