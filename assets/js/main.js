$(document).ready(function () {
    $('.loading').fadeOut('slow', function () {
        $(this).remove();
    });

    //dark theme
    function changeThemeTo(theme) {
        localStorage.theme = theme;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');

            $('#theme-light').show();
            $('#theme-dark').hide();
        } else {
            document.documentElement.classList.remove('dark');

            $('#theme-dark').show();
            $('#theme-light').hide();
        }
    }

    if (localStorage.theme === 'light') {
        changeThemeTo('light');
    } else {
        changeThemeTo('dark');
    }

    $('#theme-dark').on('click', function () {
        changeThemeTo('dark');
    });

    $('#theme-light').on('click', function () {
        changeThemeTo('light');
    });

    // project
    $('#projects-title .open-more-description').on('click', function () {
        var idProjectToBeAppear = $(this).closest('section[id]').attr('id');

        $('#projects-title').fadeOut(function () {
            $('#projects-description').children(`section[for!='${idProjectToBeAppear}']`).hide('fast');
            $('#projects-description').fadeIn();
            $(`#projects-description [for='${idProjectToBeAppear}']`).fadeIn();
        });
    });

    $('.close-more-description').on('click', function () {
        $('#projects-description').fadeOut(function () {
            $('#projects-title').fadeIn();
        });
    });
});
