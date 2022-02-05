<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Scripts Styles -->
    @vite

    <script>
        window.csrf_token = "{{ csrf_token() }}"
    </script>
</head>
<body>
    <noscript>
        <strong>Your browser does not support JavaScript!</strong>
    </noscript>
    <div id="app"></div>
</body>
</html>
