<?php

namespace Addons\TagFieldtype\Providers;

use File;
use Illuminate\Support\ServiceProvider;

class AddonServiceProvider extends \Fusion\Providers\AddonServiceProvider
{
    /**
     * Register any addon services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
    }

    /**
     * Bootstrap any addon services.
     *
     * @return void
     */
    public function boot()
    {
        $addonName = 'TagFieldtype';
        $basePath = dirname(dirname(dirname(__FILE__)));

        if (!File::isDirectory(public_path("addons"))) {
            File::makeDirectory(public_path("addons"));
        }
        if (!File::exists(public_path("addons/{$addonName}"))) {
            // Create symlink
            File::link(
                "{$basePath}/public",
                public_path("addons/{$addonName}")
            );
        }
        //
        \Fusion::asset('/addons/TagFieldtype/js/app.js');
        fieldtypes()->register(\Addons\TagFieldtype\Fieldtypes\TagFieldtype::class);
    }
}