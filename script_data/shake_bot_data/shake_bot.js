
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="thumbnail"
        content="https://cdn.discordapp.com/attachments/817848403857375262/1003418787221090315/flipaholicsapp.png" />
    <meta name="description"
        content="Flipaholics Pro, Flipaholics Discord. Home of Shake Bot, RS3's most accurate & complete item/price checking database, automatic profit tracking, and automatic p2p trade matching.">
    <meta name="keywords"
        content="Flipaholics, flipaholics pro, flipaholics discord, shake bot, price check bot, price check, price checking, PC, profit tracking, p2p trade matching, street price, runescape 3, rs3, flipping, item database, price database, rs item price graph">
    <meta name="author" content="Shake">


    <title></title>
    <link rel="apple-touch-icon" sizes="128x128"
        href="https://cdn.discordapp.com/attachments/817848403857375262/1003418787221090315/flipaholicsapp.png">
    <link rel="icon"
        href="https://cdn.discordapp.com/attachments/817848403857375262/1003418787221090315/flipaholicsapp.png">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQLXB5XDZ1"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <link href="https://www.flipaholics.pro/static/css/style3.css" rel="stylesheet">
    <link href="https://www.flipaholics.pro/static/css/mystyle.css" rel="stylesheet">

    <script src="https://kit.fontawesome.com/f6d226a73b.js" crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQLXB5XDZ1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-ZQLXB5XDZ1');


        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    </script>


</head>


<body>
    <div class="wrapper">
        <!-- Page Content  -->

        <div id="content">
            <nav style="z-index: 99998;">
                <div class="container-fluid">

                    <span class="almostwhiteheader"
                        style="display: flex; justify-content: center; font-size: .7em; margin-top: -5px; margin-left: -20px;"><a
                            href="http://127.0.0.1:8078/alt1latesttrades"><img class="discordimage"
                                style="height: 23px; width: 23px; margin-top: -5px; margin-left: 10px;"
                                src="https://media.discordapp.net/attachments/1067188975636320368/1069704783264493658/FLIP-spin-logo_small.gif">Flipaholics.Pro
                        </a>
                        <a href="https://discord.gg/H227QEs8M3" target="_blank"><img class="discordimage"
                                style="height: 23px; width: 23px; margin-top: -5px; margin-left: 10px;"
                                src="https://cdn.discordapp.com/attachments/817848403857375262/1003142364329672764/discord_icon.png"></a>

                        <button class="btn btn-dark d-inline-block d-lg-none ml-auto bg-black" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" id="navbutton"
                            aria-label="Toggle navigation"
                            style=" color: goldenrod; background-color: transparent; border: none; border-color: transparent; margin-top: -10px; margin-left: -10px; margin-right: 2px;">
                            <i class="fas fa-align-justify"></i>
                        </button></span>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent"
                        style="font-size: .6em; line-height: 5px;">
                        <ul class="nav navbar-nav ml-auto">

                            <li class="nav-item {{'active' if active_page == 'Price Check' }} ">
                                <a class="nav-link" style="color:rgb(223, 217, 251); float: right;"
                                    href="/alt1home">Home</a>
                            </li>
                            <li class="nav-item {{'active' if active_page == 'Record Trades' }}">
                                <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/alt1">Submit
                                    Transaction Records</a>
                            </li>
                            <li class="nav-item {{'active' if active_page == 'Latest Trades' }}">
                                <a class="nav-link" style="color:rgb(223, 217, 251); float: right;"
                                    href="/alt1latesttrades">Latest Trades</a>
                            </li>
                            <li class="nav-item {{'active' if active_page == 'Marketplace' }}">
                                <a class="nav-link" style="color:rgb(223, 217, 251); float: right;"
                                    href="/alt1marketplace">P2P Marketplace</a>
                            </li>
                            <li class="nav-item {{'active' if active_page == 'Alt1 Help' }}">
                                <a class="nav-link" style="color:rgb(223, 217, 251); float: right;"
                                    href="/alt1help">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-md" style="max-width: 200%; min-width: 100%; margin-top: -5px;">
                <div class="input-group">
                    <div class="form-outline" style="margin-bottom: 50px;">
                        <form method="post" id="pc1" action="/alt1pc">

                            <input class="form-control" required type="text" id="itemsearch" name="query"
                                placeholder="Price Check" style="display: flex; justify-content: left;">

                    </div>
                    <button class="btn btn-primary" id="button1">
                        <i class="fas fa-search"></i>
                    </button></form>
                    <br>
                </div>
            </div>
            <div id="output"></div>
        </div>
    </div>
    <div class="overlay"></div>



    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>
    <script src="/alt1/index.f1f70dce5dfa1f06a8ba.bundle.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>

    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
    <script>
        var refreshButton = document.createElement("button");


        refreshButton.innerHTML = `<i class="fas fa-sync-alt" style="color: goldenrod;"></i>`;

        refreshButton.style.position = "fixed";
        refreshButton.style.top = "10px";
        refreshButton.style.right = "3px";
        refreshButton.style.zIndex = "1000";

        refreshButton.style.backgroundColor = "transparent";

        refreshButton.style.borderRadius = "50%";
        refreshButton.style.border = "transparent";



        refreshButton.onclick = function () {
            window.location.reload();

            window.scrollTo(0, 0);

            refreshButton.blur();
        };
        document.body.appendChild(refreshButton);

        var style = document.createElement('style');
        style.innerHTML = `
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1; 
            }
            ::-webkit-scrollbar-thumb {
                background: #888; 
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #555; 
            }
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-thumb {
                background: goldenrod;
            }
            ::-webkit-scrollbar-track {
                background: #36393f;
            }
        `;
        // enable horizontal scrolling when there is overflow,
        style.innerHTML += `
            .mCustomScrollBox {
                overflow: auto;
            }
            .mCustomScrollBox::-webkit-scrollbar {
                height: 5px;
            }
        `;


        document.head.appendChild(style);


        var form1 = document.getElementById("itemsearch");
        var button1 = document.getElementById("button1");
        var pc1 = document.getElementById("pc1");
        form1.placeholder = "Price Check";
        form1.style.backgroundColor = "transparent";
        form1.style.borderColor = "#5865f2";
        form1.style.color = "white";
        form1.style.textAlign = "left";
        form1.style.paddingLeft = "3px";
        form1.style.height = "25px";
        form1.style.fontSize = "12px";
        form1.style.position = "absolute";
        form1.style.top = "5px";
        form1.style.left = "50%";
        form1.style.transform = "translate(-50%, 0%)";
        form1.style.maxWidth = "80%";

        button1.style.position = "absolute";
        button1.style.top = "5px";
        button1.style.right = "10%";
        button1.style.fontSize = "12px";
        button1.style.height = "25px";
        button1.style.width = "25px";
        button1.innerHTML = "PC";
        button1.style.display = "flex";
        button1.style.justifyContent = "center";
        button1.style.padding = "3px";
        button1.style.backgroundColor = "#5865f2";
        button1.style.borderColor = "transparent";

        var back_button = document.createElement("button");
        back_button.style.position = "fixed";
        back_button.style.top = "55px";
        back_button.style.left = "1px";
        back_button.style.zIndex = "1000";
        back_button.style.backgroundColor = "transparent";
        back_button.style.borderRadius = "50%";
        back_button.style.border = "transparent";
        back_button.style.height = "15px";
        back_button.style.width = "5px";
        back_button.style.display = "flex";
        back_button.style.justifyContent = "center";
        back_button.style.alignItems = "center";
        back_button.style.fontSize = "30px";
        back_button.style.color = "goldenrod";
        back_button.style.opacity = "0.5";
        back_button.style.transition = "opacity 0.2s";
        back_button.style.cursor = "pointer";
        back_button.innerHTML = `<i class="fa-solid fa-circle-arrow-left"></i>`;
        back_button.onclick = function () {
            window.history.back();
        };
        document.body.appendChild(back_button);

    </script>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const initial_query = urlParams.get("query");
        let initial_data = null;
        let old_search_string = "";
        let promise_id = null;
        let cached_results = {};
        let has_autocomplete = false;

        setGetParam = (key, value) => {
            if (history.pushState) {
                var params = new URLSearchParams(window.location.search);
                params.set(key, value);
                var newUrl = window.location.origin
                    + window.location.pathname
                    + '?' + params.toString();
                window.history.pushState({ path: newUrl }, '', newUrl);
            }
        }

        get_item_name = async (item_name, uid) => {
            setGetParam("query", item_name);
            fetch(`https://flipaholics.pro/get_item_names/${item_name}`, {
                method: "GET",
            })
                .then(res => {
                    return res.json();
                })
                .then(data => update_data(data, item_name, uid === promise_id ? true : false))
                .catch(err => {
                    console.error(err);
                });
        }

        handle_image_error = source => {
            source.src = 'https://cdn.discordapp.com/avatars/834244395926421524/04625d5e2f2b396e9656b75914560ec4.png?size=1024';
            source.onerror = "";
            return true;
        }

        sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

        processData = async user_typed => {
            if (cached_results.hasOwnProperty(user_typed)) {
                console.log("we have cached data");
                update_data(user_typed !== "" ? cached_results[user_typed] : []);
                old_search_string = user_typed;
                return;
            }

            if (user_typed.length < 3) {
                update_data([]);
                old_search_string = user_typed;
                return;
            }
            await sleep(100);

            let updated_user_typed = $("#itemsearch").val().toLowerCase();

            if (cached_results.hasOwnProperty(user_typed)) {
                console.log("we have cached data");
                update_data(user_typed !== "" ? cached_results[user_typed] : []);
                old_search_string = user_typed;
                return;
            }

            if (user_typed.length < 3) {
                update_data();
                old_search_string = user_typed;
                return;
            }

            if (user_typed === old_search_string || updated_user_typed !== user_typed) return;

            if (user_typed === "") {
                old_search_string = "";
                return;
            }

            promise_id = getRandomInt(1000000).toString()
            get_item_name(user_typed, promise_id);
            old_search_string = user_typed;
        }

        update_data = (items = [], item_name = "", should_update = true) => {
            if (item_name !== "" && !cached_results.hasOwnProperty(item_name)) cached_results[item_name] = items;

            if (!should_update) return;

            if (items.length > 0) {
                has_autocomplete = true;
                $("#itemsearch").autocomplete({
                    source: (request, response) => {
                        response(items);
                    },

                    select: (event, ui) => {
                        window.location = "/alt1pc/" + ui.item.value;
                    },
                }).data("ui-autocomplete")._renderItem = (ul, item) => {
                    let image_url = `https://runescape.wiki/images/${item.label.replace(/ /g, "_")}_detail.png`;
                    if (item.label === "Bow of the Last Guardian") image_url = "https://media.discordapp.net/attachments/817848403857375262/1009301298333614151/unknown.png?width=576&height=498";
                    if (item.label === "Dark Facet of Luck") image_url = "https://cdn.discordapp.com/attachments/591316115859177543/1051402852624502794/4ADCEAC4-86D8-4DDF-8A69-DD3A17E27CC7.png";
                    if (item.label === "Dark Facet of Passage") image_url = "https://cdn.discordapp.com/attachments/591316115859177543/1051402851684978738/602B5339-911C-4F2F-838F-1E3701824EAB.png";
                    if (item.label === "Dark Facet of Grace") image_url = "https://cdn.discordapp.com/attachments/591316115859177543/1051402852054081616/00CA65A8-EEDC-49A9-944F-F31068F59ECE.png";
                    if (item.label === "Halo of returning") image_url = "https://cdn.discordapp.com/attachments/591316115859177543/1051402851294912552/B9833FD6-7D88-4DF1-BB4B-D8C4CAB4D538.png";
                    let inner_html = `<div><img style="width: 20px; height: 20px;" src="${image_url}" onerror="handle_image_error(this)">   ${item.label}</div>`;
                    return $("<li></li>")
                        .data("ui-autocomplete-item", item)
                        .append(inner_html)
                        .appendTo(ul);
                }

                if (has_autocomplete) {
                    $("#itemsearch").focus(() => {
                        if ($("#itemsearch").val()) $("#itemsearch").autocomplete('search', $("#itemsearch").val());
                    });

                    $("#itemsearch").autocomplete("close");
                    if (item_name !== "") $("#itemsearch").autocomplete("search", item_name);
                }
            } else {
                if (has_autocomplete) $("#itemsearch").autocomplete("destroy");
                has_autocomplete = false;
            }
        }

        $("#itemsearch").on("keyup", async event => {
            if ([37, 38, 39, 40].indexOf(event.keyCode || event.which) !== -1) {
                return;
            }

            processData($("#itemsearch").val().toLowerCase());
        });


        if (initial_query && initial_query !== "") {
            $("#itemsearch").val(initial_query);
            processData(initial_query.toLowerCase());
        }
    </script>

</body>

</html>




<!DOCTYPE html>
<html lang="en">

<head>
    

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="thumbnail" content="https://cdn.discordapp.com/attachments/817848403857375262/1069397426781298718/fl.png" />
    <meta name="description" content="Flipaholics Pro, Flipaholics Discord. Home of Shake Bot, RS3's most accurate & complete item/price checking database, automatic profit tracking, and automatic p2p trade matching.">
    <meta name="keywords" content="Flipaholics, flipaholics pro, flipaholics discord, shake bot, price check bot, price check, price checking, PC, profit tracking, p2p trade matching, street price, runescape 3, rs3, flipping, item database, price database, rs item price graph">
    <meta name="author" content="Shake">

    <title>About Shake Bot - Flipaholics</title>
    <link rel="apple-touch-icon" sizes="128x128" href="https://cdn.discordapp.com/attachments/817848403857375262/1069397426781298718/fl.png">
    <link rel="icon" href="https://cdn.discordapp.com/attachments/817848403857375262/1069397426781298718/fl.png">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQLXB5XDZ1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZQLXB5XDZ1');
    </script>

    <!-- Bootstrap CSS CDN -->
    <script
src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"></script>
<script
src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c="
crossorigin="anonymous"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Custom CSS -->
    <link href="https://www.flipaholics.pro/static/css/style3.css" rel="stylesheet">
    <link href="https://www.flipaholics.pro/static/css/mystyle.css" rel="stylesheet">
    <!-- Font Awesome kit -->
    <script src="https://kit.fontawesome.com/f6d226a73b.js" crossorigin="anonymous"></script>

    



</head>

<body>
    <div class="wrapper">
        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="z-index: 99998;">
    <div class="container-fluid">
        <span class="almostwhiteheader"><img class="topnavlogoimage" src="https://i.imgur.com/l2NSZZH.gif" /><a
                href="/home">Flipaholics.Pro</a>
            <a href="https://discord.gg/H227QEs8M3" target="_blank"><img class="discordimage"
                    src="https://i.imgur.com/SqxqujV.png"></a></span>

        <button class="btn btn-dark d-inline-block d-lg-none ml-auto bg-black" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">

                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/home">Home</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/alt1add">Alt1 App</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/latesttrades">Latest
                        Trades</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/marketplace">P2P
                        Marketplace</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;"
                        href="/Leaderboard">Leaderboard</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/premium">Premium</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/aboutflipaholics">About
                        Flipaholics</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" style="color:rgb(223, 217, 251); float: right;" href="/aboutshake">About Shake
                        Bot</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
            
<div class="container-md">
    <img class="responsive2"
        src="https://cdn.discordapp.com/avatars/834244395926421524/04625d5e2f2b396e9656b75914560ec4.png?size=1024" /><span
        class="almostwhite" style="color: goldenrod; font-size: 1.5em; font-weight: 600;"><span
            style="text-align: center;"> Get the Alt1 App!</span></span><br>

    <span class="almostwhite"><span style="font-size: .9em;">
            <span style="color: goldenrod;">
                The Alt1 App for Shake Bot allows you to effortlessly submit your recent Grand Exchange transactions by
                reading them directly off the History tab for you. You can also Price Check any tradeable item,
                view our Latest Trades, and Player-to-Player Marketplace directly from the app inside your RS game
                window. Here's how to get it:</span><br>
            <span style="color:goldenrod;">• </span>If you don't already have the Alt1 Toolkit app, <a
                href="https://runeapps.org/" style="color:rgb(66, 215, 215)">get it here</a><br><br>

            <span style="color:goldenrod;">• </span>Open RS3 and Alt1 Toolkit<br><br>

            <span style="color:goldenrod;">• </span>Click 'Alt1 Toolkit' in the top right of the RS window to open the
            menu<br><br>

            <span style="color:goldenrod;">• </span>Select 'Browser'<br><br>

            <span style="color:goldenrod;">• </span>Paste <span
                style="color:rgb(66, 215, 215)">https://flipaholics.pro/alt1</span> into the browser<br><br>

            <span style="color:goldenrod;">• </span>Click the gold 'Add app' button in the top right to add Shake
            Bot<br><br>

            <span style="color:goldenrod;">• </span>Ensure 'View screen' and 'Show overlay' are checked<br><br>

            <span style="color:goldenrod;">• </span><a href="https://youtu.be/vRCaYma9S88?si=zAa_mXB6HJGpjNZ7"
                style="color:rgb(66, 215, 215)">Watch this</a> to learn how to use the app!<br><br>

            <img src="https://i.imgur.com/h2YPDas.png?width=720&height=381" width="1080" height="571">


</div>
<span class="container-sm">
    <a href="https://discord.gg/H227QEs8M3" target="_blank">
        <div class="rounded-image-frame">
            <nobr><img class="rounded-image-frame" src="https://i.imgur.com/rpdOTZX.gif">
    </a></span></div>


        </div>
    </div>
    <div class="overlay"></div>

    

    <!-- jQuery CDN -->
    <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
        <script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c="
        crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <!-- jQuery Custom Scroller CDN -->
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
function readGETransaction() { return "Manually check your Grand Exchange History tab and submit transactions."; }
function priceCheck(item) { return `Manually price check "${item}" using the Alt1 app overlay.`; }
module.exports = { readGETransaction, priceCheck };
    </script>
    



</body>

</html>
module.exports = {
  prices: {
    "torstol": "5,200 GP", // Approx from recent trends
    "kwuarm": "1,136 GP",  // From Flipaholics
    "avantoe": "4,233 GP"   // From web data
  }
};