<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">

    <!-- Main styles for this application -->

    <link rel="stylesheet" href="{{ url('css/app.css') }}" type="text/css"/>
    <meta id="csrf-token" name="csrf-token" value="{{ csrf_token() }}">
</head>
<body>
<div id="app">
    <router-view></router-view>
</div>

<script src="{{ url('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
