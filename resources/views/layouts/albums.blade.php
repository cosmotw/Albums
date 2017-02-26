<!DOCTYPE html>
<html>
    <head>
        <title>@yield('title')</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel=stylesheet type="text/css" href="{{ asset('/css/albums/index.css') }}">
        <link rel=stylesheet type="text/css" href="{{ asset('/css/reset.css') }}">
    </head>
    <body>
        <div class="container">
            @yield('content')
        </div>

        <script src="{{ asset('/js/albums/component.js') }}"></script>
    </body>
</html>
