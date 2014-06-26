<?php
    // Autoload
    require_once 'vendor/autoload.php';

    // Functions
    require_once 'functions.php';

    // SlimPHP configs
    $config = array(
        'debug' => true,
        'view'              => new \Slim\Views\Twig(),
        'templates.path'    => '../app/views/',
    );
    $app = new \Slim\Slim($config);

    // Twig config
    $view = $app->view();
    $view->parserOptions = array(
        'debug' => true,
        'cache' => '../app/views/cache'
    );

    // Site data
    $site = array(
        'site_name'         => 'Dragon',
        'description'       => 'description here!',
        'og_metat'          => array(
            'type'          => 'website',
            'image'         => 'assets/img/og-image'
        )
    );

    // Routes
    require_once 'controllers/site.php';

    $app->run();
