
// Meeting and event custom tab js start 
// document.addEventListener("DOMContentLoaded", function () {

//     const tabs = document.querySelectorAll(".tab-item");
//     const panes = document.querySelectorAll(".tab-pane");

//     tabs.forEach(tab => {
//         tab.addEventListener("click", function () {

//             if (tab.classList.contains("disabled")) return;

//             // Remove active from all tabs
//             tabs.forEach(t => t.classList.remove("active"));

//             // Add active on clicked tab
//             tab.classList.add("active");

//             // Hide all panes
//             panes.forEach(pane => pane.classList.remove("active"));

//             // Show the matching pane
//             let paneID = tab.getAttribute("data-tab");
//             document.getElementById(paneID).classList.add("active");

//         });
//     });

// });



document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-item");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            if (tab.classList.contains("disabled")) return;

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            panes.forEach(pane => pane.classList.remove("active"));

            let paneID = tab.getAttribute("data-tab");
            document.getElementById(paneID).classList.add("active");

        });
    });

});


// Meeting and event custom tab js end
