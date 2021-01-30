jQuery(function () {
    /* 
     * Test Content 
     */

    var listcontent = '<ul class="list-group my-3 mx-5">' +
        '<li class="list-group-item list-group-item-primary">Hitchhiker\'s Guide to the Galaxy - list-group-item-primary</li>' +
        '<li class="list-group-item list-group-item-secondary">The Restaurant at the End of the Universe - list-group-item-secondary</li>' +
        '<li class="list-group-item list-group-item-success">Life, the Universe and Everything - list-group-item-success</li>' +
        '<li class="list-group-item list-group-item-warning">So Long, and Thanks for All the Fish - list-group-item-warning</li>' +
        '<li class="list-group-item list-group-item-danger">Mostly Harmless - list-group-item-danger</li>' +
        '</ul>';

    var booklist = [{
            title: "A Hitchhiker's Guide to the Galaxy"
        },
        {
            title: "The Restaurant at the End of the Universe"
        },
        {
            title: "Life, the Universe and Everything"
        },
        {
            title: "So Long, and Thanks for All the Fish"
        }
    ];

    testDS9 = {
        type: "odata",
        transport: {
            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
        },
        pageSize: 21
    };

    $testgrid = {
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            },
            pageSize: 15
        },
        groupable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            template: "<div class='hs-userphoto--grid-inline'" +
                "style='background-image: url(https://demos.telerik.com/kendo-ui/content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
                "<div class='hs-username--grid-inline'>#: ContactName #</div>",
            field: "ContactName",
            title: "Contact Name",
            width: 240
        }, {
            field: "ContactTitle",
            title: "Contact Title"
        }, {
            field: "CompanyName",
            title: "Company Name"
        }, {
            field: "Country",
            width: 150
        }]
    }

    /*
     * Main Menu 
     */
    jQuery(function () {

        $("#kendomenu").kendoMenu({
            dataSource: [{
                    text: "Home",
                    url: "index.html"
                },
                {
                    text: "Tabs",
                    url: "tabs.html"
                },
                {
                    text: "Grids",
                    url: "grids.html"
                },
                {
                    text: "Colors",
                    url: "colors.html"
                },
                {
                    text: "Charts",
                    url: "charts.html"
                },
                {
                    text: "Cards",
                    url: "cards.html"
                },
                {
                    text: "Panel Bars",
                    url: "panelbars.html"
                },
                {
                    text: "Sliders",
                    url: "sliders.html"
                },
                {
                    text: "ListView/Cards",
                    url: "listviewcards.html"
                },
                {
                    text: "Scheduler",
                    url: "scheduler.html"
                },
                {
                    text: "User Profile",
                    url: "usercards.html"
                },
                {
                    text: "Readme Docs",
                    url: "https://github.com/smchargue/HSConnect-20-Review"
                },
                // A test sub-item collection.            
                {
                    text: "Test Drop Down ",
                    items: [{
                        text: "Sub Item 1"
                    }, {
                        text: "Sub Item 2"
                    }]
                }
            ],
        });
        var pageparts = location.pathname.split('/');
        var page = pageparts[pageparts.length - 1]
        $('.k-menu a[href="' + page + '"]').parent('li').addClass('k-state-selected');
    });

    /*
     * Slider Code 
     */
    jQuery(function () {

        function rangeSliderOnSlide(e) {
            rangeSliderOnChange(e);
        }

        function rangeSliderOnChange(e) {
            var $parent = jQuery(e.sender.element).closest('.k-slider');;
            var values = e.value.toString().split(',');
            if (values.length === 2) {
                var min = kendo.toString(parseFloat(values[0]), "c0");
                var max = kendo.toString(parseFloat(values[1]), "c0");
                $parent.siblings('.hs-slider-lowerlimit').text(min);
                $parent.siblings('.hs-slider-upperlimit').text(max);
            }
        }

        $("#slidera").kendoRangeSlider({
            min: 0,
            max: 100,
            smallStep: 10,
            largeStep: 25,
            tickPlacement: "both"
        });
        $("#slidera2").kendoSlider({
            min: 0,
            max: 100,
            value: 50,
            smallStep: 10,
            largeStep: 25
        });

        $("#sliderb").kendoRangeSlider({
            change: rangeSliderOnChange,
            slide: rangeSliderOnSlide,
            min: 0,
            max: 1600,
            selectionStart: 200,
            selectionEnd: 1400,
            smallStep: 100,
            largeStep: 250,
            tickPlacement: "both"
        });

        $("#sliderc").kendoRangeSlider({
            change: rangeSliderOnChange,
            slide: rangeSliderOnSlide,
            min: 0,
            max: 1600,
            selectionStart: 200,
            selectionEnd: 1400,
            smallStep: 10,
            largeStep: 250,
            tickPlacement: "both"
        });
    });

    /*
     * Panel Bar Code
     */
    jQuery(function () {

        var ds = {
            dataSource: [{
                    text: "Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibus finxerit?",
                    content: listcontent,
                    encoded: true
                },
                {
                    text: "Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret?",
                    content: listcontent,
                    encoded: true
                },
                {
                    text: "Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit?",
                    content: listcontent,
                    encoded: true
                }
            ]
        };

        $('#pb1').kendoPanelBar(ds);

        $('#panelbars-toolbar').kendoToolBar({
            items: [{
                    type: "button",
                    togglable: true,
                    text: "minimal",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "iconleft",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "plusm",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "chevron",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "ellipsis",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "noicon",
                    selected: false
                }
            ],
            toggle: function (e) {
                $('#pb1').toggleClass('hs-panelbar-' + e.item.options.text);
                var cl = $('#pb1').attr('class').split(' ');
                classes = cl.filter(function (item, idx) {
                    return item.startsWith('hs');
                });
                $('#class-list').text('Classes: ' + classes.join(' '));
            }
        });
    });

    /*
     * Grid Demo
     */
    jQuery(function () {
        $("#tabgrid").kendoTabStrip().data("kendoTabStrip");
        $("#plaingrid").kendoGrid($testgrid);
        $("#grid2").kendoGrid($testgrid);
        $("#grid3").kendoGrid($testgrid);
        $("#grid4").kendoGrid($testgrid);

        $('#grid-toolbar').kendoToolBar({
            items: [{
                    type: "buttonGroup",
                    id: "btngroup",
                    buttons: [{
                            text: "plaingrid",
                            togglable: true,
                            group: "controlGroup",
                            selected: true
                        },
                        {
                            text: "tabgrid",
                            togglable: true,
                            group: "controlGroup",
                            selected: false
                        },
                        {
                            text: "cardgrid",
                            togglable: true,
                            group: "controlGroup",
                            selected: false
                        },
                        {
                            text: "panelgrid",
                            togglable: true,
                            group: "controlGroup",
                            selected: false
                        }
                    ]
                },
                {
                    type: "button",
                    togglable: true,
                    text: "flush",
                    selected: false
                }
            ],
            toggle: function (e) {
                var id = '#' + e.item.options.text;
                if (e.group === 'controlGroup') {
                    $('.gridcontainer').addClass('d-none');
                    $(id + '.gridcontainer').removeClass('d-none');
                } else {
                    $('.k-tabstrip').toggleClass('hs-tabstrip-flush');
                }
            }
        });

        $('#grid-panelbar').kendoPanelBar();

    });

    /*
     * Chart Demo
     */
    jQuery(function () {
        $("#chart1").kendoChart({
            theme: "sass",
            title: {
                text: "Break-up of Spain Electricity Production for 2008"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                labels: {
                    visible: true,
                    format: "{0}%"
                }
            },
            series: [{
                type: "pie",
                overlay: {
                    gradient: "none"
                },
                data: [{
                    category: "Hydro",
                    value: 22
                }, {
                    category: "Solar",
                    value: 2
                }, {
                    category: "Nuclear",
                    value: 49
                }, {
                    category: "Wind",
                    value: 27
                }]
            }]
        });
    });

    /*
     * tab Demo
     */
    jQuery(function () {
        $("#tabsample1").kendoTabStrip().data("kendoTabStrip");

        // dynamically replicate active content to all content in the tabsample 
        $('#tabsample1 .k-content').html($('.k-content.k-state-active').html());

        $('#tabtoolbar').kendoToolBar({
            items: [{
                    type: "button",
                    togglable: true,
                    text: "full",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "uppercase",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "rounded",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "bicolor",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "fullcolor",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "radio",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "shaded",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "noshadow",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "flush",
                    selected: false
                }
            ],
            toggle: function (e) {
                $('#tabsample1').toggleClass('hs-tabstrip-' + e.item.options.text);
                var cl = $('#tabsample1').attr('class').split(' ');
                classes = cl.filter(function (item, idx) {
                    return item.startsWith('hs');
                });
                $('#class-list').text('Classes: ' + classes.join(' '));
            }
        });
    });

    // user profiel card demo
    jQuery(function () {
        $('#usercardtoolbar').kendoToolBar({
            items: [{
                    type: "button",
                    togglable: true,
                    text: "slim",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "nopic",
                    selected: false
                },
                {
                    type: "button",
                    togglable: true,
                    text: "picname",
                    selected: false
                }
            ],
            toggle: function (e) {
                $('.hs-userprofile-card').toggleClass('hs-userprofile-card-' + e.item.options.text);
                var cl = $('.hs-userprofile-card').attr('class').split(' ');
                classes = cl.filter(function (item, idx) {
                    return item.startsWith('hs');
                });
                //$('#class-list').text('Classes: ' + classes.join(' '));
            }
        });
    });


    /*
     * ListView Card Demo style="background-image: url(https://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"
     */
    jQuery(function () {
        $("#listviewcard0").kendoListView({
            template: '<div class="card hs-box-150 px-2 py-0 my-2 text-center justify-content-center bg-light">' +
                ' <div class="h5 font-weight-bold">${ContactName}</div>' +
                ' <div>${CompanyName}</div>'
                //+ ' <div class="pt-1"><img style="width:50px" src="https://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg" /></div>' 
                +
                '</div>',
            dataSource: testDS9
        });
        $("#listviewcard1").kendoListView({
            template: '<div class="card p-2 text-center bg-light">' +
                '  <div>${ContactName}</div>' +
                '  <div>Job Title: ${ContactTitle}</div>' +
                '  <div>${CompanyName}</div>' +
                '  <div>${Country}</div>' +
                ' <div class="pt-1"><img  src="https://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg" /></div>' +
                ' # if (ContactTitle==="Owner") { # <div class="my-3 small">For ContactTitle=Owner, we are going to inject some additional text to demonstrate cards that have more content than the other cards</div> # } #' +
                '</div>',
            dataSource: testDS9
        });

        $('#book-list-1, #book-list-2, #book-list-3').kendoListView({
            dataSource: {
                data: booklist
            },
            template: '<li class="list-group-item">#:title#</li>'
        })

    });
});