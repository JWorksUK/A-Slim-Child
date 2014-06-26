<?php
    $app->get('/', function () use ($app, $site)  {
        $data = array(
            'name' => 'Whats Up'
        );

        $site['page'] = $data;

        $app->render('home.twig',$site);
    });

    $app->get('/about', function () use ($app, $site)  {
        $data = array(
            'name' => 'Whats Up'
        );

        $site['page'] = $data;

        $app->render('home.twig',$site);
    });
